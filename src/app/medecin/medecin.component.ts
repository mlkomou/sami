import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.css']
})
export class MedecinComponent implements OnInit {

  prenom: string;
  nom: string;
  genre: string;
  mail: string;
  tel: number;
  motDePasse: string;
  biographie: string;
  isListe: boolean = false;
  term: string;

  medecins: any[];


  constructor(private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private alertService: AlertService,
    private router: Router) { }

  ngOnInit() {
    this.afs.collection('utilisateurs', ref => ref.where("Statut", "==", "Medecin")).valueChanges().subscribe((res) => {
      this.medecins = res;
      console.log(this.medecins);
      
    })
  }

  back() {
    this.router.navigate(['accueil']);
  }

 

  inscrireMed() {
    
    if(this.nom && 
      this.prenom && 
      this.biographie && 
      this.genre && 
      this.tel && 
      this.motDePasse &&
      this.mail) {
        console.log(this.nom);
        
      this.afAuth.auth.createUserWithEmailAndPassword(this.mail, this.motDePasse).then(() =>{
  
        this.afAuth.authState.subscribe((auth)=>{
          this.afs.collection('User').doc('profil').collection(auth.uid).doc(auth.uid).set({
            nom: this.nom,
            Prenom: this.prenom,
            biographie: this.biographie,
            createAt: new Date(),
            tel: this.tel,
            genre: this.genre,
            mail: this.mail,
            Statut: 'Medecin',
          }),
          
          this.afs.collection('utilisateurs').doc(auth.uid).set({
            nom: this.nom,
            Prenom: this.prenom,
            biographie: this.biographie,
            createAt: new Date(),
            tel: this.tel,
            genre: this.genre,
            mail: this.mail,
            Statut: 'Medecin',
          }).then(() => {
            this.alertService.success('inscription du medecin effectuée avec succès');
            this.nom = null,
            this.prenom = null,
            this.biographie = null,
            this.tel = null,
            this.genre = null,
            this.mail = null;
          });
        });
        
      }).catch((reponse) => {
        console.log(reponse);
        if(reponse.code == 'auth/network-request-failed'){
          this.alertService.danger("pas d'accès internet");
        }
        else {
          if(reponse.code == 'auth/invalid-email') {
            this.alertService.danger("adresse email incorrect");
          }
          else {
            if(reponse.code == 'auth/weak-password') {
              this.alertService.danger("mot de passe ne doit pas etre inférieur à 6 caracteurs");
            }
            else {
              if(reponse.code == 'auth/email-already-in-use') {
                this.alertService.danger("cette adresse email est utilisée par un autre utilisateur")
              }
            }
          }
          
        }
      });
    } else {
      this.alertService.danger("tous les champs ne sont pas renseignés");
    }
 
}

voirListe() {
  this.isListe = true;
}

retour() {
  this.isListe = false;
}
}
