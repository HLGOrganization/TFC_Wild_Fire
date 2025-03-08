// 加载 TFC 的日历类用于获取时间常量
const $ICalendar = Java.loadClass('net.dries007.tfc.util.calendar.ICalendar')

// 定义时间常量（单位：游戏刻）
const TICKS_IN_HOUR = $ICalendar.TICKS_IN_HOUR;  // 每小时对应的游戏刻数
const TICKS_IN_DAY = $ICalendar.TICKS_IN_DAY;    // 每天对应的游戏刻数
const SIX_TIMES_TICKS_IN_HOUR = TICKS_IN_HOUR * 6; // 6小时对应的游戏刻数

// 数学常量
const TWO_PI = JavaMath.PI * 2; // 2π 用于正弦计算

// 工具函数：数值范围限制
function clamp(val, min, max) {
    return Math.min(Math.max(val, min), max);
}

// 工具函数：线性插值
function lerp(x, y, a) {
    return (1 - a) * x + y * a;
}

// 工具函数：反向线性插值
function invLerp(x, y, a) {
    return (a - x) / (y - x);
}

/**
 * 计算当前温度（包含昼夜变化和高度影响）
 * @param {number} averageTemp 年平均温度
 * @param {number} seaLevel 海平面高度
 * @param {number} playerY 当前Y坐标
 * @param {number} calendarTicks 当前游戏刻
 * @param {number} tempRange 昼夜温差范围
 * @param {number} coreTemp 地核基础温度
 * @param {number} coreTempMult 地核温度影响系数
 * @returns {number} 当前温度
 */
function calcCurrentTemp(averageTemp, seaLevel, playerY, calendarTicks, tempRange, coreTemp, coreTempMult) {
    // 计算当天时间进度（0.0-1.0）
    let dayTicks = ((calendarTicks - SIX_TIMES_TICKS_IN_HOUR) % TICKS_IN_DAY);
    let dayPercent = dayTicks / TICKS_IN_DAY

    // 通过正弦波模拟昼夜温差
    let tempDiff = Math.sin(dayPercent * TWO_PI) * tempRange;

    // 根据高度分层计算温度
    if (playerY > seaLevel) {
        // 地表以上：每升高1米降温0.16225°C（TFC原版逻辑）
        let elevationTemp = clamp((playerY - seaLevel) * 0.16225, 0, 17.822);
        return averageTemp - elevationTemp + tempDiff;
    }
    else if (playerY > 0) {
        // 地表到海平面之间：按高度比例混合温度
        return averageTemp + (tempDiff * (playerY / seaLevel));
    }
    else {
        // 地下：混合地核温度（用于模拟地热）
        let depthPercent = 1 - (playerY / -64);
        let bedrockTemp = lerp(averageTemp, coreTemp, coreTempMult);
        return lerp(bedrockTemp, averageTemp, depthPercent);
    }
}

/**
 * 计算纬度相关平均值（温度/降雨）
 * @param {number} playerZ Z坐标（纬度）
 * @param {number} scale 行星尺寸（从南极到北极的距离）
 * @param {number} min 极地最小值
 * @param {number} max 赤道最大值
 * @returns {number} 计算后的平均值
 */
function calcAverage(playerZ, scale, min, max) {
    // 将Z坐标转换为相对纬度（0.0-1.0）
    let relative = (playerZ / scale * -1) + 0.5;
    
    // 使用余弦曲线平滑纬度变化
    let smoothed = Math.cos(relative * JavaMath.PI);
    
    // 将平滑后的值映射到[min, max]范围
    let halfDiff = (min - max) / -2;
    return (smoothed * halfDiff) - (halfDiff - max);
}

