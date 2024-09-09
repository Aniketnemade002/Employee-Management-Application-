import { Injectable } from "@angular/core";

import { Apis } from "../../../core/Service/api.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { login, loginSuccess, register, registerSuccess } from "../Employee.actions";
import { catchError,  of, switchMap, tap } from "rxjs";
import { showalert } from "../../../core/Common/alert.action";
import { Router } from "@angular/router";



@Injectable()
export class AuthEffect{
   constructor(private action$: Actions,private api:Apis, private router: Router){}


   _login$ = createEffect(() => 
      
       this.action$.pipe(
         ofType(login),

         switchMap(

         (act)=>{
            return this.api.Login(act.obj).pipe(
               switchMap(
                  (data)=>[
                     loginSuccess({Responce:data}),
                     showalert({ message: 'User Login successfully.', resulttype: 'pass' }),
                    
                  ]
               ), catchError((error) => of(showalert({ message: `Failed to Login: ${error.message}`, resulttype: 'fail' })))
            );
         }
         )
       )
   );

   loginSuccess$ = createEffect(() =>
      this.action$.pipe(
        ofType(loginSuccess),
        tap((Responce) =>{
         console.log(Responce.Responce.token);
          localStorage.setItem('JWT', Responce.Responce.token);
         localStorage.setItem('RefreshJWT', Responce.Responce.token);
         
         this.router.navigate(['/dashboard']);
      
      } ) 
      ),
      { dispatch: false } 
    );

   

   _Ragister$ = createEffect(() => 
      this.action$.pipe(
        ofType(register),

        switchMap(

        (act)=>{
           return this.api.Register(act.data).pipe(
              switchMap(
                 (data)=>[
                    registerSuccess({data:data}),
                    showalert({ message: 'User Register successfully.', resulttype: 'pass' })
                 ]
              ), catchError((error) => of(showalert({ message: `Failed to Register: ${error.message}`, resulttype: 'fail' })))
           );
        }
        )
      )
  );

  RegisterSuccess$ = createEffect(() =>
   this.action$.pipe(
     ofType(registerSuccess),
     tap((Responce) =>{
       
      this.router.navigate(['/home/login']);
   
   } ) 
   ),
   { dispatch: false } 
 );


   



   
}