import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './dashboard/login/login.component';
import { RegisterComponent } from './dashboard/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './dashboard/category/category.component';
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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AddUpdateCategoryComponent } from './dashboard/category/add-update-category/add-update-category.component';
import { AuthInterceptor } from './auth/AuthInterceptor';
import { SharedService } from './shared.service';
import { SummaryComponent } from './dashboard/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    CategoryComponent,
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
    AddUpdateCategoryComponent,
    SummaryComponent
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
