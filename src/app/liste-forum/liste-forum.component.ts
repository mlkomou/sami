import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { User } from '../Model/user';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Forum } from '../Model/forum';

@Component({
  selector: 'app-liste-forum',
  templateUrl: './liste-forum.component.html',
  styleUrls: ['./liste-forum.component.css']
})
export class ListeForumComponent implements OnInit {
  private shirtCollection: AngularFirestoreCollection<User>;
  //shirts: Observable<ShirtId[]>;
  seachText;
  EditState: boolean = false;
  ListeForumToedit: User;
  

  VoirBool =false;

  listeforumCol: AngularFirestoreCollection<User>;

  listeforumDoc: AngularFirestoreDocument<User>;

  foras: any[];
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
        this.aft.collection('forum').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Forum;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    ).subscribe((forum) => {
      this.foras = forum;
      console.log(forum);
      
    });
  }
  Edit(event, listeforum: User){
  this.EditState = true;
  this. ListeForumToedit = listeforum;
  }
  annuler() {
  this.EditState = false;
  }
  update(listeforum, id){
  this.aft.doc<User>('forum/'+id).update(listeforum);
  this.EditState = false;
  }
  filterCondition(listeforum){
  return listeforum.Nom.toLowerCase().indexOf(this.searchText.toLocaleLowerCase()) != -1;
  }
  
  Publier(forum) {
  this.router.navigate(['patiente', forum.id, forum.Titre, forum.Description]);
  }
  Forum(forum){
    this.router.navigate(['discussion', forum.Titre, forum.Description, forum.Nom, forum.Prenom, forum.idExp])
  }
}


