// tests go here; this will not be compiled when this package is used as an extension.
let shoulder_pos = 0


basic.forever(function () {
    shoulder_pos = input.acceleration(Dimension.X)
    SetServoSpeed.SetTurnSpeed(shoulder_pos,2)
})