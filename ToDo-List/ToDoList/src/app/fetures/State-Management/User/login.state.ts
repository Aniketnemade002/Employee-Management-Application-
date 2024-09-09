import { AssociateModel } from "../../../Modals/employee.model"

export interface LoginResponceModal{
  
  token:string,
  refreshToken:string,

   errormessage:string
  
 }

 export const initialState: LoginResponceModal = {
  token: '',
  refreshToken: '',
  errormessage: ''
};

