function calculate() {
    var servant_no =  document.getElementsByName("servant_no")[0].value;
    
    var LV = document.getElementsByName("LV")[0].value;
    var enemy_no =  document.getElementsByName("enemy_no");
    var servant_prototype = svtData[servant_no-1];
    var servant = {};
    servant.attack = atkMatrix[servant_no][LV];
    servant.class = servant_prototype.class;
    servant.np = {
        rate : servant_prototype.np.rates[0],
        type : servant_prototype.np.type
    };
    var damage = atk(servant,servant);
    alert(damage);

}
