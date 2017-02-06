var fs = require("fs");
require("./js/buff_types.js");
var data = fs.readFileSync('svtBuff2.csv');
var oData = data.toString().split("\n");
var buffData = [];
for (var i = 3; i < oData.length; i++) {
    if (oData[i].indexOf(",") > -1) {
        var lineData = oData[i].split(',');
        var oneBuff = {};
        oneBuff.svtId = parseInt(lineData[2]);
        oneBuff.svtName = lineData[3];
        oneBuff.from = lineData[4];
        oneBuff.fromName = lineData[5];
        oneBuff.target = lineData[6];
        oneBuff.type = inverseTypeMatrix[lineData[7]];
        oneBuff.description = lineData[7];
        oneBuff.toSelf = lineData[8];
        oneBuff.needNPQuest = lineData[9] == "1";
        oneBuff.value = [];
        if (oneBuff.from.indexOf("宝具") > -1) {
            oneBuff.value = [lineData[12], lineData[14], lineData[16], lineData[18], lineData[20]].map(function (i) {
                return parseInt(i)
            });
        } else {
            oneBuff.value = lineData.slice(12, 22).map(function (i) {
                return parseInt(i)
            });
        }
        buffData.push(oneBuff);
    }

}


var filename = 'js/svtBuff.js';
fs.exists(filename, function (exists) {
    var json = JSON.stringify(buffData);
    fs.writeFile('js/svtBuff.js', "var svtBuff =" + json + ";");
    fs.writeFile("svtBuff.json", json);
    console.log("done!");
});

