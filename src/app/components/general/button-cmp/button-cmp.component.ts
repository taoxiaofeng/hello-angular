import { Component, OnInit, Renderer2, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ButtonCmpService } from './button-cmp.service';
import { ButtonModal, BtnOption } from './mock-button-anchor';

@Component({
    selector: 'app-button-cmp',
    templateUrl: './button-cmp.component.html',
    styleUrls: ['./button-cmp.component.css'],
    providers: [ButtonCmpService]
})
export class ButtonCmpComponent implements OnInit, AfterViewInit {
    public buttonAnchor: ButtonModal[];
    public bodyClientWidth: boolean = document.body.clientWidth >= 800;
    public buttonList: ButtonModal[];
    public option: BtnOption;
    @ViewChild('buttonDemoBox') buttonDemoBox: ElementRef;
    constructor(
        private renderer: Renderer2,
        private buttonCmpService: ButtonCmpService
    ) {
        this.renderer.listen('window', 'resize', (event) => {
            this.bodyClientWidth = event.currentTarget.innerWidth >= 800;
        });
    }

    ngOnInit(): void {
        this.getButtonAnchor();
        this.getButtonList();
    }

    ngAfterViewInit(): void {
        this.bodyClientWidth = document.body.clientWidth >= 800;
    }

    getButtonAnchor(): void {
        this.buttonCmpService.getButtonAnchor()
            .subscribe(buttonAnchor => this.buttonAnchor = buttonAnchor);
    }

    getButtonList(): void {
        this.buttonCmpService.getButtonList()
            .subscribe(buttonList => this.buttonList = buttonList);
    }

}
