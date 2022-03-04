
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {movies} from '../mockFilmList';


@Component({
  selector: 'app-view-film',
  templateUrl: './view-film.component.html',
  styleUrls: ['./view-film.component.css']
})
export class ViewFilmComponent implements OnInit {
  
  constructor(
    private router: Router,
    
  ) { }
  list = movies;
  movie = this.router.url.split("/")[2];

  ngOnInit(): void {
  }

}
