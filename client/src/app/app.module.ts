import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NoteService } from './note.service';
import {HttpClientModule} from '@angular/common/http';
import { ShowAllComponent } from './show-all/show-all.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './add/add.component';
import { ShowOneComponent } from './show-one/show-one.component';
import { AnswerComponent } from './answer/answer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ShowAllComponent,
    EditComponent,
    LoginComponent,
    AddComponent,
    ShowOneComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
