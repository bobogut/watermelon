function rand(max) {
  return Math.floor(Math.random() * max)
}

var troops = []
var troopId = 0

function createTroopModel(speed) {
  var x = rand(1000)
  var y = rand(1000)
  var color = speed > 1 ? "rgba(255, 0, 125, 1)" : "rgba(255, 255, 100, 1)"

  var troop = {
    type: "troop",
    id: troopId++,
    health: 100,
    sp: 3,
    x: x,
    y: y,
    s: 50,
    m: 0,
    o: 0,
    color,
    score: 0,
    createPoints: function () {
      return Shape.createTroop(this)
    },
  }
  troops.push(troop)
}

var enemies = []
var enemyId = 0

function createEnemyModel(speed) {
  var x = rand(10)
  var y = rand(10)
  var color = speed > 1 ? "rgba(255, 0, 125, 1)" : "rgba(255, 255, 100, 1)"

  var enemy = {
    type: "enemy",
    id: enemyId++,
    health: 5,
    sp: 10,
    x: 500,
    y: 500,
    s: 50,
    m: 0,
    o: 0,
    color,
    score: 0,
    createPoints: function () {
      return Shape.createEnemy(this)
    },
  }
  enemies.push(enemy)
}
