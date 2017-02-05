var test_servant = {};
var test_enemy = {};
test_servant.attack = 10000;
test_servant.np = {
    rate : 1800,
    type : CARDS.Quick
};
test_servant.class = SERVANT_CLASSES.Assassin;
test_enemy.class = SERVANT_CLASSES.Rider;

console.log( atk(test_servant,test_enemy));