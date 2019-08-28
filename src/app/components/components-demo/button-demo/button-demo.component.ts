import { Component, OnInit, Input } from '@angular/core';
import { BtnOption, MockButton } from '../../general/button-cmp/mock-button-anchor';
@Component({
    selector: 'app-button-demo',
    templateUrl: './button-demo.component.html',
    styleUrls: ['./button-demo.component.css']
})
export class ButtonDemoComponent implements OnInit {
    @Input() mockData: MockButton;
    @Input() option: BtnOption;
    constructor() { }

    ngOnInit() {
    }

}
