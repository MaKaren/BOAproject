/*
    @Author Momo, Jaye, Karen
    07/16/2020
    Team Name: MKJ
    Theme: Peaches
*/

// Initialize all the .getElementById for all the inputs
let formRecieved = document.getElementById('inputForm');
let emailRecieved = document.getElementById('myEmail');
let accountStatus = document.getElementById('accountStatus');

// Initialize all the .getElementById for the restrictions for email
let emailTagRecieved = document.getElementById('emailTag');

// Initalize Booleans
let checkEmail = false;

// .addEventListeners
formRecieved.addEventListener('keyup', testEmail);
formRecieved.addEventListener('submit', sendToEmail);

// .addEventListeners Email focus/blur
emailRecieved.addEventListener('focus', function (event){
    document.getElementById('emailRequirement').classList.add('show');
});
emailRecieved.addEventListener('blur', function (){
    document.getElementById('emailRequirement').classList.remove('show');
});

// Check for email validation
function testEmail (event){
    let regexEmail = /(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;
    if (regexEmail.test(emailRecieved.value)) {
        emailTagRecieved.classList.add('emailCorrect');
        emailTagRecieved.classList.remove('emailIncorrect');
        checkEmail = true;
    } else {
        emailTagRecieved.classList.add('emailIncorrect');
        emailTagRecieved.classList.remove('emailCorrect');
        checkEmail = false;
    }
}

// -- Need Roger's Help for forgotten password (EMAIL) --
function sendToEmail (event) {
    event.preventDefault();
    if (!checkEmail) {
        emailRecieved.classList.add('inputError');
        accountStatus.innerHTML = 'Couldn\'t send to email.'
    }
}