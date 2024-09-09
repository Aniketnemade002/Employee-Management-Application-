export interface Associates{
   id:number,
   name:string,
   email:string,
   phone:string,
   type:string,
   address:string,
   associategroup:string,
   status:boolean
}

export interface AssociateModel{
   list:Associates[],
   associateobj:Associates,
   errormessage:string
}


export interface Login{
  email:string,
  password:string
}




export interface Register{
   email:string,
   password:string
 }









