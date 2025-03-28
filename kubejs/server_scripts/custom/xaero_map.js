// const okdPlayers = new Set(); // 不受影响的玩家

// PlayerEvents.chat(event => {
//   const { player } = event;
//   if (FishTFCAdvancement.checkAdvancement(player, "ad_astra:fishtfcmap")) {
//       DISABLED_EFFECTS.forEach(effect => {
//           // 移除禁用效果
//           player.potionEffects.add(effect, 0,5,false, false);
//       });
//   }
// });


// PlayerEvents.loggedIn(event => {//登入给玩家buff

//   const { player } = event;
//   player.potionEffects.add('minecraft:resistance', 100, 4, false, false);
//   player.potionEffects.add('minecraft:slowness', 60, 2, false, false);
//   if (FishTFCAdvancement.checkAdvancement(player, "ad_astra:fishtfcmap")) {}else{
//   DISABLED_EFFECTS.forEach(effect => {
//     player.potionEffects.add(effect, -1, 1, false, false); 
//   })}
// })
// PlayerEvents.respawned(event => {//复活给玩家buff
//   const { player } = event;
//   player.potionEffects.add("minecraft:hunger", 100, 255, false, false);//饥饿
//   player.potionEffects.add("minecraft:blindness", 100, 0, false, false);//失明
//   player.potionEffects.add('minecraft:nausea', 100, 0, false, false);//失明
//   player.potionEffects.add('minecraft:resistance', 60, 4, false, false);
//   player.potionEffects.add('minecraft:slowness', 60, 2, false, false);
  
//   if (FishTFCAdvancement.checkAdvancement(player, "ad_astra:fishtfcmap")) {}else{
//   DISABLED_EFFECTS.forEach(effect => {
//     player.potionEffects.add(effect, -1, 1, false, false); 
//   })}
// });


// ItemEvents.rightClicked(event => {//右键望远镜
//       const { player, item } = event;
//   // 检查是否右键望远镜
//   if (item.id === 'minecraft:spyglass') {
//       player.potionEffects.add('xaerominimap:no_minimap',0,5,false, false);//开启小地图
//  }})

// // 玩家松开右键
// PlayerEvents.tick(event => {
//   const { player } = event;
//   const heldItem = player.getMainHandItem();

//   if (FishTFCAdvancement.checkAdvancement(player, "ad_astra:fishtfcmap")) {
//   } else if (heldItem.id !== 'minecraft:spyglass') {
//       player.potionEffects.add('xaerominimap:no_minimap', -1, 1, false, false);
//   }
  
// });
// // 玩家手持指南针
// let lastTriggerTime = 0;
// PlayerEvents.tick(event => {
//   const { player } = event;
  
//   const currentTime = Date.now()


//   if (currentTime - lastTriggerTime < 5000) { // 5秒冷却
//       return;
      
//   }
//   lastTriggerTime = currentTime;
//   if (FishTFCAdvancement.checkAdvancement(player, "ad_astra:fishtfcmap")) {}else{
 
//   const heldItem = player.getMainHandItem()
//   const offHandItem = player.getOffHandItem()

//   // 检查是否手持指南针
//   if (heldItem.id === 'minecraft:compass' || offHandItem.id === 'minecraft:compass') {
//     player.potionEffects.add('xaerominimap:no_waypoints', 0, 5);// 移除路径点的禁用效果
    
  
//   } else {
//     player.potionEffects.add('xaerominimap:no_waypoints', -1,1, false, false);
//   }
//     }
// })
// //设置效果
// const NOMAP_EFFECT = [
//   'xaerominimap:no_minimap',
//   'xaeroworldmap:no_world_map',
//   'xaerominimap:no_waypoints',
//   'xaerominimap:no_cave_maps'
// ]
// //玩家登录给予debuff
// PlayerEvents.loggedIn(e => {
//   const { player } = e;
//   player.sendSystemMessage(player.entityData.active_effects)

// })


// ItemEvents.rightClicked(e => {
//   if (e.item.id == "minecraft:stick") {
//     const { player } = e;
//     player.sendSystemMessage(player.getNbt().ActiveEffects)
//   }
// })