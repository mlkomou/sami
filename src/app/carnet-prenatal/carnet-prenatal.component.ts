import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carnet-prenatal',
  templateUrl: './carnet-prenatal.component.html',
  styleUrls: ['./carnet-prenatal.component.css']
})
export class CarnetPrenatalComponent implements OnInit {
  Nom: String;
  Prenom: String;
  AgeGrossesse: String;
  DateNaissance: Date;
  HeureNaissance: String;
  Poids: String;
  TypeAccouchement: String;
  SexeEnfant: String;
  LieuNaissance: string;
  Taille: String;
  DateSortie: Date;
  ModeAlimentation: String;
  NatureExamen: String;
  ResultatExamen: String;
  RendezVous: String;


  constructor(private aft: AngularFirestore, private router:Router) { }

  ngOnInit() {
}
listecpn(){
  this.router.navigate(['listecpn'])
}
    Ajouter() {
      this.aft.collection('carnetprenatal').add({
        Nom: this.Nom,
        Prenom: this.Prenom,
        AgeGrossesse: this.AgeGrossesse,
        DateNaissance: this.DateNaissance,
        HeureNaissance: this.HeureNaissance,
         Poids: this. Poids,
        TypeAccouchement: this.TypeAccouchement,
        SexeEnfant: this.SexeEnfant,
        LieuNaissance: this.LieuNaissance,
        Taille: this.Taille,
        DateSortie: this.DateSortie,
        ModeAlimentation: this.ModeAlimentation,
        NatureExamen: this.NatureExamen,
        ResultatExamen: this.ResultatExamen,
        RendezVous: this.RendezVous,
    }).then(() => {
      alert('carnetprenatal Ajouter');
    });
  }
}
