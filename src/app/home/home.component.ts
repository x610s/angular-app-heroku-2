import { Component, OnInit } from '@angular/core';
import { Plan } from '../service/plan';
import { PlanesService } from '../service/planes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _http:PlanesService) { }

  planes:Plan[];

  ngOnInit(): void {

       this._http.getPlanes().subscribe(data=>{
       this.planes= data;
       console.log(this.planes);
       })
      }
}
