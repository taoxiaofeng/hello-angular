export class ButtonModal {
    id: number;
    name: string;
    className?: string;
}

export interface BtnOption {
    title: string;
    describe: string;
}

export const BUTTON_LIST: ButtonModal[] = [{
    id: 1,
    name: 'Primary',
    className: 'ip-btn ip-btn-primary'
}, {
    id: 2,
    name: 'Default',
    className: 'ip-btn ip-btn-default'
}, {
    id: 3,
    name: 'Loading',
    className: 'ip-btn ip-btn-loading'
}, {
    id: 4,
    name: 'Danger',
    className: 'ip-btn ip-btn-danger'
}, {
    id: 5,
    name: 'Block',
    className: 'ip-btn ip-btn-block'
}, {
    id: 6,
    name: 'Group',
    className: 'ip-btn ip-btn-group'
}, {
    id: 7,
    name: 'Error',
    className: 'ip-btn ip-btn-error'
}, {
    id: 8,
    name: 'Link',
    className: 'ip-btn ip-btn-link'
}]

export const BUTTON_ANCHOR: ButtonModal[] = [{
    id: 1,
    name: "按钮类型"
}, {
    id: 2,
    name: "图标按钮"
}, {
    id: 3,
    name: "按钮尺寸"
}, {
    id: 4,
    name: "不可用状态"
}, {
    id: 5,
    name: "加载中状态"
}, {
    id: 6,
    name: "多个按钮组合"
}, {
    id: 7,
    name: "按钮组合"
}, {
    id: 8,
    name: "幽灵按钮"
}, {
    id: 9,
    name: "Block按钮"
}, {
    id: 10,
    name: "API"
}]