player.onChat("up", function () {
    agent.move(FORWARD, 1)
})
player.onChat("collect", function () {
    agent.collectAll()
})
player.onChat("left", function () {
    agent.move(LEFT, 1)
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
player.onChat("down", function () {
    agent.move(BACK, 1)
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
