import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
Router
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    login:boolean= false  ;
  constructor(private _AuthService:AuthService ,private _Router:Router) { }

  ngOnInit(): void {
    this._AuthService.loginData.subscribe( ()=>{
      if(this._AuthService.loginData.getValue()==null)
      {
        this.login=false;
      }
      else{
        this.login=true;
      }



    })

    // this._AuthService.loginData.subscribe( ()=>{
    //   if( this._AuthService.loginData.getValue() == null )
    //   {
    //     this.login=false;
    //   }
    //   else
    //   {
    //     this.login=true;
    //   }
    // } )
  }
  logout()
  {
    localStorage.removeItem("userToken");
    this._AuthService.loginData.next(null);
    this._Router.navigate(['login'])
  }


}
