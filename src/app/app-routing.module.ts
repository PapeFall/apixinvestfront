import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DetailArticleComponent } from './components/detail-article/detail-article.component';
import { DetailProjetComponent } from './components/detail-projet/detail-projet.component';
import { HomeComponent } from './components/home/home.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PagesBaseComponent } from './components/pages-base/pages-base.component';
import { ServerErrorComponent } from './components/server-error/server-error.component';

const routes: Routes = [
  
  {
    path: '404',
    component: NotFoundComponent
  },{
    path: '503Error',
    component: ServerErrorComponent
  },
  {
    path:'home',
    component:HomeComponent
  },{
    path:'about',
    component:AboutComponent
  },{
    path:'contact',
    component:ContactComponent
  },
  {
    path:'article-detail',
    component: DetailArticleComponent
  },
  {
    path:'detail-projet',
    component: DetailProjetComponent
  },
  {
    path:'process',
    component: PagesBaseComponent,
    children:[
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'signin',
        component:InscriptionComponent
      },{
        path:'dashboard',
        loadChildren: ()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
      }
    ]
  },
  {
    path:'**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
