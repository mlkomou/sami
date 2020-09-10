import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { User } from 'firebase';

@Component({
  selector: 'app-carnet-prenatal',
  templateUrl: './carnet-prenatal.component.html',
  styleUrls: ['./carnet-prenatal.component.css']
})
export class CarnetPrenatalComponent implements OnInit {
  // Nom: String;
  // Prenom: String;
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
  patientes: any[];
  patiente: any;


  constructor(private aft: AngularFirestore, private router:Router) { }

  ngOnInit() {
    this.getPatiente();
}
getPatValue(ev) {
  // console.log(ev);
  console.log(this.patiente);
  
  
}
getPatiente() {
  this.aft.collection('utilisateurs', ref => ref.where('Statut', '==', 'Patiente')).snapshotChanges().pipe(
    map(actions => actions.map(a => {
      const data = a.payload.doc.data() as User;
      const id = a.payload.doc.id;
      return { id, ...data };
    }))
  ).subscribe((res) => {
    console.log(res);
    this.patientes = res;
  });
}

listecpn(){
  this.router.navigate(['listecpn'])
}
    Ajouter() {
      this.aft.collection('carnetprenatal').add({
       patiente: this.patiente,
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
      this.patiente = null;
     this.AgeGrossesse = null,
     this.DateNaissance = null,
    this.HeureNaissance = null
      this. Poids = null
    this.TypeAccouchement = null
      this.SexeEnfant = null
      this.LieuNaissance = null
     this.Taille = null
   this.DateSortie = null
      this.ModeAlimentation = null
     this.NatureExamen = null
      this.ResultatExamen = null
      this.RendezVous = null
      alert('carnetprenatal Ajouté');
    });
  }

  retour() {
    this.router.navigate(['consultation']);
  }
}
