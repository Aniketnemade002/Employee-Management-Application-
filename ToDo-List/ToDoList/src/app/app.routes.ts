import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { HomeComponent } from './fetures/home/home.component';
import { LoginComponent } from './fetures/login/login.component';
import { RegisterComponent } from './fetures/register/register.component';
import { DashbordComponent } from './fetures/dashbord/dashbord.component';
import { EmployeeListingComponent } from './fetures/employee-listing/employee-listing.component';
import { guardsGuard } from './guards/guards.guard';
import { NotFoundComponent } from './NotFound.component';
export const routes: Routes = [
   {
     path: 'home', component: HomeComponent,
     children: [
       { path: 'login', component: LoginComponent },
       { path: 'register', component: RegisterComponent },
     ]
   },
   { path: 'dashboard', component: EmployeeListingComponent ,canActivate: [guardsGuard] ,data: { redirectToNotFound: true }},
   { path: 'not-found', component: NotFoundComponent },
   { path: '', redirectTo: 'home', pathMatch: 'full' },
   { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
 ];

@NgModule({
imports:[RouterModule.forRoot(routes)],

})
export class AppRoutingModule{}
