import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pepol',
  templateUrl: './pepol.component.html',
  styleUrls: ['./pepol.component.css']
})
export class PepolComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("currentPage" , "pepol")
  }

}
