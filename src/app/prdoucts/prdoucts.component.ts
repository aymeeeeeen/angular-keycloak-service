import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../service/products-service.service';

@Component({
  selector: 'app-prdoucts',
  templateUrl: './prdoucts.component.html',
  styleUrls: ['./prdoucts.component.css']
})
export class PrdouctsComponent implements OnInit {

  public products:any;

  constructor(private productService: ProductsServiceService) { }

  ngOnInit(): void {
    this.getAllProduct();
  }
  getAllProduct(){
    this.productService.getAll().subscribe(res =>{this.products = res} );
   // console.log(user);
  }

}
