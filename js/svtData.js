var svtData = [
    {
        no: 1,
        name: "玛修·基列莱特",
        class: "Shielder",
        star: 3,
        attribute: "地",
        np: {
            easy_max: false,
            name: "假象宝具 拟拟展开/人理之础",
            rates: [],
            type: "Arts",
            target: "无直接伤害",
            npBuff: []
        },
        traits: ["秩序","善","骑乘技能","人型","从者","天或地从者","亚从者"],
        available_after : 0,
        specialBonus:{
            "魔法少女" : 100
        },
        passive_buff : []
    },
    {
        no: 2,
        name: "阿尔托莉雅·潘德拉贡",
        class: "Saber",
        star: 5,
        attribute: "地",
        np: {
            easy_max: false,
            name: "誓约胜利之剑",
            rates: [400,500,550,575,600],
            type: "Buster",
            target: "全体",
            npBuff: []
        },
        traits: ["秩序","善","骑乘技能","人型","从者","天或地从者"],
        available_after : 0,
        specialBonus:{
            "魔法少女" : 100
        },
        active_skill : {

        },
        passive_buff : [
            {
                name : "骑乘",
                type : BUFF_TYPES.BU,
                number : 8
            }
        ]
    }
];



