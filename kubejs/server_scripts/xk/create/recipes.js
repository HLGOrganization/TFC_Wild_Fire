ServerEvents.recipes(event => {//手动合成
    const create = event.recipes.create
    create.item_application("create:andesite_Chassis",['create:andesite_casing','#tfc:chisels'],600,"none",true)//手动合成安山机箱

    create.item_application('create:encased_fan',["create:andesite_Chassis",'wildfire:fan_blade'],600,"none",false)//手动合成鼓风机
    create.item_application('create:mechanical_press',["create:andesite_Chassis",'wildfire:wrought_iron_pressing_head'],600,"none",false)//手动合成辊压机
    create.item_application('create:mechanical_saw',["create:andesite_Chassis",'immersiveengineering:sawblade'],600,"none",false)//手动合成切割机
    create.item_application('create:mechanical_drill',["create:andesite_Chassis",'createoreexcavation:drill'],600,"none",false)//手动合成动力钻头
    create.item_application('create:mechanical_mixer',["create:andesite_Chassis",'create:whisk'],600,"none",false)//手动合成搅拌机


//草饲花草
  






})