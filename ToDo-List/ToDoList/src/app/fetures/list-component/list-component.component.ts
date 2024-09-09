import { Component, Inject, OnInit } from '@angular/core';
import { materialModule } from '../../material.module';
import { MatDialogRef ,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Associates } from '../../Modals/employee.model';
import { addassociate, updateassociate } from '../State-Management/Employee.actions';
import { getAssociate } from '../State-Management/Employee.Selectors';
import { Apis } from '../../core/Service/api.service';
import { HttpService } from '../../core/Service/Https.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-list-component',
  standalone: true,
  imports: [materialModule,ReactiveFormsModule],
  templateUrl: './list-component.component.html',
  styleUrl: './list-component.component.css',providers:[Apis,HttpService,HttpClient,HttpClientModule],
})
export class ListComponentComponent  implements OnInit{

  constructor(private builder: FormBuilder, private ref: MatDialogRef<ListComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private store: Store) {

  }
  ngOnInit(): void {
    this.dialogdata = this.data;
    this.title = this.dialogdata.title;
    this.store.select(getAssociate).subscribe(res => {
      this.associateform.setValue({
        id: res.id, name: res.name, email: res.email, phone: res.phone,
        address: res.address, group: res.associategroup, type: res.type, status: res.status
      })
    })
  }
  title = 'Create Associate'
  isedit = false;
  dialogdata: any;






  ClosePopup() {
    this.ref.close();
  }



  associateform = this.builder.group({
    id: this.builder.control(0),
    name: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    phone: this.builder.control('', Validators.required),
    address: this.builder.control('', Validators.required),
    type: this.builder.control('CUSTOMER'),
    group: this.builder.control('level1'),
    status: this.builder.control(true)
  })

  SaveAssociate() {
    if (this.associateform.valid) {
      const _obj: Associates = {
        id: this.associateform.value.id as number,
        name: this.associateform.value.name as string,
        email: this.associateform.value.email as string,
        phone: this.associateform.value.phone as string,
        associategroup: this.associateform.value.group as string,
        address: this.associateform.value.address as string,
        type: this.associateform.value.type as string,
        status: this.associateform.value.status as boolean
      }
      if (_obj.id === 0) {
        this.store.dispatch(addassociate({ inputdata: _obj }))
      } else {
        this.store.dispatch(updateassociate({ inputdata: _obj }))
      }
      this.ClosePopup();
    }
  }

}
