import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
ApiService
ActivatedRoute
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieId :string|null="";
  mmovie:any ;
  imgPath:string = 'https://image.tmdb.org/t/p/w500';
  constructor(private _ActivatedRoute :ActivatedRoute , private _ApiService:ApiService) { }

  ngOnInit(): void {
      
      this.movieId = this._ActivatedRoute.snapshot.paramMap.get("id");


      this._ApiService.getmovieApi( this.movieId ).subscribe( (response)=>{
        this.mmovie =response; 
      })

  }

}
