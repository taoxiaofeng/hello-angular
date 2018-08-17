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
            name: 'DASHBOARD',
            url: 'dashboard',
            children: [
                {
                    id: 1,
                    iconSrc: '',
                    type: [],
                    name: '子菜单1',
                    url: '',
                    children: []
                }
            ]
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


}