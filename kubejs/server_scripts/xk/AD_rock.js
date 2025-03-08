ServerEvents.recipes(event =>{
    const create = event.recipes.create
    create.mechanical_crafting('ad_astra:rocket_nose_cone',[
        " a ",
        "bcb"
    ],{
        a:'tfc:metal/rod/red_steel',
        b:'tfc:metal/sheet/steel',
        c:'immersiveengineering:ingot_hop_graphite'
    })//火箭头
    create.mechanical_crafting('ad_astra:tier_2_rocket',[
        "  a  ",
        " bcb ",
        " ddd ",
        " efe ",
        " gcg ",
        "gh hg"
    ],{
        a:'ad_astra:rocket_nose_cone',
        b:'tfc:metal/double_sheet/steel',
        c:'ad_astra:desh_plate',
        d:'kubejs:advanced_plating',
        e:'ad_astra:desh_tank',
        f:'kubejs:advanced_cabin',
        g:'ad_astra:rocket_fin',
        h:'kubejs:moon_propeller'
        
    })//2级火箭
    create.mechanical_crafting('ad_astra:tier_3_rocket',[
        "  a  ",
        " bcb ",
        " bcb ",
        " efe ",
        "ghehg",
        "h g h"
    ],{
        a:'ad_astra:rocket_nose_cone',
        b:'kubejs:venus_plating',
        c:'tfc:metal/double_sheet/steel',
        e:'ad_astra:ostrum_tank',
        f:'kubejs:explorer_cabin',
        g:'kubejs:columbus_propeller',
        h:'ad_astra:rocket_fin'
    })//三级火箭
    create.mechanical_crafting('ad_astra:tier_4_rocket',[
       "  a  ",
       " bcb ",
       " cdc ",
       "ecfce",
       "ecgce",
       "chihc",
       "jkhkj",
       " jlj ",
       "  j  "
    ],{
       a:'ad_astra:rocket_nose_cone',
       b:'ad_astra:calorite_plate',
       c:'kubejs:flare_plating',
       d:'#forge:panes/glass',
       e:'ad_astra:rocket_fin',
       f:'kubejs:hologram_frontpanel',
       g:'#interiors:chairs',
       h:'ad_astra:calorite_tank',
       i:'ad_astra:calorite_engine',
       j:'kubejs:columbus_propeller',
       k:'tfc:metal/double_sheet/black_steel',
       l:'mekanism:ultimate_control_circuit'
    })//四级火箭



       



















})