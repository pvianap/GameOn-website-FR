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
modalbg.addEventListener('submit', (e) => {
  e.preventDefault();
});

// Disable Submit
function disableSubmit(disabled) {
  if (disabled) {
    document.getElementById('submit-btn').setAttribute('disabled', true);
  } else {
    document.getElementById('submit-btn').removeAttribute('disabled');
  }
}

// Input values

let fistName = document.getElementById('first').value;

// Regex
let firstNameX = /^[a-z ,.'-]{2,60}$/i;
let lastNameX = /^[a-z ,.'-]{2,60}$/i;
let emailX =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
let quantityX = /^[0-9]+$/;

// // Validations

// var validations =[fistName, lastName, email, nbConcours, radioBtn, conditionG];
// function getCodeValidation() {
//   return document.getElementById("code-validation");
// }

document.getElementById('code').addEventListener('input', function (e) {
  if (
    firstNameX.test(e.target.value) &&
    ) {
    getCodeValidation().innerText = 'Code valide';
    disableSubmit(false);
  } else {
    getCodeValidation().innerText = 'Code invalide';
    disableSubmit(true);
  }
});
