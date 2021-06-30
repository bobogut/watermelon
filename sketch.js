var enemySpeed = 1

function setup() {
  createCanvas(900, 900)
}
function draw() {
  background(0)
  updatePositions()
  checkCollision()
  drawTroops()
  drawEnemies()
  if (frameCount % (60 * 3) === 0) {
    createEnemyModel()
  }
  if (frameCount % (60 * 1) === 0) {
    createTroopModel()
  }
}
