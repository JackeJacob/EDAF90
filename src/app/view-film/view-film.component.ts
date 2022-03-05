
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {movies} from '../mockFilmList';


@Component({
  selector: 'app-view-film',
  templateUrl: './view-film.component.html',
  styleUrls: ['./view-film.component.css']
})
export class ViewFilmComponent implements OnInit {
  
  constructor(
    private router: Router,
    private route: ActivatedRoute 
  ) { }
  list = movies;
  movie = this.router.url.split("/")[2];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['searchTerm']){
        this.list = this.list;
      }
    })
  }

}
