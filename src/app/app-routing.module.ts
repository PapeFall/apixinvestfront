import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
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
    path:'',
    component:HomeComponent
  },{
    path:'about',
    component:AboutComponent
  },{
    path:'contact',
    component:ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
