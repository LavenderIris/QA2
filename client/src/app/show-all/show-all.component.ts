import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NoteService } from './../note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShowAllComponent implements OnInit {
  name;
  questions;


  constructor(private _noteService: NoteService, private _router: Router) { }

  ngOnInit() {
    this.name = this._noteService.name;
    console.log('getting questions1');
    this._noteService.getQuestions((result) => {

      console.log('getting questions2');
      this.questions = result;
      console.log('in show_all', result);
    });

  }

}
