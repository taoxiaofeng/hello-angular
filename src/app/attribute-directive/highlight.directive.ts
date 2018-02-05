import { Directive,  ElementRef, Input, HostListener} from '@angular/core';
/**
 *Directive提供@Directive装饰器功能。
 *ElementRef注入到指令构造函数中。这样代码就可以访问 DOM 元素了。
 *Input将数据从绑定表达式传达到指令中。 
 */
@Directive({selector: '[appHighlight]'})
export class HighlightDirective {
    constructor(private el:ElementRef) {
        // el.nativeElement.style.backgroundColor = 'yellow';
    }

    @Input() defaultColor: string;
    @Input('appHighlight') highlightColor: string;

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.highlightColor || this.defaultColor || 'red');
    }

    @HostListener('mouseleave') onmouseleave() {
        this.highlight(null);
    }

    private highlight(color:string){
        this.el.nativeElement.style.backgroundColor = color;
    }
}