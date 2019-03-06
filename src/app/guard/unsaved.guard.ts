import { CanDeactivate } from "@angular/router";
import { ButtonCmpComponent } from "../components/general/button-cmp/button-cmp.component";

export class UnsavedGuard implements CanDeactivate<ButtonCmpComponent> {
    canDeactivate(component: ButtonCmpComponent) {
        return window.confirm("你还没有保存，确定要离开吗？");
    }
}