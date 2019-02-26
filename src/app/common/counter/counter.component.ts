import { Component, OnInit } from '@angular/core';
let instances = 0;
@Component({
  selector: 'counter',
  template: `<h1>{{id}}</h1>`,
  styles:[ ``]
})
export class CounterComponent implements OnInit {
  id:number;
  constructor() { 
    this.id = ++instances;
  }

  ngOnInit() {
  }

}
