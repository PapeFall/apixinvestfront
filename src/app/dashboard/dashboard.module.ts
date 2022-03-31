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
import { ProjetEditPersonnelComponent } from './components/projet-edit-personnel/projet-edit-personnel.component';
import { BmcInfosbulleComponent } from './components/bmc-infosbulle/bmc-infosbulle.component';
import { ProjetPromoteurComponent } from './components/projet-promoteur/projet-promoteur.component';
import { ProjetEditPromoteurComponent } from './components/projet-edit-promoteur/projet-edit-promoteur.component';
import { ProjetListComponent } from './components/projet-list/projet-list.component';
import { ProfilComponent } from './components/profil/profil.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { StatistiqueComponent } from './components/statistique/statistique.component';
import { MessagerieComponent } from './components/messagerie/messagerie.component';
import { UtilisateurListComponent } from './components/utilisateur-list/utilisateur-list.component';
import { CampagnesComponent } from './components/campagnes/campagnes.component';
import { PartenairesComponent } from './components/partenaires/partenaires.component';


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
    ProjetPersonnelsComponent,
    ProjetEditPersonnelComponent,
    BmcInfosbulleComponent,
    ProjetPromoteurComponent,
    ProjetEditPromoteurComponent,
    ProjetListComponent,
    ProfilComponent,
    HeaderComponent,
    SidebarComponent,
    StatistiqueComponent,
    MessagerieComponent,
    UtilisateurListComponent,
    CampagnesComponent,
    PartenairesComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
