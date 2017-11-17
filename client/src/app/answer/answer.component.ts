import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NoteService } from './../note.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { STRING_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AnswerComponent implements OnInit {
  questions;
  singleQuestion;
  q_id;
  answer = {answer: '',
            details: '',
            likes: {type: Number, default: 0},
            author:  ''
          };
  temp_author;

  constructor(private _noteService: NoteService, private _router: Router,
    private _route: ActivatedRoute) { }

    ngOnInit() {
      this.temp_author = String(this._noteService.name);
      this._noteService.getQuestions((result) => {
        this.questions = result;
        this._route.paramMap.subscribe( params => {
          console.log('parameter id', params.get('id'));
          this.q_id = params.get('id');
          this.singleQuestion = this.questions[Number(params.get('id')) - 1];
          console.log(this.singleQuestion);
        });
      });
    }


    onSubmit() {
      this.answer.author = String(this._noteService.name);
      console.log('answer submitted on client', this.answer);
      this._noteService.answerQuestion(this.singleQuestion._id, this.answer,
        (result) => {
          console.log('added an answer');
      });
      // clear out the form
      this.answer = {answer: '',
        details: '',
        likes: {type: Number, default: 0},
        author:  ''
      };
    }
}
