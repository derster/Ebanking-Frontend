import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Observable, catchError, throwError } from 'rxjs';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit{

  customers$!: Observable<Array<Customer>>;
  errorMessage! : string

  constructor(private customerService: CustomerService){

  }
  ngOnInit(): void {
    // this.customerService.getCustomers().subscribe({
    //   next: (data)=>{
    //     this.customers = data
    //   },
    //   error: (err)=>{
    //     this.errorMessage = err.message
    //   }
    // })

    this.customers$ = this.customerService.getCustomers().pipe(
      catchError(error => {
        this.errorMessage = error.message
        return throwError(error)
      })
    )

  }
}
