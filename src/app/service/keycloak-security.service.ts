import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import {KeycloakInstance} from 'keycloak-js';
import {HttpClient, HttpHeaders} from "@angular/common/http";
declare var Keycloak:any;

@Injectable({
  providedIn: 'root'
})
export class KeycloakSecurityService {
  public kc;

  constructor(private http:HttpClient){}

   init(){
     return new Promise((resolve,rejects)=>{
      console.log("walaa");
      this.kc=new Keycloak({
        url:"http://localhost:8080/auth",
        realm:"myrealm",
        clientId:"angular-service"
      });
      
       this.kc.init({
        //onLoad:'login-required'    
        onLoad:"check-sso"
      }).then((authenticated)=>{
        console.log(authenticated)
        console.log(this.kc.token)
        resolve({auth:authenticated,token:this.kc.token})
      });
      console.log(this.kc.token);
     }).catch(err=>{
       rejects(err);
     })
    
  }

  public getSuppliers(){
    return this.http.get("http://localhost:8082/products");
    }
  public isManager():boolean{ return this.kc.hasResourceRole("data-manager"); }

}
