# Wukong expansion board

![Wukong](https://raw.githubusercontent.com/elecfreaks/pxt-wukong/master/Wukong.jpg)

This library is designed to drive Wukong expansion board (without Neopixel). 

Since this extension is not using Neopixel, it can be used together with Bluetooth extension.

You can get Wukong board here:

[https://www.elecfreaks.com/store/elecfreaks-wukong-breakout-board-for-micro-bit.html](https://www.elecfreaks.com/store/elecfreaks-wukong-breakout-board-for-micro-bit.html)

## Code Example
```JavaScript
input.onButtonPressed(Button.A, function () {
    wuKongWoNeo.setAllMotor(100, -100)
})
input.onButtonPressed(Button.AB, function () {
    wuKongWoNeo.stopAllMotor()
})
input.onButtonPressed(Button.B, function () {
    wuKongWoNeo.setServoAngel(wuKongWoNeo.ServoList.S0, 360)
    wuKongWoNeo.setServoAngel(wuKongWoNeo.ServoList.S2, 180)
    wuKongWoNeo.setServoAngel(wuKongWoNeo.ServoList.S4, 90)
    wuKongWoNeo.setServoAngel(wuKongWoNeo.ServoList.S6, 0)
})
basic.showIcon(IconNames.Heart)
wuKongWoNeo.setLightMode(wuKongWoNeo.LightMode.BREATH)

```
## Supported targets
for PXT/microbit

## License
MIT
