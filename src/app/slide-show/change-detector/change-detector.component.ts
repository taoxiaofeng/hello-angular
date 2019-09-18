import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable, timer } from 'rxjs';
export class Star {
    firstName: string;
    lastName: string;
}

@Component({
    selector: 'app-change-detector',
    templateUrl: './change-detector.component.html',
    styleUrls: ['./change-detector.component.css']
})
export class ChangeDetectorComponent implements OnInit {
    slogan: string = 'change detection';
    title: string = 'OnPush策略';
    star: Star = {
        firstName: '周',
        lastName: '杰伦'
    };
    count: Observable<any>;
    constructor(
        public changeRef: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.count = timer(0 , 1000);
    }

    changeStar() {
        this.star.firstName = '吴';
        this.star.lastName = '彦祖';
        // setTimeout(() =>{
        //     this.changeRef.markForCheck();
        // },1000);
    }

    changeStarObject() {
        // this.star = {
        //     firstName: '刘',
        //     lastName: '德华'
        // }
        let temp = { firstName: '1', lastName: '2' }
        this.star = Object.assign({}, temp);
        console.log(this.star)
        // this.star = new Star();
    }

}
