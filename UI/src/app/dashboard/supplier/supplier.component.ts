import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent {
  constructor(private service :SharedService,private router: Router) {}

  
@Input() supplier:any;
SupplierList: any=[];
SupplierName: string | undefined;
SupplierId: string| undefined;
Address: string| undefined;
Phone: string| undefined;
showAddBtn :boolean=false;
showUpdateBtn :boolean=false;

 ngOnInit(){
  //this.CategoryId=this.category.categoryId;
  //this.CategoryName=this.category.categoryName;
  //this.Parent=this.category.parent;
  //this.Status=this.category.status;
  this.refreshSupplier();
 }

 refreshSupplier(){
  this.service.getSupplierList().subscribe(res=>{
    this.SupplierList=res;
    console.log(res);
  })
 }


deleteSupplier(item:any){
  this.service.deleteSupplier(item.supplierId).subscribe(res=>{
    this.refreshSupplier();
  })
}

clickAdd(){
  this.showAddBtn=true;
  this.showUpdateBtn=false;
}


clickEdit(item:any){
  this.SupplierId=item.supplierId;
  this.SupplierName=item.supplierName;
  this.Address=item.address;
  this.Phone=item.phone;
  this.showAddBtn=false;
  this.showUpdateBtn=true;
}

addSupplier(){
  var val ={
    supplierId:this.SupplierId, 
    supplierName:this.SupplierName, 
    address:this.Address,
    phone:this.Phone};

    this.service.addSupplier(val).subscribe(res=>{
         this.refreshSupplier();
    })

    this.SupplierName="";
    this.Address="";
    this.Phone="";
 }

 updateSupplier(){
  var val ={
    supplierId:this.SupplierId, 
    supplierName:this.SupplierName, 
    address:this.Address,
    phone:this.Phone};

    this.service.updateSupplier(val).subscribe(res=>{
         this.refreshSupplier();
    })

    this.SupplierName="";
    this.Address="";
    this.Phone="";
  }
}
