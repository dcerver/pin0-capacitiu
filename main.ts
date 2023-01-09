pins.touchSetMode(TouchTarget.P0, TouchTargetMode.Capacitive)
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
        basic.clearScreen()
    }
})
