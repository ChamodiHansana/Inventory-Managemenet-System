import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent {
  constructor(private service :SharedService,private router: Router) {}

  
  @Input() purchase:any;
  ProductList: any=[];
  CategoryList:any=[];
  PurchaseList:any=[];
  SupplierList:any=[];
  Date:string | undefined;
  PurchaseName: string | undefined;
  CategoryName: string | undefined;
  ProductName: string | undefined;
  PurchaseId: string| undefined;
  Quantity: number| undefined;
  CostPrice: string| undefined;
  SupplierName: string| undefined;
  showAddBtn :boolean=false;
  showUpdateBtn :boolean=false;
  
   ngOnInit(){
    //this.CategoryId=this.category.categoryId;
    //this.CategoryName=this.category.categoryName;
    //this.Parent=this.category.parent;
    //this.Status=this.category.status;
    this.getProduct();
    this.getCategary();
    this.getSupplier();
    this.refreshPurchase();
   }
  
   getCategary(){
    this.service.getCategoryList().subscribe(res=>{
      this.CategoryList=res;
      console.log(res);
    })
   }
  
   getProduct(){
    this.service.getProductList().subscribe(res=>{
      this.ProductList=res;
      console.log(res);
    })
   }

   getSupplier(){
    this.service.getSupplierList().subscribe(res=>{
      this.SupplierList=res;
      console.log(res);
    })
   }

   refreshPurchase(){
    this.service.getPurchaseList().subscribe(res=>{
      this.PurchaseList=res;
      console.log(res);
    })
   }
  
  
  deletePurchase(item:any){
    this.service.deletePurchase(item.purchaseId).subscribe(res=>{
      this.refreshPurchase();
    })
  
  }
  
  clickAdd(){
    this.showAddBtn=true;
    this.showUpdateBtn=false;
  }
  
  
  clickEdit(item:any){
    this.Date=item.date;
    this.CategoryName=item.categoryName;
    this.ProductName=item.productName;
    this.Quantity=item.quantity;
    this.CostPrice=item.costPrice;
    this.SupplierName=item.supplierName;
    this.showAddBtn=false;
    this.showUpdateBtn=true;
  }
  
  addPurchase(){
    var val ={
      date:this.Date, 
      categoryName:this.CategoryName, 
      productName:this.ProductName,
      quantity:this.Quantity,
      costPrice:this.CostPrice,
      supplierName:this.SupplierName};
      this.service.addPurchase(val).subscribe(res=>{
        this.refreshPurchase();
      })
  
      console.log(val);
  
      this.Date="";
      this.ProductName="";
      this.CategoryName="";
      this.Quantity=0;
      this.CostPrice="";
      this.SupplierName="";
   }
  
   updatePurchase(){
    var val ={
      date:this.Date, 
      categoryName:this.CategoryName, 
      productName:this.ProductName,
      quantity:this.Quantity,
      costPrice:this.CostPrice,
      supplierName:this.SupplierName};
   console.log(val);
    this.service.updatePurchase(val).subscribe(res=>{
      this.refreshPurchase();
    })
  
    
    this.Date="";
    this.ProductName="";
    this.CategoryName="";
    this.Quantity=0;
    this.CostPrice="";
    this.SupplierName="";
  }
}
