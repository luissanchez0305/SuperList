import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ModalController } from 'ionic-angular';
import { Constants } from '../../services/constants';
import { ListPage } from '../list/list';

/**
 * Generated class for the ListsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lists',
  templateUrl: 'lists.html',
})
export class ListsPage {
  private lists : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl : ModalController, public events : Events) {
        this.events.subscribe('addNewList',(name) => {
            //call methods to refresh content
            this.lists.push({
                        id: "0",
                        name: name
                      });
        });
  }

  ionViewDidLoad() {
    this.lists = Constants.OFFLINE_LISTS_DATA;
  }

  get_list(id){
    this.navCtrl.push(ListPage);
  }

  add_list(){
    var modalPage = this.modalCtrl.create('ModalManageListPage');
    modalPage.present();
  }

  edit_list(){

  }

  del_list(){

  }
}
