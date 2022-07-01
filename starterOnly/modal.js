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
  validateAll();
  e.preventDefault();
  if (isValid) {
    finalMessage();
    closeModal();
  }
});

//FINAL MESSAGE

function finalMessage() {
  var finalMsg = document.createElement('div');
  finalMsg.textContent = reserved;
  finalMsg.setAttribute('id', 'finalMsg');
  document.querySelector('main').append(finalMsg);
}

// Regex
let firstX = /^[a-z ,.'-]{2,60}$/i;
let lastX = /^[a-z ,.'-]{2,60}$/i;
let emailX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
let quantityX = /^[0-9]+$/;
// VALIDATIONS
var isValid = false;
function validateFirst() {
  if (!firstX.test(first.value)) {
    first.style.border = 'solid red';
    isValid = false;
    var firstAlert = document.createElement('p');
    firstAlert.setAttribute('id', 'firstAlert');
    var firstLabel = document.querySelector('label[for="first"]');
    firstAlert.textContent = errorMessages['first'];
    if (firstLabel.firstElementChild == null) {
      firstLabel.appendChild(firstAlert);
    }
  } else {
    first.style.border = 'solid green';
    if (document.contains(document.getElementById('firstAlert'))) {
      document.getElementById('firstAlert').remove();
    }
  }
}

function validateLast() {
  if (!lastX.test(last.value)) {
    last.style.border = 'solid red';
    isValid = false;
    var lastAlert = document.createElement('p');
    lastAlert.setAttribute('id', 'lastAlert');
    var lastLabel = document.querySelector('label[for="last"]');
    lastAlert.textContent = errorMessages['last'];
    if (lastLabel.firstElementChild == null) {
      lastLabel.appendChild(lastAlert);
    }
  } else {
    last.style.border = 'solid green';
    if (document.contains(document.getElementById('lastAlert'))) {
      document.getElementById('lastAlert').remove();
    }
  }
}

function validateEmail() {
  if (!emailX.test(email.value)) {
    email.style.border = 'solid red';
    isValid = false;
    var emailAlert = document.createElement('p');
    emailAlert.setAttribute('id', 'emailAlert');
    var emailLabel = document.querySelector('label[for="email"]');
    emailAlert.textContent = errorMessages['email'];
    if (emailLabel.firstElementChild == null) {
      emailLabel.appendChild(emailAlert);
    }
  } else {
    email.style.border = 'solid green';
    if (document.contains(document.getElementById('emailAlert'))) {
      document.getElementById('emailAlert').remove();
    }
  }
}

function validateQuantity() {
  if (!quantityX.test(quantity.value)) {
    quantity.style.border = 'solid red';
    isValid = false;
    var quantityAlert = document.createElement('p');
    quantityAlert.setAttribute('id', 'quantityAlert');
    var quantityLabel = document.querySelector('label[for="quantity"]');
    quantityAlert.textContent = errorMessages['quantity'];
    if (quantityLabel.firstElementChild == null) {
      quantityLabel.appendChild(quantityAlert);
    }
  } else {
    quantity.style.border = 'solid green';
    if (document.contains(document.getElementById('quantityAlert'))) {
      document.getElementById('quantityAlert').remove();
    }
  }
}

function validateBirthDate() {
  if (
    isNaN(Date.parse(birthdate.value)) ||
    Date.parse(birthdate.value) < -2079302400000 ||
    Date.parse(birthdate.value) > Date.parse(Date())
  ) {
    birthdate.style.border = 'solid red';
    isValid = false;
    var birthdateAlert = document.createElement('p');
    birthdateAlert.setAttribute('id', 'birthdateAlert');
    var birthdateLabel = document.querySelector('label[for="birthdate"]');
    birthdateAlert.textContent = errorMessages['birthdate'];
    if (birthdateLabel.firstElementChild == null) {
      birthdateLabel.appendChild(birthdateAlert);
    }
  } else {
    birthdate.style.border = 'solid green';
    if (document.contains(document.getElementById('birthdateAlert'))) {
      document.getElementById('birthdateAlert').remove();
    }
  }
}

function validateRadio() {
  for (let i = 0; i < radios.length; ++i) {
    if (radios[i].checked == true) return greenRadio();
  }
  return redRadio();
}

function redRadio() {
  let radioIcon = document.querySelectorAll('.checkbox-label .checkbox-icon ');
  for (let i = 0; i < radioIcon.length; i++) {
    radioIcon[i].style.border = 'solid red';
  }
  isValid = false;
  var radiosAlert = document.createElement('p');
  radiosAlert.setAttribute('id', 'radiosAlert');
  var radiosLabel = document.querySelector('.text-label');
  radiosAlert.textContent = errorMessages['location'];
  if (!document.contains(document.getElementById('radiosAlert'))) {
    radiosLabel.append(radiosAlert);
  }
}

function greenRadio() {
  let radioIcon = document.querySelectorAll('.checkbox-label .checkbox-icon ');
  for (let i = 0; i < radioIcon.length; i++) {
    radioIcon[i].style.border = 'solid green';
  }
  if (document.contains(document.getElementById('radiosAlert'))) {
    document.getElementById('radiosAlert').remove();
  }
}

function validateCG() {
  if (!cg.checked) {
    var cgIcon = document.querySelector('.checkbox2-label .checkbox-icon ');
    cgIcon.style.border = 'solid red';
    isValid = false;
    var cgAlert = document.createElement('p');
    cgAlert.setAttribute('id', 'cgAlert');
    var cgLabel = document.querySelector('label[for="checkbox1"]');
    cgAlert.textContent = errorMessages['checkbox'];
    if (!document.contains(document.getElementById('cgAlert'))) {
      cgLabel.parentNode.insertBefore(
        cgAlert,
        document.getElementById(checkbox1)
      );
    }
  } else {
    var cgIcon = document.querySelector('.checkbox2-label .checkbox-icon ');
    cgIcon.style.border = 'solid green';
    if (document.contains(document.getElementById('cgAlert'))) {
      document.getElementById('cgAlert').remove();
    }
  }
}

function validateAll() {
  isValid = true;
  validateFirst();
  validateLast();
  validateEmail();
  validateQuantity();
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
const reserved = 'Merci ! Votre réservation a été reçue.';

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

// //CLASS SAMPLE

// class minLength {
//   constructor(minLength) {
//     this.minLength = minLength;
//   }
//   validate(value) {
//     return value.length > this.minLength;
//   }
// }
// const validationRules = {
//   '#first': [
//     new minLength(2),
//     new maxLength(30),
//     new matchRegex(/^[A-Z]{1}[aZ-zZ]*$/),
//   ],
// };
// function validate() {
//   for (const [key, rules] of Object.entries(validationRules)) {
//     const element = document.querySelector(key);
//     rules.forEach((rule) => {
//       if (rule.validate(element)) {
//         // Pas d'erreur
//       } else {
//         // Erreur
//       }
//     });
//   }
// }
