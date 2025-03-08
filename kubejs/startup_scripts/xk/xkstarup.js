StartupEvents.registry('item', event => {
    event.create('brass_cartridge_nest').texture('kubejs:item/gun/brass_cartridge_nest'); // 黄铜弹巢
    event.create('cast_iron_firing_hammer').texture('kubejs:item/gun/cast_iron_firing_hammer'); // 铸铁击锤
    event.create('cast_iron_gun_barrel').texture('kubejs:item/gun/cast_iron_gun_barrel'); // 铸铁枪管
    event.create('standard_type_muzzle_brake_parts_steel').texture('kubejs:item/gun/standard_type_muzzle_brake_parts_steel'); // 制式制退器配件（钢）
    event.create('standard_type_muzzle_brake_parts_copper').texture('kubejs:item/gun/standard_type_muzzle_brake_parts_copper'); // 制式制退器配件（铜）
    event.create('standard_type_handguard_parts_steel').texture('kubejs:item/gun/standard_type_handguard_parts_steel'); // 制式护手配件（钢）
    event.create('standard_type_handguard_parts_copper').texture('kubejs:item/gun/standard_type_handguard_parts_copper'); // 制式护手配件（铜）
    event.create('standard_type_gun_body_parts_steel').texture('kubejs:item/gun/standard_type_gun_body_parts_steel'); // 制式枪身配件（钢）
    event.create('standard_type_gun_body_parts_copper').texture('kubejs:item/gun/standard_type_gun_body_parts_copper'); // 制式枪身配件（铜）
    event.create('standard_type_pistol_slide_parts_steel').texture('kubejs:item/gun/standard_type_pistol_slide_parts_steel'); // 制式手枪滑套配件（钢）
    event.create('standard_type_pistol_slide_parts_copper').texture('kubejs:item/gun/standard_type_pistol_slide_parts_copper'); // 制式手枪滑套配件（铜）
    event.create('standard_type_magazine_parts_steel').texture('kubejs:item/gun/standard_type_magazine_parts_steel'); // 制式弹匣配件（钢）
    event.create('standard_type_magazine_parts_copper').texture('kubejs:item/gun/standard_type_magazine_parts_copper'); // 制式弹匣配件（铜）
    event.create('standard_type_grip_parts_steel').texture('kubejs:item/gun/standard_type_grip_parts_steel'); // 制式握把配件（钢）
    event.create('standard_type_grip_parts_copper').texture('kubejs:item/gun/standard_type_grip_parts_copper'); // 制式握把配件（铜）
    event.create('standard_type_gunstock_parts_steel').texture('kubejs:item/gun/standard_type_gunstock_parts_steel'); // 制式枪托配件（钢）
    event.create('standard_type_gunstock_parts_copper').texture('kubejs:item/gun/standard_type_gunstock_parts_copper'); // 制式枪托配件（铜）
 


    event.create('mold_mechanical', 'tfc:mold').capacity(100).texture('kubejs:item/tfc/mold_mechanical')//零件模具
    event.create('unfired_mold_mechanical', 'basic').texture('kubejs:item/tfc/unfired_mold_mechanical')//没烧的零件模具

    

  // 快烧好的弓臂

 /* const bowArm = 'burned_bow_arm';
  const oiledBowArm = `oiled_${bowArm}`;

  // 注册普通弓臂物品
  event.create(bowArm)
    .displayName(`${bowArm.replace(/_/g, ' ')}`)
    .texture(`yourmodid:item/${bowArm}`);

  // 注册浸油弓臂物品
  event.create(oiledBowArm)
    .displayName(`浸油的 ${bowArm.replace(/_/g, ' ')}`)
    .texture(`yourmodid:item/${oiledBowArm}`);*/

    //黑曜石碎片
    event.create("obsidian_shards")
    .texture('kubejs:item/tfc/obsidian_shards');
    const $Item = Java.loadClass('net.minecraft.world.item.Item')
    const $Item$Properties = Java.loadClass('net.minecraft.world.item.Item$Properties')
    

    event.createCustom("kubejs:burned_bow_arm", () =>
        new JavaAdapter($Item, {
            /**
             * @param {Internal.ItemStack} stack
             * @param {Internal.Level} level
             * @param {Internal.Entity} entity
             * @param {number} slot
             * @param {boolean} isSelected
             */
            m_6883_: function(stack, level, entity, slot, isSelected) {
                let tag = stack.getOrCreateTag()
                if(!tag.contains('fired_bow')) 
                    tag.putInt('fired_bow', 0)
    
                var maxVal = tag.getInt('fired_bow')
                var currentVal = (stack.serializeNBT()['ForgeCaps']['tfc:item_heat']['heat'] - 200) / 30 + 1
    
                tag.putInt('fired_bow', Math.max(maxVal, currentVal))
            }
        }, new $Item$Properties())
    )


})


