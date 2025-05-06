StartupEvents.registry("creative_mode_tab", e => {
   // e.create("wildfire:base").translationKey("itemGroup.wildfire.base").icon(()=>Item.of('kubejs:item/create/trachyandesite_alloy'))
    //e.create("wildfire:create").translationKey("itemGroup.wildfire.create").icon(()=>Item.of('kubejs:item/create/trachyandesite_alloy'))
  })
StartupEvents.modifyCreativeTab("wildfire:create", e => {
    e.add([
     'wildfire:trachyandesite_alloy',
     'wildfire:fan_blade',
     'wildfire:wrought_iron_pressing_head'
    ])
  })