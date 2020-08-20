import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { map } from 'rxjs/operators';
import { User } from 'firebase';







@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  Titre: String;
  Description: String;
  Nom: String;
  Prenom: String;



  id: string;
  profils: any[]
  

  constructor(private aft: AngularFirestore,
    private router:Router,
    private activatedRoute: ActivatedRoute,
    private aftAuth: AngularFireAuth,
    ) { 
      this.id = this.aftAuth.auth.currentUser.uid;
    //  this.idPatiente = this.activatedRoute.snapshot.paramMap.get('id');
    //  this.NomPatiente = this.activatedRoute.snapshot.paramMap.get('Nom');
    //  this.PrenomPatiente = this.activatedRoute.snapshot.paramMap.get('Prenom');
     
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
  listeforum(){
    this.router.navigate(['listeforum'])
  }
  Publier(){
    this.aft.collection('forum').add({
      Titre: this.Titre,
     Description: this.Description,
     Nom: this.Nom,
     Prenom: this.Prenom,
     idExp: this.id
    //  NomPatiente: this.NomPatiente,
    //  PrenomPatiente: this.PrenomPatiente,
      
    }).then(() => {
      alert('forum publier');
    });
  }

}
