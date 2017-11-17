import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ShowAllComponent } from './show-all/show-all.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { LoginComponent } from './login/login.component';
import { ShowOneComponent } from './show-one/show-one.component';
import { AnswerComponent } from './answer/answer.component';

const routes: Routes = [
  { path: '#index', pathMatch: 'full', component: LoginComponent },
  { path: 'all', component: ShowAllComponent },
  { path: 'new_question', component: AddComponent },
  { path: 'question/:id/new_answer', component: AnswerComponent },
  { path: 'question/:id', component: ShowOneComponent },
  { path: 'edit', component: EditComponent },
  { path: 'logout', redirectTo: 'index' },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
