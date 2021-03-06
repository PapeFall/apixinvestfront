import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessModelInfosComponent } from './components/business-model-infos/business-model-infos.component';
import { DossierFinancierComponent } from './components/dossier-financier/dossier-financier.component';
import { MainComponent } from './components/main/main.component';
import { ProfilComponent } from './components/profil/profil.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjetListComponent } from './components/projet-list/projet-list.component';
import { ProjetPersonnelsComponent } from './components/projet-personnels/projet-personnels.component';
import { ProjetPromoteurComponent } from './components/projet-promoteur/projet-promoteur.component';
import { SendProjectMainComponent } from './components/send-project-main/send-project-main.component';

const routes: Routes = [
  {
      path:'',
      component:MainComponent
  },{
      path: 'list-project',
      component: ProjetListComponent
  },{
    path:'profil',
    component: ProfilComponent
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
          path:'dossier-financier',
          component:DossierFinancierComponent
        },
        
        {
          path:'personnels',
          component:ProjetPersonnelsComponent
        },
        {
            path:'bminfos',
            component:BusinessModelInfosComponent
        },{
          path:'promotteur',
          component:ProjetPromoteurComponent
        }
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  DashboardRoutingModule { }
