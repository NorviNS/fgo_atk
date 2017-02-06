var BUFF_TYPES = {
    BU: {
        description: "Buster卡性能提升",
        process: function (instance, number) {
            if (instance.np.type == "Buster") {
                instance.card_buff += number / 100;
            }
        }
    },
    AU: {
        description: "Arts卡性能提升",
        process: function (instance, number) {
            if (instance.np.type == "Arts") {
                instance.card_buff += number / 100;
            }
        }
    },
    QU: {
        description: "Quick卡性能提升",
        process: function (instance, number) {
            if (instance.np.type == "Quick") {
                instance.card_buff += number / 100;
            }
        }
    },
    NPU: {
        description: "宝具威力提升",
        process: function (instance, number) {
            instance.np_buff += number / 100;
        }
    },
    ATKU: {
        description: "攻击力提升",
        process: function (instance, number) {
            instance.atk_buff += number / 100;
        }
    },
    SPA: {
        description: "特攻",
        process: function (instance, number) {

        }
    },
    FATKU: {
        description: "伤害附加",
        process: function (instance, number) {
            instance.fixed_atk_up += number;
        }
    },
    OCU: {
        description: "OC阶段提升",
        process: function (instance, number) {

        }
    },
    DEFD: {
        description: "防御力下降",
        process: function (instance, number) {

        }
    }
};


inverseTypeMatrix = {};
for(var type in BUFF_TYPES){
    inverseTypeMatrix[BUFF_TYPES[type].description] = type;
}
