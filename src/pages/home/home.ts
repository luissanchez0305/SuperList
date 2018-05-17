import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HelperService } from '../../providers/helper';
import { Constants } from '../../services/constants';
import { RecipePage } from '../recipe/recipe';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    private recipes : any;

  constructor(public navCtrl: NavController, public helper : HelperService, private storage : Storage,
    public events : Events) {
    this.storage.get(Constants.USER_LOGGEDIN).then((value)=>{
      if(value=='true'){
        this.events.publish("loginEvent");
      }
    });
    this.recipes = Constants.OFFLINE_RECIPES_DATA;
  }

  ionViewDidLoad(){
  }

  openRecipe(id){
    this.navCtrl.push(RecipePage, { recipe: id });
  }
}
