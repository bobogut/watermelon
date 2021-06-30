function drawTroops() {
  troops.forEach((t) => {
    drawCharacter(t)
  })
}

function drawEnemies() {
  enemies.forEach((e) => {
    drawCharacter(e)
  })
}
