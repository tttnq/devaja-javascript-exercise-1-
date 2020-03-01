const birds = [
    "sinisorsa",
    "metso",
    "teeri",
    "varis",
    "tikka",
    "harmaalokki",
    "punatulkku",
    "korppi",
    "merikotka",
    "laulujoutsen"
];

let birdIndex = 0;
let isFirstIndex = true;
let currentBird = birds[birdIndex];

document.addEventListener("keypress", checkInput);

function getFirstBird() {
    document.getElementById("bird").value = currentBird;
}

function checkInput(input) {
    const birdCode = currentBird.charCodeAt(getIndexFromBird(isFirstIndex));
    const inputCode = input.keyCode;

    if (inputCode === birdCode) {
        if (isFirstIndex) {
            currentBird = currentBird.split(currentBird.charAt(0)).join("");
            document.getElementById("bird").value = currentBird;
            isFirstIndex = false;
        } else {
            currentBird = currentBird.split(currentBird.charAt(currentBird.length - 1)).join("");
            document.getElementById("bird").value = currentBird;
            isFirstIndex = true;
        }
    }

    if (currentBird.length < 1) {
        if (birdIndex === birds.length - 1) {
            document.getElementById("bird").value = "The End! :)";
            return;
        }

        birdIndex++;
        isFirstIndex = true;
        currentBird = birds[birdIndex];
        document.getElementById("bird").value = currentBird;
    }
}

function getIndexFromBird(index) {
    if (index) {
        return 0;
    } else {
        return currentBird.length - 1;
    }
}
