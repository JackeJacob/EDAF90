import { Component, OnInit } from '@angular/core';
import {movies} from "../mockFilmList.ts"
@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  movies;
  constructor() { 
     this.movies = movies;
  }

  ngOnInit(): void {
  }

  addNotes(){
    //todo
  }

}
