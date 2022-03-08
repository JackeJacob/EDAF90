import { Component, OnInit} from '@angular/core';
import {Subject } from 'rxjs';
import {Movie} from '../mockFilmList';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css'],
  
})
export class WatchlistComponent implements OnInit {
  public movieList: Movie[] = [];
  private movieSource = new Subject<Movie[]>();
  public movieList$ = this.movieSource.asObservable();
  private movieMessage: Movie|undefined;
  constructor(private movieService: MovieService){ 
    
  }

  ngOnInit(): void {

    this.movieList=this.movieService.getList();
  }
  


  addNotes(){
    //todo
  }

   
}
