function controlHero() {
  let defPos = pointsMap.center.pos;

  if (hero.isReady("stomp")) {
    let enemiesInStompRange = findInRadiusOfUnit(hero, 15, enemies);
    if (enemiesInStompRange.length >= 3) {
      hero.stomp();
      return;
    }
  }
  if (hero.isReady("stomp") && hero.distanceTo(goliath) < 10) {
    hero.stomp();
    return;
  }

  let slowEnemies = removeType(goliath.type, enemies);
  slowEnemies = slowEnemies
    ? removeType(ARCHER_TYPE, slowEnemies)
    : slowEnemies;
  if (slowEnemies.length > 0) {
    let nearestEnemy = findNearestTo(defPos, slowEnemies);
    if (defPos.distance(nearestEnemy.pos) < 15) {
      hero.attack(nearestEnemy);
      return;
    }
  }
  if (pointsMap.center.team != hero.team) {
    hero.move(defPos);
    return;
  }
  if (defPos.distance(goliath.pos) < 15) {
    hero.attack(goliath);
    return;
    hero.move(defPos);
    return;
  }
}
