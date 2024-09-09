import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import {  RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import {MatInputModule} from "@angular/material/input"
import {MatSelectModule} from "@angular/material/select"

import {MatRadioModule} from "@angular/material/radio"
import {MatDialogModule} from "@angular/material/dialog"
import {MatTableModule} from "@angular/material/table"
import {MatPaginatorModule} from "@angular/material/paginator"
import {MatSortModule} from "@angular/material/sort"
import {MatSnackBarModule} from "@angular/material/snack-bar"

import {MatSidenavModule} from "@angular/material/sidenav"
import {MatMenuModule} from "@angular/material/menu"
import {MatListModule} from "@angular/material/list"
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { EmployeeEffects } from "./fetures/State-Management/Employee.Effects";
import { EmployeeReducer } from "./fetures/State-Management/Employee.Reducers";
import { AppStoreModule } from "./app.store";


@NgModule({exports:[
   MatToolbarModule,
    MatButtonModule,
     MatIconModule,
     FontAwesomeModule,
     RouterModule,
     CommonModule,
     MatCardModule,   MatCardModule,
     MatFormFieldModule,
     MatInputModule,
     MatSelectModule,
     
     MatCheckboxModule,
     MatRadioModule,
     MatDialogModule,
     MatTableModule,
     MatPaginatorModule,
     MatSortModule,
     MatSnackBarModule,
     
     MatSidenavModule,
     MatMenuModule,
     MatListModule,
     
   


]})
export class materialModule{

}


