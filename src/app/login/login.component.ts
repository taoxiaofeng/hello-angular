import { Component, OnInit } from "@angular/core";
import { LoginService } from "./login.service";
import { Router } from "@angular/router";

class User {
    userName:string = '';
    password:number = null;
    code:string = '';
}

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
    public verificationCode: string = "";
    public user:User;
    constructor(public loginService: LoginService, public router: Router) { }

    ngOnInit() { 
        this.getCode();
        this.fillColor();
    }

    //获取验证码
    getCode() {
        this.verificationCode = this.loginService.getCode(4);
    }

    //产生随机数
    randomNum(min:number,max:number) {
        return  Math.floor(Math.random() * (max-min) + min);
    }

    //产生随机颜色
    randomColor(min:number,max:number) {
        let r = this.randomNum(min,max), g = this.randomNum(min,max), b = this.randomNum(min,max);
        return `rgb(${r},${g},${b})`;
    }

    //填充验证码背景颜色并在画布上画验证码
    fillColor() {
        let width = 110, height = 34, canvas =  document.getElementById("canvas") as HTMLCanvasElement,
            ctx = canvas.getContext("2d");
        ctx.fillStyle = this.randomColor(180,230); //文字颜色
        ctx.fillRect(0,0,width,height);
        ctx.font = "30px SimHei"; //字体
        ctx.fillStyle = this.randomColor(80,180); //文字颜色
        ctx.textBaseline = "top"; //文本基线
        ctx.fillText(this.verificationCode, 20, 0); //(x, y)位置填充文本的方法

        //绘制干扰线
        for (let i = 0; i < 6; i++) {
            ctx.strokeStyle = this.randomNum(0 ,255).toString();  //描述画笔（绘制图形）颜色或者样式的属性
            ctx.beginPath(); //通过清空子路径列表开始一个新路径的方法
            ctx.moveTo(this.randomNum(0,width), this.randomNum(0,height));
            ctx.lineTo(this.randomNum(0,width), this.randomNum(0,height));
            ctx.stroke();
        }

        //绘制干扰点
        for (let j = 0; j < 50; j++) {
            ctx.fillStyle = this.randomNum(0,255).toString();
            ctx.beginPath();
            ctx.arc(this.randomNum(0,width), this.randomNum(0,height),1,0,2*Math.PI);
            ctx.fill();
        }
    }

    //更改验证码
    changeCode() {
        this.getCode();
        this.fillColor();
    }

    //登录
    login() {
        if(this.checkUserInfo()) {
            this.router.navigate([]);
        }
     }

    //用户信息校验
    checkUserInfo() {
        if(!this.user.userName && !this.user.password) {
            return false;
        }

        if(!this.user.userName) {
            return false;
        }

        if(!this.user.password) {
            return false;
        }

        if(!this.user.code || (this.user.code != this.verificationCode)) {
            return false;
        }

        return true;
    }
}
