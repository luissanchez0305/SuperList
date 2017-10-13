import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

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

    constructor(public navCtrl : NavController, public authService : AuthService, public helper : HelperService, private formBuilder: FormBuilder) {
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
