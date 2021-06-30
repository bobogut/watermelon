function checkCollision() {
  enemies.forEach((e) => {
    troops.forEach((t) => {
      if (collided(e, t)) {
        t.health--
        if (t.health < 1) {
          removeItemById(troops, t)
        }
      }
    })
  })
}
