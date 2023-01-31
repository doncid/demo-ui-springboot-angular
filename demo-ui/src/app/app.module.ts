import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { OrderListComponent } from './order-list/order-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderSearchComponent } from './order-search/order-search.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';


@NgModule( {
  declarations: [
    AppComponent,
    CreateOrderComponent,
    OrderListComponent,
    OrderDetailsComponent,
    OrderSearchComponent,
    OrderConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
