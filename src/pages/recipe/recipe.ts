import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Constants } from '../../services/constants';

/**
 * Generated class for the RecipePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html',
})
export class RecipePage {
    private recipe : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.get('recipe'));
    this.recipe = Constants.OFFLINE_RECIPE_DATA;
  }

  ionViewDidLoad() {

  }

}
