ServerEvents.recipes(event => {//岩石粉末当作模具
    event.recipes.tfc.casting('kubejs:trachyandesite_alloy','kubejs:rock_powder', TFC.fluidStackIngredient('tfc:metal/zinc', 100),1);
    event.replaceInput({input:'tfcorewashing:rock_powder'},'tfcorewashing:rock_powder','kubejs:rock_powder')//将这个岩石粉末替换掉其他的
    event.replaceInput({output:'tfcorewashing:rock_powder'},'tfcorewashing:rock_powder','kubejs:rock_powder')//将这个岩石粉末替换掉其他的

    event.recipes.tfc.anvil(
        // 输出：安山合金
        'create:andesite_alloy',
        
        // 输入：粗面安山岩合金
        'kubejs:trachyandesite_alloy',
        
        // 锻造规则：三次任意锤击
        [
            'hit_any',
            'hit_any',
            'hit_any'
        ]
    )
    .tier(1) // 设置最低砧等级为
    .bonus(true); // 启用锻造奖励

});
ServerEvents.recipes(event => {//焊接配方
  //event.recipes.tfc.welding('输出','输入1','输入2',砧等级);
  event.recipes.tfc.welding('create:propeller','wildfire:fan_blade','create:andesite_alloy',2);//焊接风扇
})
