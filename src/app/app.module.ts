import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnecterComponent } from './connecter/connecter.component';
import { PatienteComponent } from './patiente/patiente.component';
import { MedecinComponent } from './medecin/medecin.component';
import { RouterModule } from '@angular/router';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import {AngularFireModule } from 'angularfire2';
import {environment } from 'src/environments/environment';
import {  AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import {FormsModule} from '@angular/forms';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { ConseilComponent } from './conseil/conseil.component';
import { ForumComponent } from './forum/forum.component';
import { AnalyseComponent } from './analyse/analyse.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { AspectImportantComponent } from './aspect-important/aspect-important.component';
import { ListeConseilComponent } from './liste-conseil/liste-conseil.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { ExamenComponent } from './examen/examen.component';
import { ListeConsultationsComponent } from './liste-consultations/liste-consultations.component';
import { ListeRendezVousComponent } from './liste-rendez-vous/liste-rendez-vous.component';
import { AdminComponent } from './admin/admin.component';
import { CarnetVaccinationComponent } from './carnet-vaccination/carnet-vaccination.component';
import { CarnetPrenatalComponent } from './carnet-prenatal/carnet-prenatal.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ListPatienteComponent } from './list-patiente/list-patiente.component';
import { ListeForumComponent } from './liste-forum/liste-forum.component';
import { ListeCPNComponent } from './liste-cpn/liste-cpn.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { MenuComponent } from './menu/menu.component';
import { AlertModule } from 'ngx-alerts';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DetailcpnComponent } from './detailcpn/detailcpn.component';

// import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    InscriptionComponent,
    ConnecterComponent,
    PatienteComponent,
    MedecinComponent,
    ConseilComponent,
    ForumComponent,
    AnalyseComponent,
    RendezVousComponent,
    AspectImportantComponent,
    ListeConseilComponent,
    ConsultationComponent,
    ExamenComponent,
    ListeConsultationsComponent,
    ListeRendezVousComponent,
    AdminComponent,
    CarnetVaccinationComponent,
    CarnetPrenatalComponent,
    ListUserComponent,
    ListPatienteComponent,
    ListeForumComponent,
    ListeCPNComponent,
    DiscussionComponent,
    MenuComponent,
    DetailcpnComponent,
  
  ],
  imports: [
    // MatTableModule,
    Ng2SearchPipeModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, position: 'right'})
    

  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
