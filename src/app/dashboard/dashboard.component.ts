import { Component, OnInit } from '@angular/core';
import { Route,  Router, RouterModule, ActivatedRoute } from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => {
        this.heroes = heroes.slice(1, 5)
      });
  }

  goHeroDetail(hero:any) {
    this.router.navigate(['/hero/hero-detail', hero.id]);
  }
}
