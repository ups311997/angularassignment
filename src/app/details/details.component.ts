import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../movies.service";
import{Router,ActivatedRoute,ParamMap} from '@angular/router';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private movie:MoviesService , private http: HttpClient , private route:ActivatedRoute, private router:Router){}

  movieDetails:any;

  ngOnInit() {
   
    let id = this.route.snapshot.queryParamMap.get("movie-name");
    
      
      this.movie.getDetails(id).subscribe((data: any) => {
      console.log(data)
      
      this.movieDetails = data;
  })
}

}
