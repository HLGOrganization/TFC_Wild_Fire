TFCEvents.data(e => {
  //烤肉
  e.itemHeat('#forge:meats', 1,null,null)
  //矿物融化
  e.itemHeat('#tfc:ore_pieces', 0.7,null,null)
  //空烈焰人燃烧室加热合成烈焰人燃烧室
  e.itemHeat('create:empty_blaze_burner', 0.7,null,null)
  //海带加热
  e.itemHeat('tfc:plant/leafy_kelp', 1, null,null)
  e.itemHeat('tfc:plant/winged_kelp', 1, null,null)
  e.itemHeat('tfc:plant/laminaria', 1, null,null)
  //零件模具
  e.itemHeat('kubejs:unfired_mold_mechanical', 1, null,null)
  //黄铜机件融化
  e.itemHeat('tfc:brass_mechanisms', 1, null,null)
  //烤弓
  e.itemHeat('kubejs:burned_bow_arm', 1,null,null)
  e.itemHeat('kubejs:soaked_bow_arm', 1, null, null);
  e.itemHeat('kubejs:burned_bow_arm', 1,null,null)
  e.itemHeat('kubejs:soaked_bow_arm', 1, null, null);
  e.itemHeat('kubejs:burning_bow_arm', 1, null, null);
  e.itemHeat('kubejs:perfectly_burned_bow_arm', 1, null, null);
  e.itemHeat('kubejs:overburned_bow_arm', 1, null, null);
  e.itemHeat('kubejs:charred_bow_arm', 1, null, null);
  e.itemHeat('kubejs:oiled_bow_arm', 1, null, null);

})