function editNav() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

// DOM Elements

const modalBtn = document.querySelectorAll('.modal-btn');
const submitBtn = document.querySelectorAll('.btn-submit');
const closeBtn = document.querySelectorAll('.close');
const modalbg = document.querySelector('.bground');
const formData = document.querySelectorAll('.formData');
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
  validateAll();
});

// Disable Submit

function disableSubmit(disabled) {
  if (disabled) {
    document.getElementById('submit-btn').setAttribute('disabled', true);
  } else {
    document.getElementById('submit-btn').removeAttribute('disabled');
  }
}

//Submit and Validate

// Regex
let firstX = /^[a-z ,.'-]{2,60}$/i;
let lastX = /^[a-z ,.'-]{2,60}$/i;
let emailX =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
let quantityX = /^[0-9]+$/;
let birthdateX =
  /^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/;

// VALIDATIONS
function validateFirst() {
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
  for (let i = 0; i < radios.length; ++i) {
    if (radios[i].checked == true) return true;
  }
  return false;
}

function validateCG() {
  return cg.checked;
}

function validateAll() {
  for (let i = 0; i < inputs.length; ++i) {
    const msgError = errorMessages[input];
    eval(inputs[i] + 'X').test(inputs[i].value);
  }

  (input) => validateFirst();
  validateLast();
  validateEmail();
  validateQuanlety();
  validateBirthDate();
  validateRadio();
  validateCG();
}

// MESSAGES
const errorMessages = {
  first: 'Veuillez entrer un nom comportant 2 caractères ou plus.',
  last: 'Veuillez entrer un prénom comportant 2 caractères ou plus.',
  email: 'Veuillez entrer une adresse email valide.',
  birthdate:
    'Veuillez entrer une date de naissance respectant le format JJ/MM/AAAA.',
  quantity: 'Veuillez entrer un nombre valide.',
  location: 'Veuillez choisir une ville.',
  checkbox: "Veuillez accepter les conditions d'utilisations.",
};

//INPUTS

const inputs = [
  'first',
  'last',
  'email',
  'birthdate',
  'quantity',
  'location',
  'cg',
];

//CLASS SAMPLE

class minLength {
  constructor(minLength) {
    this.minLength = minLength;
  }
  validate(value) {
    return value.length > this.minLength;
  }
}
const validationRules = {
  '#first': [
    new minLength(2),
    new maxLength(30),
    new matchRegex(/^[A-Z]{1}[aZ-zZ]*$/),
  ],
};
function validate() {
  for (const [key, rules] of Object.entries(validationRules)) {
    const element = document.querySelector(key);
    rules.forEach((rule) => {
      if (rule.validate(element)) {
        // Pas d'erreur
      } else {
        // Erreur
      }
    });
  }
}
