import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { HelperService } from '../../providers/helper';
import { AuthService } from '../../providers/auth-service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
    responseData : any;
    loginData = { email : '', password : '' };

    constructor(public navCtrl : NavController, public authService : AuthService, public helper : HelperService) {
    }
    
    attemptUserLogin() {
        var data = { type : 'cred', e : this.loginData.email, p : this.loginData.password };
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
