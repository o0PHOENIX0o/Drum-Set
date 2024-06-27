var audioUrl = {
  w: 'sounds/tom-1.mp3',
  a: 'sounds/tom-2.mp3',
  s: 'sounds/tom-3.mp3',
  d: 'sounds/tom-4.mp3',
  j: 'sounds/snare.mp3',
  k: 'sounds/crash.mp3',
  l: 'sounds/kick-bass.mp3'
};


function playAudio(key){
  if (audioUrl[key]) {
    $("."+key).addClass('pressed');
    new Audio(audioUrl[key]).play();
    
    setTimeout(()=> {
      $("."+key).removeClass("pressed");
    },400);
  }
}


$(".drum").click(function (){
  var buttonKey = this.innerText.toLowerCase(); 
  playAudio(buttonKey);
});


$(document).keydown(function(event){
  playAudio(event.key);
})