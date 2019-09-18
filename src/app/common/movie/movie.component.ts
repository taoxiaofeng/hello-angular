import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, SimpleChanges, OnChanges } from '@angular/core';
import { Star } from '../../slide-show/change-detector/change-detector.component';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieComponent implements OnInit, OnChanges {
    @Input() title: string = '';
    @Input() star: Star;
    @Input() addCount: Observable<any>;
    public count: number = 0;
    constructor(
        private changeRef: ChangeDetectorRef
    ) { }

    ngOnInit() {
        // setInterval(() => {
        //     this.star.lastName = "zhangsan";
        //     this.changeRef.markForCheck();
        // },1000);
        this.addCount.subscribe(() => {
            this.count++;
            this.changeRef.markForCheck();
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        console.log(changes)
    }

    changeStar() {
        this.star.lastName = 'xiaoming';
        // this.changeRef.markForCheck();
    }

}
