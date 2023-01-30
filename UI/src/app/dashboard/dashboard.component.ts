import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

showLogin :boolean=true;
showRegister :boolean=true;
showSettings :boolean=false;

  constructor(private router: Router,private service:SharedService,private authService :AuthGuard) { }

  userDetails:any;

  
  ngOnInit() {
    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
      },
     
    );


    if (localStorage.getItem('token') != null){
      this.showLogin=false;
      this.showRegister=false;
      this.showSettings=true;
    }
    else{
      this.showLogin=true;
      this.showRegister=true;
      this.showSettings=false;
    }
    
    }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login-user']);
}



}
