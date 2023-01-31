import { Component, OnInit } from '@angular/core';
import { Order } from '../classes/order';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';

@Component( {
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: [ './create-order.component.css' ]
} )
export class CreateOrderComponent implements OnInit {

  order: Order;
  submitted = false;

  constructor( private orderService: OrderService, private router: Router ) { }

  ngOnInit(): void {
    this.order = new Order();
  }

  save() {
    this.orderService.createOrder( this.order ).subscribe(
      data => {
        console.log( data );
        this.order = data;
        this.gotoConfirmation();
      },
      error => console.log( error )
    );
  }

  gotoConfirmation() {
    this.router.navigate( [ 'confirmation', this.order.id ] );
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
