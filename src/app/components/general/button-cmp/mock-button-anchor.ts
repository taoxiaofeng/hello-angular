export class ButtonModal {
    id: number;
    name: string;
    className?: string;
}

export class BtnOption {
    width?: string;
    height?: string;
    anchorIndex?: number;
}

export class MockButton {
    title: string;
    describe: string;
    anchor?: number;
    buttonList: ButtonModal[]
}

export const MOCK_BUTTON: MockButton[] = [{
    title: '按钮类型',
    describe: '按钮分类八种类型：Primary、Default、Loading、Danger、Block、Group、Error、Link',
    anchor: 1,
    buttonList: [{
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
}, {
    title: '普通按钮',
    describe: '普通按钮分为四种类型：OutlinePrimary、OutlineDefault、OutlineDanger、OutlineError',
    anchor: 2,
    buttonList: [{
        id: 1,
        name: 'OutlinePrimary',
        className: 'ip-btn ip-btn-outline-primary'
    }, {
        id: 2,
        name: 'OutlineDefault',
        className: 'ip-btn ip-btn-outline-default'
    }, {
        id: 3,
        name: 'OutlineDanger',
        className: 'ip-btn ip-btn-outline-danger'
    }, {
        id: 4,
        name: 'OutlineError',
        className: 'ip-btn ip-btn-outline-Error'
    }]
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