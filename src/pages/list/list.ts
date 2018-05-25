import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Constants } from '../../services/constants';
import { ModalController } from 'ionic-angular';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
    private name : string;
    private products : any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl : ModalController, public events : Events) {
        this.name = Constants.OFFLINE_LIST_DATA.name;
        this.products = Constants.OFFLINE_LIST_DATA.products;

        this.events.subscribe('addNewProduct',(name, qty) => {
            //call methods to refresh content
            this.add_product(name, qty);
        });
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  increase_product(item){
      item.qty = Number(item.qty) + 1;
  }

  decrease_product(item){
    if(item.qty > 0)
      item.qty = Number(item.qty) - 1;
  }

  add_product(name, qty){
    this.products.push({
                id: "0",
                name: name,
                qty: qty,
                checked: false,
                show: true
              });
  }

  add_product_modal(){
    var modalPage = this.modalCtrl.create('AddProductModalPage');
    modalPage.present();
  }

  check_product(item){
    item.checked = !item.checked;
  }

  delete_product(item){
    item.show = !item.show;
  }
}
