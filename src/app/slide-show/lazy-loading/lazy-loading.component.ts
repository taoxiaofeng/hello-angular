import { Component, OnInit } from '@angular/core';
import * as Mock from 'mockjs';

@Component({
    selector: 'app-lazy-loading',
    templateUrl: './lazy-loading.component.html',
    styleUrls: ['./lazy-loading.component.css']
})
export class LazyLoadingComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        const data = Mock.mock({
            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
            '1-100': [{
                'name|+1': [
                    'Hello',
                    'Mock.js',
                    '!'
                ]
            }]
        });
        // 输出结果
        console.log(data);
    }

}
