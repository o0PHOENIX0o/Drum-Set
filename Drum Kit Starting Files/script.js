var drums = document.querySelectorAll(".drum");
for(var i = 0; i<drums.length; i++){
  drums[i].addEventListener('click', function() {
    Clicked(this.innerText);
  });
}

document.addEventListener('keydown', function(event) {
  var key = event.key.toLowerCase(); 
  if(['w','a','s','d','j','k','l'].includes(key)){
    Clicked(key);
  }
});




function Clicked(buttonClass){
  var button = document.querySelector(`.${buttonClass}`);
  button.classList.add('pressed');
  PlayAudio(buttonClass);

  setTimeout(() => {
    button.classList.remove('pressed');
  },800);
}

function PlayAudio(AudioFile){
  new Audio(`sounds/${AudioFile}.mp3`).play();
}

