import { Injectable } from "@angular/core";
import { Menus } from "./menu";

@Injectable()
export class MenuService {
    public menus: Menus[] = [
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
                            name: "Button 按钮",
                            url: "/cmp/general/button"
                        },
                        {
                            id: 100102,
                            iconSrc: "",
                            type: [],
                            name: "Icon 图标",
                            url: "/cmp/general/icon"
                        }
                    ]
                },
                {
                    id: 1002,
                    iconSrc: "",
                    type: [],
                    name: "Layout",
                    url: "/cmp/layout",
                    children: [
                        {
                            id: 100201,
                            iconSrc: "",
                            type: [],
                            name: "Grid 栅格",
                            url: "/cmp/layout/grid"
                        },
                        {
                            id: 100202,
                            iconSrc: "",
                            type: [],
                            name: "Layout 布局",
                            url: "/cmp/layout/layout-cmp"
                        }
                    ]
                },
                {
                    id: 1003,
                    iconSrc: "",
                    type: [],
                    name: "Navigation",
                    url: "/cmp/navigation",
                    children: [{
                        id: 100301,
                        iconSrc: "",
                        type: [],
                        name: "Affix 固钉",
                        url: "/cmp/navigation/affix",
                    },{
                        id: 100302,
                        iconSrc: "",
                        type: [],
                        name: "Breadcrumb 面包屑",
                        url: "/cmp/navigation/breadcrumb",
                    },{
                        id: 100303,
                        iconSrc: "",
                        type: [],
                        name: "Dropdown 下拉菜单",
                        url: "/cmp/navigation/dropdown",
                    },{
                        id: 100304,
                        iconSrc: "",
                        type: [],
                        name: "Menu 导航菜单",
                        url: "/cmp/navigation/menu-cmp",
                    },{
                        id: 100305,
                        iconSrc: "",
                        type: [],
                        name: "Pagination 分页",
                        url: "/cmp/navigation/pagination",
                    },{
                        id: 100306,
                        iconSrc: "",
                        type: [],
                        name: "Steps 步骤条",
                        url: "/cmp/navigation/steps",
                    },]
                },
                {
                    id: 1004,
                    iconSrc: "",
                    type: [],
                    name: "Data Entry",
                    url: "/cmp/data-entry",
                    children: [{
                        id: 100401,
                        iconSrc: "",
                        type: [],
                        name: "Autocomplete 自动完成",
                        url: "/cmp/data-entry/autocomplete",
                    },{
                        id: 100402,
                        iconSrc: "",
                        type: [],
                        name: "Cascader 级联选择",
                        url: "/cmp/data-entry/cascader",
                    },{
                        id: 100403,
                        iconSrc: "",
                        type: [],
                        name: "Checkbox 多选框",
                        url: "/cmp/data-entry/checkbox",
                    },{
                        id: 100404,
                        iconSrc: "",
                        type: [],
                        name: "DatePicker 日期选择框",
                        url: "/cmp/data-entry/date-picker",
                    },{
                        id: 100405,
                        iconSrc: "",
                        type: [],
                        name: "Form 表单",
                        url: "/cmp/data-entry/form",
                    },{
                        id: 100406,
                        iconSrc: "",
                        type: [],
                        name: "Input 输入框",
                        url: "/cmp/data-entry/input",
                    },{
                        id: 100407,
                        iconSrc: "",
                        type: [],
                        name: "InputNumber 数字输入框",
                        url: "/cmp/data-entry/input-number",
                    },{
                        id: 100408,
                        iconSrc: "",
                        type: [],
                        name: "Mention 提及",
                        url: "/cmp/data-entry/mention",
                    },{
                        id: 100409,
                        iconSrc: "",
                        type: [],
                        name: "Radio 单选框",
                        url: "/cmp/data-entry/radio",
                    },{
                        id: 1004010,
                        iconSrc: "",
                        type: [],
                        name: "Rate 评分",
                        url: "/cmp/data-entry/rate",
                    },{
                        id: 1004011,
                        iconSrc: "",
                        type: [],
                        name: "Select 选择器",
                        url: "/cmp/data-entry/select",
                    },{
                        id: 1004012,
                        iconSrc: "",
                        type: [],
                        name: "Slider 滑动输入条",
                        url: "/cmp/data-entry/slider",
                    },{
                        id: 1004013,
                        iconSrc: "",
                        type: [],
                        name: "Switch 开关",
                        url: "/cmp/data-entry/switch",
                    },{
                        id: 1004014,
                        iconSrc: "",
                        type: [],
                        name: "TimePicker 时间选择框",
                        url: "/cmp/data-entry/autocomplete",
                    },{
                        id: 1004015,
                        iconSrc: "",
                        type: [],
                        name: "Transfer 穿梭框",
                        url: "/cmp/data-entry/transfer",
                    },{
                        id: 1004016,
                        iconSrc: "",
                        type: [],
                        name: "TreeSelect 树选择",
                        url: "/cmp/data-entry/tree-select",
                    },{
                        id: 1004017,
                        iconSrc: "",
                        type: [],
                        name: "Upload 上传",
                        url: "/cmp/data-entry/upload",
                    },]
                }
            ]
        },
        {
            id: 2,
            iconSrc: "",
            type: [],
            name: "功能点演示",
            url: "/slide-show",
            children: [
                {
                    id: 2001,
                    iconSrc: "",
                    type: [],
                    name: "ng-content",
                    url: "/slide-show/ng-content", 
                },
                {
                    id: 2002,
                    iconSrc: "",
                    type: [],
                    name: "switch-view",
                    url: "/slide-show/switch-view"
                },
                {
                    id: 2003,
                    iconSrc: "",
                    type: [],
                    name: "change-detector",
                    url: "/slide-show/change-detector"
                }
            ]
        },
        {
            id: 3,
            iconSrc: "",
            type: [],
            name: "一级菜单三",
            url: "/function-points",
            children: [
                {
                    id: 3001,
                    iconSrc: "",
                    type: [],
                    name: "points",
                    url: "/function-points/points", 
                }
            ]
        },
        {
            id: 4,
            iconSrc: "",
            type: [],
            name: "一级菜单四",
            url: "/home",
            children: []
        }
    ];
}
