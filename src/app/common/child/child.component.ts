import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `<p>Child Component</p>`
})
export class ChildComponent implements OnInit {
    name: string = 'child-component';
    constructor() { }
    ngOnInit(): void { }
}
