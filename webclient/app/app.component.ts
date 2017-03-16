import { Component, OnInit } from '@angular/core';
import { SamDynaElementService } from './sam-dyna-element-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

elements : any[];
constructor(service  : SamDynaElementService)
{
  this.elements = service.getElements();
}

  ngOnInit() {
  }
 }
