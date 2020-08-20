import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnecterComponent } from './connecter/connecter.component';
import { AccueilComponent } from './accueil/accueil.component'; 
import { ForumComponent} from './forum/forum.component';
import { ConseilComponent } from './conseil/conseil.component';
import { AnalyseComponent } from './analyse/analyse.component';
import { AspectImportantComponent } from './aspect-important/aspect-important.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { MedecinComponent } from './medecin/medecin.component';;
import { ConsultationComponent} from './consultation/consultation.component';
import { ListeConsultationsComponent} from './liste-consultations/liste-consultations.component';
import { ListeRendezVousComponent} from './liste-rendez-vous/liste-rendez-vous.component';
import { CarnetVaccinationComponent } from './carnet-vaccination/carnet-vaccination.component';
import { CarnetPrenatalComponent } from './carnet-prenatal/carnet-prenatal.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ListPatienteComponent } from './list-patiente/list-patiente.component';
import { ListeConseilComponent } from './liste-conseil/liste-conseil.component';
import { ListeForumComponent } from './liste-forum/liste-forum.component';
import { ListeCPNComponent } from './liste-cpn/liste-cpn.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { MenuComponent } from './menu/menu.component';





 

const routes: Routes = [
  {
    path: '', component: ConnecterComponent
  },
  { path: 'inscription',
   component:InscriptionComponent },
   { path: 'accueil',
   component:AccueilComponent },
   { path: 'connecter', 
   component: ConnecterComponent },
   { path: 'forum',
  component: ForumComponent },
  { path: 'conseil',
component: ConseilComponent },
{ path: 'analyse',
component: AnalyseComponent },
{ path: 'aspectimportant',
component: AspectImportantComponent },
{path: 'rendezvous/:id/:Nom/:Prenom',
component: RendezVousComponent},
{path: 'medecin',
component: MedecinComponent},
{path: 'consultation',
component: ConsultationComponent},
{path: 'listeconsultation',
component: ListeConsultationsComponent},
{path: 'listerendezvous',
component: ListeRendezVousComponent},
{path: 'carnetvaccination',
component: CarnetVaccinationComponent},
{path: 'carnetprenatal',
component: CarnetPrenatalComponent},
{path: 'listuser',
component: ListUserComponent},
{path: 'listpatiente',
component: ListPatienteComponent},
{path: 'listeconseil',
component: ListeConseilComponent},
{path: 'listeforum',
component: ListeForumComponent},
{path: 'listecpn',
component: ListeCPNComponent},
{path: 'discussion/:Titre/:Description/:Nom/:Prenom/:id',
component: DiscussionComponent},
{path: 'menu',
component: MenuComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
