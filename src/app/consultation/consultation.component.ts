import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';

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
  constructor(private afStore: AngularFirestore, private router: Router) { }

  ngOnInit() {
  }
 cpn() {
  this.router.navigate(['carnetprenatal']);
 }
 cv() {
   this.router.navigate(['carnetvaccination']);
 }
 retour() {
  this.router.navigate(['accueil']);
}
}
