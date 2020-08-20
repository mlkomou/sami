import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {
  Date: Date;
  Nom: String;
  Adresse: String;
  Jour: String;
  Type: String;

  constructor(private afStore: AngularFirestore) { }

  ngOnInit() {
  }
  Enregister() {
    this.afStore.collection('examen').add({
      Nom: this.Nom,
      Date: this.Date,
      Adresse: this.Adresse,
      Type: this.Type,
      Jour: this.Jour
    }).then(() => {
      alert('examen enregistré');
    });
  }
}
