function PlaySound(b){
    var button = document.querySelector(`.${b}`);
    var PressedButton = button.innerText;
    button.classList.add('pressed');
    PlayAudio(b);
    

    setTimeout(() => {
      button.classList.remove('pressed');
    },1000);

    
}

function PlayAudio(AudioFile){
    new Audio(`sounds/${AudioFile}.mp3`).play();

}


document.addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
    var key = event.key.toLowerCase(); 
    
    switch (key) {
      case 'w':
        PlaySound('w');
        break;
      case 'a':
        PlaySound('a');
        break;
      case 's':
        PlaySound('s');
        break;
      case 'd':
        PlaySound('d');
        break;
      case 'j':
        PlaySound('j');
        break;
      case 'k':
        PlaySound('k');
        break;
      case 'l':
        PlaySound('l');
        break;
      default:
        break;
    }
  });
