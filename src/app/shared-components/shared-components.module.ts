import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SiteFooterComponent } from './components/site-footer/site-footer.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    SiteFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ToolbarComponent,
    SiteFooterComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedComponentsModule { }
