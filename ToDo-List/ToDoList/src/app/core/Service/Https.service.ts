import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { login, register } from "../../fetures/State-Management/Employee.actions";

@Injectable({
  providedIn: 'root'
})
export class HttpService{
  //  private BASE_URL = 'https://auth-api-zans.onrender.com/auth/';


   private BASE_URL = 'http://localhost:8000/';
   

   private JWT = 'JWT';



   constructor(private httpClient:HttpClient){}
   


   Auth(Url:string, params?:any):Observable<any>{
      const data = params;
      return this.httpClient.post(this.BASE_URL+Url,data);
   }

   GET(Url: string, body?: any ) :Observable<any>{
      const data = { headers: this.getAuthHeader()};
      console.log(data)
      return this.httpClient
        .get<any>(this.BASE_URL + Url, data);
    }


    POST(Url: string,  body?:any) {
      const data = { headers: this.getAuthHeader()};
    
      return this.httpClient
        .post(this.BASE_URL + Url, data,body);
    }

    PUT(Url: string, body:any) {
      const data = { headers: this.getAuthHeader()};
     
      return this.httpClient
        .put(this.BASE_URL + Url, data,body);
    }

    Delete(Url: string, params?: any) {
      const data = {params, headers: this.getAuthHeader()};
      return this.httpClient
        .delete(this.BASE_URL + Url, data);
    }
  




  //  private errorHandler(response: any):any {
  //     const error = response.error;
  //     const keys = Object.keys(error);
  //     const key = keys[0];
  //     let message = error[key];
  //     if (response.status === 401) {
  //       // auth token delete
  //       // redirect login page
  //     }
  //     if (error[key] instanceof Array) {
  //       message = error[key][0];
  //     }
  //     if (key === 'isTrusted') {
  //       // this will occur when not connected to internet
  //     } else {
  //       message = key + ' : ' + message;
  //     }

  //    return {messages: message, error}
    // }

    








   
  private getAuthHeader(): { [header: string]: string | string[]; } {
   return {
     Authorization: `Bearer ${localStorage.getItem(this.JWT)}`
   };

}
}




// responce-Data
// login

// fail: 
// {{
//   "status": 401,
//   "message": "Incorrect email or password OR User_DoseNot_Exist"
// }}

// sucess 

// {
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJydW5vQGVtYWlsLmNvbSIsInBhc3N3b3JkIjoiYnJ1bm8iLCJpYXQiOjE3MjU3NDE4MTQsImV4cCI6MTcyNTc0NTQxNH0.IHi2c6dn6UcEcjROCE7x9ZilQ0_Mcb5-vSGsg2y5V58",
//   "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJydW5vQGVtYWlsLmNvbSIsInBhc3N3b3JkIjoiYnJ1bm8iLCJpYXQiOjE3MjU3NDE4MTQsImV4cCI6MTcyNTc0NTQxNH0.IHi2c6dn6UcEcjROCE7x9ZilQ0_Mcb5-vSGsg2y5V58"
// }



// register

// sucess 

// {
//   "status": 200,
//   "message": "Registration Successful."
// }