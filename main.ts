let _1 = 0
OLED.init(128, 64)
basic.forever(function () {
    _1 = Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, 0, 180)
})
basic.forever(function () {
    OLED.writeNum(_1)
    basic.pause(1000)
    OLED.clear()
})
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P2, _1)
})
