import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  newPostForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private router: Router,
    private postService: PostService) 
  { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.newPostForm = this.formBuilder.group({
      titre: ['', [Validators.required]],
      resume: [''],
      content: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z\s]{10,}/)]]
    });
  }

  onSubmit() {
    const title = this.newPostForm.get('titre')!.value;
    const resume = this.newPostForm.get('resume')!.value;
    const content = this.newPostForm.get('content')!.value;

    const post = new Post(title, resume, content);
    this.postService.addPost(post);
    this.router.navigate(['/posts']);
  }

}
