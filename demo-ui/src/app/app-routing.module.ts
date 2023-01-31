import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateOrderComponent } from './create-order/create-order.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderSearchComponent } from './order-search/order-search.component';

const routes: Routes = [
  { path: '', redirectTo: 'order', pathMatch: 'full' },
  { path: 'orders', component: OrderListComponent },
  { path: 'add', component: CreateOrderComponent },
  { path: 'search', component: OrderSearchComponent },
  { path: 'confirmation/:orderId', component: OrderConfirmationComponent },
  { path: 'details/:orderId', component: OrderDetailsComponent }
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }
