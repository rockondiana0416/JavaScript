const TypeWriter = function(txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
}

// Type Method
TypeWriter.prototype.type = function() {
//   Current Index of Word
  const current = this.wordIndex % this.words.length;
//   Get Full Text of Current Word
  const fullTxt = this.words[current];
  
//   Check if Deleting
  if(this.isDeleting) {
//     Remove char
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
//     Add char
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }
  
//   Insert txt into Element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
  let typeSpeed = 300;
  
  if(this.isDeleting) {
    typeSpeed /3;
  }
  
  if(!this.isDeleting && this.txt === fullTxt) {
//     Make Pause at the End
    typeSpeed = this.wait;
//     Set Delete to True
    this.isDeleting = true;
  } else if(this.isDeleting && this.txt === '') {
    this.isDeleting = false;
//     Move to the Next Word
    this.wordIndex++;
//     Pause before Start Typing
    typeSpeed = 500;
  }
  
  setTimeout(() => this.type(), typeSpeed)
}
// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
// Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}

const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.6;

imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
    imgs.forEach(img => (img.style.opacity = 1));
    
    current.src = e.target.src;
    
    current.classList.add('fade-in');
    
    setTimeout(() => current.classList.remove('fade-in'), 500);
    
    e.target.style.opacity = opacity;
}