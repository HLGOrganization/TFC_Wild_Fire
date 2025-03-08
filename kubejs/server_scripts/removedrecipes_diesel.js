ServerEvents.recipes(e => {
    //额外ban表
    e.remove({id:'createdieselgenerators:basin_fermenting/fermentable'})
    e.remove({id:'createdieselgenerators:basin_fermenting/fermented_spider_eye'})
    e.remove({id:'createdieselgenerators:crafting/basin_lid'})
    e.remove({id:'createaddition:compacting/cake_base'})
    e.remove({id:'createaddition:smoking/cake_base_baked'})
    e.remove({id:'createaddition:filling/cake'})
    e.remove({id:'createaddition:filling/chocolate_cake'})
    e.remove({id:'createaddition:filling/honey_cake'})
    e.remove({id:'drinkbeer:trade_box_normal'})
  })