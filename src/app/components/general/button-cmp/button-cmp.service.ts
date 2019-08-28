import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ButtonModal, BUTTON_ANCHOR, MockButton, MOCK_BUTTON } from './mock-button-anchor';

@Injectable({
    providedIn: 'root'
})
export class ButtonCmpService {

    constructor() { }

    /**
     * 获取锚点名称
     */
    getButtonAnchor(): Observable<ButtonModal[]> {
        return of(BUTTON_ANCHOR)
    }

    /**
     * 获取按钮类型列表
     */
    getButtonList(): Observable<MockButton[]> {
        return of(MOCK_BUTTON);
    }
}

