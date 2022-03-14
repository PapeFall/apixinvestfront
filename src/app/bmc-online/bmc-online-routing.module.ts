import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmcOnlineMainComponent } from './components/bmc-online-main/bmc-online-main.component';

const routes: Routes = [
  {
      path:'',
      component: BmcOnlineMainComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  BmcOnlineRoutingModule { }
