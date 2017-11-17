import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NoteService } from './../note.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddComponent implements OnInit {
  question = {question: '',
              description: ''
            };

  constructor(private _noteService: NoteService, private _router: Router) { } 

  ngOnInit() {
  }

  onSubmit() {
    console.log('submit question', this.question);
    this._noteService.addQuestion(this.question);
    this. question = {question: '',
    description: ''
  };
  }
}
