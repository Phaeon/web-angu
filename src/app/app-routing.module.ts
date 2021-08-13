import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { HomeComponent } from './home/home.component';
import { PostListComponent } from './post-list/post-list.component';
import { NewPostComponent } from './post/new-post.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'posts', component: PostListComponent},
  {path: 'new-post', canActivate: [AuthGuardService], component: NewPostComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
