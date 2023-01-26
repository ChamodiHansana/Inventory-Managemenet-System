import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './dashboard/category/category.component';
import { CreateCategoryComponent } from './dashboard/category/create-category/create-category.component';
import { ProductComponent } from './dashboard/product/product.component';
import { CreateProductComponent } from './dashboard/product/create-product/create-product.component';
import { SupplierComponent } from './dashboard/supplier/supplier.component';
import { PurchaseComponent } from './dashboard/purchase/purchase.component';
import { CreatePurchaseComponent } from './dashboard/purchase/create-purchase/create-purchase.component';
import { CustomerComponent } from './dashboard/customer/customer.component';
import { CreateCustomerComponent } from './dashboard/customer/create-customer/create-customer.component';
import { OrderComponent } from './dashboard/order/order.component';
import { CreateOrderComponent } from './dashboard/order/create-order/create-order.component';
import { ReportsComponent } from './dashboard/reports/reports.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    CategoryComponent,
    CreateCategoryComponent,
    ProductComponent,
    CreateProductComponent,
    SupplierComponent,
    PurchaseComponent,
    CreatePurchaseComponent,
    CustomerComponent,
    CreateCustomerComponent,
    OrderComponent,
    CreateOrderComponent,
    ReportsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
