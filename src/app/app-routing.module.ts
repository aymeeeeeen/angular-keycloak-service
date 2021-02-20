import { SuppliersComponent } from './suppliers/suppliers.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrdouctsComponent } from './prdoucts/prdoucts.component';
import { CustomersComponent } from './customers/customers.component';

const routes:Routes=[
  {path:"products",component:PrdouctsComponent},
  {path:"suppliers",component:SuppliersComponent},
  {path:"customers",component:CustomersComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
