import { Injectable } from '@angular/core';
import { Movie } from './mockFilmList';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public movieList: Movie[] = [];
 // private movieSource = new Subject<Movie[]>();
  //public movieList$ = this.movieSource.asObservable();

  constructor() {
    let temp = localStorage.getItem("movieList");
    if(temp!=null){
      this.movieList = JSON.parse(temp);
    }
    
  }
  
  addMovie(movie:Movie){
    console.log(movie);
    this.movieList.push(movie);
    //this.movieSource.next(this.movieList);
    localStorage.setItem("movieList",JSON.stringify(this.movieList));
    return movie;
  }
  
  getList(){
    return this.movieList;
  }
  
  removeMovie(movie:Movie){
   this.movieList = this.movieList.filter(mo => mo.name !== movie.name)
   localStorage.setItem("movieList",JSON.stringify(this.movieList))
   return movie;
 //Todo
  }
  clerList(){
    this.movieList = [];
    localStorage.clear();
  }
  addNote(form:{rating:string, note:string}, movie:string){
    let temp = this.movieList.filter(mo => mo.name === movie)[0];
    this.removeMovie(temp);
    temp.note = form.note;
    temp.rating = form.rating;
    this.addMovie(temp);
  }
  inList(movie:string){
    let temp = this.movieList.filter(mo => mo.name === movie)
    if(temp.length > 0){
      return true
    }
    return false;  
  }
}
