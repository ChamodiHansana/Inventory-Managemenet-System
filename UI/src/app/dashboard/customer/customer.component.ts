import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  constructor(private service :SharedService,private router: Router) {}

  
@Input() customer:any;
CustomerList: any=[];
CustomerName: string | undefined;
CustomerId: string| undefined;
Address: string| undefined;
Phone: string| undefined;
showAddBtn :boolean=false;
showUpdateBtn :boolean=false;

 ngOnInit(){
  //this.CategoryId=this.category.categoryId;
  //this.CategoryName=this.category.categoryName;
  //this.Parent=this.category.parent;
  //this.Status=this.category.status;
  this.refreshCustomer();
 }

 refreshCustomer(){
  this.service.getCustomerList().subscribe(res=>{
    this.CustomerList=res;
    console.log(res);
  })
 }


deleteCustomer(item:any){
  this.service.deleteCustomer(item.customerId).subscribe(res=>{
    this.refreshCustomer();
  })
}

clickAdd(){
  this.showAddBtn=true;
  this.showUpdateBtn=false;
}


clickEdit(item:any){
  this.CustomerId=item.customerId;
  this.CustomerName=item.customerName;
  this.Address=item.address;
  this.Phone=item.phone;
  this.showAddBtn=false;
  this.showUpdateBtn=true;
}

addCustomer(){
  var val ={
    customerId:this.CustomerId, 
    customerName:this.CustomerName, 
    address:this.Address,
    phone:this.Phone};

    this.service.addCustomer(val).subscribe(res=>{
         this.refreshCustomer();
    })

    this.CustomerName="";
    this.Address="";
    this.Phone="";
 }

 updateCustomer(){
  var val ={
    customerId:this.CustomerId, 
    customerName:this.CustomerName, 
    address:this.Address,
    phone:this.Phone};

    this.service.updateCustomer(val).subscribe(res=>{
         this.refreshCustomer();
    })

    this.CustomerName="";
    this.Address="";
    this.Phone="";
  }
}
