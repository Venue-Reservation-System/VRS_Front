import { Component, OnInit } from '@angular/core';
// import { UserService } from '../service/user.service';
import { LoginService } from '../core/login/login.service';
import { StateStorageService } from '../core/auth/state-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // public email
  // public password
  authenticationError: boolean;
  rememberMe: boolean;
  username: string;
  credentials: any;
  accessdenied: any;
  loginForm: FormGroup;
  hide: boolean;


  constructor(
    // private userService: UserService,
    private loginService: LoginService,
    private stateStorageService: StateStorageService,
    private router: Router,
    private route: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private dialog: MatDialog,

  ) { }

  ngOnInit() {

    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required],
      rememberMe: true
  });

  }


  login() {

   
    this.loginService
      .login({
        username: this.loginForm.get('email').value,
        password: this.loginForm.get('password').value,
        rememberMe: true
      }).then(res => {

        this.authenticationError = false;
                
        if (this.router.url === '/register' || /^\/activate\//.test(this.router.url) || /^\/reset\//.test(this.router.url)) {
            this.router.navigate(['']);
        }
      
        const redirect = this.stateStorageService.getUrl();
        //console.log(redirect)
        if (redirect) {

            this.stateStorageService.storeUrl(null);
            this.router.navigate([redirect]);
            
        }else{

            this.router.navigate(['profile']);
        }
    })

    .catch(() => {

        this.authenticationError = true;
       // alert("access denide")
       this.showMessage("username or password is invalid")
        // this.showMessage('Invalid username or password');

    });
        
   


  }

  showMessage(message: string){

    const dialogRef = this.dialog.open(DialogBoxComponent, {
        
        width: '550px',
        
        data: { error1: message }

    });

    dialogRef.afterClosed().subscribe(result => {

    });

}





}
