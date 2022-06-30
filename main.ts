function pattern2 () {
    basic.showIcon(IconNames.Giraffe)
    basic.showIcon(IconNames.Cow)
    basic.showIcon(IconNames.StickFigure)
    music.playMelody("C5 B E A G E G C5 ", 120)
}
input.onButtonPressed(Button.A, function () {
    pattern1()
})
input.onButtonPressed(Button.B, function () {
    pattern2()
})
function pattern1 () {
    basic.showIcon(IconNames.Duck)
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.QuarterNote)
    music.playMelody("C5 B C5 A G E C C ", 120)
}
basic.forever(function () {
	
})
