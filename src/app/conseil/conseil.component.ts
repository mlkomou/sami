import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { map } from 'rxjs/operators';
import { User } from 'firebase';




@Component({
  selector: 'app-conseil',
  templateUrl: './conseil.component.html',
  styleUrls: ['./conseil.component.css']
})
export class ConseilComponent implements OnInit {
  Titre: String;
  Contenu: String;
  Nom: string;
  Prenom: string;

  
  id: string;
  profils: any[]
  
  


  constructor(private aft: AngularFirestore,
    private router:Router,
    private activatedRoute: ActivatedRoute,
    private aftAuth: AngularFireAuth,
    ) { 
      this.id = this.aftAuth.auth.currentUser.uid;
     
    }

  ngOnInit() {
    this.aft.collection('User').doc('profil').collection(this.id).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    ).subscribe((profils) => {
       this.profils=profils
      for(let i=0; i<this.profils.length; i++) {
        this.Nom = this.profils[i].Nom;
        this.Prenom = this.profils[i].Prenom;
      }
    });
 

  }
  listeconseil(){
    this.router.navigate(['listeconseil'])
  }
  Enregistrer() {
    this.aft.collection('conseil').add({
      Titre: this.Titre,
      Conseil: this.Contenu,
      Nom: this.Nom,
      Prenom: this.Prenom,
      idExp: this.id,

    }).then(() => {
      alert('conseil enregistré');
    });
  }
}
