TFCEvents.data(event => {

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
})