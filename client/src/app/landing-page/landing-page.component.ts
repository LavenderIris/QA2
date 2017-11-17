import { Component, OnInit, ViewEncapsulation, OnChanges } from '@angular/core';
import { NoteService } from './../note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class LandingPageComponent implements OnInit {
  note = { text: '', date: Date.now() };
  notes = [];
  default_startDate =  '2010-01-01';
  default_endDate = '2011-02-02';
  startDate = '2017-11-17';
  endDate = '2017-11-18';
  C_startDate = Date.now();
  C_endDate = Date.now();
  dateValid = false;

  constructor(private _router: Router, private _noteService: NoteService) {

  }

  ngOnInit() {
    this.getAll();

  }

  parseStart(date) {
    this.C_startDate = Date.parse(date);
    this.dateValid = this.C_startDate <= this.C_endDate;
  }

  parseEnd(date) {
    this.C_endDate = Date.parse(date);
    this.dateValid = this.C_startDate <= this.C_endDate;
  }

  checkDate() {
    console.log('start date: inputted ', this.startDate);
    console.log('end date: inputted ', this.endDate);


    if (this.startDate < this.endDate) {
      console.log('true');
      // you can do things with the date

    } else if (this.startDate > this.endDate) {
      console.log('false');
    }
  }

  getAll() {
    // this._noteService.getAllNotes( (n) => {
    //   this.notes = n;


    //   // console.log('all notes gotten', this.notes);
    // });
  }

  onSubmit() {
    this._noteService.sendData(this.note);
    this.getAll();
    this._router.navigate(['']);
    this.note = { text: '', date: Date.now() };
  }

}
