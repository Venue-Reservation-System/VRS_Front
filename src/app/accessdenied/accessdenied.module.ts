import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessdeniedComponent } from './accessdenied.component';


const routes = [
  {
      path: '',
      component: AccessdeniedComponent,

  },

]

@NgModule({
  declarations: [
    AccessdeniedComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AccessdeniedModule { }
