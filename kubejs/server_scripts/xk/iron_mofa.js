ServerEvents.recipes(event => {
    const create = event.recipes.create
    //event.shaped('create:fluid_tank',[['create:copper_sheet'],['immersiveengineering:wooden_barrel'],['create:copper_sheet']])//流体储罐
    create.mixing('2x irons_spellbooks:arcane_essence',['tfc:gem/lapis_lazuli','create:experience_nugget','minecraft:purple_dye'])//奥数源质
    

    event.shapeless(Item.of('create:experience_nugget',16),['tfc:metal/ingot/bismuth','#tfc:knives']).damageIngredient({tag:'#tfc:knives'},2)//经验颗粒前期
    create.filling('create:experience_nugget',['#tfc:sedimentary_rock',Fluid.of('create_enchantment_industry:experience',3)])//经验颗粒后期
    create.mixing(Fluid.of("kubejs:uncommon_ink",250),[Fluid.of('create_enchantment_industry:ink',500),'create:experience_nugget'])//卓越墨水
    create.mixing(Fluid.of("kubejs:rare_ink",250),[Fluid.of("kubejs:uncommon_ink",500),'irons_spellbooks:arcane_essence'])//高级墨水
    create.mixing(Fluid.of("kubejs:epic_ink",250),[Fluid.of("kubejs:rare_ink",500),'tfc:powder/amethyst'])//史诗墨水
    create.mixing(Fluid.of("kubejs:legendary_ink",250),[Fluid.of("kubejs:epic_ink",500),'#forge:dusts/gold'])//传说墨水

    
    create.filling('irons_spellbooks:common_ink',['#tfc:glass_bottles',Fluid.of('create_enchantment_industry:ink',250)])//普通墨水罐装
    create.filling('irons_spellbooks:uncommon_ink',['#tfc:glass_bottles',Fluid.of("kubejs:uncommon_ink",250)])//卓越墨水罐装
    create.filling('irons_spellbooks:rare_ink',['#tfc:glass_bottles',Fluid.of("kubejs:rare_ink",250)])//高级墨水罐装
    create.filling('irons_spellbooks:epic_ink',['#tfc:glass_bottles',Fluid.of("kubejs:epic_ink",250)])//史诗墨水罐装
    create.filling('irons_spellbooks:legendary_ink',['#tfc:glass_bottles',Fluid.of("kubejs:legendary_ink",250)])//传说墨水罐装
    
    create.mixing('irons_spellbooks:arcane_salvage',['tfc:metal/ingot/unknown','tfc:metal/ingot/sterling_silver','irons_spellbooks:arcane_essence']).superheated()//奥数残骸碎片
    create.mixing('irons_spellbooks:cinder_essence',['#forge:gunpowder','irons_spellbooks:arcane_essence']).superheated()//灰烬源质
    create.mixing('irons_spellbooks:shriving_stone',['tfc:refined_iron_bloom','tfc:powder/amethyst']).superheated()//忏悔石












})