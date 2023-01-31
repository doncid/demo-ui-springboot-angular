import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../classes/order';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  order: Order;
  orderId: number;

  constructor(private orderService: OrderService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    console.log("In the init of confirmationComp");
    this.orderId = this.route.snapshot.params[ 'orderId' ];
    console.log("order id: " + this.orderId);
    this.orderService.getOrderById( this.orderId ).subscribe(
      data => {
        console.log( data );
        this.order = data;
      },
      error => console.log( error )
    );

  }

}
