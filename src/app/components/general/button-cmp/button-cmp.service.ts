import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ButtonAnchor, BUTTON_ANCHOR } from './mock-button-anchor';

@Injectable({
    providedIn: 'root'
})
export class ButtonCmpService {

    constructor() { }

    getButtonAnchor(): Observable<ButtonAnchor[]> {
        return of(BUTTON_ANCHOR)
    }
}
