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
