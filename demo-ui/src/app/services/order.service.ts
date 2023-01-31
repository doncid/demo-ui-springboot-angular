import { Injectable } from '@angular/core';
import { Order } from '../classes/order';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable( {
  providedIn: 'root',
} )
export class OrderService {
  private baseUrl = 'http://localhost:8080/api/yearbook/order';

  constructor( private http: HttpClient ) { }

  createOrder( order: Object ): Observable<any> {
    return this.http.post( `${ this.baseUrl }`, order );
  }

  getOrderById( orderId: number ): Observable<any> {
    return this.http.get( `${ this.baseUrl }/${ orderId }` );
  }

  getOrderByIdAndLastName( orderId: number, lastName: string ): Observable<any> {
    return this.http.get( `${ this.baseUrl }/${ orderId }/${ lastName }` );
  }

  getOrderList(): Observable<any> {
    return this.http.get( `${ this.baseUrl }` );
  }

  deleteOrder( orderId: number ): Observable<any> {
    return this.http.delete( `${ this.baseUrl }/${ orderId }`, { responseType: 'text' } );
  }
}
