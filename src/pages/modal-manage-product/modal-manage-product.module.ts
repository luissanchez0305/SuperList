import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalManageProductPage } from './modal-manage-product';

@NgModule({
  declarations: [
    ModalManageProductPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalManageProductPage),
  ],
})
export class ModalManageProductPageModule {}
