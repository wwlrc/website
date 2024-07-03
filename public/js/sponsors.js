var sponsors = [
    "Chris Hillman",
    "Caldicot Windows & Building Services",
    "Abergavenny Brake & Clutch",
    "Foundry 4x4",
    "Muddy Series 4X4 Parts",
    "Whitecliff 4X4"
];

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
}

shuffle(sponsors)

var sponsor_index = -1

function changeSponsor() {
    sponsor_index = (sponsor_index + 1) % sponsors.length
    
    $('.js-sponsor').html(sponsors[sponsor_index])
}

changeSponsor();
setInterval(changeSponsor, 5000);