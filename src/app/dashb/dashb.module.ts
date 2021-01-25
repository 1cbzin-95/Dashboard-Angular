import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbComponent } from './dashb.component';
import { DashbService } from './dashb.service';



@NgModule({
  declarations: [DashbComponent],
  imports: [
    CommonModule
  ],
  exports:[
    DashbComponent
  ],
  providers:[
    DashbService
  ]
})
export class DashbModule { }