StartupEvents.registry("fluid",event=>{
    event.create("uncommon_ink")
    .thickTexture(0X266a1f)
    .noBlock()
    event.create("rare_ink")
    .thickTexture(0X22634d)
    .noBlock()
    event.create("epic_ink")
    .thickTexture(0Xcb40bf)
    .noBlock()
    event.create("legendary_ink")
    .thickTexture(0Xf9ad1c)
    .noBlock()
})
StartupEvents.registry("block",event=>{
    const color =["black","blue","cyan","green","lime","red","white","yellow"]
    const colorName=["黑色","蓝色","青色","绿色","黄绿色","红色","白色","黄色"]

    
    color.forEach((o, index) => {
        event.create(`mek_plastic_block/${o}_plastic_block`)
           .displayName(`${colorName[index]}塑料板`) 
           .noValidSpawns(false) // 上面是否生成怪物
           .hardness(0.3) // 硬度
           .lightLevel(1)
    });
})
StartupEvents.registry("item", event => {
    const MODID = "kubejs:"; 
    const toolParts = [
        "javelin_head",
        "hammer_head",
        "hoe_head",
        "axe_head",
        "shovel_head",
        "knife_blade"
    ];

    // 注册钻石材质的工具部件
    toolParts.forEach(part => {
        event.create(`${MODID}diamond_${part}`, "basic")
           .displayName(`diamond_${part.replace("_", "")}`)
           .maxStackSize(64) // 普通物品通常最大堆叠为 64
           .tag(`${MODID}tool_parts`)
           .texture(`kubejs:item/tfc/diamond/${part}`);
    });

    // 注册黑曜石材质的工具部件
    toolParts.forEach(part => {
        event.create(`${MODID}obsidian_${part}`, "basic")
           .displayName(`obsidian_${part.replace("_", "")}`)
           .maxStackSize(64)
           .tag(`${MODID}tool_parts`)
           .texture(`${MODID}item/tfc/obsidian/${part}`);
    });

    // 定义普通工具类型和对应的显示名称、默认耐久度等信息
    const commonToolTypes = [
        { type: "axe", displayName: "axe", diamondDurability: 600, obsidianDurability: 200 },
        { type: "hoe", displayName: "hoe", diamondDurability: 600, obsidianDurability: 200 },
        { type: "shovel", displayName: "shovel", diamondDurability: 600, obsidianDurability: 200 },
        { type: "tool", displayName: "knife", diamondDurability: 600, obsidianDurability: 200 }
    ];

    // 注册普通钻石工具
    commonToolTypes.forEach(tool => {
        let itemType = tool.type === "tool" ? "tfc:tool" : tool.type;
        let itemBuilder = event.create(MODID + `diamond_${tool.type}`, itemType)
           .displayName(`diamond_${tool.displayName}`)
           .maxDamage(tool.diamondDurability)
           .maxStackSize(1)
           .fireResistant(false)
           .tag(MODID + `${tool.type}s`)
           .texture(MODID + `item/tfc/diamond/${tool.type}`);

        // 如果是小刀，添加 knife 相关属性
        if (tool.type === "tool") {
            itemBuilder.knife();
            // 可根据需要自定义可挖掘方块标签
            itemBuilder.mineableBlocksTag(MODID + "mineable_with_custom_knife"); 
        }
    });

    // 注册普通黑曜石工具
    commonToolTypes.forEach(tool => {
        let itemType = tool.type === "tool" ? "tfc:tool" : tool.type;
        let itemBuilder = event.create(MODID + `obsidian_${tool.type}`, itemType)
           .displayName(`obsidian_${tool.displayName}`)
           .maxDamage(tool.obsidianDurability)
           .maxStackSize(1)
           .fireResistant(true)
           .tag(MODID + `${tool.type}s`)
           .texture(MODID + `item/tfc/obsidian/${tool.type}`);

        // 如果是小刀，添加 knife 相关属性
        if (tool.type === "tool") {
            itemBuilder.knife();
            // 可根据需要自定义可挖掘方块标签
            itemBuilder.mineableBlocksTag(MODID + "mineable_with_custom_knife"); 
        }
    });

    // 注册钻石锤子
    let diamondHammer = event.create(MODID + "diamond_hammer", "tfc:hammer")
       .displayName("diamond_hammer")
       .maxDamage(600)
       .maxStackSize(1)
       .fireResistant(false)
       .tag(MODID + "hammers")
       .texture(MODID + "item/tfc/diamond/hammer")
       .metalTexture(MODID + "block/trip_hammers/diamond");

    // 注册黑曜石锤子
    let obsidianHammer = event.create(MODID + "obsidian_hammer", "tfc:hammer")
       .displayName("obsidian_hammer")
       .maxDamage(200)
       .maxStackSize(1)
       .fireResistant(true)
       .tag(MODID + "hammers")
       .texture(MODID + "item/tfc/obsidian/hammer")
       .metalTexture(MODID + "block/trip_hammers/obsidian");

    // 标枪额外属性配置
    const javelinConfig = {
        thrownDamage: 9,
        skeletonWeapon: true,
        throwingModel: MODID + "models/item/throwing_javelin",
        guiModel: MODID + "models/item/gui_javelin"
    };

    // 注册钻石标枪
    let diamondJavelin = event.create(MODID + "diamond_javelin", "tfc:javelin")
       .displayName("diamond_javelin")
       .maxDamage(600)
       .maxStackSize(1)
       .fireResistant(false)
       .tag(MODID + "javelins")
       .texture(MODID + "item/tfc/diamond/javelin")
       .thrownDamage(6);

    if (javelinConfig.skeletonWeapon) {
        diamondJavelin.skeletonWeapon();
    }
    if (javelinConfig.throwingModel) {
        diamondJavelin.throwingModel(javelinConfig.throwingModel);
    }
    if (javelinConfig.guiModel) {
        diamondJavelin.guiModel(javelinConfig.guiModel);
    }

    // 注册黑曜石标枪
    let obsidianJavelin = event.create(MODID + "obsidian_javelin", "tfc:javelin")
       .displayName("obsidian_javelin")
       .maxDamage(200)
       .maxStackSize(1)
       .fireResistant(true)
       .tag(MODID + "javelins")
       .texture(MODID + "item/tfc/obsidian/javelin")
       .thrownDamage(5);

    if (javelinConfig.skeletonWeapon) {
        obsidianJavelin.skeletonWeapon();
    }
    if (javelinConfig.throwingModel) {
        obsidianJavelin.throwingModel(javelinConfig.throwingModel);
    }
    if (javelinConfig.guiModel) {
        obsidianJavelin.guiModel(javelinConfig.guiModel);
    }
});
//弓箭
StartupEvents.registry("item", event => {
    const ITEM_TEXTURE_PATH = "kubejs:item/tfc/";
 
    // 弓箭注册
    event.create("kubejs:unprocessed_bow_arm", "basic")
       .texture(ITEM_TEXTURE_PATH + "unprocessed_bow_arm");
 
    // 泡过水的弓臂
    event.create("kubejs:soaked_bow_arm", "basic")
       .texture(ITEM_TEXTURE_PATH + "soaked_bow_arm");
 
    // 正在烧制的弓臂
    event.create("kubejs:burning_bow_arm", "basic")
       .texture(ITEM_TEXTURE_PATH + "burning_bow_arm");
 
    // 烧制正好的弓臂
    event.create("kubejs:perfectly_burned_bow_arm", "basic")
       .texture(ITEM_TEXTURE_PATH + "perfectly_burned_bow_arm");
 
    // 烧过了头的弓臂
    event.create("kubejs:overburned_bow_arm", "basic")
       .texture(ITEM_TEXTURE_PATH + "overburned_bow_arm");
 
    // 烧糊了的弓臂
    event.create("kubejs:charred_bow_arm", "basic")
       .texture(ITEM_TEXTURE_PATH + "charred_bow_arm");
 
    // 浸过油的弓臂
    event.create("kubejs:oiled_bow_arm", "basic")
       .texture(ITEM_TEXTURE_PATH + "oiled_bow_arm");
 });
 