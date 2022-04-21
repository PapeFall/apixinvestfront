import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ServerErrorComponent } from './components/server-error/server-error.component';
import { SharedComponentsModule } from './shared-components/shared-components.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { PagesBaseComponent } from './components/pages-base/pages-base.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailArticleComponent } from './components/detail-article/detail-article.component';
import { DetailProjetComponent } from './components/detail-projet/detail-projet.component';
import { BrowserModule } from '@angular/platform-browser';
import { SearchArticlesComponent } from './components/search-articles/search-articles.component';
import { SearchProjetComponent } from './components/search-projet/search-projet.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ServerErrorComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    PagesBaseComponent,
    InscriptionComponent,
    DetailArticleComponent,
    DetailProjetComponent,
    SearchArticlesComponent,
    SearchProjetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule.forRoot(
      {
        defaultLanguage:'fr',
        loader: {
          provide: TranslateLoader,
          useFactory: httpTranslateLoader,
          // useClass: TraductionService,
          deps: [HttpClient],
        }
  
      }
    )
  
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/",".json");
}
