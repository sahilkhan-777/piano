

function playSound(name) {
    switch (name) {
        case 'c':
            var chordC = new Audio("./sounds/C-chord.wav");
            chordC.play();
            break;
        case 'd':
            var chordD = new Audio("./sounds/D-chord.wav");
            chordD.play();
            break;
        case 'e':
            var chordE = new Audio("./sounds/E-chord.wav");
            chordE.play();
            break;
        case 'f':
            var chordF = new Audio("./sounds/F-chord.wav");
            chordF.play();
            break;
        case 'g':
            var chordG = new Audio("./sounds/G-chord.wav");
            chordG.play();
            break;
        case 'a':
            var chordA = new Audio("./sounds/A-chord.wav");
            chordA.play();
            break;
        case 'b':
            var chordB = new Audio("./sounds/B-chord.wav");
            chordB.play();
            break;
        case '1':
            var chordCm = new Audio("./sounds/C-minor-chord.wav");
            chordCm.play();
            break;
        case '2':
            var chordDm = new Audio("./sounds/D-minor-chord.wav");
            chordDm.play();
            break;
        case '3':
            var chordEm = new Audio("./sounds/E-minor-chord.wav");
            chordEm.play();
            break;
        case '4':
            var chordFm = new Audio("./sounds/F-minor-chord.wav");
            chordFm.play();
            break;
        case '5':
            var chordGm = new Audio("./sounds/G-minor-chord.wav");
            chordGm.play();
            break;
        case '6':
            var chordAm = new Audio("./sounds/A-minor-chord.wav");
            chordAm.play();
            break;
        default:
            console.log(name);
    }

}




function byMouseClick() {
    var buttonInnerHTML = $(this).html();
    playSound(buttonInnerHTML);
    $(this).fadeIn(100).fadeOut(100).fadeIn(100);
}


$(document).keydown(function (event) {
    console.log(event.key)
    playSound(event.key);
});


$("button").click(byMouseClick);
