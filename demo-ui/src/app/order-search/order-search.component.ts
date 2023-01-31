import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Order } from '../classes/order';
import { OrderService } from '../services/order.service';

@Component( {
  selector: 'app-order-search',
  templateUrl: './order-search.component.html',
  styleUrls: [ './order-search.component.css' ]
} )
export class OrderSearchComponent implements OnInit {

  private order: Order;
  submitted = false;
  private data: any;
  private error = null;

  form = new FormGroup({
    orderId : new FormControl(),
    lastName : new FormControl()
  });

  constructor( private orderService: OrderService, private router: Router ) { }

  ngOnInit(): void {
    this.order = new Order();
    this.error = null;
    //this.fetchOrder();
  }

  searchForm(searchData) {
    this.order.id = this.OrderId.value;
    this.order.lastName = this.LastName.value;
    this.fetchOrder();
    this.order = new Order();
    this.error = null;
  }

  get OrderId() {
    return this.form.get('orderId');
  }

  get LastName() {
    return this.form.get('lastName');
  }

  fetchOrder() {
    this.orderService.getOrderByIdAndLastName( this.order.id, this.order.lastName ).subscribe(
      data => {
        console.log( data );
        this.order = data;
      },
      error => {
        this.error = error;
        console.log( error );
      }
    );
  }

}
