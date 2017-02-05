var fs = require("fs");
var data = fs.readFileSync('atk.csv');
var lines = data.toString().split("\n");
var atks = [];
for (var i = 1; i < lines.length; i++) {
    atks[i] = lines[i].split(",");
    for(var j = 0 ; j < atks[i].length ; j ++){
        atks[i][j] = parseInt(atks[i][j]);
    }
}


var filename = 'js/atkMatrix.js';
fs.exists(filename, function (exists) {
    console.log("file not exists")
    var json = JSON.stringify(atks);
    fs.writeFile(filename, "var atkMatrix =" + json+";");
    console.log("done!");
});

