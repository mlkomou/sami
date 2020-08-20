import { Component, OnInit } from '@angular/core';
// import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
// import { map } from 'rxjs/operators';
// import { User } from '../Model/user';
// import { Router } from '@angular/router';
// import { AngularFireAuth } from 'angularfire2/auth';
// import { Cpn} from '../Model/cpn';



@Component({
  selector: 'app-liste-cpn',
  templateUrl: './liste-cpn.component.html',
  styleUrls: ['./liste-cpn.component.css']
})
export class ListeCPNComponent implements OnInit {
  // private shirtCollection: AngularFirestoreCollection<User>;
  //shirts: Observable<ShirtId[]>;

//   EditState: boolean = false;
//   ListeCPNToedit: User;

//   VoirBool =false;

//    listecpnCol: AngularFirestoreCollection<User>;

//    listecpnDoc: AngularFirestoreDocument<User>;

//  cpns: any[];
//   searchText:string ="";
//   uid: string;

  

  constructor() {}

  ngOnInit() {
    // let uid = this.aftAuth.auth.currentUser.uid;
    //     this.aft.collection('cpn').doc(uid).collection(uid).snapshotChanges().pipe(
    //   map(actions => actions.map(a => {
    //     const data = a.payload.doc.data() as Cpn;
    //     const id = a.payload.doc.id;
    //     return { id, ...data };
    //   }))
    //   ).subscribe((cpn) => {
    //     this.cpns = cpn;
    //     console.log(cpn);
        
    //   });
    // }
    // Edit(event, listecpn: User){
    // this.EditState = true;
    // this. ListeCPNToedit = listecpn;
    // }
    // annuler() {
    // this.EditState = false;
    // }
    // update(listecpn, id){
    // this.aft.doc<User>('listecpn/'+id).update(listecpn);
    // this.EditState = false;
    // }
    // filterCondition(listecpn){
    // return listecpn.Nom.toLowerCase().indexOf(this.searchText.toLocaleLowerCase()) != -1;
    // }
    
    // Prendre(cpn) {
    // this.router.navigate(['patiente', cpn.id, cpn.Nom, cpn.Prenom]);
    // }

}
}
