
import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../movies.service";
import { ArrayType } from '@angular/compiler';
import {Router} from '@angular/router';
import {DetailsComponent} from "../details/details.component";
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private movie: MoviesService , private http: HttpClient, private router: Router) { }

 /* arrayOfMovies = [];
  arrayOfMovies1 = [];
  ngOnInit() {
    this.movie.getMovies().subscribe((data: any) => {
      console.log(data)
       data.results = data.results.map(e =>  { 
         e.poster_path ="https://image.tmdb.org/t/p/w500" + e.poster_path
          return e 
        })
        this.arrayOfMovies = data.results
       
    })
    this.movie.getMovies1().subscribe((data: any) => {
      console.log(data)
       data.results = data.results.map(e =>  { 
         e.poster_path ="https://image.tmdb.org/t/p/w500" + e.poster_path
          return e 
        })
        this.arrayOfMovies1 = data.results
       
    })

  }
  

  addToFavs(movie) {
    if (localStorage.getItem("movies") === null) {
      let stirng = JSON.stringify([movie]);
      localStorage.setItem("movies", stirng)
    }else {
      let local = JSON.parse(localStorage.getItem("movies"));
      local.push(movie);
      let stirng = JSON.stringify(local);
      localStorage.setItem("movies", stirng)
    }
  }

  addToFavs1(movie) {
    if (localStorage.getItem("movies") === null) {
      let stirng = JSON.stringify([movie]);
      localStorage.setItem("movies", stirng)
    }else {
      let local = JSON.parse(localStorage.getItem("movies"));
      local.push(movie);
      let stirng = JSON.stringify(local);
      localStorage.setItem("movies", stirng)
    }
  }



}*/
arrayOfMovies = [];
arrayOfMovies1 = [];
ngOnInit() {
  this.movie.getMovies().subscribe((data: any) => {
    console.log(data)
     data.results= data.results.map(e =>  { 
      
        e.poster_path ="https://image.tmdb.org/t/p/w500" + e.poster_path

      
        return e ;
      })
      this.arrayOfMovies = data.results
  })
  this.movie.getMovies1().subscribe((data: any) => {
    console.log(data)
     data.results= data.results.map(e =>  { 
      
        e.poster_path ="https://image.tmdb.org/t/p/w500" + e.poster_path

      
        return e ;
      })
      this.arrayOfMovies1 = data.results
  })



}

addToFavs(movie) {

  console.log("data is :: " + movie.title,movie.poster_path)
    this.movie.putMovies(movie.title,movie.poster_path);
  
  
  }

  addToFavs1(movie) {

    console.log("data is :: " + movie.title,movie.poster_path)
      this.movie.putMovies(movie.title,movie.poster_path);
    
    
    }


    gotDetails(title)
    {
      this.router.navigate(['/details'], { queryParams: { 'movie-name': title, } });
    }
}

