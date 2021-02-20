import { KeycloakSecurityService } from './service/keycloak-security.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'keycloak-front';

  isAdmin:boolean;
  isCustomer:boolean;
  isProduct:boolean;

  constructor(public kcService:KeycloakSecurityService ){

  }

  ngOnInit():void {
    this.isAdmin=this.kcService.kc.hasRealmRole("data-manager");
    this.isCustomer=this.kcService.kc.hasRealmRole("CUSTOMER_MANAGER");
    this.isProduct=this.kcService.kc.hasRealmRole("PRODUCT_MANAGER");
  }
  onLogout(){
    this.kcService.kc.logout(); 
  }
  onLogin(){
    this.kcService.kc.login(); 

  }

  onChangePassword(){
    this.kcService.kc.accountManagement(); 

  }
  isAppManager(){
    return this.kcService.kc.hasRealmRole('MANAGER');
  }

  isCustomerManager(){
    return this.kcService.kc.hasRealmRole('CUSTOMER_MANAGER');
  }

  isProductManager(){
    return this.kcService.kc.hasRealmRole('PRODUCT_MANAGER');
  }
}
