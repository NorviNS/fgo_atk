var CARDS = {
    Quick: {name: "Quick", rate: 0.8},
    Buster: {name: "Buster", rate: 1.5},
    Arts: {name: "Arts", rate: 1}
};

var classRates = {
    Saber: 1,
    Archer: 0.95,
    Lancer: 1.05,
    Rider: 1,
    Caster: 0.9,
    Assassin: 0.9,
    Berserker: 1.1,
    Shielder: 1,
    Ruler: 1.1,
    "Alter Ego": 1,
    Avenger: 1.1,
    "Beast I": 1,
    "Beast II": 1
};

var maxLvs = {
    1 : 60,
    2 : 65,
    3 : 70,
    4 : 80,
    5 : 90
};

var classMatrix = {
    Saber: {
        Archer: 0.5,
        Lancer: 2,
        Berserker: 2,
        Ruler: 0.5,
        "Alter Ego": 2,
        default: 1
    },
    Archer: {
        Saber: 2,
        Lancer: 0.5,
        Berserker: 2,
        Ruler: 0.5,
        "Alter Ego": 2,
        default: 1
    },
    Lancer: {
        Saber: 0.5,
        Archer: 2,
        Berserker: 2,
        Ruler: 0.5,
        "Alter Ego": 2,
        default: 1
    },
    Rider: {
        Caster: 2,
        Assassin: 0.5,
        Berserker: 2,
        Ruler: 0.5,
        "Beast I": 2,
        default: 1
    },
    Caster: {
        Rider: 0.5,
        Assassin: 2,
        Berserker: 2,
        Ruler: 0.5,
        "Beast I": 2,
        default: 1
    },
    Assassin: {
        Rider: 2,
        Caster: 0.5,
        Berserker: 2,
        Ruler: 0.5,
        "Beast I": 2,
        default: 1
    },
    Berserker: {
        Shielder: 1,
        "Beast II": 1,
        default: 1.5
    },
    Shielder: {
        default: 1
    },
    Ruler: {
        Berserker: 2,
        Avenger: 0.5,
        default: 1
    },
    "Alter Ego": {
        Rider: 2,
        Caster: 2,
        Assassin: 2,
        Berserker: 2,
        default: 1
    },
    Avenger: {
        Berserker: 2,
        Ruler: 2,
        default: 1
    },
    "Beast I": {
        Saber: 2,
        Archer: 2,
        Lancer: 2,
        Berserker: 2,
        Avenger: 0.5,
        default: 1
    },
    "Beast II": {
        default: 1
    }
};

var attributeMatrix = {
    "人" :{
        "天" : 1.1,
        "地" :0.9,
        default :1
    },
    "天":{
        "地" : 1.1,
        "人" :0.9,
        default :1
    },
    "地":{
        "人" : 1.1,
        "天" :0.9,
        default :1
    },
    "星":{
        "兽" : 1.1,
        default :1
    },
    "兽":{
        "星" : 1.1,
        default :1
    }
};


