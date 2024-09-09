import { Component, OnInit, ViewChild } from '@angular/core';
import { Associates } from '../../Modals/employee.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { materialModule } from '../../material.module';
import { ListComponentComponent } from '../list-component/list-component.component';
import { deleteeassociate, getassociate, loadassociate, openpopup } from '../State-Management/Employee.actions';
import { getassociatelist } from '../State-Management/Employee.Selectors';
import { MatTableDataSource } from '@angular/material/table';
import { Apis } from '../../core/Service/api.service';
import { HttpService } from '../../core/Service/Https.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-listing',
  standalone: true,
  imports: [
    materialModule
  ],
  providers:[Apis,HttpService,HttpClient,HttpClientModule],
  templateUrl: './employee-listing.component.html',
  styleUrl: './employee-listing.component.css'
})
export class EmployeeListingComponent  implements OnInit{

  
  Asociatelist!: Associates[];
  datasource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColums: string[] = ["code", "name", "email", "phone", "address", "type", "group", "status", "action"]
  constructor(private dialog: MatDialog, private store: Store,private router:Router) {

  }
  ngOnInit(): void {

    this.store.dispatch(loadassociate());
    this.store.select(getassociatelist).subscribe(item => {
      this.Asociatelist = item;
      this.datasource = new MatTableDataSource<Associates>(this.Asociatelist);
      this.datasource.paginator = this.paginator;
      this.datasource.sort = this.sort;
    });
  }


  
  FunctionAdd() {
    this.OpenPopup(0, 'Create Associate');
  }
  FunctionEdit(code:number){
    this.OpenPopup(code, 'Update Associate');
    this.store.dispatch(getassociate({id:code}))
  }

  FunctionDelete(code:number){
    if(confirm('do you want to remove?')){
      this.store.dispatch(deleteeassociate({code:code}));
    }
  }

  OpenPopup(code: number, title: string) {
    this.store.dispatch(openpopup());
    this.dialog.open(ListComponentComponent, {
    
      width: '50%',
      enterAnimationDuration: '200ms',
      exitAnimationDuration: '200ms',
      data: {
        code: code,
        title: title
      }
    })

  }


  LogOut(){
    localStorage.removeItem('JWT');
    this.router.navigate(['/home']);
  }
}

