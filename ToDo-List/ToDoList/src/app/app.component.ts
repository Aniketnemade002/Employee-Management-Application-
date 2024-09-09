import { Component } from '@angular/core';
import { materialModule } from './material.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { RouterOutlet } from '@angular/router';
import { EmployeeReducer } from './fetures/State-Management/Employee.Reducers';
import { EmployeeEffects } from './fetures/State-Management/Employee.Effects';
import { AppStoreModule } from './app.store';
import { Apis } from './core/Service/api.service';
import { HttpService } from './core/Service/Https.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    materialModule,HttpClientModule
    // AppStoreModule
  
  ],providers:[Apis,HttpService,HttpClient,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EmpApp';
}
