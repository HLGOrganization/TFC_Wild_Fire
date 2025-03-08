BlockEvents.rightClicked('minecraft:netherite_block', event => {
  event.player.give('minecraft:cobblestone')
  event.block.set('minecraft:air')
})