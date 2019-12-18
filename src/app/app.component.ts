import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bureaux-website';

  constructor() {
    let config = {
      apiKey: 'AIzaSyDbv3gVRFfogV1cjak_h-6nytw4l3E1qR0',
      authDomain: 'sirop-86774.firebaseapp.com',
      databaseURL: 'https://sirop-86774.firebaseio.com',
      projectId: 'sirop-86774',
      storageBucket: 'sirop-86774.appspot.com',
      messagingSenderId: '682388243621'
    };
    firebase.initializeApp(config);
  }

}
