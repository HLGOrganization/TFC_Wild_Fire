var tfc_wood=["chestnut","douglas_fir","hickory","kapok","mangrove","maple","palm","ash","spruce","aspen","birch","blackwood","blackwood","rosewood","willow","pine","sequoia","white_cedar","oak"]
var afc_wood=["baobab","eucalyptus","mahogany","hevea","tualang","teak","cypress","fig","ironwood","ipe","acacia"]
ServerEvents.recipes(e=> {
    const create=e.recipes.create
    for(let i in afc_wood){
        create.cutting('afc:wood/stripped_log/'+afc_wood[i],'afc:wood/log/'+afc_wood[i])
        create.cutting('afc:wood/stripped_wood/'+afc_wood[i],'afc:wood/wood/'+afc_wood[i])

        create.cutting(['12x afc:wood/lumber/'+afc_wood[i],'immersiveengineering:dust_wood'],'afc:wood/stripped_log/'+afc_wood[i])
        create.cutting(['12x afc:wood/lumber/'+afc_wood[i],'immersiveengineering:dust_wood'],'afc:wood/stripped_wood/'+afc_wood[i])
    }
    for(let i in tfc_wood){
        create.cutting('tfc:wood/stripped_log/'+tfc_wood[i],'tfc:wood/log/'+tfc_wood[i])
        create.cutting('tfc:wood/stripped_wood/'+tfc_wood[i],'tfc:wood/wood/'+tfc_wood[i])

        create.cutting(['tfc:wood/lumber/'+tfc_wood[i],'immersiveengineering:dust_wood'],'tfc:wood/stripped_log/'+tfc_wood[i])
        create.cutting(['tfc:wood/lumber/'+tfc_wood[i],'immersiveengineering:dust_wood'],'tfc:wood/stripped_wood/'+tfc_wood[i])
    }
    create.cutting('afc:wood/stripped_log/eucalyptus','afc:wood/log/rainbow_eucalyptus')
    create.cutting('tfc:wood/stripped_log/oak','afc:wood/log/black_oak')
    create.cutting('tfc:wood/stripped_log/acacia','afc:wood/log/gum_arabic')
    create.cutting('afc:wood/stripped_log/cypress','afc:wood/log/redcedar')
    create.cutting('afc:wood/stripped_log/fig','afc:wood/log/rubber_fig')
    create.cutting('tfc:wood/stripped_log/aspen','afc:wood/log/poplar')

    create.cutting('afc:wood/stripped_wood/eucalyptus','afc:wood/wood/rainbow_eucalyptus')
    create.cutting('tfc:wood/stripped_wood/oak','afc:wood/wood/black_oak')
    create.cutting('tfc:wood/stripped_wood/acacia','afc:wood/wood/gum_arabic')
    create.cutting('afc:wood/stripped_wood/cypress','afc:wood/wood/redcedar')
    create.cutting('afc:wood/stripped_wood/fig','afc:wood/wood/rubber_fig')
    create.cutting('tfc:wood/stripped_wood/aspen','afc:wood/wood/poplar')
})