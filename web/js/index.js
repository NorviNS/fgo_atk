var iData = {}; //internal state data unused for cal
iData.svtData = svtData;
iData.enemyData = svtData;
iData.np_lv_options = ["LV1", "LV2", "LV3", "LV4", "LV5"];
iData.np_oc_options = ["100%", "200%", "300%", "400%", "500%"];
iData.max_lv = 90;
iData.servant_columns = [
    {
        title: "等级",
        key: "lv"
    },
    {
        title: "ATK",
        key: "ATK"
    },
    {
        title: "宝具",
        key: "np"
    },
    {
        title: "宝具对象",
        key: "np_type"
    },
    {
        title: "宝具备率",
        key: "np_rate"
    },
    {
        title: "最小伤害",
        key: "min_damage"
    },
    {
        title: "伤害",
        key: "damage"
    },
    {
        title: "伤害",
        key: "max_damage"
    }

];

var cData = {}; //calculate data unused for cal
cData.lv_select = "max";
cData.servant_no = 2;
cData.enemy_no = 2;
cData.np_lv = 0;
cData.np_oc = 1;
cData.lv = iData.max_lv;


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
            var damage = atk(servant, enemy_prototype);
            return [{
                lv: lv,
                ATK: servant.attack,
                np: servant_prototype.np.name + " (LV" + (cData.np_lv + 1) + ")",
                np_type: servant_prototype.np.type.name,
                np_rate: servant.np.rate,
                min_damage: damage.min,
                damage: damage.expected,
                max_damage: damage.max
            }];
        }
    },
    methods: {
        updateServant: function () {
            var servant_no = cData.servant_no;
            var servant_prototype = svtData[servant_no - 1];
            iData.max_lv = maxLvs[servant_prototype.star];
            cData.lv = iData.max_lv;
        },
        updateLv: function () {
            if (cData.lv_select != "customize") {
                cData.lv = cData.lv_select == "max" ? iData.max_lv : cData.lv_select;
            }
        }
    },
});

