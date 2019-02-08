import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../movies.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

 /* constructor() { }
  arrayOfMovies = [];
 

  ngOnInit() {
     this.arrayOfMovies = JSON.parse(localStorage.getItem('movies'))
     console.log(this.arrayOfMovies)
 
  }
  remove(movie) {
    let data = JSON.parse(localStorage.getItem('movies'))
    data = data.filter(e => e.id !== movie.id);
    this.arrayOfMovies =  data;
    let string = JSON.stringify(data);

    localStorage.setItem("movies", string)
  }

   }*/
   constructor(private movie: MoviesService, private http : HttpClient) {}
   arrayOfMovies: any = [];
   arrayOfMovies1: any=[];

  ngOnInit() {
    this.displayimg();
  }
  displayimg() {
    this.movie.displayImage().subscribe((x) => {
      this.arrayOfMovies = x
      console.log(this.arrayOfMovies)
    });
    this.movie.displayImage().subscribe((y) => {
      this.arrayOfMovies1 = y
      console.log(this.arrayOfMovies1)
    });
  }
  remove(movie)
  {
    console.log(movie)
 
    return this.http.delete("http://localhost:3000/posts/"+ movie.id ).subscribe(console.log),
   this.arrayOfMovies = this.arrayOfMovies.filter(data => {
      // console.log(data, movie);
      return data.title !== movie.title
   })
 }

}

