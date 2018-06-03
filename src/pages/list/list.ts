import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ModalController } from 'ionic-angular';
import { Constants } from '../../services/constants';

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
            this.products.push({
                        id: "0",
                        name: name,
                        qty: qty,
                        checked: false,
                        show: true
                      });
        });

        this.events.subscribe('editProduct',(id, name, qty) => {
            for(var i = 0; i < this.products.length; i++){
              var item = this.products[i];
              if(item.id == id){
                this.products[i].name = name;
                this.products[i].qty = qty;
                break;
              }
            }
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

  add_product_modal(){
    var modalPage = this.modalCtrl.create('ModalManageProductPage');
    modalPage.present();
  }

  edit_product(item){
    var modalPage = this.modalCtrl.create('ModalManageProductPage', { id: item.id, name: item.name, qty: item.qty });
    modalPage.present();
  }

  check_product(item){
    item.checked = !item.checked;
  }

  delete_product(item){
    item.show = !item.show;
  }
}
