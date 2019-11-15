import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule, MatListModule, MatIconModule } from '@angular/material';
import { SideSavBarComponent } from '../components/side-sav-bar/side-sav-bar.component';
import {MatButtonModule} from '@angular/material/button';

const routes = [
  {
    path: '',
    component: ProfileComponent,

  },

]


@NgModule({
  declarations: [
    ProfileComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class ProfileModule { }
