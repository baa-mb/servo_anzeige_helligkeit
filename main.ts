let t = 0
basic.forever(function () {
    t = Math.map(input.lightLevel(), 0, 255, 0, 180)
    pins.servoWritePin(AnalogPin.P0, t)
    serial.writeValue("x", t)
    basic.pause(500)
})
