const metals = [
    "bismuth_bronze",
    "black_bronze",
    "black_steel",
    "blue_steel",
    "bronze",
    "copper",
    "red_steel",
    "wrought_iron"
]

const tools = [
    "hoe",
    "axe",
    "mace",
    "hammer",
    "chisel",
    "shovel",
    "javelin",
    "pickaxe",
    "propick"
]

ServerEvents.recipes(e => {
    for (var tool of tools)
    {
        for(var metal of metals)
        {
            e.shaped(Item.of(`tfc:metal/${tool}/${metal}`, 1), [
                ["#bsa:bindings/weak", `tfc:metal/${tool}_head/${metal}`, ""],
                ["", "#forge:rods/wooden", ""]
            ])
            e.shaped(Item.of(`tfc:metal/${tool}/${metal}`, 1), [
                ["#bsa:bindings/medium", `tfc:metal/${tool}_head/${metal}`, ""],
                ["#forge:rods/wooden", "", ""]
            ])
            e.recipes.kubejs.shaped(`tfc:metal/${tool}/${metal}`, [
                ["#bsa:bindings/strong", `tfc:metal/${tool}_head/${metal}`, ""],
                ["#forge:rods/wooden", "", ""]
            ]).modifyResult((inputGrid, result) => {
                //var binding = inputGrid.find("#bsa:bindings/strong")
                var head = inputGrid.findAll().find(stack => stack.id.toString().startsWith('tfc:metal/'))

                var level = head.getOrCreateTag().getInt("tfc:forging_bonus") + 1
                
                if (level > 4) level = 4

                var tag = result.getOrCreateTag()

                if(tag.contains("tfc:forging_bonus")) tag.remove("tfc:forging_bonus")
                
                tag.putInt("tfc:forging_bonus", level)
                
                return result
            })
        }
    }
})