import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard.component';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {

  constructor(private dashboard: DashboardComponent,private router: Router) {
   
  }

  ngOnInit() {
    if (localStorage.getItem('token') != null){
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

}
