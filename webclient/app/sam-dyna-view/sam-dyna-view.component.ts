import { Component, Input, OnInit } from '@angular/core';
import { SamDynaElementBase } from '../sam-dyna-element-base';
import { SamDynaElementService } from '../sam-dyna-element-service';

@Component({
  selector: 'app-sam-dyna-view',
  templateUrl: './sam-dyna-view.component.html',
  styleUrls: ['./sam-dyna-view.component.css']
})
export class SamDynaViewComponent implements OnInit {

  @Input() elements: SamDynaElementBase<any>[] = [];

  constructor() { }
  ngOnInit() {
  }
}
