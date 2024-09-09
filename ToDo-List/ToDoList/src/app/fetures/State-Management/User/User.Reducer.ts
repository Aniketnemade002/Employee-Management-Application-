import { createReducer, on } from '@ngrx/store';
import { login, loginSuccess, loginFail, register, registerSuccess, registerFail } from '../Employee.actions';
import { initialState } from './login.state';




const _AuthReducer = createReducer(
  initialState,

  // Handle login action
  on(login, (state) => ({
    ...state,
    errormessage: '' // Clear any existing error messages
  })),

  // Handle loginSuccess action
  on(loginSuccess, (state, { Responce }) => ({
    ...state,
    token: Responce.token,
    refreshToken: Responce.refreshToken,
    errormessage: ''
  })),

  // Handle loginFail action
  on(loginFail, (state, { errorMessage }) => ({
    ...state,
    token: '',
    refreshToken: '',
    errormessage: errorMessage
  })),

  // Handle register action
  on(register, (state) => ({
    ...state,
    errormessage: '' // Clear any existing error messages
  })),

  // Handle registerSuccess action
  on(registerSuccess, (state) => ({
    ...state,
    errormessage: '' // Registration was successful, no errors
  })),

  // Handle registerFail action
  on(registerFail, (state, { errorMessage }) => ({
    ...state,
    errormessage: errorMessage
  }))
);

export function AuthReducer(state: any, action: any) {
  return _AuthReducer(state, action);
}
