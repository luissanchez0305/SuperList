import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the AddProductModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-product-modal',
  templateUrl: 'add-product-modal.html',
})
export class AddProductModalPage {
    private new_product : FormGroup;

    constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public navParams: NavParams, public viewCtrl : ViewController, public events : Events ) {
        this.new_product = this.formBuilder.group({
          name: ['', Validators.required],
          qty: ['', Validators.required],
        });
    }

    ionViewDidLoad() {
    }

    public closeModal(){
        this.viewCtrl.dismiss();
    }

    public addNewProduct(){
        this.events.publish('addNewProduct', this.new_product.value.name, this.new_product.value.qty);
        this.viewCtrl.dismiss();
    }
}
