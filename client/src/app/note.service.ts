import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class NoteService {
  name: String = '';
  questions;

  constructor(private _http: HttpClient, private _router: Router) { }

  sendData(data) {
    console.log('in service', data);
    this._http.post('/notes', data).subscribe(
      success => {console.log('success!'); } ,
      err => {console.log(err); }
    );
  }

  setName(name) {
    this.name = name;
    console.log('set name', this.name);
  }

  getQuestions(callback) {
    this._http.get('/questions', callback).subscribe(
      success => {
        console.log('getQuestions', success);
        callback(success);
      } ,
      err => {console.log(err); }
    );
  }

  addQuestion(question) {
    console.log('in service add question', question);
    this._http.post('/new_question', question).subscribe(
      success => {
        console.log('Added question!', success);
      // go back to show-all
        this._router.navigate(['all']);
    } ,
      err => {console.log(err); }
    );
  }

  getAnswers(q_id, callback) {
    console.log('in service for get Answers', q_id);
    this._http.get('/allanswers/' + q_id, callback).subscribe(
      success => {
        console.log('Added answer!', success);
      // go back to show-all
        callback(success);
    } ,
      err => {console.log(err); }
    );

  }

  answerQuestion(q_id, answer, callback) {
    answer.q_id = q_id;

    console.log('in service answer question', answer);
    this._http.post('/addinganswer' , {data: answer} ).subscribe(
      success => {
        console.log('Added answer!', success);
      // go back to show-all
        callback(success);
    } ,
      err => {console.log(err); }
    );
  }

  addLike(q_id, callback) {
    console.log('in service add like');
    this._http.get('/addLike/' + q_id).subscribe(
      success => {
        console.log('Added like!', success);
      // go back to show-all
        callback(success);
    } ,
      err => { console.log(err); }
    );
  }

}

