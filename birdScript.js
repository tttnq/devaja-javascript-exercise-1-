const birds = ["sinisorsa", "metso", "teeri", "varis", "tikka", "harmaalokki", "punatulkku", "korppi", "merikotka", "laulujoutsen"];
let birdIndex = 0;
let firstOrLastIndex = "first";
let currentBird = birds[birdIndex];

document.addEventListener('keypress', checkInput);

function getFirstBird(){
    document.getElementById("bird").value = currentBird;   
}

function checkInput(input){
    const birdCode = currentBird.charCodeAt(getIndexFromBird(firstOrLastIndex));
    const inputCode = input.keyCode;

    if(inputCode === birdCode){ 
        if(firstOrLastIndex === "last"){
            currentBird = currentBird.split(currentBird.charAt(currentBird.length-1)).join('');
            document.getElementById("bird").value = currentBird;
            firstOrLastIndex = "first";
        }  else {
            currentBird = currentBird.split(currentBird.charAt(0)).join('');
            document.getElementById("bird").value = currentBird;
            firstOrLastIndex = "last";
        }   
    } 

    

    if(currentBird.length < 1){
        if(birdIndex === birds.length -1){
            document.getElementById("bird").value = "The End! :)";
            return;
        }

        birdIndex++;
        firstOrLastIndex = "first";
        currentBird = birds[birdIndex];
        document.getElementById("bird").value = currentBird;
    }
        

}

function getIndexFromBird(i){
    if(i === "first"){
        return 0;
    } else if(i === "last"){
        return currentBird.length-1;
    }
}

