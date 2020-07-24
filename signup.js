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
let confirmPassTagRecieved = document.getElementById('confirmPassTag');
// Initialize all the .getElementById for the restrictions for email
let emailTagRecieved = document.getElementById('emailTag');

// Initalize Booleans
let checkUsername = false;
let checkPassword = false;
let checkConfirmPassword = false;
let checkEmail = true;

// .addEventListeners
formRecieved.addEventListener('keyup', testUsername);
formRecieved.addEventListener('keyup', testPassword);
formRecieved.addEventListener('keyup', testConfirmPassword);
formRecieved.addEventListener('keyup', testEmail);
formRecieved.addEventListener('submit', makeAccountConfirmation);

// Check for Username
function testUsername(event) {
    if(userRecieved.value.length >= 8 && userRecieved.value.length <= 20){
        userTagRecieved.classList.add('userCorrect');
        userTagRecieved.classList.remove('userIncorrect');
        checkUsername = true;
    } else {
        userTagRecieved.classList.add('userIncorrect');
        userTagRecieved.classList.remove('userCorrect');
        checkUsername = false;
    }
}

// Check for password 
function testPassword(event) {
    let checkPass1 = false;
    let checkPass2 = false;
    let checkPass3 = false;
    let checkPass4 = false;

// Check for password length
    if (passRecieved.value.length >= 8 && passRecieved.value.length <= 20){
        // Checking if this will work - in the end we will make sure the password isn't visiable
        passTagRevieved1.innerHTML = passRecieved.value;
        passTagRevieved1.classList.add('passCorrect-1');
        passTagRevieved1.classList.remove('passIncorrect-1');
        checkPass1 = true;
    // != 0 is to prevent default from changing when there's no password input
    } else if (passRecieved.value.length <= 8 && passRecieved.value.length != 0){
        passTagRevieved1.innerHTML = 'Your password is too short.';
        passTagRevieved1.classList.add('passIncorrect-1');
        passTagRevieved1.classList.remove('passCorrect-1');
        checkPass1 = false;
    } else if (passRecieved.value.length >= 20){
        passTagRevieved1.innerHTML = 'Your password is too long.';
        passTagRevieved1.classList.add('passIncorrect-1');
        passTagRevieved1.classList.remove('passCorrect-1');
        checkPass1 = false;
    } else {
        passTagRevieved1.innerHTML = 'Password should be between 8 - 20 characters.';
        passTagRevieved1.classList.add('passIncorrect-1');
        passTagRevieved1.classList.remove('passCorrect-1');
        checkPass1 = false;
    }

// Check for password 1 number, 1 uppercase, 1 symbol
    let regexNumber = /\d{1}/g;
    let regexUpper = /(?=.*[A-Z])/g;
    let regexSymbol = /\W+/g;
    if (regexNumber.test(passRecieved.value) && regexUpper.test(passRecieved.value) && regexSymbol.test(passRecieved.value)) {
        passTagRevieved2.classList.add('passCorrect-2'); 
        passTagRevieved2.classList.remove('passIncorrect-2'); 
        checkPass2 = true;
    } else {
        passTagRevieved2.classList.add('passIncorrect-2'); 
        passTagRevieved2.classList.remove('passCorrect-2'); 
        checkPass2 = false;
    }

// Check for password doesn't repeat the same number or letter 3 times in a row
    let regexRepeatAny = /(?=.*([a-zA-Z0-9])\1{2})/g;
    // != 0 is to prevent default from changing when there's no password input
    if (!regexRepeatAny.test(passRecieved.value) && passRecieved.value.length != 0) {
        passTagRevieved3.classList.add('passCorrect-3'); 
        passTagRevieved3.classList.remove('passIncorrect-3'); 
        checkPass3 = true;
    } else {
        passTagRevieved3.classList.add('passIncorrect-3'); 
        passTagRevieved3.classList.remove('passCorrect-3'); 
        checkPass3 = false;
    }

// Check for password doesn't include these symbols: @#*()+={}/?~,.-_
    let regexNoTheseSymbol = /(?=.*[-@#*()+={}\/?~,._])/g;
    // != 0 is to prevent default from changing when there's no password input
    if (!(regexNoTheseSymbol.test(passRecieved.value)) && passRecieved.value.length != 0){
        passTagRevieved4.classList.add('passCorrect-4');
        passTagRevieved4.classList.remove('passIncorrect-4');
        checkPass4 = true;
    } else {
        passTagRevieved4.classList.add('passIncorrect-4');
        passTagRevieved4.classList.remove('passCorrect-4');
        checkPass4 = false;
    }

// If every criteria is met return true for checkPassword
    if (checkPass1 && checkPass2 && checkPass3 && checkPass4) {
        checkPassword = true;
    } else {
        checkPassword = false;
    }
}

// Check for confirm password
function testConfirmPassword(event){
    // != 0 is to prevent default from changing when there's no password input
    if (passRecieved.value == confirmRecieved.value && passRecieved.value.length != 0) {
        confirmPassTagRecieved.innerHTML = 'Matches!: ' + confirmRecieved.value;
        confirmPassTagRecieved.classList.add('confirmPassCorrect');
        confirmPassTagRecieved.classList.remove('confirmPassIncorrect');
        checkConfirmPassword = true;
    } else {
        confirmPassTagRecieved.innerHTML = 'Your password doesn\'t match: ' + confirmRecieved.value;
        confirmPassTagRecieved.classList.add('confirmPassIncorrect');
        confirmPassTagRecieved.classList.remove('confirmPassCorrect');
        checkConfirmPassword = false;
    }
}

// Check for email validation
function testEmail (event){
    let regexEmail = 'put regex here';
    if (regexEmail) {
        emailTagRecieved.classList.add('emailCorrect');
        emailTagRecieved.classList.remove('emailIncorrect');
        checkEmail = true;
    } else {
        emailTagRecieved.classList.add('emailIncorrect');
        emailTagRecieved.classList.remove('emailCorrect');
        checkEmail = false;
    }
}


let allUserSave = [];

// Check if the account was successfully made or not
function makeAccountConfirmation(event) {
    let userSave = [];
    event.preventDefault();
    if (checkUsername && checkPassword && checkConfirmPassword && checkEmail) {
        document.getElementById('accountStatus').innerHTML = 'Your account has been made'; 

        // Checking for console
        userSave.push(userRecieved.value);
        userSave.push(passRecieved.value);
        userSave.push(emailRecieved.value);
        allUserSave.push(userSave);
        console.log(userSave);
        console.log(allUserSave);

    } else {
        document.getElementById('accountStatus').innerHTML = '*Your account could not be made. Make sure to check all the requirements.'
    }
}
