StartupEvents.registry('item', event => {
    
    //岩石粉磨具
    event.create('rock_powder', 'tfc:mold').capacity(100).texture('kubejs:item/create/rock_powder')//岩石粉末模具
    event.create('trachyandesite_alloy', 'basic').texture('kubejs:item/create/trachyandesite_alloy')//粗安山合金

})