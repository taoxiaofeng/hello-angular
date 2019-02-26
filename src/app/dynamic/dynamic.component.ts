import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
    selector: 'dynamic',
    templateUrl: './dynamic.component.html',
    styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {
    directiveShow: boolean = false;
    templateShow: boolean = false;
    color: string = '';
    constructor() { }

    currentHero: Hero;
    heroImageUrl = './../../assets/images/';

    ngOnInit() { }

}


