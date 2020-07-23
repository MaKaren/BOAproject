/*
    @Author Momo, Jaye, Karen
    07/16/2020
    Team Name: MKJ
    Theme: Peaches
*/

// Initialize all the .getElementById for all the inputs
let formRecieved = document.getElementById('inputForm');
let userRecieved = document.getElementById('myUsername');
let passRecieved = document.getElementById('myPassword');
let confirmRecieved = document.getElementById('myConfirmPassword');
let emailRecieved = document.getElementById('myEmail');

// Initialize all the .getElementById for the restrictions for username
let userTagRecieved = document.getElementById('userTag');
// Initialize all the .getElementById for the restrictions for password
let passTagRevieved1 = document.getElementById('passTag-1');
let passTagRevieved2 = document.getElementById('passTag-2');
let passTagRevieved3 = document.getElementById('passTag-3');
let passTagRevieved4 = document.getElementById('passTag-4');
// Initialize all the .getElementById for the restrictions for confirmation password
let confirmPassTag = document.getElementById('confirmPassTag');

// .addEventListeners
formRecieved.addEventListener('keyup', makeAccount);

function makeAccount(event) {
// event.preventDefault();
// What is this? Is it to check in the console? - Karen =============
    console.log('userRecieved', userRecieved.value);
    console.log('passRecieved', passRecieved.value);
    console.log('confirmRecieved', confirmRecieved.value);
    console.log('emailRecieved', emailRecieved.value);
// ==================================================================

// Check for Username
    // *At some point add an eventListener to do toggle.
    if(userRecieved.value.length >= 8 && userRecieved.value.length <= 20){
        userTagRecieved.classList.add('userCorrect');
        userTagRecieved.classList.remove('userIncorrect');
    } else {
        userTagRecieved.classList.add('userIncorrect');
        userTagRecieved.classList.remove('userCorrect');
    }
    
// Check for password
    // Check for password length
    if (passRecieved.value.length >= 8 && passRecieved.value.length <= 20){
        // Checking if this will work - in the end we will make sure the password isn't visiable
        passTagRevieved1.innerHTML = passRecieved.value;
        passTagRevieved1.classList.add('passCorrect-1');
        passTagRevieved1.classList.remove('passIncorrect-1');
    } else if (passRecieved.value.length <= 8){
        passTagRevieved1.innerHTML = 'Your password is too short.';
        passTagRevieved1.classList.add('passIncorrect-1');
        passTagRevieved1.classList.remove('passCorrect-1');
        // != 0 is to prevent default from changing when there's no password input
    } else if (passRecieved.value.length >= 20 && passRecieved.value.length != 0){
        passTagRevieved1.innerHTML = 'Your password is too long.';
        passTagRevieved1.classList.add('passIncorrect-1');
        passTagRevieved1.classList.remove('passCorrect-1');
    }

    // Check for password 1 number, 1 uppercase, 1 symbol
    // let regexUpper = /[[:upper:]]/;
    // let regexNumber = /d{1}/;
    // let regexSymbol = /\W/;
    // // passRecieved.value.search(regexNumber) && passRecieved.value.search(regexSymbol
    // if (passRecieved.value.search(regexNumber)) {
    //     passTagRevieved2.classList.add('passCorrect-2'); 
    //     passTagRevieved2.classList.remove('passIncorrect-2'); 
    // } else {
    //     passTagRevieved2.classList.add('passIncorrect-2'); 
    //     passTagRevieved2.classList.remove('passCorrect-2'); 
    // }

// Check for confirm password
    // != 0 is to prevent default from changing when there's no password input
    if (passRecieved.value == confirmRecieved.value && passRecieved.value.length != 0) {
        confirmPassTag.innerHTML = 'Matches!: ' + confirmRecieved.value;
        confirmPassTag.classList.add('confirmPassCorrect');
        confirmPassTag.classList.remove('confirmPassIncorrect');
    } else {
        confirmPassTag.innerHTML = 'Your password doesn\'t match: ' + confirmRecieved.value;
        confirmPassTag.classList.add('confirmPassIncorrect');
        confirmPassTag.classList.remove('confirmPassCorrect');
    }

// Check for email


}

// &check; makes a checkmark
