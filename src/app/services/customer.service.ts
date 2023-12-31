import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {

   }

   public getCustomers():Observable<Array<Customer>>{
      return this.http.get<Array<Customer>>("http://localhost:8085/customers")
   }
}
