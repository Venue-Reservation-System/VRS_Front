import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { AccountService } from './core/auth/account.service';
import { AuthServerProvider } from './core/auth/auth-jwt.service';
import { StateStorageService } from './core/auth/state-storage.service';
import { UserRouteAccessService } from './core/auth/user-route-access-service';
import { AuthInterceptor } from './core/interceptor/auth.interceptor';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { MatDialogModule, MatDialogRef, MatSidenavModule, MatListModule, MatIconModule, MatButtonModule } from '@angular/material';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { SideSavBarComponent } from './components/side-sav-bar/side-sav-bar.component';




const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',

  },
  {
    path: 'sign-up',
    loadChildren: './signup/signup.module#SignupModule'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: './register/register.module#RegisterModule'
  },
  {
    path: 'accessdenied',
    loadChildren: './accessdenied/accessdenied.module#AccessdeniedModule'
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule',
    data: {
      authorities: ['ROLE_USER']
    },
    canActivate: [UserRouteAccessService]
  }


]



@NgModule({
  declarations: [
    AppComponent,
    DialogBoxComponent,
    SideSavBarComponent,
    ToolBarComponent,





  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule


  ],

  entryComponents:[
    DialogBoxComponent
  ],
  providers: [

    AccountService,
    AuthServerProvider,
    StateStorageService,
    UserRouteAccessService,
    LocalStorageService,
    SessionStorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    { provide: MatDialogRef, useValue: {} },
  ],


  bootstrap: [AppComponent]
})
export class AppModule { }
