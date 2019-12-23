import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;


@Injectable({
  providedIn: 'root'
})
export class ReservationService {


  constructor() {

  }



  getReservation() {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('date-reserved').on("value", function(snapshot) {
          snapshot.forEach(function(data) {
            resolve(data.val());
          }), (error) => {
            reject(error);
          };
        });
      }
    );
  }
}
