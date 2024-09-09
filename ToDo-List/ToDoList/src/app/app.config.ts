import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppStoreModule } from './app.store';
import { provideEffects } from '@ngrx/effects';
import { EmployeeEffects } from './fetures/State-Management/Employee.Effects';
import { EmployeeReducer } from './fetures/State-Management/Employee.Reducers';
import { AuthEffect } from './fetures/State-Management/User/User.Effect';
import { AuthReducer } from './fetures/State-Management/User/User.Reducer';
import { Apis } from './core/Service/api.service';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(),provideRouter(routes), provideStore({
    associate: EmployeeReducer,
    auth: AuthReducer,
  }),
  provideEffects([
    EmployeeEffects,
    AuthEffect
  ]),provideAnimationsAsync(), provideAnimationsAsync()]
};
