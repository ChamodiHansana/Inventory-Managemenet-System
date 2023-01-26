import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './dashboard/category/category.component';
import { CreateCategoryComponent } from './dashboard/category/create-category/create-category.component';
import { CreateCustomerComponent } from './dashboard/customer/create-customer/create-customer.component';
import { CustomerComponent } from './dashboard/customer/customer.component';
import { CreateOrderComponent } from './dashboard/order/create-order/create-order.component';
import { OrderComponent } from './dashboard/order/order.component';
import { CreateProductComponent } from './dashboard/product/create-product/create-product.component';
import { ProductComponent } from './dashboard/product/product.component';
import { CreatePurchaseComponent } from './dashboard/purchase/create-purchase/create-purchase.component';
import { PurchaseComponent } from './dashboard/purchase/purchase.component';
import { ReportsComponent } from './dashboard/reports/reports.component';
import { CreateSupplierComponent } from './dashboard/supplier/create-supplier/create-supplier.component';
import { SupplierComponent } from './dashboard/supplier/supplier.component';

const routes: Routes = [
  {path: 'create-category', component : CreateCategoryComponent },
  {path: 'manage-category', component : CategoryComponent },
  {path: 'create-customer', component : CreateCustomerComponent },
  {path: 'manage-customer', component : CustomerComponent },
  {path: 'create-order', component : CreateOrderComponent },
  {path: 'manage-order', component : OrderComponent },
  {path: 'create-product', component : CreateProductComponent },
  {path: 'manage-product', component : ProductComponent },
  {path: 'create-purchase', component : CreatePurchaseComponent },
  {path: 'manage-purchase', component : PurchaseComponent },
  {path: 'create-reports', component : ReportsComponent },
  {path: 'create-supplier', component : CreateSupplierComponent },
  {path: 'manage-supplier', component : SupplierComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
