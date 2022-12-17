import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, FormControlName  } from '@angular/forms'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {
 registerErrorMessage:string=''


    registerForm= new FormGroup( { 
            first_name: new FormControl( null ,[Validators.required]),
            last_name: new FormControl( null ,[Validators.required]),
            email: new FormControl( null ,[Validators.email ,Validators.required]),
            password: new FormControl( null ,[Validators.required]),
            age: new FormControl( null ,[Validators.required]),
    })

      registerMethod(registerForm:FormGroup)
  {
    
     this._AuthService.sendData(registerForm.value).subscribe( (response)=>{
      if(response.message == "success")
      {
        this._Router.navigate(['login'] )
      }
      else
      {
        this.registerErrorMessage= response.errors.email.message 
        console.log("else")
      }
     })

    //  this._AuthService.sendData(registerForm.value).subscribe((response)=>{
     
    //   if( response.message=="success"   )
    //   {
        
    //   this._Router.navigate(['login'] );
 
      }

      




  //    })
  // }

  constructor(private _AuthService:AuthService , private _Router:Router) { }

  ngOnInit(): void {
  }

}
