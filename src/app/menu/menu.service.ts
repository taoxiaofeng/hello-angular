import { Injectable } from "@angular/core";
export class Menu {
    id: number;
    iconSrc: string;
    type: string[];
    name: string;
    url: string;
    children: any[] = [];
}

@Injectable()
export class MenuService {
    public menus: Menu[] = [
        {
            id: 1,
            iconSrc: "",
            type: [],
            name: "Components",
            url: "/cmp",
            children: [
                {
                    id: 1001,
                    iconSrc: "",
                    type: [],
                    name: "General",
                    url: "/cmp/general",
                    children: [
                        {
                            id: 100101,
                            iconSrc: "",
                            type: [],
                            name: "Button",
                            url: "/cmp/general/button"
                        },
                        {
                            id: 100102,
                            iconSrc: "",
                            type: [],
                            name: "Icon",
                            url: "/cmp/general/icon"
                        },
                        {
                            id: 100103,
                            iconSrc: "",
                            type: [],
                            name: "测试一子集三",
                            url: "/main/one/3"
                        }
                    ]
                },
                {
                    id: 1002,
                    iconSrc: "",
                    type: [],
                    name: "测试组件二",
                    url: "/component-demo/two",
                    children: [
                        {
                            id: 100201,
                            iconSrc: "",
                            type: [],
                            name: "测试二子集一",
                            url: "/component-demo/one/1"
                        },
                        {
                            id: 100202,
                            iconSrc: "",
                            type: [],
                            name: "测试二子集二",
                            url: "/component-demo/one/2"
                        },
                        {
                            id: 100203,
                            iconSrc: "",
                            type: [],
                            name: "测试二子集三",
                            url: "/component-demo/one/3"
                        }
                    ]
                },
                {
                    id: 1003,
                    iconSrc: "",
                    type: [],
                    name: "测试组件三",
                    url: "/component-demo/three",
                    children: []
                },
                {
                    id: 1004,
                    iconSrc: "",
                    type: [],
                    name: "测试组件四",
                    url: "/component-demo/four",
                    children: []
                }
            ]
        },
        {
            id: 2,
            iconSrc: "",
            type: [],
            name: "一级菜单二",
            url: "demo2",
            children: []
        },
        {
            id: 3,
            iconSrc: "",
            type: [],
            name: "一级菜单三",
            url: "demo3",
            children: []
        },
        {
            id: 4,
            iconSrc: "",
            type: [],
            name: "一级菜单四",
            url: "demo4",
            children: []
        }
    ];
}
