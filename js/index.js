var iData = {}; //internal state data unused for cal
iData.svtData = svtData;
iData.enemyData = svtData;
iData.np_lv_options = ["LV1", "LV2", "LV3", "LV4", "LV5"];
iData.np_oc_options = ["100%", "200%", "300%", "400%", "500%"];
iData.skill_level_options = ["LV1", "LV2", "LV3", "LV4", "LV5", "LV6", "LV7", "LV8", "LV9", "LV10"];
iData.max_lv = 90;
iData.servant_columns = [
    {
        title: "等级",
        key: "lv"
    }, {
        title: "ATK",
        key: "ATK"
    }, {
        title: "宝具",
        key: "np"
    }, {
        title: "宝具对象",
        key: "np_type"
    }, {
        title: "宝具备率",
        key: "np_rate"
    }, {
        title: "最小伤害",
        key: "min_damage"
    }, {
        title: "最大伤害",
        key: "max_damage"
    }, {
        title: "平均伤害",
        key: "damage"
    }

];

iData.buff_columns = [
    {
        title: "Buff 来源",
        key: "from"
    }, {

        title: "Buff 名称",
        key: "name"

    },
    {
        title: "Buff 类型",
        key: "description"
    }, {
        title: "Buff 数值",
        key: "number"
    }
];


iData.available_buffs = svtBuff.filter(function (buff) {
    return buff.svtId < 100;
});

iData.buff_from_select =

    iData.buff_lv_select = [];


var cData = {}; //calculate data unused for cal
cData.lv_select = "max";
cData.servant_no = 2;
cData.enemy_no = 2;
cData.np_lv = 0;
cData.np_oc = 1;
cData.lv = iData.max_lv;
cData.buff_data = {
    passiveBuff: [
        {
            name: "骑乘",
            description: "Quick提升",
            type: BUFF_TYPES.QU,
            number: 8
        }
    ],
    npBuff: [],
    extraBuff: []
};

new Vue({
    el: '#app',
    data: {
        visible: false,
        iData: iData,
        cData: cData
    },
    computed: {
        servant_data: function () {
            var servant_no = cData.servant_no;
            var enemy_no = cData.enemy_no;
            var servant_prototype = svtData[servant_no - 1];
            var enemy_prototype = svtData[enemy_no - 1];
            var lv = cData.lv_select == 'customize' ? cData.lv :
                (cData.lv_select == "max" ? iData.max_lv : cData.lv_select );
            var servant = {};
            servant.attack = atkMatrix[servant_no][lv];
            servant.class = servant_prototype.class;
            servant.np = {
                rate: servant_prototype.np.rates[cData.np_lv],
                type: servant_prototype.np.type
            };
            var damage = atk(servant, servant_prototype, enemy_prototype,
                cData.buff_data.passiveBuff
                    .concat(cData.buff_data.npBuff).concat(cData.buff_data.extraBuff));
            return [{
                lv: lv,
                ATK: servant.attack,
                np: servant_prototype.np.name + " (LV" + (cData.np_lv + 1) + ")",
                np_type: CARDS[servant_prototype.np.type].name,
                np_rate: servant.np.rate,
                min_damage: Math.round(damage.min),
                damage: Math.round(damage.expected),
                max_damage: Math.round(damage.max)
            }];
        },
        iBuff_data: function () {
            var ret = [];
            cData.buff_data.passiveBuff.forEach(function (buff) {
                ret.push({
                    from: "被动技能",
                    name: buff.name,
                    description: buff.type.description,
                    number: buff.number
                });
            });
            cData.buff_data.npBuff.forEach(function (buff) {
                ret.push({
                    from: "技能效果",
                    name: buff.name,
                    description: buff.type.description,
                    number: buff.number
                });
            });
            cData.buff_data.extraBuff.forEach(function (buff) {
                ret.push({
                    from: "队友/自身技能",
                    name: buff.name,
                    description: buff.type.description,
                    number: buff.number
                });
            });
            return ret;

        },
        iBuff_fromSvt_select: function () {
            var svtIdList = [];
            iData.available_buffs.forEach(function (buff) {
                if (svtIdList.indexOf(buff.svtId) == -1) {
                    svtIdList.push(buff.svtId);
                }
            });
            return svtIdList.map(function (svtId) {
                return svtData[svtId - 1];
            })
        },
        iBuff_fromType_select : function () {
        }
    },
    methods: {
        updateServant: function () {
            var servant_no = cData.servant_no;
            var servant_prototype = svtData[servant_no - 1];
            iData.max_lv = maxLvs[servant_prototype.star];
            cData.lv = iData.max_lv;
            cData.buff_data = {
                passiveBuff: servant_prototype.passive_buff.slice(),
                npBuff: servant_prototype.np.npBuff.slice(),
                extraBuff: []
            };
        },
        updateLv: function () {
            if (cData.lv_select != "customize") {
                cData.lv = cData.lv_select == "max" ? iData.max_lv : cData.lv_select;
            }
        }
    }
});

