var fs = require("fs");
require("./js/buff_types.js");
var data = fs.readFileSync('svtData.csv');
var oData = data.toString().split("\n");
var svtData = [];

var typeMatrix = {
    "蓝": "Arts",
    "红": "Buster",
    "绿": "Quick"
};
var classSkill = {
    "蓝": "AU",
    "红": "BU",
    "绿": "QU"
};
for (var i = 9; i < oData.length; i++) {
    if (oData[i].indexOf(",") > -1) {
        var lineData = oData[i].split(',');
        var oneServant = {};
        oneServant.no = parseInt(lineData[0]);
        oneServant.name = lineData[1];
        oneServant.class = lineData[2];
        oneServant.star = lineData[3];
        oneServant.attribute = lineData[4];
        oneServant.np = {
            easy_max: lineData[5] == 1,
            name: lineData[6],
            rates: lineData.slice(9,14).map(function (i) {
                return parseInt(i);
            }),
            type: typeMatrix[lineData[7]],
            target: lineData[8],
            npBuff: []
        };
        oneServant.sex = lineData[25];
        oneServant.traits = ["秩序", "善", "骑乘技能", "人型", "从者", "天或地从者", "亚从者"];
        oneServant.available_after = parseInt(lineData[34]);
        oneServant.passive_buff = [];
        if (parseInt(lineData[21]) > 0) {
            oneServant.passive_buff.push({
                name: "神性",
                type: "FATKU",
                number: parseInt(lineData[21])
            })
        }
        if (parseInt(lineData[20]) > 0) {
            oneServant.passive_buff.push({
                name: "自带职阶技能",
                type: classSkill[lineData[7]],
                number: parseInt(lineData[20])
            })
        }
        svtData.push(oneServant);
    }

}


var json = JSON.stringify(svtData);
fs.writeFile('js/svtData2.js', "var svtData =" + json + ";");
fs.writeFile("svtData2.json", json);
console.log("done!");

