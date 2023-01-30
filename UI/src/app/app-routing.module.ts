import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AddUpdateCategoryComponent } from './dashboard/category/add-update-category/add-update-category.component';
import { CategoryComponent } from './dashboard/category/category.component';
import { CreateCustomerComponent } from './dashboard/customer/create-customer/create-customer.component';
import { CustomerComponent } from './dashboard/customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './dashboard/login/login.component';
import { CreateOrderComponent } from './dashboard/order/create-order/create-order.component';
import { OrderComponent } from './dashboard/order/order.component';
import { CreateProductComponent } from './dashboard/product/create-product/create-product.component';
import { ProductComponent } from './dashboard/product/product.component';
import { CreatePurchaseComponent } from './dashboard/purchase/create-purchase/create-purchase.component';
import { PurchaseComponent } from './dashboard/purchase/purchase.component';
import { RegisterComponent } from './dashboard/register/register.component';
import { ReportsComponent } from './dashboard/reports/reports.component';
import { SummaryComponent } from './dashboard/summary/summary.component';
import { CreateSupplierComponent } from './dashboard/supplier/create-supplier/create-supplier.component';
import { SupplierComponent } from './dashboard/supplier/supplier.component';


const routes: Routes = [
  {path: 'add-update-category', component : AddUpdateCategoryComponent , canActivate:[AuthGuard] },
  {path: 'manage-category', component : CategoryComponent , canActivate:[AuthGuard]},
  {path: 'create-customer', component : CreateCustomerComponent , canActivate:[AuthGuard]},
  {path: 'manage-customer', component : CustomerComponent, canActivate:[AuthGuard] },
  {path: 'create-order', component : CreateOrderComponent, canActivate:[AuthGuard] },
  {path: 'manage-order', component : OrderComponent, canActivate:[AuthGuard] },
  {path: 'create-product', component : CreateProductComponent, canActivate:[AuthGuard] },
  {path: 'manage-product', component : ProductComponent , canActivate:[AuthGuard]},
  {path: 'create-purchase', component : CreatePurchaseComponent, canActivate:[AuthGuard] },
  {path: 'manage-purchase', component : PurchaseComponent, canActivate:[AuthGuard] },
  {path: 'create-reports', component : ReportsComponent , canActivate:[AuthGuard]},
  {path: 'create-supplier', component : CreateSupplierComponent , canActivate:[AuthGuard]},
  {path: 'manage-supplier', component : SupplierComponent , canActivate:[AuthGuard]},
  {path: 'summary', component : SummaryComponent , canActivate:[AuthGuard]},
  {path: 'login-user', component : LoginComponent},
  {path: 'register-user', component : RegisterComponent },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
