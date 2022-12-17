import { Component, OnInit } from '@angular/core';
declare var $:any ;
@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("currentPage" , "tv")
    $(".test").slideUp(5000)
  }

}
