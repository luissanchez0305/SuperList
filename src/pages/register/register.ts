import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';

import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { ForgotPage } from '../forgot/forgot';
import { HelperService } from '../../providers/helper';
import { AuthService } from '../../providers/auth-service';
import { Constants } from '../../services/constants';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
    private register : FormGroup;
    responseData : any;

    constructor(public navCtrl : NavController, public authService : AuthService, public helper : HelperService, private formBuilder: FormBuilder,
        private storage : Storage, public events : Events) {
        this.register = this.formBuilder.group({
          email: ['', Validators.compose([Validators.required])],
          name: [''],
          last_name: [''],
          pwd: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
        });
    }
    
    ionViewDidLoad(){
        if(this.helper.loginState)
            console.log('register loaded: logged in');
        else
            console.log('regisger loaded: not logged in');
    }
    
    openLogin(){
        this.navCtrl.setRoot(LoginPage);
    }
    
    openForgot(){
        this.navCtrl.setRoot(ForgotPage);
    }
    
    attemptUserRegister() {
        var data = { type : 'manage', n : this.register.value.name, a : this.register.value.last_name, e : this.register.value.email, p : this.register.value.pwd };
            
        this.authService.postData(data,'controllers/user.php').then((result) => {
            this.responseData = result;
            console.log(this.responseData);
            if (this.responseData.status == "ok") {
                //loginObjects();
                //this.storage.set('loginData', JSON.stringify(this.responseData));
                this.helper.gapAlert('Usuario logueado', 'Login successful');
                this.storage.set(Constants.USER_EMAIL, this.responseData.loggedUserEmail);
                this.storage.set(Constants.USER_LOGGEDIN, 'true');
                this.events.publish("loginEvent");
                this.navCtrl.setRoot(HomePage);
            } else {
                this.helper.gapAlert("Username or password not valid", "Login Unsuccessful");
            }
        }, (err) => {
            // Error log
            this.helper.gapAlert('Error en logueao', err);
        });
    }
}
