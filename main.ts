let stupně = 0
basic.forever(function () {
    stupně = input.compassHeading()
    if (stupně > 330 || stupně < 39) {
        basic.showString("S")
    } else if (stupně > 40 && stupně < 49) {
        basic.showString("SV")
    } else if (stupně > 50 && stupně < 130) {
        basic.showString("V")
    } else if (stupně > 131 && stupně < 150) {
        basic.showString("JV")
    } else if (stupně > 151 && stupně < 210) {
        basic.showString("J")
    } else if (stupně > 211 && stupně < 230) {
        basic.showString("JZ")
    } else if (stupně > 231 && stupně < 310) {
        basic.showString("Z")
    } else if (stupně > 311 && stupně < 330) {
        basic.showString("SZ")
    } else {
    	
    }
})
