import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection , AngularFirestoreDocument} from '@angular/fire/firestore';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-bureau1',
  templateUrl: './bureau1.component.html',
  styleUrls: ['./bureau1.component.css']
})
export class Bureau1Component implements OnInit {
  reservationGroup: FormGroup;

  constructor(private db: AngularFirestore, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.reservationGroup = this.formBuilder.group({
      nom: '',
      prenom: '',
      tel: '',
      email: '',
      activity: '',
      descriptif: ''
    });
  }

  sendEmail() {
    const formValue = this.reservationGroup.value;
    this.db.collection('mail').add({
      to: 'jeanarnaque13@gmail.com',
      message: {
        subject: "Demande d'informations bureau n°1 - Le moulin.",
        // tslint:disable-next-line:max-line-length
        html: "Bonjour,<br> Un client à essayé de vous contacter pour le bureau n°1. <br> <b>Nom</b>: " + formValue.nom + "<br><b>Prénom</b>: " + formValue.prenom + "<br><b>Telephone</b>: " + formValue.tel + "<br><b>Email</b> : " + formValue.email + "<br><b>Activite</b>: " + formValue.activity + "<br><b>Commentaire</b>: " + formValue.descriptif + ".",
      }
    }).then(
      () => alert('Merci. Votre message à été transmis.'),
    ).catch((e) => alert('Erreur lors de la transmission du message.'));
  }
}
