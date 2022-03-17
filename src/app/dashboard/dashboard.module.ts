import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import { ProjectComponent } from './components/project/project.component';
import { SendProjectHeaderComponent } from './components/send-project-header/send-project-header.component';
import { SendProjectMainComponent } from './components/send-project-main/send-project-main.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { BusinessModelInfosComponent } from './components/business-model-infos/business-model-infos.component';
import { BmcOnlineMainComponent } from './components/bmc-online-main/bmc-online-main.component';
import { EditPostitComponent } from './components/edit-postit/edit-postit.component';
import { DossierFinancierComponent } from './components/dossier-financier/dossier-financier.component';
import { ProjetPersonnelsComponent } from './components/projet-personnels/projet-personnels.component';


@NgModule({
  declarations: [
    MainComponent,
    SendProjectHeaderComponent,
    ProjectComponent,
    SendProjectMainComponent,
    BusinessModelInfosComponent,
    BmcOnlineMainComponent,
    EditPostitComponent,
    DossierFinancierComponent,
    ProjetPersonnelsComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
