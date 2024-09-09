import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Apis } from "../../core/Service/api.service";
import { loadassociate, loadassociatesuccess, getassociate, getassociatesuccess, addassociate, addassociatesuccess, updateassociate, updateassociatesuccess, deleteeassociate, deleteassociatesuccess } from "./Employee.actions";
import { catchError, exhaustMap, of, map, switchMap } from "rxjs";
import { showalert } from "../../core/Common/alert.action";


@Injectable()
export class EmployeeEffects {
    constructor(private action$: Actions, private api: Apis) {}

    _loadEmployee$ = createEffect(() =>
        this.action$.pipe(
            ofType(loadassociate),
            exhaustMap(() => {
                return this.api.GetAll().pipe(
                    map((data) => loadassociatesuccess({ list: data })),
                    catchError((error) => of(showalert({ message: `Failed to load associates: ${error.message}`, resulttype: 'fail' })))
                );
            })
        )
    );

    _getEmployee$ = createEffect(() =>
        this.action$.pipe(
            ofType(getassociate),
            exhaustMap((action) => {
                return this.api.Getbycode(action.id).pipe(
                    map((data) => getassociatesuccess({ obj: data })),
                    catchError((error) => of(showalert({ message: `Failed to fetch employee: ${error.message}`, resulttype: 'fail' })))
                );
            })
        )
    );

    _addEmployee$ = createEffect(() =>
        this.action$.pipe(
            ofType(addassociate),
            switchMap((action) => {
                return this.api.Create(action.inputdata).pipe(
                    switchMap(() => [
                        addassociatesuccess({ inputdata: action.inputdata }),
                        showalert({ message: 'Employee created successfully.', resulttype: 'pass' })
                    ]),
                    catchError((error) => of(showalert({ message: `Failed to create employee: ${error.message}`, resulttype: 'fail' })))
                );
            })
        )
    );

    _updateEmployee$ = createEffect(() =>
        this.action$.pipe(
            ofType(updateassociate),
            switchMap((action) => {
                return this.api.Update(action.inputdata).pipe(
                    switchMap(() => [
                        updateassociatesuccess({ inputdata: action.inputdata }),
                        showalert({ message: 'Employee updated successfully.', resulttype: 'pass' })
                    ]),
                    catchError((error) => of(showalert({ message: `Failed to update employee: ${error.message}`, resulttype: 'fail' })))
                );
            })
        )
    );

    _deleteEmployee$ = createEffect(() =>
        this.action$.pipe(
            ofType(deleteeassociate),
            switchMap((action) => {
                return this.api.Delete(action.code).pipe(
                    switchMap(() => [
                        deleteassociatesuccess({ code: action.code }),
                        showalert({ message: 'Employee deleted successfully.', resulttype: 'pass' })
                    ]),
                    catchError((error) => of(showalert({ message: `Failed to delete employee: ${error.message}`, resulttype: 'fail' })))
                );
            })
        )
    );
}
