import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertService } from 'ngx-alerts';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  Nom: string;
  Prenom: string;
  Profession: string;
  Date: Date;
  Tel: string;
  Email: string;
  Password: string;
  Genre: string;
  StatutPatiente = "Patiente";
  StatutMedecin = "Medecin";


  constructor(private router: Router,
    private afs:AngularFirestore,
    private afAuth: AngularFireAuth,
    private alertService: AlertService) { }
  
  inscrire() {
    if(this.Nom && 
      this.Prenom && 
      this.Profession && 
      this.StatutPatiente && 
      this.Tel && 
      this.Date && 
      this.Password &&
      this.Email) {
      this.afAuth.auth.createUserWithEmailAndPassword(this.Email, this.Password).then(() =>{
  
        this.afAuth.authState.subscribe((auth)=>{
          this.afs.collection('User').doc('profil').collection(auth.uid).doc(auth.uid).set({
            Nom: this.Nom,
            Prenom: this.Prenom,
            Profession: this.Profession,
            Date: this.Date,
            Tel: this.Tel,
            Email: this.Email,
            Password: this.Password,
            Statut: this.StatutPatiente,
          }),
          
          this.afs.collection('utilisateurs').doc(auth.uid).set({
            Nom: this.Nom,
            Prenom: this.Prenom,
            Profession: this.Profession,
            Date: this.Date,
            Tel: this.Tel,
            Email: this.Email,
            Password: this.Password,
              Statut: this.StatutPatiente,
          }).then(() => {
            this.alertService.success('inscription effectuée avec succès');
            this.router.navigate(['accueil']);
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


  ngOnInit() {
  }
  //showAlerts(type, message): void{
    // For normal messages
    //this.alertService.info('this is an info alert');
   // this.alertService.danger('this is a danger alert');
  //  this.alertService.success('this is a success alert');
    //this.alertService.warning('this is a warning alert');
    
    // For html messages:
  //  this.alertService.warning({html: '<b>This message is bold</b>'});
//}    

}
