import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrComponent } from './hr/hr.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'' ,redirectTo:"profile" , pathMatch:"full"},
  {path:'hr' ,component:HrComponent  },
  {path:'profile' ,component:ProfileComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
