ServerEvents.recipes(e => {
    //在这里ban掉一些比较逃课，或者比较偏离群峦原本玩法的配方（比如CCA的铜工具）
    e.remove({id:'tfc:loom/wool_block'})
    e.remove({id:'mekanism:paper'})
    e.remove({id:'immersiveengineering:crafting/paper_from_sawdust'})
  })