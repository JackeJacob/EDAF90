import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { debounceTime, tap, switchMap, finalize } from 'rxjs/operators';
import { Movie } from '../mockFilmList';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchMoviesCtrl = new FormControl();
  filteredMovies: any;
  isLoading = false;
  errorMsg: string;

  constructor(private http: HttpClient, private router: Router) { 
    this.errorMsg = "";
  }
  
  ngOnInit(): void {

    this.searchMoviesCtrl.valueChanges
    .pipe(
      debounceTime(500),
      tap(() => {
        this.errorMsg = "";
        this.filteredMovies = {};
        this.isLoading = true;
      }),
      switchMap(value => this.http.get("http://www.omdbapi.com/?t=" + value + "&apikey=8d7e066e")
        .pipe(
          finalize(() => {
            this.isLoading = false
          }),
        )
      )
    )
    .subscribe(data => {
      if (data == undefined) {
        this.errorMsg = data['Error'];
        this.filteredMovies = {};
      } else {
        this.errorMsg = "";
        this.filteredMovies = this.returnMovie(JSON.stringify(data));
      }

      console.log(this.filteredMovies);
    });
}

returnMovie(data:string){
 let iData = JSON.parse(data);
 const item: Movie ={
  id : iData.imdbID,
  name: iData.Title,
  year: iData.Year,
  runtime: iData.Runtime,
  genre: iData.Genre,
  director: iData.Director,
  plot: iData.Plot,
  poster: iData.Poster,
  rating: "",
  note: ""
 }
 return item;
}

onSubmit(){
  this.router.navigate(["Search/:id"])
}
}