import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  ratings = [1,2,3,4,5];

  constructor() { }

  ngOnInit(): void {
  }

  addNote(){}

}
