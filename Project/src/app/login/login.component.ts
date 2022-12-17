import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, FormControlName  } from '@angular/forms'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private _AuthService:AuthService , private _Router:Router) { }

  ngOnInit(): void {
  }
  loginErrorMessage:string=''


  loginForm= new FormGroup( { 
          
          email: new FormControl( null ,[Validators.email ,Validators.required]),
          password: new FormControl( null ,[Validators.required]),
          
  })

    loginMethod(_loginForm:FormGroup)
{
   this._AuthService.sendLogin(_loginForm.value).subscribe((response)=>{
   
    if( response.message=="success"   )
    {
    //  this._Router.navigate(['login'] )
    localStorage.setItem("userToken" , response.token);
    this._AuthService.loginIn();
    this._Router.navigate(['home'] )



    }
      else
      {
  
        this.loginErrorMessage= response.errors.email.message
        
      }




   })
}





}
