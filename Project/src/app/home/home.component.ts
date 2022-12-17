import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
ApiService
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movie:any[]=[];
  tvs:any[]=[];
    page:any[] = new Array(10)

  userWord:string="";
  imgPath:string=`https://image.tmdb.org/t/p/w500`
  constructor( private _ApiService:ApiService) {

   }

  ngOnInit(): void {
    console.log( this.page)
    localStorage.setItem("currentPage" , "home")
    this._ApiService.getData(`movie`).subscribe((response)=>{
    this.movie=   response.results.slice(0,10);  })
 
 
     this._ApiService.getData(`tv`).subscribe((response)=>{
       this.tvs=   response.results.slice(0,10);  })
 
 
 
  }
    getPageData(num:number)
    {
      this._ApiService.getPage(num).subscribe(  (response)=>{
        this.movie= response.results.slice(0 ,10)
      } )
    }
  








}