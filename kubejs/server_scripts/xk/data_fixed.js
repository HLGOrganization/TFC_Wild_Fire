TFCEvents.data(event => {
 
    event.itemHeat('#forge:meats', 1,null,null)//全部的肉都可以烤了
    event.itemHeat('#tfc:ore_pieces', 0.7,null,null)//全部的矿都可以融了
    event.itemHeat('create:empty_blaze_burner', 0.7,null,null)//烈焰人燃烧室
    event.itemHeat('tfc:plant/leafy_kelp', 1, null,null)//
    event.itemHeat('tfc:plant/winged_kelp', 1, null,null)//三个海带
    event.itemHeat('tfc:plant/laminaria', 1, null,null)//
    event.itemHeat('unfired_mold_mechanical', 1, null,null)//零件模具
    event.itemHeat('tfc:brass_mechanisms', 1, null,null)//黄铜机件融化
    event.itemHeat('kubejs:burned_bow_arm', 1,null,null)//烤弓
    event.itemHeat('kubejs:soaked_bow_arm', 1, null, null);
   event.itemHeat('kubejs:burning_bow_arm', 1, null, null);
   event.itemHeat('kubejs:perfectly_burned_bow_arm', 1, null, null);
   event.itemHeat('kubejs:overburned_bow_arm', 1, null, null);
   event.itemHeat('kubejs:charred_bow_arm', 1, null, null);
   event.itemHeat('kubejs:oiled_bow_arm', 1, null, null);

  


    const zhongliangqing=['cuisinedelight:suspicious_mix', 'cuisinedelight:ham_fried_rice', 'cuisinedelight:fried_rice', 
        'cuisinedelight:mixed_fried_rice', 'cuisinedelight:meat_with_seafood', 'cuisinedelight:meat_with_vegetables', 
        'cuisinedelight:seafood_with_vegetables', 'cuisinedelight:fried_pasta', 'cuisinedelight:mixed_pasta', 'cuisinedelight:meat_fried_rice',
         'cuisinedelight:meat_pasta', 'cuisinedelight:meat_platter', 'cuisinedelight:seafood_fried_rice', 'cuisinedelight:seafood_pasta',
          'cuisinedelight:seafood_platter', 'cuisinedelight:vegetable_fried_rice', 'cuisinedelight:vegetable_pasta', 'cuisinedelight:vegetable_platter',
           'cuisinedelight:fried_mushroom', 'cuisinedelight:fried_meat_and_melon', 'cuisinedelight:scrambled_egg_and_tomato', ];
    zhongliangqing.forEach(zhongliangqing=>{
        event.itemSize(zhongliangqing, 'small', 'light')
    })//定义重量


    //敲击
    event.knappingType('minecraft:diamond', 1, 1, 'minecraft:entity.warden.roar', false, false, true,'minecraft:diamond','kubejs:diamond')
    event.knappingType('kubejs:obsidian_shards', 1, 1, 'minecraft:entity.warden.roar', false, false, true,"minecraft:obsidian",'kubejs:obsidian') 
})