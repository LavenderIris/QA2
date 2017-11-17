import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NoteService } from './../note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  data = {name: ''};

  constructor(private _noteService: NoteService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('onSubmit', this.data.name);
    this._noteService.setName(this.data.name);
    this._router.navigate(['all']);
  }

}
