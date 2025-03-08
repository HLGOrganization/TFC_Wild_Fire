ServerEvents.recipes(event => {
    const create = event.recipes.create

    event.remove({id:'tfc_ie_addon:crafting/steel_sheet_to_plate'})
    event.remove({id:'tfc_ie_addon:crafting/lead_sheet_to_plate'})
    event.remove({id:'tfc_ie_addon:crafting/nickel_sheet_to_plate'})
    event.remove({id:'tfc_ie_addon:crafting/copper_sheet_to_plate'})
    event.remove({id:'tfc_ie_addon:crafting/silver_sheet_to_plate'})
    event.remove({id:'tfc_ie_addon:crafting/wrought_iron_sheet_to_plate'})
    event.remove({id:'tfc_ie_addon:crafting/uranium_sheet_to_plate'})
    event.remove({id:'tfc_ie_addon:crafting/constantan_sheet_to_plate'})
    event.remove({id:'tfc_ie_addon:crafting/aluminum_sheet_to_plate'})
    event.remove({id:'tfc_ie_addon:crafting/electrum_sheet_to_plate'})
    event.remove({id:'tfc_ie_addon:crafting/gold_sheet_to_plate'})
    event.remove({id:'immersiveengineering:metalpress/plate_bronze'})
    event.remove({id:'immersiveengineering:metalpress/plate_constantan'})
    event.remove({id:'immersiveengineering:metalpress/plate_aluminum'})
    event.remove({id:'tfc_ie_addon:metalpress/plate_wrought_iron'})
    event.remove({id:'immersiveengineering:metalpress/plate_lead'})

    event.remove({id:'vintageimprovements:pressing/aluminum_ingot'})
    event.remove({id:'vintageimprovements:pressing/constantan_ingot'})
    event.remove({id:'vintageimprovements:pressing/uranium_ingot'})
    event.remove({id:'vintageimprovements:pressing/lead_ingot'})
    event.remove({id:'createaddition:pressing/electrum_ingot'})

    event.remove({type:"ad_astra:compressing",tag:'#forge:sheets'})
    event.remove({type:"create:pressing",input:'#forge:ingots',output:"#forge:sheets"})

   
  







})