import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezVousComponent implements OnInit {
  Date: Date;
  Heure:number;
  Medecin: String;

  idPatiente: string;
  NomPatiente: string;
  PrenomPatiente: string;
  


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
  list(){
    this.router.navigate(['listerendezvous'])
  }
  Enregistrer() {
    this.aft.collection('rendezvous').doc(this.idPatiente).collection(this.idPatiente).add({
      Date: this.Date,
      Heure: this.Heure,
      Medecin: this.Medecin,
      NomPatiente: this.NomPatiente,
      PrenomPatiente: this.PrenomPatiente

    }).then(() => {
      alert('Rendez vous enregistré');
    });
  }
}
