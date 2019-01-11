import { Injectable } from '@angular/core';
export class Menu {
    id: number;
    iconSrc: string;
    type: string[];
    name: string;
    url: string;
    children: Menu[];
}

@Injectable()
export class MenuService {
    public menus: Menu[] = [
        {
            id: 1,
            iconSrc: '',
            type: [],
            name: '组件',
            url: 'index',
            children: [
                {
                    id: 1,
                    iconSrc: '',
                    type: [],
                    name: 'DASHBOARD',
                    url: 'dashboard',
                    children: []
                },
                {
                    id: 1,
                    iconSrc: '',
                    type: [],
                    name: 'HERO',
                    url: 'hero',
                    children: []
                },
                {
                    id: 1,
                    iconSrc: '',
                    type: [],
                    name: 'DYNAMIC',
                    url: 'dynamic',
                    children: []
                },
                {
                    id: 1,
                    iconSrc: '',
                    type: [],
                    name: 'ROUTER',
                    url: 'router-demo',
                    children: []
                }
            ]
        },
        {
            id: 1,
            iconSrc: '',
            type: [],
            name: '案例2',
            url: 'demo2',
            children: []
        },
        {
            id: 1,
            iconSrc: '',
            type: [],
            name: '案例3',
            url: 'demo3',
            children: []
        },
        {
            id: 1,
            iconSrc: '',
            type: [],
            name: '案例4',
            url: 'demo4',
            children: []
        }
    ]


}