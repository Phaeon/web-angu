import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  signupForm!: FormGroup;
  errorMessage!: string;
  isAuth = false;

  constructor(private formBuilder: FormBuilder, 
    private router: Router, 
    private authService: AuthService) 
  { }

  ngOnInit() {
    this.initForm();

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

  initForm() {
    this.signupForm = this.formBuilder.group({
      id_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      pswd: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmit() {
    const user = this.signupForm.get('id_name')!.value;
    const email = this.signupForm.get('email')!.value;
    const password = this.signupForm.get('pswd')!.value;
    
    this.authService.createNewUser(email, password).then(
      () => {
        this.router.navigate(['/']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

}
