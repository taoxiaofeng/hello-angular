import { Component, Input } from '@angular/core';
import { AdComponent } from './ad.component';
@Component({
    template: `
        <div class="hero-profile">
            <h3>Featured Gero Profile</h3>
            <h4>{{data.name}}</h4>
            <p>{{data.bio}}</p>
            <strong>Hire this hero tbody</strong>
        </div>
    `,
    styleUrls: ['./sample.css']
})

export class HeroProfileComponent implements AdComponent {
    @Input() data: any;

    ngOnInit() {
        console.log(this.data);
    }

    ngAfterViewInit() {
        // this.data.detach(); //停止检测
    }
}