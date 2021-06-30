function updatePositions() {
  enemies.forEach((e) => {
    troops.forEach((t) => {
      enemies.forEach((e2) => {
        if (collided(e, e2) == true) {
          e.x = e.x + e.sp * (t.x > e.x ? 1 : -1)
          e.y = e.y + e.sp * (t.y > e.y ? 1 : -1)
        }
      })
    })
    e.m += 0.1
    if (e.m > 1) e.m = 0
  })
}
