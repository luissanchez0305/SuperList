import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the ModalManageListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-manage-list',
  templateUrl: 'modal-manage-list.html',
})
export class ModalManageListPage {
    private new_list : FormGroup;
    private title : string;
    private button_text : string;

    constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public navParams: NavParams, public viewCtrl : ViewController, public events : Events) {
        this.new_list = this.formBuilder.group({
          name: ['', Validators.required]
        });
        var new_text = 'Ingresar';
        this.button_text = new_text.toUpperCase();
        this.title = new_text;
    }

    ionViewDidLoad() {
    }

    public closeModal(){
        this.viewCtrl.dismiss();
    }

    public manageList(){
        this.events.publish('addNewList', this.new_list.value.name);
        this.viewCtrl.dismiss();
    }
}
