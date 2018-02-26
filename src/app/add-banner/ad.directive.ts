import { Directive, ViewContainerRef } from '@angular/core';
@Directive({
    selector: '[ad-host]'
})

/**
 * AdDirective注入了ViewContainerRef来获取对容器视图的访问权，这个容器就是那些动态加入的组件的宿主。
 */
export class AdDirective {
    constructor( public viewContainerRef: ViewContainerRef) {}
}
