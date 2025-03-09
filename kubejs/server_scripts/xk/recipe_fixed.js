//基础修改
ServerEvents.recipes(event => {
    const create = event.recipes.create
    
    event.remove({ type: 'minecraft:smelting' }) // 移除熔炉熔炼配方
    event.remove({ type: 'minecraft:campfire_cooking' }) // 移除营火烹饪配方
    event.remove({ type: 'minecraft:blasting' }) // 移除高炉熔炼配方
    event.remove({id:'map_atlases:craft_atlas'}) // 移除 map_atlases 模组制作地图集的配方
    event.remove({id:'simpleradio:radio'}) // 移除 simpleradio 模组制作收音机的配方
    event.remove({id:'simpleradio:transceiver'}) // 移除 simpleradio 模组制作收发器的配方
    event.remove({id:'simpleradio:radiosmither'}) // 移除 simpleradio 模组制作无线电锻造器的配方
    event.remove({id:'simpleradio:transmitting_module'}) // 移除 simpleradio 模组制作发射模块的配方
    event.remove({id:'simpleradio:speaker_module'}) // 移除 simpleradio 模组制作扬声器模块的配方
    event.remove({id:'simpleradio:receiving_module'}) // 移除 simpleradio 模组制作接收模块的配方
    event.remove({ id: 'astikorcarts:animal_cart' }) // 移除 astikorcarts 模组中动物推车的配方
    event.remove({ id: 'astikorcarts:supply_cart' }) // 移除 astikorcarts 模组中补给推车的配方
    event.remove({ id: 'astikorcarts:plow' }) // 移除 astikorcarts 模组中犁的配方
    event.remove({ id: 'astikorcarts:wheel' }) // 移除 astikorcarts 模组中轮子的配方
    event.remove({output:'#minecraft:tools',mod:'ae2'}) // 移除 astikorcarts 模组中轮子的配方
    event.remove({ id: 'ad_astra:nasa_workbench' }) //NASA工作台
    event.remove({ id: 'ad_astra:compressor' }) //压缩机
    event.remove({ id: 'ad_astra:etrionic_blast_furnace' }) //电力高炉

    //刷物品
   event.remove({input:'#forge:plates',output:'#forge:plates'}) //板子
    
    
    
    
    
    
    event.shapeless(Item.of('create_power_loader:brass_chunk_loader'),['create_power_loader:empty_brass_chunk_loader']);//黄铜区块加载器
    event.shapeless(Item.of('create_power_loader:andesite_chunk_loader'),['create_power_loader:empty_andesite_chunk_loader']);//安山区块加载
 
  
    //event.replaceInput({output:'tfc:fire_clay'},'tfc:powder/kaolinite','tfc:kaolin_clay')
    event.replaceInput({output:'ars_nouveau:scribes_table'},'#forge:logs/archwood','#forge:ingots/steel')
    event.replaceInput({output:'ars_nouveau:scribes_table'},'ars_nouveau:archwood_slab','immersiveengineering:slab_treated_wood_horizontal')
    event.replaceInput({output:'create:tree_fertilizer'},'#forge:coral','coralstfc:coral_powder')//珊瑚
    event.replaceInput({output:'@mekanism'},"tfc:metal/ingot/wrought_iron",'tfc:metal/ingot/steel')
    event.replaceInput({output:'@mekanism'},'minecraft:iron_ingot','tfc:metal/ingot/steel')
   
   



    event.remove({id:'sophisticatedbackpacks:backpack'}) // 移除 背包
    event.shaped('sophisticatedbackpacks:backpack',['aba','aca','ddd'],{a:'#c:string',b:'tfc:metal/double_sheet/wrought_iron',c:'backpacked_tfc:backpack',d:'#forge:leather'})//背包合成困难
    event.remove({id:'create:crafting/kinetics/shaft'}) // 移除传动杆
    event.shaped('12x create:shaft', ['A','B','A'],{A:'create:andesite_alloy',B:'minecraft:iron_nugget'})//传动杆变难
    event.remove({id:'tfc_metal_items:crafting/steel_tilt_hammer_head'}) // 移除杠杆锤头
    event.shaped('tfc_metal_items:steel_tilt_hammer_head', ['BAB','B B','AAA'],{A:'tfc:metal/double_ingot/wrought_iron',B:'tfc:metal/ingot/wrought_iron'})//杠杆锤头变简单
    event.remove({ id:"minecraft:iron_ingot_from_iron_block" }) // 移除 铁块合成铁
    event.shapeless('9x tfc:metal/ingot/wrought_iron',['minecraft:iron_block']);//铁块合成锻铁
    
    
    


    event.replaceInput({output:'minecraft:slime_ball'},'create:dough','#tfc:foods/dough')//粘液球面团替换
    event.replaceInput({input:'minecraft:iron_ingot',type: "crafting_shaped"},'minecraft:iron_ingot','tfc:metal/ingot/wrought_iron')//锻铁替换铁
    event.replaceOutput({}, 'create_power_loader:empty_andesite_chunk_loader', 'create_power_loader:andesite_chunk_loader') // 将配方中的产出物品 “create_power_loader:empty_andesite_chunk_loader” 替换为 “create_power_loader:andesite_chunk_loader”
    event.replaceOutput({}, 'create_power_loader:empty_brass_chunk_loader', 'create_power_loader:brass_chunk_loader') // 将配方中的产出物品 “create_power_loader:empty_brass_chunk_loader” 替换为 “create_power_loader:brass_chunk_loader”
    event.replaceInput({id:'create:crafting/kinetics/super_glue'},'minecraft:slime_ball','#forge:glue') //强力胶
    event.replaceInput({id:'create:crafting/materials/sand_paper'},'minecraft:sand','#forge:sand')//砂纸

    
    




    //无序配方
      event.shapeless(Item.of('create_new_age:magnetite_block'),['9x tfcorewashing:rocky_chunks_magnetite']);//磁铁矿块
      
      //event.shapeless(Item.of('4x tfcorewashing:pellet_malachite'),['tfcorewashing:briquet_malachite'])
      event.shapeless(Item.of('minecraft:lantern'),['8x minecraft:iron_nugget','minecraft:torch'])
      event.shapeless(Item.of('minecraft:kelp'),['tfc:plant/leafy_kelp'])
      event.shapeless(Item.of('4x tfc:plant/moss'),['tfc:plant/moss','tfc:groundcover/humus'])
      event.shapeless(Item.of('minecraft:moss_block'),['tfc:plant/moss','#minecraft:dirt'])
      event.shapeless(Item.of('2x minecraft:tuff'),['2x minecraft:flint','2x #forge:gravel'])//燧石
      event.shapeless(Item.of('9x minecraft:spruce_planks'),['9x afc:wood/planks/cypress'])
      //  event.shapeless(Item.of('vinery:cherry_sapling'),['tfc:plant/cherry_sapling'])//樱桃树苗
      event.shapeless(Item.of('minecraft:amethyst_shard'),['tfc:gem/amethyst'])//紫水晶


    //有序配方
    event.shaped('create:fluid_tank',[['#forge:plates/copper'],['immersiveengineering:wooden_barrel'],['#forge:plates/copper']])//流体储罐
    event.shaped('create:item_vault',[['#forge:plates/iron'],['immersiveengineering:crate'],['#forge:plates/iron']])//机械动力保险箱
    event.shaped('cuisinedelight:spatula', ['  A',' A ','B  '],{A:'tfc:metal/ingot/wrought_iron',B:'#balm:wooden_rods'})//锅铲

    //移除配方
    event.remove({output:'vintageimprovements:pig_iron_sheet'})//移除猪铁
    event.remove({output:'vintageimprovements:cast_iron_sheet'})//移除锻铁板
    event.remove('htm:compat/tfc/rock_knapping/hammer_head')//移处锤子
    event.remove('tfc:welding/cast_iron_double_ingot')
    event.remove('tfc:heating/kaolin_clay')
    event.remove('crafttweaker:backpack')
    event.remove({id:'create:crafting/kinetics/empty_blaze_burner'})//移除烈焰人燃烧室
    event.remove({id:'vinery:bamboo_lattice'})//删除竹格
    
    event.remove('farmersdelight:paper_from_tree_bark')//三个树皮合成纸

 

    //机械动力
     //鼓风机
      //灵魂火
    create.haunting(Item.of('minecraft:blaze_rod'),'createaddition:electrum_rod')//烈焰棒
    create.mixing("minecraft:soul_sand",['#forge:sand','minecraft:rotten_flesh'])//灵魂沙



     //搅拌
    create.compacting('minecraft:glass',['#forge:sand','tfc:powder/flux']).heated()//玻璃
    create.compacting(Item.of('minecraft:netherite_ingot'),['ad_astra:ostrum_ingot','tfc:metal/ingot/unknown','tfc:metal/ingot/gold']).superheated()//下界合金锭
    create.mixing(Item.of('minecraft:ancient_debris').withChance(0.1),['ad_astra:infernal_spire_block','tfc:metal/ingot/unknown']).superheated()//下界合金碎片（金星
    create.mixing(Item.of('minecraft:ancient_debris').withChance(0.1),['ad_astra:infernal_spire_block',Fluid.of('tfc:metal/unknown',100)]).superheated()//下界合金碎片（金星
    create.mixing(Item.of('tfc:raw_iron_bloom'),['minecraft:charcoal',Fluid.of('tfc:metal/cast_iron',100)]).heated()//生铁块合成
    //辊压

    

    //石磨
    create.milling('2x tfc:olive_paste','tfc:food/olive') // 橄榄 => 2个橄榄糊
    create.milling('4x tfc:powder/sulfur','tfc:ore/sulfur') // 硫磺矿石 => 4份硫磺粉末
    create.milling('6x tfc:powder/flux','tfc:ore/borax') // 硼砂矿石 => 6份助熔剂粉末
    create.milling('2x tfc:powder/flux','#tfc:fluxstone') // 标签为 #tfc:fluxstone 的物品 => 2份助熔剂粉末
    create.milling('tfc:ore/gypsum','tfc:rock/raw/limestone') // 原始石灰石 => 石膏矿石
    create.milling('4x tfc:powder/ruby','tfc:ore/ruby') // 红宝石矿石 => 4份红宝石粉末
    create.milling('4x tfc:powder/ruby','tfc:gem/ruby') // 红宝石宝石 => 4份红宝石粉末
    create.milling('8x minecraft:redstone','tfc:ore/cinnabar') // 辰砂矿石 => 8个原版红石
    create.milling('8x minecraft:redstone','tfc:ore/cryolite') // 冰晶石矿石 => 8个原版红石
    create.milling('4x tfc:powder/pyrite','tfc:gem/pyrite') // 黄铁矿宝石 => 4份黄铁矿粉末
    create.milling('4x tfc:powder/pyrite','tfc:ore/pyrite') // 黄铁矿矿石 => 4份黄铁矿粉末
    create.milling('4x tfc:powder/lapis_lazuli','tfc:ore/lapis_lazuli') // 青金石矿石 => 4份青金石粉末
    create.milling('4x tfc:powder/lapis_lazuli','tfc:gem/lapis_lazuli') // 青金石宝石 => 4份青金石粉末
    create.milling('4x tfc:powder/diamond','tfc:gem/diamond') // 钻石宝石 => 4份钻石粉末
    create.milling('4x tfc:powder/diamond','tfc:ore/diamond') // 钻石矿石 => 4份钻石粉末
    create.milling('4x tfc:powder/opal','tfc:gem/opal') // 蛋白石宝石 => 4份蛋白石粉末
    create.milling('4x tfc:powder/opal','tfc:ore/opal') // 蛋白石矿石 => 4份蛋白石粉末
    create.milling('4x tfc:powder/emerald','tfc:gem/emerald') // 祖母绿宝石 => 4份祖母绿粉末
    create.milling('4x tfc:powder/emerald','tfc:ore/emerald') // 祖母绿矿石 => 4份祖母绿粉末
    create.milling('4x tfc:powder/topaz','tfc:gem/topaz') // 黄玉宝石 => 4份黄玉粉末
    create.milling('4x tfc:powder/topaz','tfc:ore/topaz') // 黄玉矿石 => 4份黄玉粉末
    create.milling('4x tfc:powder/sapphire','tfc:gem/sapphire') // 蓝宝石宝石 => 4份蓝宝石粉末
    create.milling('4x tfc:powder/sapphire','tfc:ore/sapphire') // 蓝宝石矿石 => 4份蓝宝石粉末
    create.milling('4x tfc:powder/amethyst','tfc:gem/amethyst') // 紫水晶宝石 => 4份紫水晶粉末
    create.milling('4x tfc:powder/amethyst','tfc:ore/amethyst') // 紫水晶矿石 => 4份紫水晶粉末 
   
 



    create.compacting('4x minecraft:cobbled_deepslate','4x minecraft:cobblestone').heated()//深板岩
    create.compacting('minecraft:smooth_stone','minecraft:cobblestone').superheated()//平滑石头
    create.deploying('minecraft:paper',['tfc:unrefined_paper','#tfc:knives']).keepHeldItem()
    create.filling('minecraft:glowstone_dust',['tfcorewashing:rock_powder',Fluid.of('minecraft:lava',20)]).superheated()//萤石


    event.recipes.tfc.barrel_sealed(5000).outputItem('tfc:unrefined_paper').inputs('farmersdelight:tree_bark', TFC.fluidStackIngredient('tfc:limewater', 50))//获取未精致纸
    event.recipes.firmalife.vat().outputFluid(Fluid.of('tfc:tallow',100)).inputs('butcher:animalfat', Fluid.of('minecraft:water', 100))//获取蜡质
  

    //安山合金新配方
   // event.shapeless(Item.of('create:andesite_alloy',3),['3x tfc:rock/loose/andesite','#forge:tools/hammers','tfc:metal/ingot/cast_iron']).damageIngredient({tag:'#forge:tools/hammers'},3)//铸铁
    //event.shapeless(Item.of('create:andesite_alloy',1),['tfc:rock/loose/andesite','#forge:tools/hammers','minecraft:iron_nugget']).damageIngredient({tag:'#forge:tools/hammers'},3)//锻铁
   // event.shapeless(Item.of('create:andesite_alloy',1),['tfc:rock/loose/andesite','#forge:tools/hammers','2x create:zinc_nugget']).damageIngredient({tag:'#forge:tools/hammers'},3)//锌





    //帽子包
    event.shapeless(Item.of('simplehats:hatbag_common'),[Item.of('minecraft:leather_helmet'),'minecraft:leather'])
    event.shapeless(Item.of('simplehats:hatbag_uncommon'),['tfc:gem/pyrite','minecraft:leather'])
    event.shapeless(Item.of('simplehats:hatbag_rare'),['tfc:gem/diamond','minecraft:leather'])
    event.shapeless(Item.of('simplehats:hatbag_epic'),['tfc:gem/amethyst','tfc:silk_cloth'])
    event.shapeless(Item.of('simplehats:hatbag_halloween'),['tfc:pumpkin','tfc:burlap_cloth'])
    event.shapeless(Item.of('simplehats:hatbag_summer'),['tfc:melon','tfc:burlap_cloth'])
    event.shapeless(Item.of('simplehats:hatbag_easter'),['minecraft:egg','tfc:burlap_cloth'])
    event.shapeless(Item.of('simplehats:hatbag_festive'),['minecraft:snowball','tfc:burlap_cloth'])
    


   

    //基础炼矿
    event.recipes.tfc.heating('tfc:ore/poor_native_copper', 1083).resultFluid(Fluid.of('tfc:metal/copper', 10))
    event.recipes.tfc.heating('tfc:ore/normal_native_copper', 1083).resultFluid(Fluid.of('tfc:metal/copper', 20))   
    event.recipes.tfc.heating('tfc:ore/rich_native_copper', 1083).resultFluid(Fluid.of('tfc:metal/copper', 30))//铜

    event.recipes.tfc.heating('tfc:ore/poor_native_silver', 961).resultFluid(Fluid.of('tfc:metal/silver', 10))
    event.recipes.tfc.heating('tfc:ore/normal_native_silver', 961).resultFluid(Fluid.of('tfc:metal/silver', 20))   
    event.recipes.tfc.heating('tfc:ore/rich_native_silver', 961).resultFluid(Fluid.of('tfc:metal/silver', 30))//银

    event.recipes.tfc.heating('tfc:ore/poor_hematite', 1538).resultFluid(Fluid.of('tfc:metal/cast_iron', 10))
    event.recipes.tfc.heating('tfc:ore/normal_hematite', 1538).resultFluid(Fluid.of('tfc:metal/cast_iron', 20))   
    event.recipes.tfc.heating('tfc:ore/rich_hematite', 1538).resultFluid(Fluid.of('tfc:metal/cast_iron', 30))//赤铁

    event.recipes.tfc.heating('tfc:ore/poor_native_gold', 1064).resultFluid(Fluid.of('tfc:metal/gold', 10))
    event.recipes.tfc.heating('tfc:ore/normal_native_gold', 1064).resultFluid(Fluid.of('tfc:metal/gold', 20))   
    event.recipes.tfc.heating('tfc:ore/rich_native_gold', 1064).resultFluid(Fluid.of('tfc:metal/gold', 30))//金

    event.recipes.tfc.heating('tfc:ore/poor_bismuthinite', 271).resultFluid(Fluid.of('tfc:metal/bismuth', 10))
    event.recipes.tfc.heating('tfc:ore/normal_bismuthinite', 271).resultFluid(Fluid.of('tfc:metal/bismuth', 20))   
    event.recipes.tfc.heating('tfc:ore/rich_bismuthinite', 271).resultFluid(Fluid.of('tfc:metal/bismuth', 30))//铋

    event.recipes.tfc.heating('tfc:ore/poor_garnierite',1445).resultFluid(Fluid.of('tfc:metal/nickel', 10))
    event.recipes.tfc.heating('tfc:ore/normal_garnierite', 1445).resultFluid(Fluid.of('tfc:metal/nickel', 20))   
    event.recipes.tfc.heating('tfc:ore/rich_garnierite', 1445).resultFluid(Fluid.of('tfc:metal/nickel', 30))//绿镍
    
    event.recipes.tfc.heating('tfc:ore/poor_malachite', 1083).resultFluid(Fluid.of('tfc:metal/copper', 10))
    event.recipes.tfc.heating('tfc:ore/normal_malachite', 1083).resultFluid(Fluid.of('tfc:metal/copper', 20))   
    event.recipes.tfc.heating('tfc:ore/rich_malachite', 1083).resultFluid(Fluid.of('tfc:metal/copper', 30))//孔雀石

    event.recipes.tfc.heating('tfc:ore/poor_cassiterite', 231).resultFluid(Fluid.of('tfc:metal/tin', 10))
    event.recipes.tfc.heating('tfc:ore/normal_cassiterite', 231).resultFluid(Fluid.of('tfc:metal/tin', 20))   
    event.recipes.tfc.heating('tfc:ore/rich_cassiterite', 231).resultFluid(Fluid.of('tfc:metal/tin', 30))//锡石
    
    event.recipes.tfc.heating('tfc:ore/poor_tetrahedrite', 1083).resultFluid(Fluid.of('tfc:metal/copper', 10))
    event.recipes.tfc.heating('tfc:ore/normal_tetrahedrite', 1083).resultFluid(Fluid.of('tfc:metal/copper', 20))   
    event.recipes.tfc.heating('tfc:ore/rich_tetrahedrite', 1083).resultFluid(Fluid.of('tfc:metal/copper', 30))//黝铜矿

    event.recipes.tfc.heating('tfc:ore/poor_limonite', 1538).resultFluid(Fluid.of('tfc:metal/cast_iron', 10))
    event.recipes.tfc.heating('tfc:ore/normal_limonite', 1538).resultFluid(Fluid.of('tfc:metal/cast_iron', 20))   
    event.recipes.tfc.heating('tfc:ore/rich_limonite', 1538).resultFluid(Fluid.of('tfc:metal/cast_iron', 30))//褐铁矿

    event.recipes.tfc.heating('tfc:ore/poor_magnetite', 1538).resultFluid(Fluid.of('tfc:metal/cast_iron', 10))
    event.recipes.tfc.heating('tfc:ore/normal_magnetite', 1538).resultFluid(Fluid.of('tfc:metal/cast_iron', 20))   
    event.recipes.tfc.heating('tfc:ore/rich_magnetite', 1538).resultFluid(Fluid.of('tfc:metal/cast_iron', 30))//磁铁矿

    event.recipes.tfc.heating('tfc:ore/poor_sphalerite', 419).resultFluid(Fluid.of('tfc:metal/zinc', 10))
    event.recipes.tfc.heating('tfc:ore/normal_sphalerite', 419).resultFluid(Fluid.of('tfc:metal/zinc', 20))   
    event.recipes.tfc.heating('tfc:ore/rich_sphalerite', 419).resultFluid(Fluid.of('tfc:metal/zinc', 30))//闪锌


    //获取树皮
    const woodTypes = ['acacia','ash','aspen','birch','blackwood','chestnut','douglas_fir','hickory','kapok','mangrove','maple','oak','palm','pine','rosewood','sequoia','spruce','sycamore','white_cedar','willow',];
    const adcwoodTypes = ['baobab','black_oak','cypress','eucalyptus','fig','gum_arabic','hevea','ipe','ironwood','mahogany','poplar','rainbow_eucalyptus','redcedar','rubber_fig','teak','tualang',];
  
 
  woodTypes.forEach(woodType => {
      event.shapeless(Item.of('farmersdelight:tree_bark', 1), [
          `tfc:wood/log/${woodType}`,
          '#tfc:knives'
      ])
     .replaceIngredient({ item: `tfc:wood/log/${woodType}` }, `tfc:wood/stripped_log/${woodType}`)
     .damageIngredient({ tag: '#tfc:knives' }, 2);
     
  });
  adcwoodTypes.forEach(adcwoodTypes => {
    event.shapeless(Item.of('farmersdelight:tree_bark', 1), [
      `afc:wood/log/${adcwoodTypes}`,
      '#tfc:knives'
  ])
      .replaceIngredient({ item: `afc:wood/log/${adcwoodTypes}` }, `afc:wood/stripped_log/${adcwoodTypes}`)
      .damageIngredient({ tag: '#tfc:knives' }, 2);

    
  });
    
    

   event.forEachRecipe(//所有肉的烤制配方
        {       
            mod:'butcher',
            
            type:"smoking"
            //output: '#forge:meats'
        }, r => {   
            var cookmeat_id = r.getOriginalRecipeResult().getId()
            var meat_id = r.getOriginalRecipeIngredients()[0].getItemIds()[0]
           
        
            event.recipes.tfc.heating(meat_id, 200).resultItem(cookmeat_id)
    })

    event.shaped('create:empty_blaze_burner', [
      'a a', 
      'bcb', 
      'ded'
  ], {
      a:'minecraft:blaze_rod',
      b:'tfc:metal/rod/wrought_iron',
      c:'#forge:stone_bricks',
      d:'tfc:metal/sheet/wrought_iron',
      e:'tfc:metal/double_sheet/wrought_iron'
  })//烈焰人燃烧室
  event.custom({"type": "tfc:heating","ingredient": {"item": 'create:empty_blaze_burner'},"result_item": {"item": 'create:blaze_burner'},"temperature": 1538})//烈焰人燃烧室
  event.custom({//海带烧
    "type": "tfc:heating",
    "ingredient": {"tag": 'tfc:plants/kelp'},
    "result_item": {"item": "tfc:food/dried_kelp"},
    "temperature": 200
  })
  event.custom({//海带烧
    "type": "tfc:heating",
    "ingredient": {"item": 'tfc:plant/laminaria'},
    "result_item": {"item": "tfc:food/dried_kelp"},
    "temperature": 200
  })
 
  
  const inputcailiao='tfc:metal/sheet/black_steel'
  create.sequenced_assembly('kubejs:basic_crystal_pannel','tfc:metal/sheet/black_steel',
   [ create.deploying(inputcailiao,[inputcailiao,'create:andesite_alloy']),
    create.pressing(inputcailiao,inputcailiao),
    create.deploying(inputcailiao,[inputcailiao,'create_new_age:copper_circuit']),
    create.deploying(inputcailiao,[inputcailiao,'create:precision_mechanism']),
    create.deploying(inputcailiao,[inputcailiao,'create:electron_tube']),
    create.pressing(inputcailiao,inputcailiao)]
  ).transitionalItem(inputcailiao).loops(2)//基础晶体面板
  create.sequenced_assembly('kubejs:moon_crystal_panel','tfc:metal/sheet/black_steel',
    [ create.deploying(inputcailiao,[inputcailiao,'tfc:metal/double_sheet/brass']),
     create.deploying(inputcailiao,[inputcailiao,'immersiveengineering:circuit_board']),
     create.deploying(inputcailiao,[inputcailiao,'create_new_age:copper_circuit']),
     create.deploying(inputcailiao,[inputcailiao,'create:precision_mechanism']),
     create.deploying(inputcailiao,[inputcailiao,'create:electron_tube']),
     create.pressing(inputcailiao,inputcailiao)]
   ).transitionalItem(inputcailiao).loops(2)//月球晶体面板
   create.sequenced_assembly('kubejs:hologram_frontpanel','tfc:metal/sheet/black_steel',
    [ create.deploying(inputcailiao,[inputcailiao,'tfc:metal/double_sheet/wrought_iron']),
     create.deploying(inputcailiao,[inputcailiao,'mekanism:elite_control_circuit']),
     create.deploying(inputcailiao,[inputcailiao,'ae2:printed_calculation_processor']),
     create.deploying(inputcailiao,[inputcailiao,'ae2:printed_engineering_processor']),
     create.deploying(inputcailiao,[inputcailiao,'ad_astra:photovoltaic_etrium_cell']),
     create.pressing(inputcailiao,inputcailiao)]
   ).transitionalItem(inputcailiao).loops(2)//六方全息面板
 


   //TFC
   event.recipes.tfc.knapping('kubejs:unfired_mold_mechanical', 'tfc:clay', [
    'XXXXX', 
    'X X X', 
    'X X X', 
    'X X X', 
    'XXXXX']).outsideSlotRequired(false)
        event.recipes.tfc.heating('kubejs:unfired_mold_mechanical', 1500).resultItem('kubejs:mold_mechanical')//零件模具
        event.recipes.tfc.casting('2x tfc:brass_mechanisms', 'kubejs:mold_mechanical', TFC.fluidStackIngredient('tfc:metal/brass', 100), 1)
        event.recipes.tfc.casting('4x firmaciv:copper_bolt', 'kubejs:mold_mechanical', TFC.fluidStackIngredient('tfc:metal/copper', 100), 1)
        event.recipes.tfc.heating('tfc:brass_mechanisms', 940).resultFluid(Fluid.of('tfc:metal/brass', 50))//黄铜机件融化

        event.recipes.tfc.welding('tfc:metal/double_ingot/cast_iron','tfc:metal/ingot/cast_iron', 'tfc:metal/ingot/cast_iron')//铸铁焊接



 




  
     
 
})
//沃土系数更改
ServerEvents.recipes(e => {
  const CROP_GROWTH_TIME_MULTIPLIER = 0.8;// 沃土加速系数，暂定 0.8
  const BASE_GROWTH_TIME = 12800;// 基础生长时间
  const ADJUSTED_GROWTH_TIME = BASE_GROWTH_TIME * CROP_GROWTH_TIME_MULTIPLIER;// 计算调整后的生长时间
  const RICH_SOIL = 'farmersdelight:rich_soil';// 沃土土壤类型
  
  const crops = [// 定义作物列表，每个作物包含名称、产出物品、种子物品和作物方块
      { name: 'wheat', product: 'tfc:food/wheat', seed: 'tfc:seeds/wheat', cropBlock: 'tfc:crop/wheat' },
      { name: 'tomato', product: 'tfc:food/tomato', seed: 'tfc:seeds/tomato', cropBlock: 'tfc:crop/tomato' },
      { name: 'sugarcane', product: 'tfc:food/sugarcane', seed: 'tfc:seeds/sugarcane', cropBlock: 'tfc:crop/sugarcane' },
      { name: 'squash', product: 'tfc:food/squash', seed: 'tfc:seeds/squash', cropBlock: 'tfc:crop/squash' },
      { name: 'soybean', product: 'tfc:food/soybean', seed: 'tfc:seeds/soybean', cropBlock: 'tfc:crop/soybean' },
      { name: 'rye', product: 'tfc:food/rye', seed: 'tfc:seeds/rye', cropBlock: 'tfc:crop/rye' },
      { name: 'rice', product: 'tfc:food/rice', seed: 'tfc:seeds/rice', cropBlock: 'tfc:crop/rice' },
      { name: 'pumpkin', product: 'tfc:pumpkin', seed: 'tfc:seeds/pumpkin', cropBlock: 'tfc:crop/pumpkin' },
      { name: 'potato', product: 'tfc:food/potato', seed: 'tfc:seeds/potato', cropBlock: 'tfc:crop/potato' },
      { name: 'onion', product: 'tfc:food/onion', seed: 'tfc:seeds/onion', cropBlock: 'tfc:crop/onion' },
      { name: 'oat', product: 'tfc:food/oat', seed: 'tfc:seeds/oat', cropBlock: 'tfc:crop/oat' },
      { name: 'melon', product: 'tfc:melon', seed: 'tfc:seeds/melon', cropBlock: 'tfc:crop/melon' },
      { name: 'maize', product: 'tfc:food/maize', seed: 'tfc:seeds/maize', cropBlock: 'tfc:crop/maize' },
      { name: 'jute', product: 'tfc:jute', seed: 'tfc:seeds/jute', cropBlock: 'tfc:crop/jute' },
      { name: 'green_bean', product: 'tfc:food/green_bean', seed: 'tfc:seeds/green_bean', cropBlock: 'tfc:crop/green_bean' },
      { name: 'garlic', product: 'tfc:food/garlic', seed: 'tfc:seeds/garlic', cropBlock: 'tfc:crop/garlic' },
      { name: 'carrot', product: 'tfc:food/carrot', seed: 'tfc:seeds/carrot', cropBlock: 'tfc:crop/carrot' },
      { name: 'cabbage', product: 'tfc:food/cabbage', seed: 'tfc:seeds/cabbage', cropBlock: 'tfc:crop/cabbage' },
      { name: 'beet', product: 'tfc:food/beet', seed: 'tfc:seeds/beet', cropBlock: 'tfc:crop/beet' },
      { name: 'barley', product: 'tfc:food/barley', seed: 'tfc:seeds/barley', cropBlock: 'tfc:crop/barley' }
  ];
  
    crops.forEach(crop => {
        e.custom({
            "type": "immersiveengineering:cloche",
            "results": [
                { "item": crop.product, "count": 2 },
                { "item": crop.seed }
            ],
            "input": { "item": crop.seed },
            "soil": { "item": RICH_SOIL },
            "time": ADJUSTED_GROWTH_TIME,
            "render": { "type": "crop", "block": crop.cropBlock }
        });
        console.log(`为 ${crop.name} 创建了种植配方`);
    });
})
//绑定和tag修改
ServerEvents.tags('minecraft:item', event => {
  // 标签id，物品id
  event.remove("bsa:bindings/strong", 'tfc:jute_fiber');//移除完美绑定
  event.remove("bsa:bindings/strong", '#forge:plant_fiber');
  event.remove("bsa:bindings/strong", '#forge:string');
  event.remove("bsa:bindings/strong", 'tfc:glue');
  
  



  
  event.add("bsa:bindings/medium", 'minecraft:slime_ball');//合格粘液球
  event.add("bsa:bindings/medium", 'minecraft:string');//合格，线
  event.add("bsa:bindings/medium", 'tfc:glue');//合格
  event.add("bsa:bindings/medium", 'tfc:wool_yarn');//合格
  event.add("bsa:bindings/medium", 'animaltrap:twine');//合格

  event.add("bsa:bindings/weak", 'htm:plant_string');//满耐久
  event.add("bsa:bindings/weak", '#forge:fiber_hemp');//满耐久

  event.add("bsa:bindings/strong", 'bsa:sinew_string');//完美
  event.add("bsa:bindings/strong", 'firmaciv:rope_coil');//完美

  

  event.add('tfc:any_knapping', 'minecraft:diamond');//钻石上可以敲的标签
  event.add('tfc:any_knapping', 'kubejs:obsidian_shards');//钻石上可以敲的标签
  //event.add('kubejs:diamond', 'minecraft:diamond');//钻石上可以敲的标签
  

 






})
//刷铁机产线
ServerEvents.recipes(event => { 
  event.remove({id:"create:splashing/gravel"})
  const create = event.recipes.create
create.splashing([Item.of('minecraft:flint').withChance(0.25),Item.of('tfc:ore/small_limonite').withChance(0.12)],'minecraft:gravel')
create.splashing([Item.of('minecraft:flint').withChance(0.25),Item.of('tfc:ore/small_limonite').withChance(0.12)],'#tfc:rock/gravel')

//create.crushing([Item.of('minecraft:flint').withChance(0.25),Item.of('tfc:ore/small_limonite').withChance(0.1)],"#forge:gravel")
  // 定义生成生铁液体合成配方的函数
function createCastIronMixing(fluidAmount, oreItem) {
try {
    create.mixing(Fluid.of('tfc:metal/cast_iron', fluidAmount), [oreItem]).heated();
} catch (error) {
    console.error(`生成 ${oreItem} 对应的生铁液体合成配方时出错:`, error);
}
}

// 定义不同品质矿石对应的液体量
const oreAmountMap = {
'small': 5,
'poor': 10,
'normal': 20,
'rich': 30
};

// 定义不同类型的铁矿石
const ironOres = ['limonite', 'hematite', 'magnetite'];

// 遍历不同品质和类型的铁矿石进行合成操作
Object.keys(oreAmountMap).forEach(quality => {
const fluidAmount = oreAmountMap[quality];
ironOres.forEach(ore => {
    const oreItem = `tfc:ore/${quality}_${ore}`;
    createCastIronMixing(fluidAmount, oreItem);
});
});
const oreAmountMap2 = {
'powder': 5,
'tfcorewashing:pellet': 20,
'tfcorewashing:briquet': 80,
};
Object.keys(oreAmountMap2).forEach(quality => {
const fluidAmount = oreAmountMap2[quality];
ironOres.forEach(ore => {
    const oreItem = `${quality}_${ore}`;
    createCastIronMixing(fluidAmount, oreItem);
});
});
  create.mixing(Fluid.of('tfc:metal/cast_iron',100),['tfc:metal/ingot/cast_iron']).heated()
//锻造铁锭
create.sequenced_assembly('tfc:refined_iron_bloom','tfc:raw_iron_bloom',
  [create.pressing('tfc:raw_iron_bloom','tfc:raw_iron_bloom'),
   create.pressing('tfc:raw_iron_bloom','tfc:raw_iron_bloom'),
   create.pressing('tfc:raw_iron_bloom','tfc:raw_iron_bloom'),
   create.pressing('tfc:raw_iron_bloom','tfc:raw_iron_bloom'),
  ]
 ).transitionalItem('tfc:raw_iron_bloom').loops(2)//生铁方胚=>精铁方胚

create.sequenced_assembly('tfc:metal/ingot/wrought_iron','tfc:refined_iron_bloom',
  [create.pressing('tfc:refined_iron_bloom','tfc:refined_iron_bloom'),
   create.pressing('tfc:refined_iron_bloom','tfc:refined_iron_bloom'),
   create.pressing('tfc:refined_iron_bloom','tfc:refined_iron_bloom'),
   create.pressing('tfc:refined_iron_bloom','tfc:refined_iron_bloom'),
  ]
 ).transitionalItem('tfc:refined_iron_bloom').loops(2)//精铁方胚=>锻铁

 create.sequenced_assembly('tfc:metal/ingot/wrought_iron','tfc:refined_iron_bloom',
  [create.pressing('tfc:refined_iron_bloom','tfc:refined_iron_bloom'),
   create.pressing('tfc:refined_iron_bloom','tfc:refined_iron_bloom'),
   create.pressing('tfc:refined_iron_bloom','tfc:refined_iron_bloom'),
   create.pressing('tfc:refined_iron_bloom','tfc:refined_iron_bloom'),
  ]
 ).transitionalItem('tfc:refined_iron_bloom').loops(2)//高碳钢=>钢







 event.recipes.create.sequenced_assembly( // 使用 Create 模组的顺序组装配方功能
  'tfc:metal/ingot/steel', // 最终产出物品为 TFC 模组的钢锭
  'tfc:metal/ingot/high_carbon_steel', // 初始物品为 TFC 模组的高碳钢锭
  [
      event.recipes.createDeploying('tfc:metal/ingot/high_carbon_steel', ['tfc:metal/ingot/high_carbon_steel', 'tfc:metal/hammer/blue_steel']), // 将高碳钢锭和蓝钢锤作用于高碳钢锭
      event.recipes.createDeploying('tfc:metal/ingot/high_carbon_steel', ['tfc:metal/ingot/high_carbon_steel', 'tfc:metal/hammer/red_steel']) // 第二将高碳钢锭和红钢锤作用于高碳钢锭
  ]
).transitionalItem('tfc:metal/ingot/high_carbon_steel').loops(2); // 过渡物品为高碳钢锭，整个序列循环执行 5 次

event.recipes.create.sequenced_assembly( // 使用 Create 模组的顺序组装配方功能
  'tfc:metal/ingot/high_carbon_steel', // 最终产出物品为 TFC 模组的高碳钢锭
  'tfc:metal/ingot/pig_iron', // 初始物品为 TFC 模组的生铁锭
  [
      event.recipes.createDeploying('tfc:metal/ingot/pig_iron', ['tfc:metal/ingot/pig_iron', 'tfc:metal/hammer/blue_steel']), // 将生铁锭和蓝钢锤作用于生铁锭
      event.recipes.createDeploying('tfc:metal/ingot/pig_iron', ['tfc:metal/ingot/pig_iron', 'tfc:metal/hammer/red_steel']) // 将生铁锭和红钢锤作用于生铁锭
  ]
).transitionalItem('tfc:metal/ingot/pig_iron').loops(2); // 过渡物品为生铁锭，整个序列循环执行 5 次


})
//弓箭工艺
ServerEvents.recipes(event => { 
  const INITIAL_HEATING_TEMPERATURE = 200;
// 定义每次温度递增常量
const TEMPERATURE_INCREMENT = 30;
// 定义大桶浸油时间，8 分钟，假设游戏刻速为 20 刻/秒，8 分钟就是 8 * 60 * 20 = 9600 刻
const BARREL_DURATION = 9600;

  
  
    // 泡过水的弓臂 -> 正在烧制的弓臂
    event.recipes.tfc.heating('kubejs:soaked_bow_arm', INITIAL_HEATING_TEMPERATURE)
      .resultItem('kubejs:burning_bow_arm');
 
    // 正在烧制的弓臂 -> 烧制正好的弓臂
    event.recipes.tfc.heating('kubejs:burning_bow_arm', INITIAL_HEATING_TEMPERATURE + TEMPERATURE_INCREMENT)
      .resultItem('kubejs:perfectly_burned_bow_arm');
 
    // 烧制正好的弓臂 -> 烧过了头的弓臂
    event.recipes.tfc.heating('kubejs:perfectly_burned_bow_arm', INITIAL_HEATING_TEMPERATURE + 2 * TEMPERATURE_INCREMENT)
      .resultItem('kubejs:overburned_bow_arm');
 
    // 烧过了头的弓臂 -> 烧糊了的弓臂
    event.recipes.tfc.heating('kubejs:overburned_bow_arm', INITIAL_HEATING_TEMPERATURE + 3 * TEMPERATURE_INCREMENT)
      .resultItem('kubejs:charred_bow_arm');
 
    // 正在烧制的弓臂浸油配方，锻造奖励设为 2
    event.recipes.tfc.barrel_sealed(BARREL_DURATION)
      .inputItem('kubejs:burning_bow_arm')
      .inputFluid(Fluid.of('tfc:oil', 1000))
      .outputItem(Item.of("kubejs:oiled_bow_arm", '{"tfc:forging_bonus":2}'))
      .sound('minecraft:block.barrel.open');
 
    // 烧制正好的弓臂浸油配方，锻造奖励设为 4
    event.recipes.tfc.barrel_sealed(BARREL_DURATION)
      .inputItem('kubejs:perfectly_burned_bow_arm')
      .inputFluid(Fluid.of('tfc:oil', 1000))
      .outputItem(Item.of("kubejs:oiled_bow_arm", '{"tfc:forging_bonus":4}'))
      .sound('minecraft:block.barrel.open');
 
    // 烧过了头的弓臂浸油配方，锻造奖励设为 1
    event.recipes.tfc.barrel_sealed(BARREL_DURATION)
      .inputItem('kubejs:overburned_bow_arm')
      .inputFluid(Fluid.of('tfc:oil', 1000))
      .outputItem(Item.of("kubejs:oiled_bow_arm", '{"tfc:forging_bonus":1}'))
      .sound('minecraft:block.barrel.open');
 
    // 烧糊了的弓臂浸油配方，锻造奖励设为 0
    event.recipes.tfc.barrel_sealed(BARREL_DURATION)
      .inputItem('kubejs:charred_bow_arm')
      .inputFluid(Fluid.of('tfc:oil', 1000))
      .outputItem(Item.of("kubejs:oiled_bow_arm", '{"tfc:forging_bonus":0}'))
      .sound('minecraft:block.barrel.open');
})
//钻石，黑曜石工具
ServerEvents.recipes(event => {
  const MODID = "kubejs:";

  // 定义钻石工具部件的敲制配方信息
  const diamondToolPartRecipes = [
      {
          result: `${MODID}diamond_axe_head`,
          knappingType: 'kubejs:diamond',
          pattern: [" X   ", "XXXX ", "XXXXX", "XXXX ", " X   "],
          ingredient: Item.of("minecraft:diamond")
      },
      {
          result: `${MODID}diamond_javelin_head`,
          knappingType: 'kubejs:diamond',
          pattern: ["XXX  ", "XXXX ", "XXXXX", " XXX ", "  X  "],
          ingredient: Item.of("minecraft:diamond")
      },
      {
          result: `${MODID}diamond_hammer_head`,
          knappingType: 'kubejs:diamond',
          pattern: ["XXXXX", "XXXXX", "  X  "],
          ingredient: Item.of("minecraft:diamond")
      },
      {
          result: `${MODID}diamond_hoe_head`,
          knappingType: 'kubejs:diamond',
          pattern: ["XXXXX", "XX   ", "     ", "XXXXX", "XX   "],
          ingredient: Item.of("minecraft:diamond")
      },
      {
          result: `${MODID}diamond_shovel_head`,
          knappingType: 'kubejs:diamond',
          pattern: ["XXX", "XXX", "XXX", "XXX", " X "],
          ingredient: Item.of("minecraft:diamond")
      },
      {
          result: `${MODID}diamond_knife_blade`,
          knappingType: 'kubejs:diamond',
          pattern: ["X  X ", "XX XX", "XX XX", "XX XX", "XX XX"],
          ingredient: Item.of("minecraft:diamond")
      }
  ];

  // 注册钻石工具部件的敲制配方
  diamondToolPartRecipes.forEach(recipe => {
      event.recipes.tfc.knapping(recipe.result, recipe.knappingType, recipe.pattern)
         .ingredient(recipe.ingredient)
         .outsideSlotRequired(false);
  });

  // 定义黑曜石工具部件的敲制配方信息
  const obsidianToolPartRecipes = [
      {
          result: `${MODID}obsidian_axe_head`,
          knappingType: 'kubejs:obsidian',
          pattern: [" X   ", "XXXX ", "XXXXX", "XXXX ", " X   "],
          ingredient: Item.of('kubejs:obsidian_shards')
      },
      {
          result: `${MODID}obsidian_javelin_head`,
          knappingType: 'kubejs:obsidian',
          pattern: ["XXX  ", "XXXX ", "XXXXX", " XXX ", "  X  "],
          ingredient: Item.of('kubejs:obsidian_shards')
      },
      {
          result: `${MODID}obsidian_hammer_head`,
          knappingType: 'kubejs:obsidian',
          pattern: ["XXXXX", "XXXXX", "  X  "],
          ingredient: Item.of('kubejs:obsidian_shards')
      },
      {
          result: `${MODID}obsidian_hoe_head`,
          knappingType: 'kubejs:obsidian',
          pattern: ["XXXXX", "XX   ", "     ", "XXXXX", "XX   "],
          ingredient: Item.of('kubejs:obsidian_shards')
      },
      {
          result: `${MODID}obsidian_shovel_head`,
          knappingType: 'kubejs:obsidian',
          pattern: ["XXX", "XXX", "XXX", "XXX", " X "],
          ingredient: Item.of('kubejs:obsidian_shards')
      },
      {
          result: `${MODID}obsidian_knife_blade`,
          knappingType: 'kubejs:obsidian',
          pattern: ["X  X ", "XX XX", "XX XX", "XX XX", "XX XX"],
          ingredient: Item.of('kubejs:obsidian_shards')
      }
  ];

  // 注册黑曜石工具部件的敲制配方
  obsidianToolPartRecipes.forEach(recipe => {
      event.recipes.tfc.knapping(recipe.result, recipe.knappingType, recipe.pattern)
         .ingredient(recipe.ingredient)
         .outsideSlotRequired(false);
  });
})
//辊压机碎矿一次处理
ServerEvents.recipes(event => {
  const create = event.recipes.create
  const double_ingots = [ 'bismuth', 'bismuth_bronze','black_bronze', 'black_steel', 'blue_steel',
     'brass', 'bronze', 'cast_iron','copper', 'gold', 'nickel','steel','sterling_silver','wrought_iron', 'zinc','tin','red_steel', 'rose_gold','silver'];
  const fdouble_ingots = ['chromium', 'stainless_steel'];
  const imdouble_ingots = ['aluminum','uranium','constantan','electrum','lead'];

//动力辊压机压板
double_ingots.forEach(di=>{
   let inputm =`tfc:metal/double_ingot/${di}`
   let outputm =`tfc:metal/sheet/${di}`
 event.custom(
  {
    "conditions": [{"type": "forge:mod_loaded", "modid": "create"}],
    "type": "create:sequenced_assembly",
    "ingredient": {
      "type": "tfc:heatable",
      "min_temp": 500,
      "ingredient": {"item": inputm}
    },
    "transitionalItem": {"item": inputm},
    "sequence": [
      {"type": "create:pressing", "ingredients": [{"item": inputm}], "results": [{"item": inputm}]},
      {"type": "create:pressing", "ingredients": [{"item": inputm}], "results": [{"item": inputm}]},
      {"type": "create:pressing", "ingredients": [{"item": inputm}], "results": [{"item": inputm}]},
    ],
    "results": [{"item": outputm}],
    "loops": 2
  })
})
fdouble_ingots.forEach(di=>{
    let inputm =`firmalife:metal/double_ingot/${di}`
    let outputm =`firmalife:metal/sheet/${di}`
    event.custom(
      {
        "conditions": [{"type": "forge:mod_loaded", "modid": "create"}],
        "type": "create:sequenced_assembly",
        "ingredient": {
          "type": "tfc:heatable",
          "min_temp": 500,
          "ingredient": {"item": inputm}
        },
        "transitionalItem": {"item": inputm},
        "sequence": [
          {"type": "create:pressing", "ingredients": [{"item": inputm}], "results": [{"item": inputm}]},
          {"type": "create:pressing", "ingredients": [{"item": inputm}], "results": [{"item": inputm}]},
          {"type": "create:pressing", "ingredients": [{"item": inputm}], "results": [{"item": inputm}]},
        ],
        "results": [{"item": outputm}],
        "loops": 2
      }) 
})
imdouble_ingots.forEach(di=>{
    let inputm =`tfc_ie_addon:metal/double_ingot/${di}`
    let outputm =`tfc_ie_addon:metal/sheet/${di}`
    event.custom(
      {
        "conditions": [{"type": "forge:mod_loaded", "modid": "create"}],
        "type": "create:sequenced_assembly",
        "ingredient": {
          "type": "tfc:heatable",
          "min_temp": 500,
          "ingredient": {"item": inputm}
        },
        "transitionalItem": {"item": inputm},
        "sequence": [
          {"type": "create:pressing", "ingredients": [{"item": inputm}], "results": [{"item": inputm}]},
          {"type": "create:pressing", "ingredients": [{"item": inputm}], "results": [{"item": inputm}]},
          {"type": "create:pressing", "ingredients": [{"item": inputm}], "results": [{"item": inputm}]},
        ],
        "results": [{"item": outputm}],
        "loops": 2
      }) 
})

//激光焊接-锭>双锭

double_ingots.forEach(di=>{
  const input1=`tfc:metal/ingot/${di}`
  const output1=`tfc:metal/double_ingot/${di}`
   create.sequenced_assembly(output1, input1,
    [create.deploying(input1,[input1,input1]),
      event.custom({"type":"vintageimprovements:laser_cutting","ingredients": [{"item":  input1}],
        "results": [ {"item":  input1, "count": 1 }  ],"energy": 2000,"maxChargeRate": 50}),
     create.pressing( input1, input1),
    ]
   ).transitionalItem(input1).loops(1)//
  })
fdouble_ingots.forEach(di=>{
  const input1=`firmalife:metal/ingot/${di}`
  const output1=`firmalife:metal/double_ingot/${di}`
   create.sequenced_assembly(output1, input1,
    [create.deploying(input1,[input1,input1]),
      event.custom({"type":"vintageimprovements:laser_cutting","ingredients": [{"item":  input1}],
        "results": [ {"item":  input1, "count": 1 }  ],"energy": 2000,"maxChargeRate": 50}),
     create.pressing( input1, input1),
    ]
   ).transitionalItem(input1).loops(1)//
  })
imdouble_ingots.forEach(di=>{
  const input1 =`immersiveengineering:ingot_${di}`
  const output1=`tfc_ie_addon:metal/double_ingot/${di}`
   create.sequenced_assembly(output1, input1,
    [create.deploying(input1,[input1,input1]),
      event.custom({"type":"vintageimprovements:laser_cutting","ingredients": [{"item":  input1}],
        "results": [ {"item":  input1, "count": 1 }  ],"energy": 2000,"maxChargeRate": 50}),
     create.pressing( input1, input1),
    ]
   ).transitionalItem(input1).loops(1)
  })
//激光焊接-板>双板

double_ingots.forEach(di=>{
  const input1=`tfc:metal/sheet/${di}`
  const output1=`tfc:metal/double_sheet/${di}`
   create.sequenced_assembly(output1, input1,
    [create.deploying(input1,[input1,input1]),
      event.custom({"type":"vintageimprovements:laser_cutting","ingredients": [{"item":  input1}],
        "results": [ {"item":  input1, "count": 1 }  ],"energy": 2000,"maxChargeRate": 50}),
     create.pressing( input1, input1),
    ]
   ).transitionalItem(input1).loops(1)//
  })
fdouble_ingots.forEach(di=>{
  const input1=`firmalife:metal/sheet/${di}`
  const output1=`firmalife:metal/double_sheet/${di}`
   create.sequenced_assembly(output1, input1,
    [create.deploying(input1,[input1,input1]),
      event.custom({"type":"vintageimprovements:laser_cutting","ingredients": [{"item":  input1}],
        "results": [ {"item":  input1, "count": 1 }  ],"energy": 2000,"maxChargeRate": 50}),
     create.pressing( input1, input1),
    ]
   ).transitionalItem(input1).loops(1)//
  })
imdouble_ingots.forEach(di=>{
  const input1=`tfc_ie_addon:metal/sheet/${di}`
  const output1=`tfc_ie_addon:metal/double_sheet/${di}`
   create.sequenced_assembly(output1, input1,
    [create.deploying(input1,[input1,input1]),
      event.custom({"type":"vintageimprovements:laser_cutting","ingredients": [{"item":  input1}],
        "results": [ {"item":  input1, "count": 1 }  ],"energy": 2000,"maxChargeRate": 50}),
     create.pressing( input1, input1),
    ]
   ).transitionalItem(input1).loops(1)//
  })
  
   


})

