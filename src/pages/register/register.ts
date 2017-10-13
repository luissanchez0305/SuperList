import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { ForgotPage } from '../forgot/forgot';
import { HelperService } from '../../providers/helper';
import { AuthService } from '../../providers/auth-service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
    private register : FormGroup;
    responseData : any;

    constructor(public navCtrl : NavController, public authService : AuthService, public helper : HelperService, private formBuilder: FormBuilder) {
        this.register = this.formBuilder.group({
          email: ['', Validators.compose([Validators.required, Validators.pattern('/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/')])],
          name: [''],
          pwd: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
        });
    }
    
    openLogin(){
        this.navCtrl.setRoot(LoginPage);
    }
    
    openForgot(){
        this.navCtrl.setRoot(ForgotPage);
    }
    
    attemptUserRegister() {
        var data = { type : 'manage', n : this.register.value.name, e : this.register.value.email, p : this.register.value.pwdd };
            
        this.authService.postData(data,'/controllers/user.php').then((result) => {
            this.responseData = result;
            console.log(this.responseData);
            if (this.responseData.status == "ok") {
                //loginObjects();
                //localStorage.setItem('loginData', JSON.stringify(this.responseData));
                this.helper.gapAlert('Usuario logueado', 'Login successful');
                localStorage.setItem('userEmail', this.responseData.loggedUserEmail);
                localStorage.setItem('UserLoggedIn', 'true');
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
