var BUFF_TYPES = {
    BU: {
        description : "Buster 指令卡效果提升",
        process: function (instance, number) {
            if (instance.np.type == "Buster") {
                instance.card_buff += number/100;
            }
        }
    },
    AU: {
        description : "Arts 指令卡效果提升",
        process: function (instance, number) {
            if (instance.np.type == "Arts") {
                instance.card_buff += number/100;
            }
        }
    },
    QU: {
        description : "Quick 指令卡效果提升",
        process: function (instance, number) {
            if (instance.np.type == "Quick") {
                instance.card_buff += number/100;
            }
        }
    },
    NPU:{
        description : "宝具攻击提升",
        process: function (instance, number) {
            instance.np_buff += number/100;
        }
    },
    ATKU : {
        description : "攻击力提升",
        process: function (instance, number) {
            instance.atk_buff += number/100;
        }
    },
    SPA : {
        description : "特攻",
        process: function (instance, number) {

        }
    },
    FATKU : {
        description : "Buster 指令卡效果提升",
        process: function (instance, number) {
            instance.fixed_atk_up += number;
        }
    }

};

