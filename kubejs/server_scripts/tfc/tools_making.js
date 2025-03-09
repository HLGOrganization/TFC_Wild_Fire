const metals = [
  "bismuth_bronze",
  "black_bronze",
  "black_steel",
  "blue_steel",
  "bronze",
  "copper",
  "red_steel",
  "wrought_iron"
]
const tools = [
  "hoe",
  "axe",
  "mace",
  "hammer",
  "chisel",
  "shovel",
  "javelin",
  "pickaxe",
  "propick"
]
ServerEvents.recipes(e => {
  tools.forEach(tool => {
    metals.forEach(metal => {
      //weak
      e.recipes.kubejs.shaped(
        `tfc:metal/${tool}/${metal}`,
        [
          "AB ",
          "C  "
        ], {
          A: "#bsa:bindings/weak",
          B: `tfc:metal/${tool}_head/${metal}`,
          C: "#forge:rods/wooden"
        }
      ).id(`kubejs:shaped${metal}_${tool}_weak`)
      //medium
      e.recipes.kubejs.shaped(
        `tfc:metal/${tool}/${metal}`,
        [
          "AB ",
          "C  "
        ], {
          A: "#bsa:bindings/medium",
          B: `tfc:metal/${tool}_head/${metal}`,
          C: "#forge:rods/wooden"
        }
      ).id(`kubejs:shaped${metal}_${tool}_medium`)
      //strong
      e.recipes.kubejs.shaped(
        `tfc:metal/${tool}/${metal}`,
        [
          "AB ",
          "C  "
        ], {
          A: "#bsa:bindings/strong",
          B: `tfc:metal/${tool}_head/${metal}`,
          C: "#forge:rods/wooden"
        }
      ).modifyResult((inputGrid, result) => {
        const head = inputGrid.findAll().find(stack => stack.id.toString().startsWith('tfc:metal/'))
        const headTag = head.getOrCreateTag();
        let level = headTag.getInt("tfc:forging_bonus") + 1;
        level = Math.min(level, 4);
        const resultTag = result.getOrCreateTag();
        resultTag.contains("tfc:forging_bonus") ? resultTag.remove("tfc:forging_bonus") : resultTag.putInt("tfc:forging_bonus", level);
        return result
      })
    });
  });
})