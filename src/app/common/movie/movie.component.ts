import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, SimpleChanges, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';
import { Star } from '../../slide-show/change-detector/change-detector.component';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    @Input() title: string = '';
    @Input() star: Star;
    @Input() addCount: Observable<any>;
    public count: number = 0;
    public changeStatus:Subscription;
    constructor(
        private changeRef: ChangeDetectorRef
    ) { }

    ngOnChanges(changes: SimpleChanges): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        // console.log(changes)
        // this.changeRef.detectChanges();
    }

    ngOnInit() {
        // setInterval(() => {
        //     this.star.lastName = "zhangsan";
        //     this.changeRef.markForCheck();
        // },1000);
        this.changeStatus = this.addCount.subscribe(() => {
            this.count++;
            console.log('1:',this.count)
            this.changeRef.markForCheck();
            console.log('2:',this.count)
        });
    }

    ngAfterViewInit(): void {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        // this.changeRef.detectChanges();
        // let count = 0;
        // let InTimer = setInterval(() => {
        //     count++;
        //     console.log(this.star)
        //     if(count > 6) {
        //         clearInterval(InTimer);
        //     }
        // },1000)
    }

    ngOnDestroy(): void {
        this.changeStatus.unsubscribe();
    }

    changeStar() {
        this.star.lastName = 'xiaoming';
        // this.changeRef.markForCheck();
    }

}
