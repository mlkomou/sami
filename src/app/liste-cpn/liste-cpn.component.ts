import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { User } from '../Model/user';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Cpn} from '../Model/cpn';



@Component({
  selector: 'app-liste-cpn',
  templateUrl: './liste-cpn.component.html',
  styleUrls: ['./liste-cpn.component.css']
})
export class ListeCPNComponent implements OnInit {
  term;
  isListe;
  cpns: any[];
  constructor(private afs: AngularFirestore, private router: Router) {}

  ngOnInit() {
   this.getCpn();
}

getCpn() {
  this.afs.collection('carnetprenatal').snapshotChanges().pipe(
    map(actions => actions.map(a => {
      const data = a.payload.doc.data() as Cpn;
      const id = a.payload.doc.id;
      return { id, ...data };
    }))
  ).subscribe((res) => {
    console.log(res);
    this.cpns = res;
  });
}
retour() {
  this.router.navigate(['carnetprenatal']);
}
}
