import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-bureau6',
  templateUrl: './bureau6.component.html',
  styleUrls: ['./bureau6.component.css']
})
export class Bureau6Component implements OnInit {
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
      to: 'vellaimmo@gmail.com',
      message: {
        subject: "Demande d'informations bureau n°6 - Le moulin.",
        // tslint:disable-next-line:max-line-length
        html: "Bonjour,<br> Un client à essayé de vous contacter pour le bureau n°6. <br> <b>Nom</b>: " + formValue.nom + "<br><b>Prénom</b>: " + formValue.prenom + "<br><b>Telephone</b>: " + formValue.tel + "<br><b>Email</b> : " + formValue.email + "<br><b>Activite</b>: " + formValue.activity + "<br><b>Commentaire</b>: " + formValue.descriptif + ".",
      }
    }).then(
      () => alert('Merci. Votre message à été transmis.'),
    ).catch((e) => alert('Erreur lors de la transmission du message.'));
  }

}
