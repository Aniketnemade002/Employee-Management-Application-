import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {  Router, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { HttpService } from '../../core/Service/Https.service';
import { Apis } from '../../core/Service/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  providers:[Apis,HttpService,HttpClient,HttpClientModule],
  imports:[ CommonModule,ButtonModule,RouterOutlet,
  ReactiveFormsModule,
CardModule,InputTextModule,
  MatToolbarModule, MatButtonModule, MatIconModule,FontAwesomeModule,MatCardModule, FloatLabelModule,   MatFormFieldModule,MatCheckboxModule
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {
    console.log(this.isLoginRoute);
  }

 

  isLoginRoute(): boolean {
    return this.router.url === '/home/login';

    
  }
  

  isRegisterRoute(): boolean {
    return this.router.url === '/home/register';
  }


  DoRegister(){

    this.router.navigate(['/home/register']);
  }
  DoLogin(){
    this.router.navigate(['/home/login']);
  }

}
