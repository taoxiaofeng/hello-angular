import { Component } from '@angular/core';

export class Hero {
	id:number;
	name:string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  	title = 'Tour of Heroes';
  	// hero = 'windstorm';

  	hero:Hero = {
	id:1,
	name:'hello'	
	}
}
