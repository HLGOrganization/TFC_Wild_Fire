/**
 * 
 * @param { Internal.ItemTooltipEventJS } event 
 * @param { Internal.ItemStack_[] } items 
 */
function addShiftTooltip(event, items) {
  items.forEach(item => {
      event.addAdvanced(item, (item, advanced, text) => {
          if (!event.shift) {
              text.add(1, Text.translatable("tooltip.kubejs.hold_shift_to_see_more_info"))
          } else {
              text.add(1, Text.translatable("tooltip.kubejs.hold_shift"))
              text.add(2, Text.translatable(`tooltip.kubejs.shift_${item.getId().split(":")[1]}`))
          }
      })
  })
}
/**
 * 
 * @param { Internal.ItemTooltipEventJS } event 
 * @param { Internal.ItemStack_[] } items 
 */
function addCtrlTooltip(event, items) {
  items.forEach(item => {
      event.addAdvanced(item, (item, advanced, text) => {
          if (!event.ctrl) {
              text.add(1, Text.translatable("tooltip.kubejs.hold_ctrl_to_see_more_info"))
          } else {
              text.add(1, Text.translatable("tooltip.kubejs.hold_ctrl"))
              text.add(2, Text.translatable(`tooltip.kubejs.ctrl_${item.getId().split(":")[1]}`))
          }
      })
  })
}
/**
* 
* @param { Internal.ItemTooltipEventJS } event 
* @param { Internal.ItemStack_[] } items 
*/
function addShiftCtrlTooltip(event, items) {
  items.forEach(item => {
      event.addAdvanced(item, (item, advanced, text) => {
          if (!event.ctrl) {
              text.add(1, Text.translatable("tooltip.kubejs.hold_ctrl_to_see_more_info"))
          } else {
              text.add(1, Text.translatable("tooltip.kubejs.hold_ctrl"))
              text.add(2, Text.translatable(`tooltip.kubejs.ctrl_${item.getId().split(":")[1]}`))
          }
          if (!event.shift) {
              text.add(1, Text.translatable("tooltip.kubejs.hold_shift_to_see_more_info"))
          } else {
              text.add(1, Text.translatable("tooltip.kubejs.hold_shift"))
              text.add(2, Text.translatable(`tooltip.kubejs.shift_${item.getId().split(":")[1]}`))
          }
      })
  })
}
