import { Component, OnInit } from '@angular/core';
import {min} from 'rxjs/operators';
import * as firebase from 'firebase';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IPayPalConfig, ICreateOrderRequest} from 'ngx-paypal';
import { DatePipe } from '@angular/common';
import {ReservationService} from './reservation.service';


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

  // dateRangeDisp = {'begin': string, 'end': Date};

  constructor(private formBuilder: FormBuilder, private datePipe: DatePipe, private reservation: ReservationService) { }

  ngOnInit() {
    this.reservation.getReservation().then(
      (reservation: Reservation) => {
        console.log(reservation);
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
    this.initConfig();
  }
  saveDate(event: any) {
    const tmp = this.dateDiff(event.target.value.begin, event.target.value.end);
    if (tmp.day !== 0) {
      this.begin = event.target.value.begin;
      this.end = event.target.value.end;
      this.prix = tmp.day * 0.01;
      return this.prix;
    }
    this.dateRangeDisp = event.target.value;
    return this.countDay = tmp.day;
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
      clientId: 'AVd5IHOFEVERt39jCTttnStrJZmM2a-PLqVPbPZWNhMnnpBhGTjzWJFvGL9-nD8jWqUOyyl57v6uxqSj',
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
          const reservation = new Reservation();
          reservation.countDay = this.countDay;
          reservation.amount = this.prix;
          reservation.firstname = formValue.prenom;
          reservation.lastname = formValue.nom;
          reservation.email = formValue.email;
          reservation.tel = formValue.tel;
          reservation.begin = this.begin;
          reservation.end = this.end;
          firebase.database().ref('reservation').push(reservation);
          const reservation2 = new Reservation();
          reservation2.begin = this.begin;
          reservation2.end = this.end;
          firebase.database().ref('date-reserved').push(reservation2);
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
