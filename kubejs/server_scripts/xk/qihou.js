// 注册气候模型选择事件（当世界加载时根据维度选择气候模型）
TFCEvents.selectClimateModel(event => {

    // 获取当前维度的注册表名称（格式为"命名空间:维度名"）
    let location = event.level.dimensionKey.location();

    // 根据维度名称切换气候模型
    switch (location) {

        // Ad Astra 模组的月球维度 -> 使用月球气候模型
        case 'ad_astra:moon':
            event.setModel('kubejs:moon_climate'); // 设置之前定义的月球气候
            break;

        // Ad Astra 模组的火星维度 -> 使用火星气候模型
        case 'ad_astra:mars':
            event.setModel('kubejs:mars_climate'); // 设置之前定义的火星气候
            break;
        case 'ad_astra:venus':
            event.setModel('kubejs:venus_climate'); // 设置之前定义的金星气候
            break;
        case 'ad_astra:mercury':
            event.setModel('kubejs:mercury_climate'); // 设置之前定义的水星气候
            break;

        // Ad Astra 模组的轨道维度 -> 使用轨道空间站气候模型
        case 'ad_astra:earth_orbit':   // 地球轨道空间站
        case 'ad_astra:moon_orbit':    // 月球轨道空间站
        case 'ad_astra:mars_orbit':    // 火星轨道空间站
        case 'ad_astra:venus_orbit':    // 金星轨道空间站
        case 'ad_astra:mercury_orbit':    // 水星轨道空间站
            event.setModel('kubejs:orbit_climate'); // 设置恒温无风的空间站气候
            break;
    }
})
