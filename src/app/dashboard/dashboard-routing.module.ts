import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessModelInfosComponent } from './components/business-model-infos/business-model-infos.component';
import { MainComponent } from './components/main/main.component';
import { ProjectComponent } from './components/project/project.component';
import { SendProjectMainComponent } from './components/send-project-main/send-project-main.component';

const routes: Routes = [
  {
      path:'',
      component:MainComponent
  },
  {
    path:'project',
    component: SendProjectMainComponent,
    children:[
        {
            path:'',
            redirectTo:'general'
        },{
            path:'general',
            component:ProjectComponent
        },
        {
            path:'bminfos',
            component:BusinessModelInfosComponent
        }
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  DashboardRoutingModule { }
