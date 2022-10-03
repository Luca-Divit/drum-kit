function play(event) {
  const code = event.code;
  const audio = document.querySelector(`audio[data-key="${code}"]`);
  if(!audio) return; // This will stop the function if audio not found!

  const key = document.querySelector(`.key[data-key="${code}"]`);
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

window.addEventListener('keydown', play);

const keys = document.querySelectorAll('.key');

function removeTransition(event) {
  this.classList.remove('playing');
}

keys.forEach( key => key.addEventListener('transitionend', removeTransition));
