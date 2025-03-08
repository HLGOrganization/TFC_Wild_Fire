StartupEvents.registry('item', event => {
    event.create('geckojs:mythril_helmet','anim_helmet')
    .texture('tfc:item/metal/helmet/blue_steel')
    .geoModel(geo => {
        geo.setSimpleModel('geckojs:geo/armor.geo.json')
        geo.setSimpleTexture('geckojs:textures/byd.png')
    })
    event.create('geckojs:mythril_chestplate','anim_chestplate')
    .modifyTier(tier => {'mythril'})
    .texture('tfc:item/metal/chestplate/blue_steel')
    .geoModel(geo => {
        geo.setSimpleModel('geckojs:geo/armor.geo.json')
        geo.setSimpleTexture('geckojs:textures/byd.png')
    })
    event.create('geckojs:mythril_greaves','anim_leggings')
    .texture('tfc:item/metal/greaves/blue_steel')
    .geoModel(geo => {
        geo.setSimpleModel('geckojs:geo/armor_leggings.geo.json')
        geo.setSimpleTexture('geckojs:textures/bydleg.png')
        })
        .boneVisibility((renderer, slot) => {
            renderer.setAllVisible(true);
    })
    event.create('geckojs:mythril_boots','anim_boots')
    .texture('tfc:item/metal/boots/blue_steel')
    .geoModel(geo => {
        geo.setSimpleModel('geckojs:geo/armor.geo.json')
        geo.setSimpleTexture('geckojs:textures/byd.png')
    })
})