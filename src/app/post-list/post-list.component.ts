import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  isAuth = false;
  posts!: Post[];
  postSubscription!: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postSubscription = this.postService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPosts();

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

  onRemoval(post: Post) {
    this.postService.removePost(post);
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

}
