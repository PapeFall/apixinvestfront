import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SiteFooterComponent } from './components/site-footer/site-footer.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { CommentsComponent } from './components/comments/comments.component';
import { ParticipationPopupComponent } from './components/participation-popup/participation-popup.component';
import { ListeAlertesComponent } from './components/liste-alertes/liste-alertes.component';
import { DetailAlerteComponent } from './components/liste-alertes/detail-alerte/detail-alerte.component';
import { ProfilAdminComponent } from './components/profil-admin/profil-admin.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    ToolbarComponent,
    SiteFooterComponent,
    CommentsComponent,
    ParticipationPopupComponent,
    ListeAlertesComponent,
    DetailAlerteComponent,
    ProfilAdminComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    ChartModule,
    TranslateModule
  ],
  exports:[
    ToolbarComponent,
    SiteFooterComponent,
    CommentsComponent,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    ChartModule,
    TranslateModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedComponentsModule { }
