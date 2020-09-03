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
  currentUser: any = JSON.parse(localStorage.getItem('currentUser'));


  user: any;
  profils: any[];
  foras: any[];
  

  constructor(private aft: AngularFirestore,
    private router:Router,
    private activatedRoute: ActivatedRoute,
    private aftAuth: AngularFireAuth,
    ) { 
      this.user = this.currentUser[0];
      console.log('user', this.currentUser);
      
    //  this.idPatiente = this.activatedRoute.snapshot.paramMap.get('id');
    //  this.NomPatiente = this.activatedRoute.snapshot.paramMap.get('Nom');
    //  this.PrenomPatiente = this.activatedRoute.snapshot.paramMap.get('Prenom');
     
    }
    retour() {
      this.router.navigate(['accueil']);
    }

  ngOnInit() {
    this.aft.collection('forum').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    ).subscribe((forum) => {
       this.foras = forum;
       console.log(this.foras);
       
    });
 

  }
  listeforum(){
    this.router.navigate(['listeforum'])
  }
  Publier(){
    this.aft.collection('forum').add({
     Description: this.Description,
     createAt: new Date(),
     user: this.currentUser[0]
    //  NomPatiente: this.NomPatiente,
    //  PrenomPatiente: this.PrenomPatiente,
      
    }).then(() => {
      this.Description = null;
    });
  }

}
