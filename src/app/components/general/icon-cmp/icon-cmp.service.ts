import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class IconCmpService {

    constructor(
        private http: HttpClient
    ) { }

    getIconData(): Observable<any> {
        return this.http.get("../../../../assets/iconfont.json");
    }
}
