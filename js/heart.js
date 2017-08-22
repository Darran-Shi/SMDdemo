var app = document.getElementById('writer');

var typewriter = new Typewriter(app, {
    loop: false
});

typewriter.typeString('dsa!').pauseFor(2500).deleteAll()
    .typeString('Strings can be removed')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('altered!')
    .start();
