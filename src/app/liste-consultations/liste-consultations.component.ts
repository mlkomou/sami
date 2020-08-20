import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-liste-consultations',
  templateUrl: './liste-consultations.component.html',
  styleUrls: ['./liste-consultations.component.css']
})
export class ListeConsultationsComponent implements OnInit {
  consultation : any[];
  searchText;
  constructor(private afStore: AngularFirestore) { }

  ngOnInit() {
  this.afStore.collection('consultation').valueChanges().subscribe((consultation) => {
    this.consultation =consultation;
    console.log(consultation);
   })
  }
}
