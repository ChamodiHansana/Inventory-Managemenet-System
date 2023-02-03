import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIURL="http://localhost:5000/api";

  constructor(private http:HttpClient) { }

  //Category Service
  getCategoryList(): Observable<any []>{
       return this.http.get<any>(this.APIURL+'/categary')
  }

  addCategory(val:any){
    return this.http.post(this.APIURL+'/categary',val)
  }

  updateCategory(val:any){
    return this.http.put(this.APIURL+'/categary',val)
  }

  deleteCategory(val:any){
    return this.http.delete(this.APIURL+'/categary/'+ val)
  }



 //Category Service
 getCustomerList(): Observable<any []>{
   return this.http.get<any>(this.APIURL+'/customer')
 }

 addCustomer(val:any){
   return this.http.post(this.APIURL+'/customer',val)
 }

 updateCustomer(val:any){
   return this.http.put(this.APIURL+'/customer',val)
 }

 deleteCustomer(val:any){
   return this.http.delete(this.APIURL+'/customer/'+ val)
 }

 //Supplier Service
 getSupplierList(): Observable<any []>{
   return this.http.get<any>(this.APIURL+'/supplier')
 }

 addSupplier(val:any){
   return this.http.post(this.APIURL+'/supplier',val)
 }

 updateSupplier(val:any){
   return this.http.put(this.APIURL+'/supplier',val)
 }

 deleteSupplier(val:any){
   return this.http.delete(this.APIURL+'/supplier/'+ val)
 }

 //Product Service
 getProductList(): Observable<any []>{
  return this.http.get<any>(this.APIURL+'/product')
}

addProduct(val:any){
  return this.http.post(this.APIURL+'/product',val)
}

updateProduct(val:any){
  return this.http.put(this.APIURL+'/product',val)
}

deleteProduct(val:any){
  return this.http.delete(this.APIURL+'/product/'+ val)
}

//Purchase Service
getPurchaseList(): Observable<any []>{
  return this.http.get<any>(this.APIURL+'/purchase')
}

addPurchase(val:any){
  return this.http.post(this.APIURL+'/purchase',val)
}

updatePurchase(val:any){
  return this.http.put(this.APIURL+'/purchase',val)
}

deletePurchase(val:any){
  return this.http.delete(this.APIURL+'/purchase/'+ val)
}

//Order Service
getOrderList(): Observable<any []>{
  return this.http.get<any>(this.APIURL+'/order')
}

addOrder(val:any){
  return this.http.post(this.APIURL+'/order',val)
}

updateOrder(val:any){
  return this.http.put(this.APIURL+'/order',val)
}

deleteOrder(val:any){
  return this.http.delete(this.APIURL+'/order/'+ val)
}

   //User Service
  addUser(val:any){
    return this.http.post(this.APIURL+'/ApplicationUser/Register',val)
  }

  loginUser(val:any){
    return this.http.post(this.APIURL+'/ApplicationUser/Login',val)
  }

  getUserProfile() {
    var tokenHeader=new HttpHeaders({'Authorization':'Bearer'+localStorage.getItem('token')});
    return this.http.get(this.APIURL + '/UserProfile',{headers:tokenHeader});
  }

}
