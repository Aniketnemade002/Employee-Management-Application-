import { Component } from '@angular/core';
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

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ButtonModule,
    ReactiveFormsModule,
CardModule,InputTextModule,
    MatToolbarModule, MatButtonModule, MatIconModule,FontAwesomeModule,MatCardModule, FloatLabelModule,   MatFormFieldModule,MatCheckboxModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
    password: ['', Validators.required]
  })
  constructor(
    private fb:FormBuilder
  ){}
  
 
  get email() {
    console.log(this.loginForm.controls['email'].value)
    return this.loginForm.controls['email'];
  }
  get password() { return this.loginForm.controls['password']; }




  loginUser() {
    const { email, password } = this.loginForm.value;
   console.log("okk")
  }
}
