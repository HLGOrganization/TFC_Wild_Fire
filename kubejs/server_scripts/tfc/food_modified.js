TFCEvents.data(event => {
  // 食物数据修改
  /**
   * 
   * @param {Internal.Ingredient} food 食物id
   * @param {number} [hunger] 饱食度
   * @param {number} [saturation] 饱和度
   * @param {number} [water] 水分,null为不修改,默认值为0
   * @param {number} [decayModifier] 腐烂速度(数值越大腐烂越快),null为不修改,默认值为1
   * @param {number} [protein] 蛋白质,null为不修改,默认值为0
   * @param {number} [fruit] 水果,null为不修改,默认值为0
   * @param {number} [grain] 谷物,null为不修改,默认值为0
   * @param {number} [vegetables] 蔬菜,null为不修改,默认值为0
   * @param {number} [dairy] 乳制品,null为不修改,默认值为0
   */
  let food_data = function (food, hunger, saturation, water, decayModifier, protein, fruit, grain, vegetables, dairy) {
    hunger = hunger || 4
    saturation = saturation || 0
    water = water || 0
    decayModifier = decayModifier || 1
    protein = protein || 0
    fruit = fruit || 0
    grain = grain || 0
    vegetables = vegetables || 0
    dairy = dairy || 0

    event.foodItem(food, f => {
      f.hunger(hunger)
      f.saturation(saturation/5)
      f.water(water)
      f.decayModifier(decayModifier)
      f.protein(protein)
      f.fruit(fruit)
      f.grain(grain)
      f.vegetables(vegetables)
      f.dairy(dairy)
    })
  }
  food_data("minecraft:enchanted_golden_apple", 100, 100, 100, 0, 100, 100, 100, 100, 100)
  food_data("cuisinedelight:suspicious_mix", 2, 0, null, 3)

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