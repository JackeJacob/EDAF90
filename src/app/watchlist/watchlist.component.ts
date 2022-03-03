import { Component, OnInit } from '@angular/core';
import {movies} from '../mockFilmList';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  movies = movies;
  constructor(){
    
  }

  ngOnInit(): void {
  }

  addNotes(){
    //todo
  }

}
