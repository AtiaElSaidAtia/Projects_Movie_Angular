import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
HttpClient
observable
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  imgPath:string=`https://image.tmdb.org/t/p/w500`
  constructor( private _HttpClient:HttpClient) { }
  getData(data:string):Observable<any>
  {
    return  this._HttpClient.get(`https://api.themoviedb.org/3/trending/${data}/week?api_key=f9688286099ba5bce529222114e95fce`)
  }
  getmovieApi(id:string|null):Observable<any>
  {
    return  this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=f9688286099ba5bce529222114e95fce`)
  }

  getPage(pNum:number):Observable<any>
  {
   return this._HttpClient.get(`https://api.themoviedb.org/3/discover/movie?api_key=866cd3a065ef9304a549f1d65e494940&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pNum}&with_watch_monetization_types=flatrate`)
  }
}
