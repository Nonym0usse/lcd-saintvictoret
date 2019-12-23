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
    var firebaseConfig = {
      apiKey: "AIzaSyBUbgy2l_KvWiuEwG-dh20YcYEiu6q8sTY",
      authDomain: "lcd-saintvic.firebaseapp.com",
      databaseURL: "https://lcd-saintvic.firebaseio.com",
      projectId: "lcd-saintvic",
      storageBucket: "lcd-saintvic.appspot.com",
      messagingSenderId: "766808734387",
      appId: "1:766808734387:web:aba52592b87c249689cec6",
      measurementId: "G-70WM5WZVZW"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}
