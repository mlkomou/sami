import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../Model/user';
import * as firebase from 'firebase';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
currentUser: any = JSON.parse(localStorage.getItem('currentUser'));
uid: string;


  constructor(private router:Router,
              private aft:AngularFirestore,
              private afAuth: AngularFireAuth,
    ) { 
    }

  ngOnInit() {
    console.log(this.currentUser);
    
  }

  saveMedecin() {
      this.router.navigate(['medecin'])
      
  }

  conseil(){
    this.router.navigate(['conseil']);
  }
  connecter(){
    this.router.navigate(['connecter'])
  }
  inscription(){
    this.router.navigate(['inscription'])
  }
  analyse(){
    this.router.navigate(['analyse'])
  }
  aspectimportant(){
    this.router.navigate(['aspectimportant'])
  }
  rendezvous(){
    this.router.navigate(['listpatiente']) 
  }
  forum(){
    this.router.navigate(['forum']);
  }
  consultations(){
    this.router.navigate(['consultation'])
    }
    examen(){
      this.router.navigate(['examen'])
    }
    carnetprenatal(){
      this.router.navigate(['carnetprenatal'])
    }
    carnetvaccination(){
      this.router.navigate(['carnetvaccination'])
    }
    listerendezvous(){
      this.router.navigate(['listerendezvous'])
    }
    listuser(){
      this.router.navigate(['listuser'])
    }
  listeconseil(){
    this.router.navigate(['listeconseil'])
  }  
  Deconnecter(){
    this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('currentUser');
      this.router.navigate(['connecter']);
     
    });
  }
}
