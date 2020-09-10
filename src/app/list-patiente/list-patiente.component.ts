import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { User } from '../Model/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-patiente',
  templateUrl: './list-patiente.component.html',
  styleUrls: ['./list-patiente.component.css']
})
export class ListPatienteComponent implements OnInit {

  private shirtCollection: AngularFirestoreCollection<User>;
  //shirts: Observable<ShirtId[]>;
  seachText;
  EditState: boolean = false;
  ListPatienteToedit: User;

  VoirBool =false;

  listpatienteCol: AngularFirestoreCollection<User>;

  listpatienteDoc: AngularFirestoreDocument<User>;

  listpatientes: any[];
  searchText:string ="";


  constructor(private aft:AngularFirestore, private router:Router) { }

  ngOnInit() {
  // this.listpatienteCol = this.aft.collection('utilisateurs', ref => ref.where('Statut', '==', 'Patiente'));
  // this.listpatienteCol.snapshotChanges().pipe(map(actions =>{
  //   return actions.map(a =>{
  //     const data = a.payload.doc.data() as ListPatiente;
  //     const id = a.payload.doc.id;
  //     return {id, data}
  //   })
  // })).subscribe(( listpatiente) => {
  //   this.listpatientes = listpatiente
  //   console.log(listpatiente);

  // });

   //aft.collection<Shirt>('shirts');
  // .snapshotChanges() returns a DocumentChangeAction[], which contains
  // a lot of information about "what happened" with each change. If you want to
  // get the data and the id use the map operator.
  this.aft.collection('utilisateurs', ref => ref.where('Statut', '==', 'Patiente')).snapshotChanges().pipe(
    map(actions => actions.map(a => {
      const data = a.payload.doc.data() as User;
      const id = a.payload.doc.id;
      return { id, ...data };
    }))
  ).subscribe((patiente) => {
    this.listpatientes = patiente;
    console.log(this.listpatientes);
    
  });
}
Edit(event, listpatiente: User){
this.EditState = true;
this. ListPatienteToedit = listpatiente;
}
annuler() {
this.EditState = false;
}
update(listpatiente, id){
this.aft.doc<User>('listpatiente/'+id).update(listpatiente);
this.EditState = false;
}
filterCondition(listpatiente){
return listpatiente.Nom.toLowerCase().indexOf(this.searchText.toLocaleLowerCase()) != -1;
}

Prendre(patiente) {
this.router.navigate(['rendezvous', patiente.id, patiente.Nom, patiente.Prenom]);
}

retour() {
  this.router.navigate(['accueil']);
}

list(){
  this.router.navigate(['listerendezvous'])
}
}
