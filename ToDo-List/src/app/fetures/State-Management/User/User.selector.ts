import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginResponceModal } from './login.state';



export const selectAuthState = createFeatureSelector<LoginResponceModal>('auth');

export const selectAuthToken = createSelector(
   selectAuthState,
   (state) => state.token
 );
 
 // Selector to get the refresh token from the auth state
 export const selectRefreshToken = createSelector(
   selectAuthState,
   (state) => state.refreshToken
 );
 

 export const selectAuthErrorMessage = createSelector(
   selectAuthState,
   (state) => state.errormessage
 );
 