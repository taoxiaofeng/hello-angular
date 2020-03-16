import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-open-close',
    templateUrl: './open-close.component.html',
    styleUrls: ['./open-close.component.css'],
    animations: [
        trigger('openClose', [
            state('open', style({
                height: '300px',
                opacity: 1,
                backgroundColor: 'yellow'
            })),
            state('closed', style({
                height: '100px',
                opacity: 0.2,
                backgroundColor: 'green'
            })),
            transition('open => closed', [
                animate('2s')
            ]),
            transition('closed => open', [
                animate('1s')
            ]),
            transition('* => closed', [
                animate('2s')
            ]),
            transition('* => open', [
                animate('1s')
            ]),
            // 使用双向箭头语法
            transition('open <=> closed', [
                animate('1s')
            ]),
            transition('* => open', [
                animate('1s', style({
                    opacity: '*'
                })),
            ]),
            transition('* => *', [
                animate('1s')
            ])
        ])
    ]
})
export class OpenCloseComponent implements OnInit, OnDestroy {
    isOpen = true;
    constructor() { }

    ngOnInit(): void {
    }

    toggle() {
        this.isOpen = !this.isOpen;
    }

    ngOnDestroy() {
        this.isOpen = false;
    }

}
