import {Injectable} from '@angular/core';
import { Dialogs } from '@ionic-native/dialogs';

@Injectable()
export class HelperService { 
    constructor(private dialogs: Dialogs) { }
    
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