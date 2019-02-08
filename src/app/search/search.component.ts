import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../movies.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  
  constructor(private movie: MoviesService) { }

  arrayOfMovies = [];
  ngOnInit() {
    
  }

  getMovies(search){
    console.log(search);
    this.movie.searchMovies(search).subscribe((data: any) => {
      console.log(data)

      data.results= data.results.map(e =>  { 
      
        e.poster_path ="https://image.tmdb.org/t/p/w500" + e.poster_path

      
        return e ;
      })
      
      this.arrayOfMovies=data.results;

     
  })
  }

}
