import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute,  ParamMap} from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	selector: 'hero-detail',
	template: `
	<div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>`
})
export class HeroDetailComponent implements OnInit {
	constructor() {}
	@Input() hero:Hero;
	ngOnInit() {
		
	}
}