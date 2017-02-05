function atk(servant, enemy, buffs) {
    var FIX_ATK_RATE = 0.23;
    var instance = {};
    instance.atk = servant.attack; // 字面白值
    instance.np_rate = servant.np.rate;    //宝具倍率
    instance.npcard_rate = servant.np.type.rate;  //宝具颜色补正
    instance.card_buff = 0;   //卡牌buff
    instance.atk_buff = 0;    //攻击力buff
    instance.def_buff = 0;    //敌方防御力buff

    instance.class_rate = getClassRate(servant.class);             //职阶加成
    instance.cross_class_rate = getClassEffect(servant.class, enemy.class); //职阶克制
    instance.cross_type_rate = getTypeEffect(servant, enemy); //阵营相性

    instance.special_atk_buff = 0;      //特攻威力buff
    instance.special_defend_buff = 0;   //敌方特防buff
    instance.np_buff = 0;       //宝具威力buff

    instance.np_special = 1;    //宝具特攻

    instance.fixed_atk_up = 0;  //固定增伤buff
    instance.fixed_defend = 0;  //敌方固定减伤buff

    instance.random_rate = 1;   //随机数 0.9 ~1.1

    var atom = instance.atk * FIX_ATK_RATE
        * instance.class_rate * instance.cross_class_rate
        * (instance.np_rate / 100 * instance.npcard_rate + (1 + instance.card_buff) )
        * (1 + instance.atk_buff - instance.def_buff )
        * (1 + instance.special_atk_buff - instance.special_defend_buff + instance.np_buff)
        * instance.np_special;
    return {
        min: atom * 0.9 + instance.fixed_atk_up - instance.fixed_defend,
        expected: atom + instance.fixed_atk_up - instance.fixed_defend,
        max: atom * 1.1 + instance.fixed_atk_up - instance.fixed_defend
    };
}

function getClassRate(servant_class) {
    if (!!classRates[servant_class]) {
        return classRates[servant_class];
    }
    return 1;
}

function getClassEffect(servantClass, enemyClass) {
    return classMatrix[servantClass][enemyClass] ||
        classMatrix[servantClass]["default"];
}

function getTypeEffect(servant, enemy) {
    return 1;
}
