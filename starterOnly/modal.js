function editNav() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const closeBtn = document.querySelectorAll('.close');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// close model event
closeBtn.forEach((btn) => btn.addEventListener('click', closeModal));

function closeModal() {
  modalbg.style.display = 'none';
}

// launch modal form
function launchModal() {
  modalbg.style.display = 'block';
}

// prevent submit
form.addEventListener('submit', (e) => {
  e.preventDefault();
});
