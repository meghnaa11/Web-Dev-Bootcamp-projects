// looping and adding event listener to all buttons: 
// be specific about the buttons - use class since additional buttons can be added later

for(var i=0; i<document.querySelectorAll("button").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var letter = this.innerHTML;
        makeSound(letter);
        addAnimation(letter);
    });

}

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    addAnimation(event.key);
})

function makeSound(letter) {
    switch(letter) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;    
        default:
            console.log(letter);    
    }
}

function addAnimation(keyPressed) {
    var activeButton = document.querySelector("." + keyPressed);
    activeButton.classList.add("pressed");
    //reverting back to original
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

}