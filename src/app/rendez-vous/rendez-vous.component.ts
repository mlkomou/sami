import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezVousComponent implements OnInit {
  date: Date;
  Heure:number;

  idPatiente: string;
  NomPatiente: string;
  PrenomPatiente: string;
  currentUser: any = JSON.parse(localStorage.getItem('currentUser'));
  medecin = this.currentUser[0];

  constructor(private aft: AngularFirestore,
               private router:Router,
               private activatedRoute: ActivatedRoute
               ) { 
                this.idPatiente = this.activatedRoute.snapshot.paramMap.get('id');
                this.NomPatiente = this.activatedRoute.snapshot.paramMap.get('Nom');
                this.PrenomPatiente = this.activatedRoute.snapshot.paramMap.get('Prenom');
                
               }

  ngOnInit() {
  }
 
  Enregistrer() {
    this.aft.collection('rendezvous').doc(this.medecin.id).collection(this.medecin.id).add({
      Date: this.date,
      Heure: this.Heure,
      Medecin: this.medecin,
      NomPatiente: this.NomPatiente,
      PrenomPatiente: this.PrenomPatiente

    }).then(() => {
      alert('Rendez vous enregistré');
      this.date = null;
      this.Heure = null;
      this.NomPatiente = null;
      this.date = null;
      this.PrenomPatiente = null;
    });
  }
}
