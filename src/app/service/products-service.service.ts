import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeycloakSecurityService } from './keycloak-security.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor(private http: HttpClient, private keyService:KeycloakSecurityService) {}

  getAll()
  {
    return this.http.get("http://localhost:8082/products");
    {headers:new HttpHeaders({Authorization:'Bearer '+this.keyService.kc.token})};
  }
}
