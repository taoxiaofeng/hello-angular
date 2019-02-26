import { Component, OnInit, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
    selector: 'app-parent',
    template:  `
    <p>Parent Component</p>
    <ng-content></ng-content>
    <p>测试11</p>
    `,
})
export class ParentComponent implements OnInit {
    // @ContentChild 示例
    // @ContentChild(ChildComponent) childCmp: ChildComponent;
    // @ContentChildren 示例
    @ContentChildren(ChildComponent) childCmps: QueryList<ChildComponent>;
    constructor() { }
    ngOnInit(): void { }
    ngAfterContentInit(): void {
        //Called after ngOnInit when the component's or directive's content has been initialized.
        //Add 'implements AfterContentInit' to the class.
        console.log(this.childCmps);
    }
}
