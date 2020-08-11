import { Component, OnInit, Renderer2, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
    selector: 'app-layout-cmp',
    templateUrl: './layout-cmp.component.html',
    styleUrls: ['./layout-cmp.component.css']
})
export class LayoutCmpComponent implements OnInit, AfterViewInit {


    @ViewChild('ulBox') ulBox: ElementRef;
    @ViewChild('containerBox') containerBox: ElementRef;
    constructor(
        public renderer: Renderer2
    ) { }

    ngOnInit() {
        // this.bindScroll();
    }

    ngAfterViewInit(): void {
        this.bindScroll();
    }

    bindScroll() {
        if (!this.containerBox && !this.containerBox.nativeElement) {
            return;
        }
        const orderContainerScroll = fromEvent(this.containerBox.nativeElement, 'scroll');
        orderContainerScroll.pipe(
            // debounceTime(100);
            // throttleTime(1)
        ).subscribe((event: Event) => {
            console.count();
            if (event.target) {
                const target = event.target as HTMLElement;
                // this._renderer.setStyle(this.topTableHeader.nativeElement, 'top', `${target.scrollTop + 54}px`);
                // this._renderer.setStyle(this.topTableHeaderTwo.nativeElement, 'top', `${target.scrollTop}px`);
                // this._renderer.setStyle(this.timelineBox.nativeElement, 'top', `${target.scrollTop}px`);
                this.renderer.setStyle(this.ulBox.nativeElement, 'left', `${target.scrollLeft}px`);
                // this.renderer.setStyle(this.ulBox.nativeElement, 'transform', `translate3d(${target.scrollLeft}px,0px,0px)`);
            }
        });
    }

}
