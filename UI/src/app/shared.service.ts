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
  getCategoryLisr(): Observable<any []>{
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
