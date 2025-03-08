ItemEvents.armorTierRegistry(event => {
    event.add('mythril', tier => {
      tier.durabilityMultiplier = 20 // Each slot will be multiplied with [13, 15, 16, 11]
      tier.slotProtections = [3, 8, 6, 3] // Slot indicies are [FEET, LEGS, BODY, HEAD]
        tier.enchantmentValue = 30
        tier.equipSound = 'minecraft:item.armor.equip_diamond'
        tier.repairIngredient = 'tfc:metal/ingot/blue_steel'
      tier.toughness = 3.5 // diamond has 2.0, netherite 3.0
        tier.knockbackResistance = 1.0
    })
})