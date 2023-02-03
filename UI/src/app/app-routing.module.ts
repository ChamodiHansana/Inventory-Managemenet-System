import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { CategoryComponent } from './dashboard/category/category.component';
import { CustomerComponent } from './dashboard/customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './dashboard/login/login.component';
import { OrderComponent } from './dashboard/order/order.component';
import { ProductComponent } from './dashboard/product/product.component';
import { PurchaseComponent } from './dashboard/purchase/purchase.component';
import { RegisterComponent } from './dashboard/register/register.component';
import { ReportsComponent } from './dashboard/reports/reports.component';
import { SummaryComponent } from './dashboard/summary/summary.component';
import { SupplierComponent } from './dashboard/supplier/supplier.component';


const routes: Routes = [
  {path: 'manage-category', component : CategoryComponent , canActivate:[AuthGuard]},
  {path: 'manage-customer', component : CustomerComponent, canActivate:[AuthGuard] },
  {path: 'manage-order', component : OrderComponent, canActivate:[AuthGuard] },
  {path: 'manage-product', component : ProductComponent , canActivate:[AuthGuard]},
  {path: 'manage-purchase', component : PurchaseComponent, canActivate:[AuthGuard] },
  {path: 'create-reports', component : ReportsComponent , canActivate:[AuthGuard]},
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
