ServerEvents.recipes(event => {
    event.shapeless('minecraft:oak_log',['#tfc:chisels','tfc:wood/log/oak']).keepIngredient({item:'#tfc:chisels'})//橡木原木  橡木
    event.shapeless('minecraft:oak_log',['#tfc:chisels','afc:wood/log/ancient_oak']).keepIngredient({item:'#tfc:chisels'})//橡木原木  古代
    event.shapeless('minecraft:spruce_log',['#tfc:chisels','tfc:wood/log/spruce']).keepIngredient({item:'#tfc:chisels'})//云杉木原木  云杉
    event.shapeless('minecraft:spruce_log',['#tfc:chisels','afc:wood/log/ancient_spruce']).keepIngredient({item:'#tfc:chisels'})//云杉木原木  古代
    event.shapeless('minecraft:birch_log',['#tfc:chisels','tfc:wood/log/birch']).keepIngredient({item:'#tfc:chisels'})//白桦木原木  白桦
    event.shapeless('minecraft:birch_log',['#tfc:chisels','afc:wood/log/ancient_birch']).keepIngredient({item:'#tfc:chisels'})//白桦木原木  古代
    event.shapeless('minecraft:jungle_log',['#tfc:chisels','tfc:wood/log/kapok']).keepIngredient({item:'#tfc:chisels'})//丛林木原木  木棉
    event.shapeless('minecraft:jungle_log',['#tfc:chisels','afc:wood/log/ancient_kapok']).keepIngredient({item:'#tfc:chisels'})//丛林木原木  古代
    event.shapeless('minecraft:acacia_log',['#tfc:chisels','tfc:wood/log/acacia']).keepIngredient({item:'#tfc:chisels'})//金合欢原木  金合欢
    event.shapeless('minecraft:acacia_log',['#tfc:chisels','afc:wood/log/ancient_acacia']).keepIngredient({item:'#tfc:chisels'})//金合欢原木  古代
    event.shapeless('minecraft:dark_oak_log',['#tfc:chisels','afc:wood/log/black_oak']).keepIngredient({item:'#tfc:chisels'})//深色木原木  黑橡木
    event.shapeless('minecraft:dark_oak_log',['#tfc:chisels','afc:wood/log/ancient_black_oak']).keepIngredient({item:'#tfc:chisels'})//深色橡木原木  古代
    event.shapeless('minecraft:mangrove_log',['#tfc:chisels','tfc:wood/log/mangrove']).keepIngredient({item:'#tfc:chisels'})//红木原木  红木
    event.shapeless('minecraft:cherry_log',['#tfc:chisels','afc:wood/log/fig']).keepIngredient({item:'#tfc:chisels'})//樱花原木  无花果
    event.shapeless('minecraft:cherry_log',['#tfc:chisels','afc:wood/log/rubber_fig']).keepIngredient({item:'#tfc:chisels'})//樱花原木  古代无花果
    event.shapeless('minecraft:cherry_log',['#tfc:chisels','afc:wood/log/ancient_fig']).keepIngredient({item:'#tfc:chisels'})//樱花原木  橡皮树


 


    event.forEachRecipe( //合成箱子
        {   
            not:{input:['#minecraft:logs','#forge:chests']},       
            mod:'quark',
            type: "crafting_shaped", 
            output: "#forge:chests"
        }, r => {    
            var chest_id = r.getOriginalRecipeResult().getId()
            var wood_id = r.getOriginalRecipeIngredients()[0].getItemIds()[0]
            event.shaped(chest_id, [
                'SbS', 
                'b b', 
                'SbS'
            ], {
                S: wood_id,
                b:'firmaciv:copper_bolt'
            })
    })
        
    event.forEachRecipe(//合成木板
        {       
            not:{mod:'quark'},
            type:"crafting_shapeless",
            output: "#minecraft:planks"
        }, r => {   
            var slab_id = r.getOriginalRecipeResult().getId()
            var block_id = r.getOriginalRecipeIngredients()[0].getItemIds()[0]
            event.shapeless(Item.of(slab_id,2), [block_id,'#tfc:saws']).damageIngredient({tag:'#tfc:saws'},1)
    })
    event.remove([{ not:{mod:"kubejs"},input:"#minecraft:logs", type:"crafting_shapeless",output: "#minecraft:planks"}])//移除所有合成木板配方
    event.remove([{ not:{mod:"kubejs"},input:["#minecraft:logs","#minecraft:planks"], type:"crafting_shaped",output: "#forge:chests"}])//移除所有箱子配方













})