import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
// export class Hero {
// 	id:number;
// 	name:string;
// }

// const HEROES: Hero[] = [
//   { id: 11, name: 'Mr. Nice' },
//   { id: 12, name: 'Narco' },
//   { id: 13, name: 'Bombasto' },
//   { id: 14, name: 'Celeritas' },
//   { id: 15, name: 'Magneta' },
//   { id: 16, name: 'RubberMan' },
//   { id: 17, name: 'Dynama' },
//   { id: 18, name: 'Dr IQ' },
//   { id: 19, name: 'Magma' },
//   { id: 20, name: 'Tornado' }
// ];


@Component({
  selector: 'my-heroes',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HeroService]
})
export class HeroesComponent implements OnInit {
  	title = 'Tour of Heroes';
  	// hero = 'windstorm';
    // heroes = HEROES;
    heroes : Hero[];
    selectedHero:Hero;

    constructor(private heroService:HeroService){}
    ngOnInit(){
      this.getHeroes();
    }

    getHeroes():void {
      this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero):void {
       this.selectedHero = hero;
    }
}
