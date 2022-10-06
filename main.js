radio.onReceivedNumber(function (receivedNumber) {
    movement = receivedNumber
})
let movement = 0
radio.setGroup(1)
basic.forever(function () {
    if (movement == 0) {
        pins.servoWritePin(AnalogPin.P1, 91)
        pins.servoWritePin(AnalogPin.P2, 90)
    }
    if (movement == 1) {
        pins.servoWritePin(AnalogPin.P1, 0)
        pins.servoWritePin(AnalogPin.P2, 180)
    }
    if (movement == 2) {
        pins.servoWritePin(AnalogPin.P1, 90)
        pins.servoWritePin(AnalogPin.P2, 180)
    }
    if (movement == 3) {
        pins.servoWritePin(AnalogPin.P1, 0)
        pins.servoWritePin(AnalogPin.P2, 90)
    }
})
