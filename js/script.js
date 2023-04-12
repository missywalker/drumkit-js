
  // e.keyCode was found when I did a console.log(e) and typed in letters. keyCode was one of the many properties. But is the one I need. :)

function playSound(e) {
 const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
 const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
 if (!audio) return; // stops function from running all together
 audio.currentTime = 0; // rewinds to the start. (No lag)
 audio.play();
 key.classList.add("playing");
 console.log(key);
};

function removeTransition(e) {
  if(e.propertyName !== 'transform') return; // skip if not a transform
  console.log(e.propertyName);
 this.classList.remove("playing");
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));  // loops over array. listen for transition end & then remove transition
window.addEventListener('keydown', playSound); 
