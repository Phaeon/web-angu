import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostListComponent } from './post-list/post-list.component';
import { NewPostComponent } from './post/new-post.component';
import { PostService } from './services/post.service';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { UserService } from './services/user.service';
import { SignupComponent } from './auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeHeaderComponent,
    HomeComponent,
    SigninComponent,
    PostListComponent,
    NewPostComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuardService, PostService, UserService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
