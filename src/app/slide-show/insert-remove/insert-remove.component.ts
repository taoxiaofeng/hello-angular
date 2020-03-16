import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'app-insert-remove',
    templateUrl: './insert-remove.component.html',
    styleUrls: ['./insert-remove.component.css'],
    animations: [
        trigger('myInsertRemoveTrigger', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('500ms', style({ opacity: 1 })),
            ]),
            transition(':leave', [
                animate('500ms', style({
                    opacity: 0
                }))
            ])
        ]),
    ]
})
export class InsertRemoveComponent implements OnInit {
    isShown = false;
    constructor() { }

    ngOnInit(): void {
    }

    toggle() {
        this.isShown = !this.isShown;
    }

}
