import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../classes/order';
import { OrderService } from '../services/order.service';

@Component( {
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: [ './order-details.component.css' ]
} )
export class OrderDetailsComponent implements OnInit {

  orderId: number;
  order: Order;

  constructor( private orderService: OrderService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.order = new Order();
    this.orderId = this.route.snapshot.params[ 'orderId' ];
    this.orderService.getOrderById( this.orderId ).subscribe(
      data => {
        console.log( data );
        this.order = data;
      },
      error => console.log( error )
    );
  }

  orderList() {
    this.router.navigate( [ 'orders' ] );
  }

}
