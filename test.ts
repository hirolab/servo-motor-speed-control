// tests go here; this will not be compiled when this package is used as an extension.


basic.forever(function () {
    SetServoSpeed.SetTurnSpeed(input.acceleration(Dimension.X), 2)
})
