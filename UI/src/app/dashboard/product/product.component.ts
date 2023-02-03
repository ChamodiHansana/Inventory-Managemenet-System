import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(private service :SharedService,private router: Router) {}

  
@Input() product:any;
ProductList: any=[];
CategoryList:any=[];
ProductName: string | undefined;
ProductId: string| undefined;
Status: string| undefined;
CostPrice: string| undefined;
SalePrice: string| undefined;
Description: string| undefined;
Category: string| undefined;
showAddBtn :boolean=false;
showUpdateBtn :boolean=false;

 ngOnInit(){
  //this.CategoryId=this.category.categoryId;
  //this.CategoryName=this.category.categoryName;
  //this.Parent=this.category.parent;
  //this.Status=this.category.status;
  this.refreshProduct();
  this.getCategary();
 }

 getCategary(){
  this.service.getCategoryList().subscribe(res=>{
    this.CategoryList=res;
    console.log(res);
  })
 }

 refreshProduct(){
  this.service.getProductList().subscribe(res=>{
    this.ProductList=res;
    console.log(res);
  })
 }


deleteProduct(item:any){
  this.service.deleteProduct(item.productId).subscribe(res=>{
    this.refreshProduct();
  })

}

clickAdd(){
  this.showAddBtn=true;
  this.showUpdateBtn=false;
}


clickEdit(item:any){
  this.ProductId=item.productId;
  this.ProductName=item.productName;
  this.Description=item.description;
  this.Category=item.category;
  this.CostPrice=item.costPrice;
  this.SalePrice=item.salePrice;
  this.Status=item.status;
  this.showAddBtn=false;
  this.showUpdateBtn=true;
}

addProduct(){
  var val ={
    productId:this.ProductId, 
    productName:this.ProductName, 
    productDesc:this.Description,
    productCategory:this.Category,
    costPrice:this.CostPrice,
    salePrice:this.SalePrice,
    status:this.Status};

    this.service.addProduct(val).subscribe(res=>{
         this.refreshProduct();
    })

    console.log(val);

    this.ProductId="";
    this.ProductName="";
    this.Description="";
    this.Category="";
    this.CostPrice="";
    this.SalePrice="";
    this.Status="";
 }

 updateProduct(){
  var val ={
    productId:this.ProductId, 
    productName:this.ProductName, 
    productDesc:this.Description,
    productCategory:this.Category,
    costPrice:this.CostPrice,
    salePrice:this.SalePrice,
    status:this.Status};
 console.log(val);
  this.service.updateProduct(val).subscribe(res=>{
    this.refreshProduct();
  })

  this.ProductId="";
  this.ProductName="";
  this.Description="";
  this.Category="";
  this.CostPrice="";
  this.SalePrice="";
  this.Status="";
}

}
