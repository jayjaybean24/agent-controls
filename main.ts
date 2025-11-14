player.onChat("up", function () {
    agent.move(FORWARD, 1)
})
player.onChat("collect", function () {
    agent.collectAll()
})
player.onChat("left", function () {
    agent.move(LEFT, 1)
})
player.onChat("dig", function () {
    agent.move(DOWN, 1)
})
player.onChat("jump", function () {
    agent.move(UP, 1)
})
player.onArrowShot(function () {
    space.createSun(pos(ARROW_PROJECTILE_MOB, ARROW_PROJECTILE_MOB, ARROW_PROJECTILE_MOB))
})
events.onEndOfDay(function () {
	
})
player.onChat("right", function () {
    agent.move(RIGHT, 1)
})
player.onChat("equipment", function () {
    agent.collect(IRON_SWORD)
    agent.collect(IRON_PICKAXE)
    agent.collect(IRON_AXE)
    agent.collect(IRON_SHOVEL)
    agent.collect(IRON_HOE)
})
player.onChat("come", function () {
    agent.teleportToPlayer()
})
player.onChat("slave", function () {
    agent.till(FORWARD)
    agent.till(BACK)
    agent.till(LEFT)
    agent.till(RIGHT)
})
player.onChat("god is here", function () {
    gameplay.title(mobs.target(LOCAL_PLAYER), "GOD", "The Agent Controller/Admin")
    agent.teleportToPlayer()
})
player.onChat("down", function () {
    agent.move(BACK, 1)
})
player.onChat("go to heaven my child", function () {
    mobs.applyEffect(LEVITATION, mobs.target(LOCAL_PLAYER), 600, 255)
})
player.onChat("old man", function () {
    mobs.applyEffect(SLOWNESS, mobs.target(LOCAL_PLAYER), 600, 255)
    mobs.applyEffect(MINING_FATIGUE, mobs.target(LOCAL_PLAYER), 600, 255)
    mobs.applyEffect(BLINDNESS, mobs.target(LOCAL_PLAYER), 600, 255)
    mobs.applyEffect(POISON, mobs.target(LOCAL_PLAYER), 600, 255)
    mobs.applyEffect(HUNGER, mobs.target(LOCAL_PLAYER), 600, 255)
    mobs.applyEffect(WEAKNESS, mobs.target(LOCAL_PLAYER), 600, 255)
    mobs.applyEffect(NAUSEA, mobs.target(LOCAL_PLAYER), 600, 255)
    mobs.applyEffect(WITHER, mobs.target(LOCAL_PLAYER), 600, 255)
})
player.onChat("turn right", function () {
    agent.turn(RIGHT_TURN)
})
player.onChat("armmor", function () {
    agent.collect(IRON_HELMET)
    agent.collect(IRON_CHESTPLATE)
    agent.collect(IRON_LEGGINGS)
    agent.collect(IRON_BOOTS)
})
player.onChat("attack", function () {
    agent.attack(FORWARD)
    agent.destroy(FORWARD)
})
player.onChat("turn left", function () {
    agent.turn(LEFT_TURN)
})
player.onChat("i am death", function () {
    mobs.applyEffect(STRENGTH, mobs.target(LOCAL_PLAYER), 600, 255)
    mobs.applyEffect(RESISTANCE, mobs.target(LOCAL_PLAYER), 600, 255)
    mobs.applyEffect(FIRE_RESISTANCE, mobs.target(LOCAL_PLAYER), 600, 255)
    mobs.applyEffect(WATER_BREATHING, mobs.target(LOCAL_PLAYER), 600, 255)
    mobs.applyEffect(ABSORPTION, mobs.target(LOCAL_PLAYER), 600, 255)
    mobs.applyEffect(HEALTH_BOOST, mobs.target(LOCAL_PLAYER), 600, 255)
    mobs.applyEffect(SPEED, mobs.target(LOCAL_PLAYER), 600, 255)
    mobs.applyEffect(HASTE, mobs.target(LOCAL_PLAYER), 600, 255)
    mobs.applyEffect(INVISIBILITY, mobs.target(LOCAL_PLAYER), 600, 255)
    mobs.applyEffect(NIGHT_VISION, mobs.target(LOCAL_PLAYER), 600, 255)
    mobs.applyEffect(REGENERATION, mobs.target(LOCAL_PLAYER), 600, 255)
})
