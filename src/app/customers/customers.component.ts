import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../service/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  public customers:any;

  constructor(private customersService: CustomersService) { }
  ngOnInit(): void {
    this.getAllCustomers();
  }

  getAllCustomers(){
    this.customersService.getAll().subscribe(res =>{this.customers = res});
  }
}
