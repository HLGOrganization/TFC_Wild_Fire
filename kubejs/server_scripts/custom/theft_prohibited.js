const BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
const structures = BuiltInRegistries.STRUCTURE_TYPE
const Monster = Java.loadClass('net.minecraft.world.entity.monster.Monster')

//获取结构名称
function GetStructureName(structure) {
  return structures.getKey(structure.type()).toString()
}

//给生成怪物添加标签
EntityEvents.spawned(e => {
  const { entity, level } = e
  if (!entity.isMonster()) return 
  const sets = level.structureManager().getAllStructuresAt(entity.blockPosition()).keySet() 
  sets.forEach(set => {
    entity.addTag(GetStructureName(set))
  });
})
//逻辑判断
BlockEvents.rightClicked(e => {
  const { player, block } = e
  if (player.hasEffect("minecraft:invisibility")) return
  if (block.getEntityData().contains("LootTable")) {
    const { level, pos } = block
    const r = 8
    const box = AABB.of(
      pos.getX() - r, pos.getY() - r, pos.getZ() - r,
      pos.getX() + r, pos.getY() + r, pos.getZ() + r
    )
    const entities = level.getEntities(null, box) 
    const set = level.structureManager().getAllStructuresAt(pos).keySet() 
    for (var entity of entities) {
      if (!entity.isMonster()) continue
      for (var tag of set) {
        if (entity.getTags().contains(GetStructureName(tag))) {
          player.setStatusMessage(Text.translate("message.kubejs.theft_prohibited"))
          e.cancel()
        }
      }
    }
  }
})