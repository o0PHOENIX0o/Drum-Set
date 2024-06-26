var audioUrl = {
  'w': 'sounds/tom-1.mp3',
  'a': 'sounds/tom-2.mp3',
  's': 'sounds/tom-3.mp3',
  'd': 'sounds/tom-4.mp3',
  'j': 'sounds/snare.mp3',
  'k': 'sounds/crash.mp3',
  'l': 'sounds/kick-bass.mp3'
};


function playAudio(key){
  if (audioUrl[key]) {
      var button = document.querySelector("."+key);
      button.classList.add("pressed");
      new Audio(audioUrl[key]).play();
      
      setTimeout(()=> {
          button.classList.remove("pressed");
      },400);
  }


}


var drums = document.querySelectorAll(".drum");
for (var i = 0; i < drums.length; i++) {
  drums[i].addEventListener('click', function() {
      var buttonKey = this.innerText.toLowerCase(); 
      playAudio(buttonKey);
  });
}

document.addEventListener('keydown', function (event) {
  playAudio(event.key);
});