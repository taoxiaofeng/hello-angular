import { AdComponent } from './ad.component';
import { Component, Input } from '@angular/core';

@Component({
    template:`
        <div class="hero-profile">
            <h3>Featured Gero Profile</h3>
            <h4>{{data.name}}</h4>
            <p>{{data.bio}}</p>
            <strong>Hire this hero tbody</strong>
        </div>
    `,
    styleUrls:['./sample.css']
})

export class HeroProfileComponent implements AdComponent {
    @Input() data: any;
}