import { Component } from '@angular/core';
import { HttpService } from '../../core/Service/Https.service';
import { Apis } from '../../core/Service/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css',
  providers:[Apis,HttpService,HttpClient,HttpClientModule],
})
export class DashbordComponent {

}
