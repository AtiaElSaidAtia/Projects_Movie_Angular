import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { HrComponent } from './hr/hr.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    HrComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule
  ]
})
export class SettingModule { }
