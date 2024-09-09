import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login, loginSuccess } from '../State-Management/Employee.actions';
import { Login } from '../../Modals/employee.model';
import { Observable } from 'rxjs';
import { HttpService } from '../../core/Service/Https.service';
import { Apis } from '../../core/Service/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ButtonModule,
    ReactiveFormsModule,
CardModule,InputTextModule,
    MatToolbarModule, MatButtonModule, MatIconModule,FontAwesomeModule,MatCardModule, FloatLabelModule,   MatFormFieldModule,MatCheckboxModule
  ],providers:[Apis,HttpService,HttpClient,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {
  
 

  
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
    password: ['', Validators.required]
  })
  constructor(
    private fb:FormBuilder, private store :Store
  ){}


 
 
  get email() {
    
    return this.loginForm.controls['email'];
  }
  get password() { return this.loginForm.controls['password']; }



  loginUser() {
    const email = this.loginForm.value.email as string; 
    const password = this.loginForm.value.password as string; 
    const _logindata: Login = { email, password };
    console.log(_logindata);
    this.store.dispatch(login({obj:_logindata }));

    

   
    



   
  }




}
