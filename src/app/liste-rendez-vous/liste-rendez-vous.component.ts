import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { User } from '../Model/user';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Rdvs } from '../Model/rendezvous';


@Component({
  selector: 'app-liste-rendez-vous',
  templateUrl: './liste-rendez-vous.component.html',
  styleUrls: ['./liste-rendez-vous.component.css']
})
export class ListeRendezVousComponent implements OnInit {

  private shirtCollection: AngularFirestoreCollection<User>;
  //shirts: Observable<ShirtId[]>;
  seachText;
  EditState: boolean = false;
  ListeRendezVousToedit: User;
  

  VoirBool =false;

  listerendezvousCol: AngularFirestoreCollection<User>;

  listerendezvousDoc: AngularFirestoreDocument<User>;

  redvs: any[];
  searchText:string ="";
  uid: string;

  constructor(private aft:AngularFirestore,
     private router:Router,
     private aftAuth:AngularFireAuth
     ) { 
       this.uid = this.aftAuth.auth.currentUser.uid;
     }

  ngOnInit() {
    let uid = this.aftAuth.auth.currentUser.uid;
        this.aft.collection('rendezvous').doc(uid).collection(uid).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Rdvs;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    ).subscribe((rendezvous) => {
      this.redvs = rendezvous;
      console.log(rendezvous);
      
    });
  }
  Edit(event, listerendezvous: User){
  this.EditState = true;
  this. ListeRendezVousToedit = listerendezvous;
  }
  annuler() {
  this.EditState = false;
  }
  update(listerendezvous, id){
  this.aft.doc<User>('listerendezvous/'+id).update(listerendezvous);
  this.EditState = false;
  }
  filterCondition(listerendezvous){
  return listerendezvous.Nom.toLowerCase().indexOf(this.searchText.toLocaleLowerCase()) != -1;
  }
  
  Prendre(rendezvous) {
  this.router.navigate(['patiente', rendezvous.id, rendezvous.Heure, rendezvous.Date]);
  }
}
