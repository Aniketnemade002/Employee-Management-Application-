import { createAction, props } from "@ngrx/store";
import { Associates, Login,Register } from "../../Modals/employee.model";
import { LoginResponceModal } from "./User/login.state";



export enum EmplyoeeActionTypes {
   LOAD_ASSOCIATE = '[associate page] load associate',
   LOAD_ASSOCIATE_SUCCESS = '[associate page] load associate success',
   LOAD_ASSOCIATE_FAIL = '[associate page] load associate fail',
   ADD_ASSOCIATE = '[associate page] add associate',
   ADD_ASSOCIATE_SUCCESS = '[associate page] add associate success',
   UPDATE_ASSOCIATE = '[associate page] update associate',
   UPDATE_ASSOCIATE_SUCCESS = '[associate page] update associate success',
   DELETE_ASSOCIATE = '[associate page] delete associate',
   DELETE_ASSOCIATE_SUCCESS = '[associate page] delete associate success',
   GET_ASSOCIATE = '[associate page] get associate',
   GET_ASSOCIATE_SUCCESS = '[associate page] get associate success',
   OPEN_POPUP = '[associate page] open popup'
 }



 
 export const loadassociate = createAction(EmplyoeeActionTypes.LOAD_ASSOCIATE);
 export const loadassociatesuccess = createAction(EmplyoeeActionTypes.LOAD_ASSOCIATE_SUCCESS, props<{ list: Associates[] }>());
 export const loadassociatefail = createAction(EmplyoeeActionTypes.LOAD_ASSOCIATE_FAIL, props<{ errormessage: string }>());
 
 export const addassociate = createAction(EmplyoeeActionTypes.ADD_ASSOCIATE, props<{ inputdata: Associates }>());
 export const addassociatesuccess = createAction(EmplyoeeActionTypes.ADD_ASSOCIATE_SUCCESS, props<{ inputdata: Associates }>());
 
 export const updateassociate = createAction(EmplyoeeActionTypes.UPDATE_ASSOCIATE, props<{ inputdata: Associates }>());
 export const updateassociatesuccess = createAction(EmplyoeeActionTypes.UPDATE_ASSOCIATE_SUCCESS, props<{ inputdata: Associates }>());
 
 export const deleteeassociate = createAction(EmplyoeeActionTypes.DELETE_ASSOCIATE, props<{ code: number }>());
 export const deleteassociatesuccess = createAction(EmplyoeeActionTypes.DELETE_ASSOCIATE_SUCCESS, props<{ code: number }>());
 
 export const getassociate = createAction(EmplyoeeActionTypes.GET_ASSOCIATE, props<{ id: number }>());
 export const getassociatesuccess = createAction(EmplyoeeActionTypes.GET_ASSOCIATE_SUCCESS, props<{ obj: Associates }>());
 
 export const openpopup = createAction(EmplyoeeActionTypes.OPEN_POPUP);
  


 export enum AuthActionTypes {
   LOGIN = '[Auth Page] Login',
   LOGIN_SUCCESS = '[Auth Page] Login Success',
   LOGIN_FAIL = '[Auth Page] Login Fail',
   REGISTER = '[Auth Page] Register',
   REGISTER_SUCCESS = '[Auth Page] Register Success',
   REGISTER_FAIL = '[Auth Page] Register Fail',
 }
 


// Login Actions
export const login = createAction(
   AuthActionTypes.LOGIN,
   props<{ obj:Login}>()
 );
 
 export const loginSuccess = createAction(
   AuthActionTypes.LOGIN_SUCCESS,props<{Responce:LoginResponceModal}>()
 
 );
 
 export const loginFail = createAction(
   AuthActionTypes.LOGIN_FAIL,
   props<{ errorMessage: string }>()
 );
 
 // Register Actions
 export const register = createAction(
   AuthActionTypes.REGISTER,
   props<{ data:Register }>()
 );
 
 export const registerSuccess = createAction(
   AuthActionTypes.REGISTER_SUCCESS,props<{ data:any }>()
  
 );
 
 export const registerFail = createAction(
   AuthActionTypes.REGISTER_FAIL,
   props<{ errorMessage: string }>()
 );