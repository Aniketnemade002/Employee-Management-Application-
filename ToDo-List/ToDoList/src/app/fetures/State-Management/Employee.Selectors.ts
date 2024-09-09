import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AssociateModel } from "../../Modals/employee.model";


const getassociatestate = createFeatureSelector<AssociateModel>('associate');

export const getassociatelist = createSelector(getassociatestate, (state) => {
    return state.list;
})

export const getAssociate = createSelector(getassociatestate, (state) => {
    return state.associateobj;
})