import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HelperService } from '../providers/helper';
import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  loginState: boolean;

  pagesLogin: Array<{title: string, component: any, method: string }>;
  pagesLogout: Array<{title: string, component: any, method: string }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public helper : HelperService,
        private storage : Storage, public events : Events) {
    this.initializeApp();
    this.events.subscribe('loginEvent', () => {
      this.helper.loginState = this.loginState = true;
    }); 
    
    this.loginState = this.helper.loginState;
    // used for an example of ngFor and navigation
    this.pagesLogin = [
      { title: 'Registro/Login', component: LoginPage, method:'' },
      { title: 'Home', component: HomePage, method:'' },
      { title: 'List', component: ListPage, method:'' }
    ];
    // used for an example of ngFor and navigation
    this.pagesLogout = [
      { title: 'Home', component: HomePage, method:'' },
      { title: 'List', component: ListPage, method:''},
      { title: 'Logout', component: LoginPage, method:'logout' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  
  logout(){
    this.storage.set('userEmail', '');
    this.storage.set('UserLoggedIn', 'false');
    this.helper.loginState = this.loginState = false;
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.method.length > 0){
      switch(page.method){
        case 'logout':
          this.logout();
          break;
      }
    }
    else
      this.nav.setRoot(page.component);
  }
}
