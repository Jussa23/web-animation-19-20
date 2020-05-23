// eyeFollow JS //
// let eyeBall = document.querySelector(".eyeball"),
//     pupil = document.querySelector(".pupil"),
//     eyeArea = eyeBall.getBoundingClientRect(),
//     pupilArea = pupil.getBoundingClientRect(),
//     R = eyeArea.width/20,
//     r = pupilArea.width/20,
//     centerX = eyeArea.left,
//     centerY = eyeArea.top;

// document.addEventListener("mousemove", (e)=>{
//   let x = e.clientX - centerX,
//       y = e.clientY - centerY,
//       theta = Math.atan2(y,x),
//       angle = theta*180/Math.PI + 360;
//       pupil.style.transform = `translateX(${R - r +"px"}) rotate(${angle + "deg"})`;
//       pupil.style.transformOrigin = `${r +"px"} center`;
// });

// dragPeople JS //
Draggable.create(".draggable", {
  bounds:"svg",
  onDrag: function() {
      if(this.hitTest("#ear")){
          TweenLite.to(this.target, 1, {opacity:0, scale:0, svgOrigin:"195px 110px"})
      }
  }
});

// mouseEffects JS //
function mouseOverEffect() {
    this.classList.add("pupilEnlarge");
}
function mouseOutEffect() {
    this.classList.remove("pupilEnlarge");
}


document.getElementById("redButtonClick").addEventListener("click", activateRedButton);

function activateRedButton(){
    var svgArtWork = document.getElementById("svg");
    var fire = document.getElementById("artFlames");

    if (svgArtWork.classList.contains('buttonStart')) {
        svgArtWork.classList.remove("buttonStart");
        fire.classList.add("hidden");
    } else {
        svgArtWork.classList.add("buttonStart");
        fire.classList.remove("hidden");
    }
};

// Move Left People - peopleLeft
// document.getElementsByClassName("peopleL").addEventListener("keydown", colorChange);

    // function colorChange(event) {
    //     var peopleLeft = document.getElementsByClassName("peopleL");

    //     var randomColor = 
    //     '#'+Math.floor(Math.random()*16777215).toString(16);

    //     let keyCode = e.keyCode;
    //     if (event.keyCode === 32) {
    //         console.log(peopleLeft);
    //         console.log(randomColor);    
    //     }

    // }

var peopleLeft1 = document.querySelector('.personLeft1');

window.addEventListener("keydown", colorChange1);

function colorChange1(e) {

    let keyCode = e.keyCode;
    if (keyCode === 49) {
        peopleLeft1.classList.toggle('personToggle1');   
};
};


var peopleLeft2 = document.querySelector('.personLeft2');

window.addEventListener("keydown", colorChange2);

function colorChange2(e) {

    let keyCode = e.keyCode;
    if (keyCode === 50) {
        peopleLeft2.classList.toggle('personToggle2');   
};
};


var peopleLeft3 = document.querySelector('.personLeft3');

window.addEventListener("keydown", colorChange3);

function colorChange3(e) {

    let keyCode = e.keyCode;
    if (keyCode === 51) {
        peopleLeft3.classList.toggle('personToggle3');   
};
};

















// function barMove(event){
//     var bar = document.getElementsByClassName("barRectangle");
//     var pressKey = event.keyCode;

//     if (pressKey === 100) {
//         console.log('test');
//         console.log(bar);
//         bar.moveBy(100, 100);
//     }
// }

// window.addEventListener('keypress', barMove);

// console log keycode

// window.addEventListener('keypress', function(e) {
//     console.log("Key: " + e.code + ", Code: " + e.charCode)
//   });

// Tips voor toetsenbord toggle (KeyBoardEvent)
// var square = document.querySelector('.square');

// window.addEventListener('keydown', toggle);

// function toggle(event) {
//     if(event.keyCode === 32) {
//         square.classList.toggle('click');   
//     }
// }

// Tips voor toggle
// 1 Element selecteren
// var svgArtwork = document.querySelector("svg");

// 2 Luisteren naar event
// svgArtwork.addEventListener('buttonStart', toggle)

// 3 CSS aanpassen, class toevoegen
// function toggle() {
//     svgArtwork.classList.add('buttonStart');
// }