// 注册自定义气候模型
TFCEvents.registerClimateModel(event => {
    // 轨道空间气候模型（空间站环境）
    event.registerClimateModel('kubejs:orbit_climate', model => {
        model.setCurrentTemperatureCalculation((level, pos, calendarTicks, daysInMonth) => 15) // 恒温15°C（太空服温度）
        model.setAverageTemperatureCalculation((level, pos) => -270) // 太空背景温度
        model.setAverageRainfallCalculation((level, pos) => 0)       // 无降水
        model.setAirFog((level, pos, calendarTicks) => 0)            // 无空气雾
        model.setWaterFog((level, pos, calendarTicks) => 0.25)       // 固定水雾
        model.setWindVector((block, calendarTicks) => event.newVec2(0, 0)) // 无风
    })

    // 月球气候模型
    event.registerClimateModel('kubejs:moon_climate', model => {
        model.setCurrentTemperatureCalculation((level, pos, calendarTicks, daysInMonth) => {
            return calcCurrentTemp(-5, 60, pos.y, calendarTicks, 125, 0, 0) // 昼夜温差±125°C
        })
        model.setAverageTemperatureCalculation((level, pos) => -5)   // 月表平均温度
        model.setAverageRainfallCalculation((level, pos) => 0)       // 无降水
        model.setAirFog((level, pos, calendarTicks) => 0)            // 无空气雾
        model.setWaterFog((level, pos, calendarTicks) => 0.25)       // 固定水雾
        model.setWindVector((block, calendarTicks) => event.newVec2(0, 0)) // 无风（月球无大气）
    })

    // 火星气候模型
    event.registerClimateModel('kubejs:mars_climate', model => {
        model.setCurrentTemperatureCalculation((level, pos, calendarTicks, daysInMonth) => {
            let avgTemp = calcAverage(pos.z, 10000, -110, -15); // 纬度温差-110°C到-15°C
            return calcCurrentTemp(avgTemp, 65, pos.y, calendarTicks, 45, -10, 0.5); // 昼夜温差±45°C
        })
        model.setAverageTemperatureCalculation((level, pos) => {
            return calcAverage(pos.z, 10000, -110, -15); // 模拟火星纬度温差
        })
        model.setAverageRainfallCalculation((level, pos) => {
            return calcAverage(pos.z, 10000, 13, -25) // 极地微量降水，赤道干旱
        })
        model.setAirFog((level, pos, calendarTicks) => 0)      // 无空气雾
        model.setWaterFog((level, pos, calendarTicks) => 0.25) // 固定水雾
        model.setWindVector((block, calendarTicks) => event.newVec2(0.25, 0.25)) // 持续微风（模拟火星风暴）
    })
     // 金星气候模型（地狱般的高压高温大气）
     event.registerClimateModel('kubejs:venus_climate', model => {
        model.setCurrentTemperatureCalculation((level, pos, calendarTicks, daysInMonth) => {
            return calcCurrentTemp(450, 15, pos.y, calendarTicks, 25, 50, 0) // 地表恒温450°C，微弱昼夜波动
        })
        model.setAverageTemperatureCalculation((level, pos) => 450)          // 太阳系最热行星
        model.setAverageRainfallCalculation((level, pos) => 300)            // 模拟硫酸云降水
        model.setAirFog((level, pos, calendarTicks) => 0.75)               // 浓厚大气雾
        model.setWaterFog((level, pos, calendarTicks) => 0.9)              // 高密度雾气
        model.setWindVector((block, calendarTicks) => event.newVec2(1.2, 1.2)) // 超强环流风（金星飓风）
    })

    // 水星气候模型（极端昼夜温差）
    event.registerClimateModel('kubejs:mercury_climate', model => {
        model.setCurrentTemperatureCalculation((level, pos, calendarTicks, daysInMonth) => {
            return calcCurrentTemp(150, 430, pos.y, calendarTicks, 300, 0, 0) // 昼夜温差±300°C
        })
        model.setAverageTemperatureCalculation((level, pos) => {
            return calcAverage(pos.z, 5000, -180, 430) // 极区-180°C，赤道430°C
        })
        model.setAverageRainfallCalculation((level, pos) => 0)             // 无大气降水
        model.setAirFog((level, pos, calendarTicks) => 0)                 // 透明稀薄大气
        model.setWaterFog((level, pos, calendarTicks) => 0.1)             // 微量水雾
        model.setWindVector((block, calendarTicks) => event.newVec2(0, 0)) // 无大气风
    })
})
