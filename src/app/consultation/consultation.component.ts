import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {
  Date: Date;
  Nom: String;
  Prénom: String;
  Email: String;
  Nombre: String;
  Heure: String;
  Jour: String;
  constructor(private afStore: AngularFirestore) { }

  ngOnInit() {
  }
  Enregister() {
    this.afStore.collection('consultation').add({
      Nom: this.Nom,
      Prénom: this.Prénom,
      Email: this.Email,
      Nombre: this.Nombre,
      Heure: this.Heure,
      Date: this.Date,
      Jour: this.Jour,
    }).then(() => {
      alert('consultation enregistré');
    });
  }
}
