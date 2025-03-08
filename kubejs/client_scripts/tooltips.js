ItemEvents.tooltip(event => {
    event.addAdvanced('kubejs:alumina_dioxide', (item, advanced, text) => {
        if (!event.shift) {
        text.add(1, [Text.of('在 ').white(), Text.of('2980°c').yellow(), Text.of('下熔化成 100mb 铝').white()])
        } else {
        text.add(Text.gray('嗯. . 这个金属不能这样加工').bold(true))
        }
    })
    })