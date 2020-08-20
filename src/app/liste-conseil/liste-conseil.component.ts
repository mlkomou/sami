import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { User } from '../Model/user';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Conseil } from '../Model/conseil';


@Component({
  selector: 'app-liste-conseil',
  templateUrl: './liste-conseil.component.html',
  styleUrls: ['./liste-conseil.component.css']
})
export class ListeConseilComponent implements OnInit {
  private shirtCollection: AngularFirestoreCollection<User>;
  //shirts: Observable<ShirtId[]>;
  seachText;
  EditState: boolean = false;
  ListeConseilToedit: User;

  VoirBool =false;

   listeconseilCol: AngularFirestoreCollection<User>;

 listeconseilDoc: AngularFirestoreDocument<User>;

 conseils: any[];
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
  this.aft.collection('conseil').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Conseil;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    ).subscribe((conseil) => {
      this.conseils = conseil;
      console.log(conseil);
      
    });
  }
  Edit(event, listeconseil: User){
    this.EditState = true;
    this. ListeConseilToedit = listeconseil;
    }
    annuler() {
    this.EditState = false;
    }
    update(listeconseil, id){
    this.aft.doc<User>('listeconseil/'+id).update(listeconseil);
    this.EditState = false;
    }
    filterCondition(listeconseil){
    return listeconseil.Nom.toLowerCase().indexOf(this.searchText.toLocaleLowerCase()) != -1;
    }
    
    Enregistrer(conseil) {
    this.router.navigate(['patiente', conseil.id, conseil.Titre, conseil.Contenu]);
    }
}
