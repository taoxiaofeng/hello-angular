import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class LoginService {

    /**
     * 模拟验证码
     */
    public getCode(codeLength?:number) {
        let allCode:string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
        randomCode:string = '';
        for (let i = 0; i < (codeLength || 4); i++) {
            const index = Math.floor(Math.random() * allCode.length);
            randomCode += allCode.charAt(index);
        }
        return randomCode;
    }
}