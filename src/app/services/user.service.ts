import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/post.model';

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database"

import DataSnapshot = firebase.database.DataSnapshot;
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    /*
        Amélioration possible : 
           > Utiliser la base de données pour enregistrer les utilisateurs et leur rôle
    */

    private usersAdmitted = [
        "admin@admin.com"
    ];

    constructor() {}

    isAdmitted(user: string) {
      return this.usersAdmitted.includes(user);
    }

}
