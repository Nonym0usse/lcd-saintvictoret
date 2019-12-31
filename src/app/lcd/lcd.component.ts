import { Component, OnInit } from '@angular/core';
import {min} from 'rxjs/operators';
import * as firebase from 'firebase';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IPayPalConfig, ICreateOrderRequest} from 'ngx-paypal';
import { DatePipe } from '@angular/common';
import {ReservationService} from './reservation.service';
import {AngularFirestore} from '@angular/fire/firestore';


@Component({
  selector: 'app-lcd',
  templateUrl: './lcd.component.html',
  styleUrls: ['./lcd.component.css']
})

export class LcdComponent implements OnInit {
  dateRangeDisp = {begin: Date, end: Date};
  reservationGroup: FormGroup;
  public payPalConfig ?: IPayPalConfig;
  prix: number;
  countDay: number;
  begin: string;
  end: string;
  dateCustom = {
    begin: '',
    end: ''
  };


  myFilter = (d: Date): boolean => {
    return !(d >= this.dateRangeDisp.begin && d <= this.dateRangeDisp.end)
  }

  constructor(private formBuilder: FormBuilder, private datePipe: DatePipe, private reservation: ReservationService, private db: AngularFirestore) { }

  ngOnInit() {
    this.reservation.getReservation().then(
      (reservation: Reservation) => {
        // @ts-ignore
       return this.dateRangeDisp = {begin: new Date(reservation.begin), end: new Date(reservation.end)};
      }
    );

    this.reservationGroup = this.formBuilder.group({
      nom: '',
      prenom: '',
      tel: '',
      email: '',
      date: ''
    });
    this.prix = 0;
    this.countDay = 0;
    this.initConfig();
  }
  saveDate(event: any) {
    const tmp = this.dateDiff(event.target.value.begin, event.target.value.end);
    if (tmp.day !== 0) {
      this.prix = tmp.day * 0.01;
      this.countDayF(tmp.day);
      return this.prix;
    }
    this.dateRangeDisp = event.target.value;
    return this.dateCustom = {begin: event.target.value.begin, end: event.target.value.end};
  }

  countDayF(tmp){
    return this.countDay = tmp;
  }

   dateDiff(date1, date2) {
    const diff = {sec: 0, hour: 0, minutes: 0, year: 0, day: 0};
    let tmp = date2 - date1;
    tmp = Math.floor(tmp / 1000);
    diff.sec = tmp % 60;
    tmp = Math.floor((tmp - diff.sec) / 60);
    // @ts-ignore
    diff.min = tmp % 60;
    tmp = Math.floor((tmp - diff.minutes) / 60);
    diff.hour = tmp % 24;
    tmp = Math.floor((tmp - diff.hour) / 24);
    diff.day = tmp;
    return diff;
  }


  private initConfig(): void {
    this.payPalConfig = {
      currency: 'EUR',
      clientId: 'AepCN8kPauhKhhRLcToXsKHw9b2v58reDUkQ6Awpv8gfbdY76DoGgfc0OGL6LBkGiHgQ9iSXZoRPbhHD',
      createOrderOnClient: (data) => <ICreateOrderRequest> {
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: 'EUR',
            value: this.prix.toString(),
            breakdown: {
              item_total: {
                currency_code: 'EUR',
                value: this.prix.toString()
              }
            }
          }
        }]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        const formValue = this.reservationGroup.value;
        actions.order.get().then(details => {
          this.db.collection('reservation').add({
            countDay: this.countDay,
            amount: this.prix,
            firstname: formValue.nom,
            lastname: formValue.prenom,
            email: formValue.email,
            tel: formValue.tel,
            begin: this.dateCustom.begin,
            end: this.dateCustom.end
          }).catch((e) => console.log('Erreur'));
          this.db.collection('date-reserved').add({
            begin:  this.dateCustom.begin,
            end: this.dateCustom.end,
            lastname: formValue.nom
          }).catch((e) => console.log('Erreur'));
          this.db.collection('mail').add({
            to: formValue.email,
            message: {
              subject: "Bureaux Le Moulin - Votre réservation du " + this.dateCustom.begin + " au " + this.dateCustom.end,
              // tslint:disable-next-line:max-line-length
              html: "Bonjour, <br> Nous tenons à vous remercier pour votre réservation. Veuillez présenter ce mail le jour de votre réservation.<br>Cordialement,<br> Joseph VELLA.",
            }
          }).then(
            () => alert('Merci. Votre message à été transmis.'),
          ).catch((e) => alert('Erreur lors de la transmission du message.'));
        });
      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        const formValue = this.reservationGroup.value;
        if (this.prix !== 0) {
          return this.prix.toString();
        }
      }
    };
  }
}

// tslint:disable-next-line:component-class-suffix
class Reservation {
  begin: string;
  firstname: string;
  lastname: string;
  tel: string;
  email: string;
  end: string;
  countDay: number;
  amount: number;
}
