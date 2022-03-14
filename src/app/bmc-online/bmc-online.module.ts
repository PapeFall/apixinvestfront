import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmcOnlineMainComponent } from './components/bmc-online-main/bmc-online-main.component';
import { BmcOnlineRoutingModule } from './bmc-online-routing.module';
import { SharedComponentsModule } from '../shared-components/shared-components.module';



@NgModule({
  declarations: [
    BmcOnlineMainComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    BmcOnlineRoutingModule,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class BmcOnlineModule { }
