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

 ngOnInit(){
  this.refreshCategory();
 }

 refreshCategory(){
  this.service.getCategoryLisr().subscribe(res=>{
    this.CategoryList=res;
  })
 }


deleteCategory(item:any){
  this.service.deleteCategory(item.CategoryId).subscribe(res=>{
    this.refreshCategory();
  })

}


clickEdit(item:any){

  //send data with  angular router
  this.router.navigate(["/add-update-category", { 'data': JSON.stringify(item) }]);
  console.log(item)

}

}
