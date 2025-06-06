TFCEvents.data(e => {
  const small_light_items=[
    'cuisinedelight:suspicious_mix',
    'cuisinedelight:ham_fried_rice',
    'cuisinedelight:fried_rice',
    'cuisinedelight:mixed_fried_rice',
    'cuisinedelight:meat_with_seafood',
    'cuisinedelight:meat_with_vegetables', 
    'cuisinedelight:seafood_with_vegetables',
    'cuisinedelight:fried_pasta',
    'cuisinedelight:mixed_pasta',
    'cuisinedelight:meat_fried_rice',
    'cuisinedelight:meat_pasta',
    'cuisinedelight:meat_platter',
    'cuisinedelight:seafood_fried_rice',
    'cuisinedelight:seafood_pasta',
    'cuisinedelight:seafood_platter',
    'cuisinedelight:vegetable_fried_rice',
    'cuisinedelight:vegetable_pasta',
    'cuisinedelight:vegetable_platter',
    'cuisinedelight:fried_mushroom',
    'cuisinedelight:fried_meat_and_melon',
    'cuisinedelight:scrambled_egg_and_tomato',
  ]
  small_light_items.forEach(item=>{
    e.itemSize(item, 'small', 'light')
  })

})