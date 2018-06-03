import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the AddProductModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-manage-product',
  templateUrl: 'modal-manage-product.html',
})
export class ModalManageProductPage {
    private new_product : FormGroup;
    public name : string;
    private id : number;
    public qty : number;
    public button_text : string;
    private isAdd : boolean;
    private title : string;

    constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public navParams: NavParams, public viewCtrl : ViewController, public events : Events) {
        this.new_product = this.formBuilder.group({
          name: ['', Validators.required],
          qty: ['', Validators.required],
        });
        if(this.navParams.get('id')){
            var save_text = "Editar";
            this.button_text = save_text.toUpperCase();
            this.title = save_text;
            this.id = this.navParams.get('id');
            this.name = this.navParams.get('name');
            this.qty = this.navParams.get('qty');
            this.button_text = 'GUARDAR'
            this.isAdd = false;
        }
        else{
            var new_text = 'Ingresar';
            this.button_text = new_text.toUpperCase();
            this.title = new_text;
            this.isAdd = true;
        }
    }

    ionViewDidLoad() {
    }

    public closeModal(){
        this.viewCtrl.dismiss();
    }

    public manageProduct(){
        if(this.isAdd){
            this.events.publish('addNewProduct', this.new_product.value.name, this.new_product.value.qty);
        }
        else{
            this.events.publish('editProduct', this.id, this.new_product.value.name, this.new_product.value.qty);
        }
        this.viewCtrl.dismiss();
    }
}
