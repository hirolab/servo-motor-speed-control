let shoulder_pos = 0
let angle = 60
let max_angle = 160
let min_angle = 20
basic.forever(function () {
    shoulder_pos = input.acceleration(Dimension.X)
    if (Math.abs(shoulder_pos) >= 100) {
        if (shoulder_pos <= 0) {
            angle = angle - 3
        } else {
            angle = angle + 3
        }
        if (angle <= min_angle) {
            angle = min_angle
        }
        if (angle >= max_angle) {
            angle = max_angle
        }
        servos.P0.setAngle(angle)
    }
    basic.pause(2)
})
