import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeReducer } from './fetures/State-Management/Employee.Reducers';
import { EmployeeEffects } from './fetures/State-Management/Employee.Effects';
import { AuthReducer } from './fetures/State-Management/User/User.Reducer';
import { AuthEffect } from './fetures/State-Management/User/User.Effect';


@NgModule({
  imports: [
    StoreModule.forRoot({ associate: EmployeeReducer ,auth:AuthReducer}),  
    EffectsModule.forRoot([EmployeeEffects,AuthEffect]),  
  ],
  exports: [StoreModule, EffectsModule],  
})
export class AppStoreModule {}
