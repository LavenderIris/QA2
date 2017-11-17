import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NoteService } from './../note.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-one',
  templateUrl: './show-one.component.html',
  styleUrls: ['./show-one.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShowOneComponent implements OnInit {
  questions;
  singleQuestion;
  q_id;
  answers;
  all_answers;

  constructor(private _noteService: NoteService, private _router: Router,
    private _route: ActivatedRoute) { }

   
  ngOnInit() {
    this._noteService.getQuestions((result) => {
      this.questions = result;
      this._route.paramMap.subscribe( params => {
        console.log('parameter id', params.get('id'));
        this.q_id = params.get('id');
        this.singleQuestion = this.questions[Number(params.get('id')) - 1];
        console.log('this is my single question so far', this.singleQuestion);
        this._noteService.getAnswers(this.singleQuestion._id, (answer_result) => {
          console.log('grabbing answers for single question', answer_result);
          this.answers = answer_result;
          this.all_answers = this.answers.answers;

        });
      });

    });
  }



  addLike(a_id) {
    const temp = '/question/' + this.q_id;
    console.log('current id', temp);
    this._noteService.addLike(a_id, (result) => {
      // refreshes the page
      console.log('we added like!', result);
      console.log(temp);
      this._noteService.getQuestions((result1) => {
        this.questions = result1;
        this._route.paramMap.subscribe( params => {
          console.log('parameter id', params.get('id'));
          this.q_id = params.get('id');
          this.singleQuestion = this.questions[Number(params.get('id')) - 1];
          console.log('this is my single question so far', this.singleQuestion);
          this._noteService.getAnswers(this.singleQuestion._id, (answer_result) => {
            console.log('grabbing answers for single question', answer_result);
            this.answers = answer_result;
            this.all_answers = this.answers.answers;
          });
        });
  
      });
      this._router.navigateByUrl(temp);
    });
  }

}
