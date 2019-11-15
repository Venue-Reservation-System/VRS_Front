import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import { HttpClientModule } from '@angular/common/http';
import { AccountService } from '../core/auth/account.service';
import { AuthServerProvider } from '../core/auth/auth-jwt.service';
import { StateStorageService } from '../core/auth/state-storage.service';
import { UserRouteAccessService } from '../core/auth/user-route-access-service';
import { LoginService } from '../core/login/login.service';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { AuthInterceptor } from '../core/interceptor/auth.interceptor';
import { MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatDividerModule, MatCheckboxModule, MatDialogModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';



const routes = [
  {
      path: '',
      component: LoginComponent,

  },

]


@NgModule({
  declarations: [
    LoginComponent,
    // DialogBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatDividerModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    // MatDialogModule
    // HttpClientModule

    
  ],
  providers :[LoginService]


})
export class LoginModule { }
