StartupEvents.registry('item', event => {
    event.create('geckojs:fungus_cape','anim_helmet')
    .texture('kubejs:item/hood')
    .tooltip('闻起来像蘑菇，很多蘑菇')
    .geoModel(geo => {
        geo.setSimpleModel('geckojs:geo/mushroom.geo.json')
        geo.setSimpleTexture('geckojs:textures/mushroom.png')
        })
        .boneVisibility((renderer, slot) => {
            renderer.setAllVisible(true);
    })
    event.create('geckojs:elvish_ears','anim_helmet')
    .texture('kubejs:item/hood')
    .tooltip('特别的辣,爆辣')
    .geoModel(geo => {
        geo.setSimpleModel('geckojs:geo/fleki.geo.json')
        geo.setSimpleTexture('geckojs:textures/fleki.png')
        })
        .boneVisibility((renderer, slot) => {
            renderer.setAllVisible(true);
    })
    event.create('geckojs:artist_beret','anim_helmet')
    .texture('kubejs:item/hood')
    .tooltip('哎呀')
    .geoModel(geo => {
        geo.setSimpleModel('geckojs:geo/blanket.geo.json')
        geo.setSimpleTexture('geckojs:textures/blanket.png')
        })
        .boneVisibility((renderer, slot) => {
            renderer.setAllVisible(true);
    })
    event.create('geckojs:furry_plugins','anim_helmet')
    .texture('kubejs:item/hood')
    .tooltip('我的天呐，他居然有一条尾巴！')
    .geoModel(geo => {
        geo.setSimpleModel('geckojs:geo/rocket.geo.json')
        geo.setSimpleTexture('geckojs:textures/rocket.png')
        })
        .boneVisibility((renderer, slot) => {
            renderer.setAllVisible(true);
    })
})