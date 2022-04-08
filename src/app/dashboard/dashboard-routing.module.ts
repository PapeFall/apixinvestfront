import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeAlertesComponent } from '../shared-components/components/liste-alertes/liste-alertes.component';
import { ProfilAdminComponent } from '../shared-components/components/profil-admin/profil-admin.component';
import { ArticlesManagementComponent } from './components/articles-management/articles-management.component';
import { EditArticleComponent } from './components/articles-management/edit-article/edit-article.component';
import { BusinessModelInfosComponent } from './components/business-model-infos/business-model-infos.component';
import { CampagnesComponent } from './components/campagnes/campagnes.component';
import { DossierFinancierComponent } from './components/dossier-financier/dossier-financier.component';
import { FavorisComponent } from './components/favoris/favoris.component';
import { MainComponent } from './components/main/main.component';
import { MessagerieComponent } from './components/messagerie/messagerie.component';
import { ParametersComponent } from './components/parameters/parameters.component';
import { PartenairesComponent } from './components/partenaires/partenaires.component';
import { PorteurProjetComponent } from './components/porteur-projet/porteur-projet.component';
import { ProfilComponent } from './components/profil/profil.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjetListComponent } from './components/projet-list/projet-list.component';
import { ProjetPersonnelsComponent } from './components/projet-personnels/projet-personnels.component';
import { ProjetPromoteurComponent } from './components/projet-promoteur/projet-promoteur.component';
import { SendProjectMainComponent } from './components/send-project-main/send-project-main.component';
import { StatistiqueComponent } from './components/statistique/statistique.component';
import { UtilisateurListComponent } from './components/utilisateur-list/utilisateur-list.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: StatistiqueComponent
      },
      {
        path: 'list-project',
        component: ProjetListComponent
      },
      {
        path: 'list-porteurs',
        component: PorteurProjetComponent
      },
      {
        path: 'favoris',
        component: FavorisComponent
      },
      {
        path: "messagerie",
        component: MessagerieComponent
      }, {
        path: "utilisateur",
        component: UtilisateurListComponent
      }, {
        path: 'partenaire',
        component: PartenairesComponent
      },
      {
        path: 'parameters',
        component: ParametersComponent
      },
      {
        path: "campagnes",
        component: CampagnesComponent
      },
      {
        path: "articles",
        component: ArticlesManagementComponent
      },
      {
        path: "edit-article",
        component: EditArticleComponent
      },
      {
        path: 'profil',
        component: ProfilComponent
      },
      {
        path: 'profil-admin',
        component: ProfilAdminComponent
      },
      {
        path: 'liste-alertes',
        component: ListeAlertesComponent
      },
      {
        path: 'project',
        component: SendProjectMainComponent,
        children: [
          {
            path: '',
            redirectTo: 'general'
          }, {
            path: 'general',
            component: ProjectComponent
          },
          {
            path: 'dossier-financier',
            component: DossierFinancierComponent
          },

          {
            path: 'personnels',
            component: ProjetPersonnelsComponent
          },
          {
            path: 'bminfos',
            component: BusinessModelInfosComponent
          }, {
            path: 'promotteur',
            component: ProjetPromoteurComponent
          }
        ]
      }

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
