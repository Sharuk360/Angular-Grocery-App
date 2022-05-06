import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule } from '@angular/router'

const routes : Routes = [{
  path : '' component : HomeComponent
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AppRoutingModule { }
