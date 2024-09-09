import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { passwordMatchValidator } from '../../passwordmatch.directves';
import { Register } from '../../Modals/employee.model';
import { register } from '../State-Management/Employee.actions';
import { Store } from '@ngrx/store';
import { Apis } from '../../core/Service/api.service';
import { HttpService } from '../../core/Service/Https.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ButtonModule,
    ReactiveFormsModule,
CardModule,InputTextModule,
    MatToolbarModule, MatButtonModule, MatIconModule,FontAwesomeModule,MatCardModule, FloatLabelModule,   MatFormFieldModule,MatCheckboxModule
  ],providers:[Apis,HttpService,HttpClient,HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  },{
    validators: passwordMatchValidator
  })
  constructor(
    private fb:FormBuilder,private store :Store
  ){}
  
 
  get email() {
  
    return this.registerForm.controls['email'];
  }
  get password() { return this.registerForm.controls['password']; }


  get confirmPassword() {
    return this.registerForm.controls['confirmPassword'];
  }


  RegisterUser() {
    const email = this.registerForm.value.email as string; 
    const password = this.registerForm.value.password as string; 
    const _data: Register = { email, password };
    console.log(_data);
    this.store.dispatch(register({data:_data }));

   
  }

}
