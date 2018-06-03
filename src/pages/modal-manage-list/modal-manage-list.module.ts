import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalManageListPage } from './modal-manage-list';

@NgModule({
  declarations: [
    ModalManageListPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalManageListPage),
  ],
})
export class ModalManageListPageModule {}
