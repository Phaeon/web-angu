import { Component } from '@angular/core';

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mon-site';

  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyA4axrggMgDPdGeTydkB6lU5iL586LhqCY",
      authDomain: "mon-site-9b38d.firebaseapp.com",
      databaseURL: "https://mon-site-9b38d-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "mon-site-9b38d",
      storageBucket: "mon-site-9b38d.appspot.com",
      messagingSenderId: "618974225872",
      appId: "1:618974225872:web:b165ad7f5c90b7568105d5",
      measurementId: "G-8PGFFF3Y2Z"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
