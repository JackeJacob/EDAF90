import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  ratings = [1,2,3,4,5];
  
  checkoutForm = this.formBuilder.group({
    rating: '',
    note: ''
  });

  constructor(
    private movieService: MovieService,
    private formBuilder: FormBuilder,
    private router: Router
   ) { }

  ngOnInit(): void {
  }

  addNote( ){
    console.log(this.checkoutForm.value);
    this.movieService.addNote(this.checkoutForm.value, this.router.url.split("/")[2].split("%20").join(" "));
    window.location.reload();
  }

}
