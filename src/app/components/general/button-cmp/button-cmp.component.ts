import { Component, OnInit, Renderer2, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ButtonCmpService } from './button-cmp.service';
import { ButtonModal, BtnOption, MockButton } from './mock-button-anchor';

@Component({
    selector: 'app-button-cmp',
    templateUrl: './button-cmp.component.html',
    styleUrls: ['./button-cmp.component.css'],
    providers: [ButtonCmpService]
})
export class ButtonCmpComponent implements OnInit, AfterViewInit {
    public buttonAnchor: ButtonModal[];
    public bodyClientWidth: boolean = document.body.clientWidth >= 800;
    public mockButton: MockButton[];
    public checkedAnchor: any;
    public rightBtnOption: BtnOption = {
        width: '110px'
    };
    @ViewChild('timeFill') timeFill: ElementRef;
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
            .subscribe(mockButton => this.mockButton = mockButton);
    }

    chooseAnchor(anchor: any, anchorNode: HTMLElement) {
        this.checkedAnchor = { ...anchor };
        this.timeFill.nativeElement.style.top = anchorNode.offsetTop + 7 + 'px';
        this.chooseAnchor && (JSON.stringify(this.chooseAnchor) !== '{}') ? this.timeFill.nativeElement.style.display = 'block' : this.timeFill.nativeElement.style.display = 'none';
    }

}
