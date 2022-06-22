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
const formId = document.getElementById('formId');
const first = document.getElementById('first');
const last = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const radios = document.getElementsByName('location');
const cg = document.getElementById('checkbox1');

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

// Regex
let firstX = /^[a-z ,.'-]{2,60}$/i;
let lastX = /^[a-z ,.'-]{2,60}$/i;
let emailX =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
let quantityX = /^[0-9]+$/;
let birthdateX =
  /^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/;

// VALIDATIONS
function validateName() {
  firstX.test(
    first.value
      ? (first.style.border = 'solid green')
      : (first.style.border = 'solid red')
  );
}

function validateLast() {
  lastX.test(
    last.value
      ? (last.style.border = 'solid green')
      : (last.style.border = 'solid red')
  );
}

function validateEmail() {
  emailX.test(
    email.value
      ? (email.style.border = 'solid green')
      : (email.style.border = 'solid red')
  );
}

function validateQuantity() {
  quantityX.test(
    quantity.value
      ? (quantity.style.border = 'solid green')
      : (quantity.style.border = 'solid red')
  );
}

function validateBirthDate() {
  birthdateX.test(
    birthdate.value
      ? (birthdate.style.border = 'solid green')
      : (birthdate.style.border = 'solid red')
  );
}

function validateRadio() {
  for (var i = 0; i < radios.length; ++i) {
    if (radios[i].checked == true) return true;
  }
  return false;
}

function validateCG() {
  return cg.checked;
}

function validation() {
  (validateFirst && validateLast && validateEmail ? false : true;)
}

// MESSAGES
const errorMessages = {
  lastName: 'Veuillez entrer un nom comportant 2 caractères ou plus.',
  firstName: 'Veuillez entrer un prénom comportant 2 caractères ou plus.',
  email: 'Veuillez entrer une adresse email valide.',
  birthdate:
    'Veuillez entrer une date de naissance respectant le format JJ/MM/AAAA.',
  quantity: 'Veuillez entrer un nombre valide.',
  location: 'Veuillez choisir une ville.',
  checkbox: "Veuillez accepter les conditions d'utilisations.",
};
