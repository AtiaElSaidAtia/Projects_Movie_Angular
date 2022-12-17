import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {  observable, BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
Router
observable
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginData:any=new BehaviorSubject(null);

  constructor(private _HttpClient:HttpClient , private  _Router:Router) { 
      if( localStorage.getItem("userToken")!=null )
      {
         this.loginIn()
         this._Router.navigate([`${localStorage.getItem("currentPage")}`])      }

  }
  sendData(formValues:object):Observable<any>
  {
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup', formValues)
  }
  loginIn()     
  { 
    this.loginData.next(jwtDecode(JSON.stringify(localStorage.getItem("userToken"))))  
  }

  sendLogin(formValues:object):Observable<any>
  {
    return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signin", formValues)
  }
}
