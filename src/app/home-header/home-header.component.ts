import { Component, OnInit } from '@angular/core';

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {

  isAuth = false;
  color!: string;
  margin!: number;

  constructor(private authService: AuthService) { 
    this.color = document.body.style.backgroundColor
  }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if(user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    );
  }

  onSignOut() {
    this.authService.signOutUser();
  }

  openNav() {
    document.getElementById("mySidenav")!.style.width = "250px";
    // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

  closeNav() {
    document.getElementById("mySidenav")!.style.width = "0";
    // document.body.style.backgroundColor = this.color;
  }

}
