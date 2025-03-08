const BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')

const structures = BuiltInRegistries.STRUCTURE_TYPE

const Monster = Java.loadClass('net.minecraft.world.entity.monster.Monster')

/**
 * 
 * @param {Internal.Structure} structure 
*/
function GetStructureName(structure)
{
    return structures.getKey(structure.type()).toString()
}

EntityEvents.spawned(e => {
    var entity = e.entity

    if(!entity.isMonster()) 
        return

    /**
     * @type {Internal.ServerLevel}
    */
    var level = e.level

    var set = level.structureManager().getAllStructuresAt(entity.blockPosition()).keySet()

    for(var key of set)
    {
        entity.addTag(GetStructureName(key))
    }
})

BlockEvents.rightClicked(e => {
    var block = e.block

    if(block.toString().startsWith("lootr:lootr"))
    {
        /**
         * @type {Internal.ServerLevel}
        */
        var level = block.level
    
        var pos = block.pos

        var radius = 8

        var box = AABB.of(
            pos.getX() - radius, pos.getY() - radius, pos.getZ() - radius,
            pos.getX() + radius, pos.getY() + radius, pos.getZ() + radius,
        )

        var entities = level.getEntities(null, box)

        var set = level.structureManager().getAllStructuresAt(pos).keySet()
        
        for(var entity of entities)
        {
            if(!entity.isMonster())
                continue
            for(var tag of set)
            {
                if(entity.getTags().contains(GetStructureName(tag)))
                {
                    e.server.runCommand(`say 周围${radius}格内有怪物!`)
                    e.cancel()
                }
            }
        }
    }
    if(block.toString().startsWith("quark:lootr"))
        {
            /**
             * @type {Internal.ServerLevel}
            */
            var level = block.level
        
            var pos = block.pos
    
            var radius = 8
    
            var box = AABB.of(
                pos.getX() - radius, pos.getY() - radius, pos.getZ() - radius,
                pos.getX() + radius, pos.getY() + radius, pos.getZ() + radius,
            )
    
            var entities = level.getEntities(null, box)
    
            var set = level.structureManager().getAllStructuresAt(pos).keySet()
            
            for(var entity of entities)
            {
                if(!entity.isMonster())
                    continue
                for(var tag of set)
                {
                    if(entity.getTags().contains(GetStructureName(tag)))
                    {
                        e.server.runCommand(`say 周围${radius}格内有怪物!`)
                        e.cancel()
                    }
                }
            }
        }
})