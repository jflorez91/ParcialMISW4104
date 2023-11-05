import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCafesComponent } from './list-cafes/list-cafes.component';



@NgModule({
  declarations: [ListCafesComponent],
  exports:[ListCafesComponent],
  imports: [
    CommonModule
  ]
})
export class CafesModule { }
