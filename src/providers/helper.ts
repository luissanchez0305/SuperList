import {Injectable} from '@angular/core';
import { Dialogs } from '@ionic-native/dialogs';
import { Storage } from '@ionic/storage';

@Injectable()
export class HelperService { 
    loginState: boolean;
    constructor(private storage : Storage, private dialogs: Dialogs) { 
        this.storage.get('userEmail').then((user) => {
            if(user){
              this.loginState = true;
            }
            else{
              this.loginState = false;
            }
        });
    }
    
    gapAlert(message, title) {
        this.dialogs.alert(
            message,  // message
            title,            // title
            "Ok"                // buttonName
        );
    }

    gapConfirmAlert(message, title, yesButtonLabel, noButtonLabel, onConfirm) {
        this.dialogs.confirm(
             message, // message
             title,           // title
            [yesButtonLabel, noButtonLabel]         // buttonLabels
        ).then(onConfirm);
    }
}