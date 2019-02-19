import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'my-home',
    template:`
    <span class="welcome">知识点一二三四五六七八九十</span>
    <div class="welcome-img">
        
    </div>
    `,
    styles:[`
    .welcome,
    .welcome-img {
        text-align: center;
    }
    `]
}) 
export class HomeComponent implements OnInit {
    private host = location.host;
    private welcome = '../assets/images/welcome.jpg';
    constructor() { }

    ngOnInit() { }
}