import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-update-category',
  templateUrl: './add-update-category.component.html',
  styleUrls: ['./add-update-category.component.css']
})
export class AddUpdateCategoryComponent {

  @Input() category:any;
  CategoryList: any=[];
  CategoryName!: string;
  CategoryId!: string;
  Status!: string;
  Parent!: string;

  constructor(private service :SharedService,public router: Router, public route: ActivatedRoute) {}


 ngOnInit(){

  
  this.route.params.subscribe(params =>  {

    let data = JSON.parse(params['data']);
    console.log(data.CategoryName);
    this.CategoryId=data.CategoryId;
    this.CategoryName=data.CategoryName;
    this.Parent=data.Parent;
    this.Status=data.Status;

  });

 
  
 }


 addCategory(){
    var val ={
              CategoryName:this.CategoryName, 
              Parent:this.Parent,
              Status:this.Status};

    this.service.addCategory(val).subscribe(res=>{

    })

    this.CategoryName="";
    this.Status="";
    this.Parent="";
 }

 updateCategory(){
  var val ={
            CategoryName:this.CategoryName, 
            Parent:this.category.Parent,
            Status:this.category.Status};

  this.service.updateCategory(val).subscribe(res=>{
    
  })

  this.CategoryName="";
  this.Status="";
  this.Parent="";
}

}
