import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { PepolComponent } from './pepol/pepol.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  {path:`` , redirectTo: "register" ,pathMatch:"full"},
  {path:"register" ,component:RegisterComponent},
  {path : "setting" , loadChildren: ()=> import("./setting/setting.module").then((x)=>x.SettingModule) },
  {path:"home"  , component:HomeComponent},
  {path:"login" ,  component:LoginComponent},
  {path:"tv" ,  component:TvComponent},
  {path:"pepol" ,  component:PepolComponent},
  {path:"moviedetails/:id" ,  component:MovieDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
