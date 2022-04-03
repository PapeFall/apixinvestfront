import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SiteFooterComponent } from './components/site-footer/site-footer.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ChartModule} from 'primeng/chart';
import { CommentsComponent } from './components/comments/comments.component';
import { ParticipationPopupComponent } from './components/participation-popup/participation-popup.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    SiteFooterComponent,
    CommentsComponent,
    ParticipationPopupComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    ChartModule
  ],
  exports:[
    ToolbarComponent,
    SiteFooterComponent,
    CommentsComponent,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    ChartModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedComponentsModule { }
