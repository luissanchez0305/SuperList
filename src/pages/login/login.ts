import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';

import { HomePage } from '../home/home';
import { ForgotPage } from '../forgot/forgot';
import { RegisterPage } from '../register/register';
import { HelperService } from '../../providers/helper';
import { AuthService } from '../../providers/auth-service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
    private login : FormGroup;
    responseData : any;

    constructor(public navCtrl : NavController, public authService : AuthService, public helper : HelperService, private formBuilder: FormBuilder,
        private storage : Storage, public events : Events) {
        this.login = this.formBuilder.group({
          email: ['', Validators.required],
          pwd: ['', Validators.required],
        });
    }
    
    openRegister(){
        this.navCtrl.setRoot(RegisterPage);
    }
    
    openForgot(){
        this.navCtrl.setRoot(ForgotPage);
    }
    
    attemptUserLogin() {
        var data = { type : 'cred', e : this.login.value.email, p : this.login.value.pwd };
        this.authService.postData(data,'/controllers/user.php').then((result) => {
            this.responseData = result;
            console.log(this.responseData);
            if (this.responseData.status == "ok") {
                //loginObjects();
                //this.storage.set('loginData', JSON.stringify(this.responseData));
                this.helper.gapAlert('Usuario logueado', 'Login successful');
                this.storage.set('userEmail', this.responseData.loggedUserEmail);
                this.storage.set('UserLoggedIn', 'true');
                this.events.publish("loginEvent");
                this.navCtrl.setRoot(HomePage);
            } else {
                this.helper.gapAlert("Username or password not valid", "Login Unsuccessful");
                this.helper.loginState = false;
            }
          }, (err) => {
            // Error log
              this.helper.gapAlert('Error en logueao', err);
        });
    }
    
}
