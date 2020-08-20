import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent implements OnInit {
  Titre: String;
  Description: String;
  id: String;
  Nom: String;
  Prenom: String;
  message: string;
  uid: string;
  profils: any[];
  comments: any[];
  constructor(private activatedRoute: ActivatedRoute,
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth
    ) { 
    this.Nom = this.activatedRoute.snapshot.paramMap.get('Nom');
    this.Prenom= this.activatedRoute.snapshot.paramMap.get('Prenom');
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.Titre = this.activatedRoute.snapshot.paramMap.get('Titre');
    this.Description = this.activatedRoute.snapshot.paramMap.get('Description');
      this.uid = this.afAuth.auth.currentUser.uid;
  }

  ngOnInit() {
    $(document).ready(function(){
      $('#action_menu_btn').click(function(){
        $('.action_menu').toggle();
      });
        });

        this.afs.collection('User').doc('profil').collection(this.uid).valueChanges().subscribe((profil) => {
          this.profils = profil;
        });

        this.afs.collection('commentaire').valueChanges().subscribe((comments) => {
          this.comments = comments;
        });

  }
  Envoyer(PrenomExp, NomExp){
    this.afs.collection('commentaire').add({
      message: this.message,
      PrenomExp: PrenomExp,
      NomExp: NomExp,
      idExp: this.uid
    }).then(() => {
      this.message = '';
    })
  }
}
