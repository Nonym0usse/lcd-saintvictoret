import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;
import {AngularFirestore} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {


  constructor(private db: AngularFirestore) {

  }

  getReservation() {
    return new Promise(
      (resolve, reject) => {
         resolve(this.db.collection('date-reserved').snapshotChanges());
      }
    );
  }
}
