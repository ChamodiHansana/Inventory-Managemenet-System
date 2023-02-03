import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {


  constructor(private service :SharedService,private router: Router) {}

  
@Input() category:any;
CategoryList: any=[];
CategoryName: string | undefined;
CategoryId: string| undefined;
Status: string| undefined;
Parent: string| undefined;
showAddBtn :boolean=false;
showUpdateBtn :boolean=false;

 ngOnInit(){
  //this.CategoryId=this.category.categoryId;
  //this.CategoryName=this.category.categoryName;
  //this.Parent=this.category.parent;
  //this.Status=this.category.status;
  this.refreshCategory();
 }

 refreshCategory(){
  this.service.getCategoryList().subscribe(res=>{
    this.CategoryList=res;
    console.log(res);
  })
 }


deleteCategory(item:any){
  this.service.deleteCategory(item.categoryId).subscribe(res=>{
    this.refreshCategory();
  })

}

clickAdd(){
  this.showAddBtn=true;
  this.showUpdateBtn=false;
}


clickEdit(item:any){
  this.CategoryId=item.categoryId;
  this.CategoryName=item.categoryName;
  this.Parent=item.parent;
  this.Status=item.status;
  this.showAddBtn=false;
  this.showUpdateBtn=true;
}

addCategory(){
  var val ={
    categoryId:this.CategoryId, 
    categoryName:this.CategoryName, 
    parent:this.Parent,
    status:this.Status};

    this.service.addCategory(val).subscribe(res=>{
         this.refreshCategory();
    })

    console.log(val);

    this.CategoryName="";
    this.Status="";
    this.Parent="";
 }

 updateCategory(){
  var val ={
            categoryId:this.CategoryId, 
            categoryName:this.CategoryName, 
            parent:this.Parent,
            status:this.Status};
 console.log(val);
  this.service.updateCategory(val).subscribe(res=>{
    this.refreshCategory();
  })

  this.CategoryName="";
  this.Status="";
  this.Parent="";
}

}


