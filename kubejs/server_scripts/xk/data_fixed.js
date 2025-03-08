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


  









    event.foodItem('minecraft:enchanted_golden_apple', food => {//附魔金苹果
        food.hunger(100)
        food.saturation(100)
        food.water(100)
        food.decayModifier(0)
        food.protein(100)
		food.fruit(100)
		food.grain(100)
		food.vegetables(100)
        food.decayModifier(100)
        food.dairy(100)
    })
    event.foodItem('cuisinedelight:suspicious_mix', food => { // 炒锅乐事-可疑大杂烩
        food.hunger(2)
        food.protein(0)
        food.fruit(0)
        food.grain(0)
        food.vegetables(0)
        food.decayModifier(3)
    })
    
    event.foodItem('cuisinedelight:ham_fried_rice', food => { // 炒锅乐事-火腿炒饭
        food.hunger(8)
        food.protein(4)
        food.grain(3)
        food.decayModifier(1.3)
    })
    
    event.foodItem('cuisinedelight:fried_rice', food => { // 炒锅乐事-炒饭
        food.hunger(6)
        food.grain(4)
        food.decayModifier(1.3)
    })
    
    event.foodItem('cuisinedelight:mixed_fried_rice', food => { // 炒锅乐事-什锦炒饭
        food.hunger(8)
        food.fruit(1.3)
        food.grain(2.5)
        food.vegetables(1.3)
        food.decayModifier(1.2)
    })
    
    event.foodItem('cuisinedelight:meat_with_seafood', food => { // 炒锅乐事-肉与海鲜
        food.hunger(8)
        food.protein(4)
        food.decayModifier(0.8)
    })
    
    event.foodItem('cuisinedelight:meat_with_vegetables', food => { // 炒锅乐事-肉与蔬菜
        food.hunger(7)
        food.protein(2.8)
        food.fruit(1.3)
        food.vegetables(1.3)
        food.decayModifier(1.0)
    })
    
    event.foodItem('cuisinedelight:seafood_with_vegetables', food => { // 炒锅乐事-海鲜与蔬菜
        food.hunger(5)
        food.protein(2)
        food.vegetables(2)
        food.decayModifier(0.9)
    })
    
    event.foodItem('cuisinedelight:fried_pasta', food => { // 炒锅乐事-炒意大利面
        food.hunger(6)
        food.grain(2.7)
        food.decayModifier(1.5)
    })
    
    event.foodItem('cuisinedelight:mixed_pasta', food => { // 炒锅乐事-什锦意大利面
        food.hunger(7)
        food.protein(0.3)
        food.fruit(0.3)
        food.grain(2.1)
        food.vegetables(0.3)
        food.decayModifier(1.1)
    })
    
    event.foodItem('cuisinedelight:meat_fried_rice', food => { // 炒锅乐事-肉炒饭
        food.hunger(7)
        food.protein(2.3)
        food.grain(1.3)
        food.decayModifier(1.1)
    })
    
    event.foodItem('cuisinedelight:meat_pasta', food => { // 炒锅乐事-肉酱意大利面
        food.hunger(7)
        food.protein(0.6)
        food.grain(2.0)
        food.decayModifier(1.1)
    })
    
    event.foodItem('cuisinedelight:meat_platter', food => { // 炒锅乐事-肉类拼盘
        food.hunger(5)
        food.protein(3.3)
        food.decayModifier(0.6)
    })
    
    event.foodItem('cuisinedelight:seafood_fried_rice', food => { // 炒锅乐事-海鲜炒饭
        food.hunger(7)
        food.protein(1.9)
        food.grain(1.5)
        food.decayModifier(0.8)
    })
    
    event.foodItem('cuisinedelight:seafood_pasta', food => { // 炒锅乐事-海鲜意大利面
        food.hunger(6)
        food.protein(1.9)
        food.grain(1.5)
        food.decayModifier(0.8)
    })
    
    event.foodItem('cuisinedelight:seafood_platter', food => { // 炒锅乐事-海鲜拼盘
        food.hunger(4)
        food.protein(3)
        food.decayModifier(0.4)
    })
    
    event.foodItem('cuisinedelight:vegetable_fried_rice', food => { // 炒锅乐事-蔬菜炒饭
        food.hunger(7)
        food.fruit(1.1)
        food.grain(1.7)
        food.vegetables(1.2)
        food.decayModifier(1.3)
    })
    
    event.foodItem('cuisinedelight:vegetable_pasta', food => { // 炒锅乐事-蔬菜意大利面
        food.hunger(6)
        food.fruit(1.1)
        food.grain(1.7)
        food.vegetables(1.2)
        food.decayModifier(1.3)
    })
    
    event.foodItem('cuisinedelight:vegetable_platter', food => { // 炒锅乐事-蔬菜拼盘
        food.hunger(4)
        food.fruit(1.3)
        food.vegetables(1.3)
        food.decayModifier(1.0)
    })
    
    event.foodItem('cuisinedelight:fried_mushroom', food => { // 炒锅乐事-炸蘑菇
        food.hunger(4)
        food.protein(3.0)
        food.decayModifier(1.6)
    })
    
    event.foodItem('cuisinedelight:fried_meat_and_melon', food => { // 炒锅乐事-炸肉和甜瓜
        food.hunger(4)
        food.protein(1.2)
        food.fruit(1.2)
        food.decayModifier(0.7)
    })
    
    event.foodItem('cuisinedelight:scrambled_egg_and_tomato', food => { // 炒锅乐事-西红柿炒鸡蛋
        food.hunger(4)
        food.protein(2.3)
        food.vegetables(0.3)
        food.decayModifier(1.1)
    })
 
})