import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../Model/user';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  uid: string;
profils: any[];

  constructor(private router:Router,
    private aft:AngularFirestore,
    private afAuth: AngularFireAuth
) { 
// this.uid = this.afAuth.auth.currentUser.uid;
}


  ngOnInit() {
    // this.aft.collection('User').doc('profil').collection(this.uid).snapshotChanges().pipe(
    //   map(actions => actions.map(a => {
    //     const data = a.payload.doc.data() as User;
    //     const id = a.payload.doc.id;
    //     return { id, ...data };
    //   }))
    // ).subscribe((profils) => {
    //   this.profils = profils;
    //   console.log(profils);
      
    // });
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
    this.router.navigate(['forum'])
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
  deconnexion(){
    this.router.navigate(['connecter'])  
  }

}
