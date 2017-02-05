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

// var classMatrix = {
//     Saber: [1, 0.5, 2, 1, 1, 1, 2, 1, 0.5, 2, 1, 1, 1, 1],
//     Archer: [2, 1, 0.5, 1, 1, 1, 2, 1, 0.5, 2, 1, 1, 1, 1],
//     Lancer: [0.5, 2, 1, 1, 1, 1, 2, 1, 0.5, 2, 1, 1, 1, 1],
//     Rider: [1, 1, 1, 1, 2, 0.5, 2, 1, 0.5, 1, 1, 2, 1, 1],
//     Caster: [1, 1, 1, 0.5, 1, 2, 2, 1, 0.5, 1, 1, 2, 1, 1],
//     Assassin: [1, 1, 1, 2, 0.5, 1, 2, 1, 0.5, 1, 1, 2, 1, 1],
//     Berserker: [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1, 1.5, 1.5, 1.5, 1.5, 1, 1.5],
//     Shielder: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     Ruler: [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0.5, 1, 1, 1],
//     "Alter Ego": [1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1],
//     Avenger: [1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1],
//     "Beast I": [2, 2, 2, 1, 1, 1, 2, 1, 1, 1, 0.5, 1, 1, 1],
//     "Beast II": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// };

// var ServantClass = function () {
// };
//
// ServantClass.prototype = {
//     constructor: function (innerNumber, className) {
//         this.innerNumber = innerNumber;
//         this.className = className;
//     },
//
//     getClassRate: function () {
//         return classRates[this.className];
//     },
//
//     getCrossClassRate: function (targetClass) {
//         return classMatrix[this.className][targetClass.innerNumber];
//     }
// };
//
// var SERVANT_CLASSES = {
//     Saber: new ServantClass(0, "Saber"),
//     Archer: new ServantClass(1, "Archer"),
//     Lancer: new ServantClass(2, "Lancer"),
//     Rider: new ServantClass(3, "Rider"),
//     Caster: new ServantClass(4, "Caster"),
//     Assassin: new ServantClass(5, "Assassin"),
//     Berserker: new ServantClass(6, "Berserker"),
//     Shielder: new ServantClass(7, "Shielder"),
//     Ruler: new ServantClass(8, "Ruler"),
//     "Alter Ego": new ServantClass(9, "Alter Ego"),
//     Avenger: new ServantClass(10, "Avenger"),
//     "Beast I": new ServantClass(11, "Beast I"),
//     "Beast II": new ServantClass(12, "Beast II")
// };




