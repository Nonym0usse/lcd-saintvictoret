import { Component, OnInit } from '@angular/core';
import {min} from 'rxjs/operators';
import * as firebase from 'firebase';

@Component({
  selector: 'app-lcd',
  templateUrl: './lcd.component.html',
  styleUrls: ['./lcd.component.css']
})
export class LcdComponent implements OnInit {
  dateRangeDisp = {begin: Date, end: Date};

  constructor() { }

  ngOnInit() {
  }

  saveDate(event: any) {
    console.log(event.target.value.begin);
    console.log(event.target.value.end);
    let prix = 0;
    const tmp = this.dateDiff(event.target.value.begin, event.target.value.end);

    if (tmp.day !== 0) {
      prix = tmp.day * 50;
      const reservation = new Reservation();
      reservation.countDay = prix;
      firebase.database().ref('reservation').push(reservation);
    }


    this.dateRangeDisp = event.target.value;

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


  getDate() {
    // get your saved value from some service
   // let savedRangeStr = someService.getSavedRange();

    /// now you retrieve the date value from db and format it correctly for display
   // this.dateRangeDisp = {'begin': Date, 'end': Date};
    // this.dateRangeDisp.begin = new Date(savedRangeStr.substring(0, savedRangeStr.indexOf("|")));
    // this.dateRangeDisp.end = new Date(this.field.value.substring(savedRangeStr.indexOf("|") + 1, savedRangeStr.length));


  }

}
