import { Injectable } from "@angular/core";
import { HttpService } from "./Https.service";
import { Associates } from "../../Modals/employee.model";
import { Observable } from "rxjs";
import { LoginResponceModal } from "../../fetures/State-Management/User/login.state";


// https://auth-api-zans.onrender.com/auth/login
// https://auth-api-zans.onrender.com/auth/register

@Injectable({
  providedIn: 'root'
})
 export class Apis {
   constructor(private https:HttpService){}

   Login(params?:any):Observable<LoginResponceModal>{
 
     return this.https.Auth('auth/login',params);

      
   }
   Register(params?:any){
    
      return this.https.Auth('auth/register',params);
 
       
    }

   GetAll():Observable<Associates[]> {
      return this.https.GET('associate');
    }
  
    Getbycode(code: number) :Observable<Associates>{
    
      return this.https.GET('associate'+'/'+code);
    }
    Delete(code: number) {
      return this.https.Delete('associate'+'/'+code);
    }
    Update(data: Associates) {
      return this.https.PUT('associate/' + data.id, data);
     
    }
    Create(data: Associates) {
      console.log(data);
      return this.https.POST('associate', data);
   
    }
 }