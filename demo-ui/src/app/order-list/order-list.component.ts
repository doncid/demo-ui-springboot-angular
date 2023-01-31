import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../classes/order';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';

@Component( {
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: [ './order-list.component.css' ],
} )
export class OrderListComponent implements OnInit {

  orders: Observable<Order[]> | undefined;

  constructor( private orderService: OrderService, private router: Router ) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.orders = this.orderService.getOrderList();
  }

  deleteOrder( orderId: number ) {
    this.orderService.deleteOrder( orderId ).subscribe(
      data => {
        console.log( data );
        this.reloadData();
      },
      error => console.log( error )
    );
  }

  orderDetails( orderId: number ) {
    this.router.navigate( [ 'details', orderId ] );
  }
}
