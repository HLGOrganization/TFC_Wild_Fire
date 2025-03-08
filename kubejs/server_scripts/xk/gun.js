ServerEvents.recipes(event =>{
    const create = event.recipes.create

    
    create.mechanical_crafting("kubejs:brass_cartridge_nest", [
        "ba",
        "ab"
    ], {a:'tfc:metal/sheet/brass',
        b:'tfc:brass_mechanisms'
    }) // 黄铜弹巢 动力合成
    
    create.mechanical_crafting("kubejs:cast_iron_firing_hammer", [
        "ab",
        "c "
    ], {a:'minecraft:flint',
        b:'tfc:metal/ingot/wrought_iron',
        c:'tfc:metal/rod/wrought_iron'
    }) // 铸铁击锤 动力合成
    
    create.mechanical_crafting("kubejs:cast_iron_gun_barrel", [
        "aa"
    ], {a:'tfc:metal/sheet/wrought_iron'}) // 铸铁枪管 动力合成
    
    create.mechanical_crafting("kubejs:standard_type_muzzle_brake_parts_steel", [
        "ilh"
    ], {i:'immersiveengineering:component_steel',
        l:'tfc:metal/ingot/steel',
        h:'tfc:metal/sheet/steel'}) // 制式制退器配件（钢） 动力合成
    
    create.mechanical_crafting("kubejs:standard_type_muzzle_brake_parts_copper", [
        "bea"
    ], { b:'tfc:brass_mechanisms',
        e:'tfc:metal/ingot/brass',
        a:'tfc:metal/sheet/brass'
    }) // 制式制退器配件（铜） 动力合成
    
    create.mechanical_crafting('kubejs:standard_type_handguard_parts_steel', [
        " hh",
        "jil"
    ], {
        h:'tfc:metal/sheet/steel',
        j:'tfc:metal/rod/steel',
        i:'immersiveengineering:component_steel',
        l:'tfc:metal/ingot/steel'
    }) // 制式护手配件（钢） 动力合成
    
    create.mechanical_crafting("kubejs:standard_type_handguard_parts_copper", [
        " aa",
        "cbe"
    ], { a:'tfc:metal/sheet/brass',
        b:'tfc:brass_mechanisms',
        c:'tfc:metal/rod/brass',
        e:'tfc:metal/ingot/brass'
        }) // 制式护手配件（铜） 动力合成
    
    create.mechanical_crafting("kubejs:standard_type_gun_body_parts_steel", [
        "lki",
    ], { 
        i:'immersiveengineering:component_steel',
        k:'tfc:metal/double_sheet/steel',
        l:'tfc:metal/ingot/steel',
       }) // 制式枪身配件（钢） 动力合成
    
    create.mechanical_crafting("kubejs:standard_type_gun_body_parts_copper", [
        "edb"
    ], { 
        b:'tfc:brass_mechanisms',
        d:'tfc:metal/double_sheet/brass',
        e:'tfc:metal/ingot/brass'
        
    }) // 制式枪身配件（铜） 动力合成
    
    create.mechanical_crafting("kubejs:standard_type_pistol_slide_parts_steel", [
        " h ",
        "lij",
    ], {
        h:'tfc:metal/sheet/steel',
        i:'immersiveengineering:component_steel',
        j:'tfc:metal/rod/steel',
        l:'tfc:metal/ingot/steel'
        }) // 制式手枪滑套配件（钢） 动力合成
    
    create.mechanical_crafting("kubejs:standard_type_pistol_slide_parts_copper", [
        " a ",
        "ebc"
    ], { a:'tfc:metal/sheet/brass',
        b:'tfc:brass_mechanisms',
        c:'tfc:metal/rod/brass',
        e:'tfc:metal/ingot/brass',
        }) // 制式手枪滑套配件（铜） 动力合成
    
    create.mechanical_crafting("kubejs:standard_type_magazine_parts_steel", [
        " l",
        "im",
        "hj"
    ], {
        h:'tfc:metal/sheet/steel',
        i:'immersiveengineering:component_steel',
        j:'tfc:metal/rod/steel',
        l:'tfc:metal/ingot/steel',
        m:'vintageimprovements:steel_spring',}) // 制式弹匣配件（钢） 动力合成
    
    create.mechanical_crafting("kubejs:standard_type_magazine_parts_copper", [
        " e",
        "bf",
        "ac"
    ], { a:'tfc:metal/sheet/brass',
        b:'tfc:brass_mechanisms',
        c:'tfc:metal/rod/brass',
        e:'tfc:metal/ingot/brass',
        f:'vintageimprovements:brass_spring',
      }) // 制式弹匣配件（铜） 动力合成
    
    create.mechanical_crafting("kubejs:standard_type_grip_parts_steel", [
        "nh",
        " n"
    ], {
        h:'tfc:metal/sheet/steel',
        n:'tfc_ie_addon:treated_wood_lumber'}) // 制式握把配件（钢） 动力合成
    
    create.mechanical_crafting("kubejs:standard_type_grip_parts_copper", [
        "ga",
        " g"
    ], { a:'tfc:metal/sheet/brass',
        g:'#tfc:lumber'
       }) // 制式握把配件（铜） 动力合成
    
    create.mechanical_crafting("kubejs:standard_type_gunstock_parts_steel", [
        "hnn",
        " hn"
    ], { 
        h:'tfc:metal/sheet/steel',
        n:'tfc_ie_addon:treated_wood_lumber'}) // 制式枪托配件（钢） 动力合成
    
    create.mechanical_crafting("kubejs:standard_type_gunstock_parts_copper", [
        "agg",
        " ag"
    ], { a:'tfc:metal/sheet/brass',
        g:'#tfc:lumber'
    }) // 制式枪托配件（铜） 动力合成
  
})