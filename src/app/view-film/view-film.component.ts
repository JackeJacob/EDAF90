
import { Component, OnInit, EventEmitter, Input, Output, Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import {Movie, movies} from '../mockFilmList';
import { MovieService } from '../movie.service';
import { Subject, Observable} from 'rxjs';

@Component({
  selector: 'app-view-film',
  templateUrl: './view-film.component.html',
  styleUrls: ['./view-film.component.css']
})
@Injectable({
  providedIn: 'root'
  })
export class ViewFilmComponent implements OnInit {   
  constructor(
    private router: Router,
    private http: HttpClient,
    private movieService: MovieService
  ){}
  movie: any;
  movietext: any;
  movieTitle = this.router.url.split("/")[2];

  //Reads Url to see what movie we lookin at
  ngOnInit(): void { 
    this.http.get("http://www.omdbapi.com/?t=" + this.movieTitle  + "&apikey=8d7e066e")
      .subscribe(Response => {
        console.log(Response);
        this.movietext=Response;
        this.movie =this.returnMovie(JSON.stringify(this.movietext)); 
      })

  }
  //creates a movie object from data
  returnMovie(data:string){
  let iData = JSON.parse(data);
  const item: Movie ={
    id : iData.imdbID,
    name: iData.Title,
    year: iData.Year,
    runtime: iData.Runtime,
    genre: iData.Genre.split(","),
    director: iData.Director,
    plot: iData.Plot,
    poster: iData.Poster,
    rating: "",
    note: ""
  }
  if(this.movieService.inList(item.name)){
    let movieList = this.movieService.getList();
    let temp = movieList.filter(mo => mo.name === item.name)[0];
    item.rating = temp.rating;
    item.note = temp.note;
     
  }
  return item;
  }

  addMovie(){
    this.movieService.addMovie(this.movie);
  }
  removeMovie(){
    this.movieService.removeMovie(this.movie);
  }

  addButtonCondition(){
    let list = this.movieService.getList(); 
      if(list.filter(el => el.name === this.movieTitle.split("%20").join(" ")).length > 0 ){
        return false; 
    }
    return true;
  }
  removeButtonCondition(){
    let list = this.movieService.getList(); 
      if(list.filter(el => el.name === this.movieTitle.split("%20").join(" ")).length > 0 ){
        return true; 
    }
    return false;
  } 

}
