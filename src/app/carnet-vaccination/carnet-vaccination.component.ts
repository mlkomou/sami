import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carnet-vaccination',
  templateUrl: './carnet-vaccination.component.html',
  styleUrls: ['./carnet-vaccination.component.css']
})
export class CarnetVaccinationComponent implements OnInit {
  NomEnfant: String;
  PrenomEnfant: String;
  DateNaissance: Date;
  GroupeSanguin: String;
  NomVaccin: String;

  constructor(private aft: AngularFirestore, private router:Router) { }

  ngOnInit() {
  }
  Ajouter() {
    this.aft.collection('carnet-vaccination').add({
     NomEnfant: this.NomEnfant,
     PrenomEnfant: this.PrenomEnfant,
     GroupeSanguin: this.GroupeSanguin,
     NomVaccin: this.NomVaccin,
     DateNaissance: this.DateNaissance,
    }).then(() => {
      alert('carnet-vaccination Ajouter');
    });
  }
}
