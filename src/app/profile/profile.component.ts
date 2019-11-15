import { Component, OnInit } from '@angular/core';
import { LoginService } from '../core/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  showFiller = false;

  constructor(

    private loginService: LoginService,
    private router: Router,

  ) { }

  ngOnInit() {
  }


  click(){
    alert("henlo")
  }


  logout(){

    this.loginService.logout();
    this.router.navigate(['login']);


  }

}
