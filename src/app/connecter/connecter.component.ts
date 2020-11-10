import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';
import * as firebase from 'firebase';
import { AngularFirestore } from 'angularfire2/firestore';
import { User } from '../Model/user';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-connecter',
  templateUrl: './connecter.component.html',
  styleUrls: ['./connecter.component.css']
})
export class ConnecterComponent implements OnInit {
  Email: string;
  password: string;

  constructor(private afAuth:AngularFireAuth,
    private router:Router,
    private alertService: AlertService,
    private aft: AngularFirestore) { }

  ngOnInit() {
    //  this.currentSession();
  }

  currentSession() {
     //local storage
     firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.router.navigate(['accueil'], {replaceUrl: true});
        // localStorage.setItem('idCytoyen', user.uid);

      } else {
        // localStorage.removeItem('idCytoyen')
        this.router.navigate(['connecter'], {replaceUrl: true});
      }
    });
  }

  connecter(){
    if(this.password &&
      this.Email)
    this.afAuth.auth.signInWithEmailAndPassword(this.Email,this.password).then((user)=>{
      this.aft.collection('User').doc('profil').collection(user.user.uid).snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as User;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      ).subscribe((profils) => {
        localStorage.setItem('currentUser', JSON.stringify(profils));
        console.log("cknnn", profils);

        window.location.reload();
        // firebase.auth().onAuthStateChanged(user => {
        //   localStorage.setItem('userId', user.uid);
        // });
      });
      this.router.navigate(['accueil']);
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
            this.alertService.danger("cette adresse email est utilisée par un autre utilisateur");
          }
        }
      }
    }
   });



}
inscription(){
  this.router.navigate(['inscription']);
}
}
