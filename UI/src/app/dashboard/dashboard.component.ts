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
    }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login-user']);
  }



}
