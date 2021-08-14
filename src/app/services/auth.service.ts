import { ERROR_COMPONENT_TYPE } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Role, User } from '../models/user.model';

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService: UserService) { }

  createNewUser(email: string, password: string, name: string) {
    return new Promise<void> (
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {


            resolve();
          },
          (error) => {

            if (error.code == "auth/email-already-in-use")
              error.message = "L'adresse mail a déjà été utilisée";

            error.message += " (Code: " + error.code + ")";
            reject(error);
          }
        );
      }
    );
  }

  signInUser(email: string, password: string) {
    return new Promise<void>(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          }
        ).catch(
          (error) => {
            const code = error.code;
            error.message = "Identifiant ou mot de passe invalide.";

            reject(error);
          }
        );
      }
    );
}

  signOutUser() {
    firebase.auth().signOut();
  }
}
