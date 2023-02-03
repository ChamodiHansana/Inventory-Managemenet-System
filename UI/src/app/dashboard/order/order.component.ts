import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  constructor(private service :SharedService,private router: Router) {}

  @Input() order:any;
  ProductList: any=[];
  CategoryList:any=[];
  OrderList:any=[];
  CustomerList:any=[];
  Date:string | undefined;;
  CategoryName: string | undefined;
  ProductName: string | undefined;
  OrderId: string| undefined;
  Quantity: number| undefined;
  SalePrice: string| undefined;
  CustomerName: string| undefined;
  showAddBtn :boolean=false;
  showUpdateBtn :boolean=false;
  
   ngOnInit(){
    //this.CategoryId=this.category.categoryId;
    //this.CategoryName=this.category.categoryName;
    //this.Parent=this.category.parent;
    //this.Status=this.category.status;
    this.getProduct();
    this.getCategary();
    this.getCustomer();
    this.refreshOrder();
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

   getCustomer(){
    this.service.getCustomerList().subscribe(res=>{
      this.CustomerList=res;
      console.log(res);
    })
   }

   refreshOrder(){
    this.service.getOrderList().subscribe(res=>{
      this.OrderList=res;
      console.log(res);
    })
   }
  
  
  deleteOrder(item:any){
    this.service.deleteOrder(item.orderId).subscribe(res=>{
      this.refreshOrder();
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
    this.SalePrice=item.salePrice;
    this.CustomerName=item.customerName;
    this.showAddBtn=false;
    this.showUpdateBtn=true;
  }
  
  addOrder(){
    var val ={
      date:this.Date, 
      categoryName:this.CategoryName, 
      productName:this.ProductName,
      quantity:this.Quantity,
      salePrice:this.SalePrice,
      customerName:this.CustomerName};
      this.service.addOrder(val).subscribe(res=>{
        this.refreshOrder();
      })
  
      console.log(val);
  
      this.Date="";
      this.ProductName="";
      this.CategoryName="";
      this.Quantity=0;
      this.SalePrice="";
      this.CustomerName="";
   }
  
   updateOrder(){
    var val ={
      date:this.Date, 
      categoryName:this.CategoryName, 
      productName:this.ProductName,
      quantity:this.Quantity,
      salePrice:this.SalePrice,
      customerName:this.CustomerName};
      this.service.updateOrder(val).subscribe(res=>{
        this.refreshOrder();
      })
  
      console.log(val);
  
      this.Date="";
      this.ProductName="";
      this.CategoryName="";
      this.Quantity=0;
      this.SalePrice="";
      this.CustomerName="";
  }
}
