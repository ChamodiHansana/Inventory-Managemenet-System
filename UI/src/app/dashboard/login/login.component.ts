import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { SharedService } from 'src/app/shared.service';
import { DashboardComponent } from '../dashboard.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formModel = {
    UserName: '',
    Password: ''
  }

  showToastMsg: boolean=false;

  constructor(private service: SharedService, private router: Router, private dashboard: DashboardComponent) { }

ngOnInit() {
  if (localStorage.getItem('token') != null){
    this.router.navigateByUrl('/summary');
    this.dashboard.showLogin=false;
    this.dashboard.showRegister=false;
    this.dashboard.showSettings=true;
  }
  else{
    this.dashboard.showLogin=true;
    this.dashboard.showRegister=true;
    this.dashboard.showSettings=false;
  }
}
     
  

  onSubmit(form: NgForm) {
    this.service.loginUser(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/summary');
        this.dashboard.userDetails();
      },
      err => {
        if (err.status == 400)
            this.showToastMsg=true;
         //this.toastr.error('Incorrect username or password.', 'Authentication failed.');
        else
          console.log(err);
      }
    );
  }

  


}
