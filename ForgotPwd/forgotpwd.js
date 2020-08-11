/*
    @Author Momo, Jaye, Karen
    08/10/2020
    Team Name: MKJ
    Theme: Peaches
*/

// Initialize all the .getElementById for all the inputs
let formRecieved = document.getElementById('inputForm');
let passRecieved = document.getElementById('myPassword');
let confirmRecieved = document.getElementById('myConfirmPassword');

// Initialize all the .getElementById for the restrictions for password
let passTagRevieved1 = document.getElementById('passTag-1');
let passTagRevieved2 = document.getElementById('passTag-2');
let passTagRevieved3 = document.getElementById('passTag-3');
let passTagRevieved4 = document.getElementById('passTag-4');
// Initialize all the .getElementById for the restrictions for confirmation password
let confirmPassTagRecieved = document.getElementById('confirmPassTag');

// Initalize Booleans
let checkUsername = false;
let checkPassword = false;
let checkConfirmPassword = false;

// .addEventListeners
formRecieved.addEventListener('keyup', testPassword);
formRecieved.addEventListener('keyup', testConfirmPassword);
formRecieved.addEventListener('submit', changePassword);

// .addEventListeners Password focus/blur
passRecieved.addEventListener('focus', function (event){
    document.getElementById('passRequirement').classList.add('show');
});
passRecieved.addEventListener('blur', function (){
    document.getElementById('passRequirement').classList.remove('show');
});
// .addEventListeners Confirm focus/blur
confirmRecieved.addEventListener('focus', function (event){
    document.getElementById('confirmRequirement').classList.add('show');
});
confirmRecieved.addEventListener('blur', function (){
    document.getElementById('confirmRequirement').classList.remove('show');
});

// Test for password critera
function testPassword(event) {
    // Test to see if all critera is met
    let checkPass1 = false;
    let checkPass2 = false;
    let checkPass3 = false;
    let checkPass4 = false;

// Check for password length
    if (passRecieved.value.length >= 8 && passRecieved.value.length <= 20){
        // Checking if this will work - in the end we will make sure the password isn't visiable
        passTagRevieved1.innerHTML = 'Password should be between 8 - 20 characters.';
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
        confirmPassTagRecieved.innerHTML = 'Your password matches.';
        confirmPassTagRecieved.classList.add('confirmPassCorrect');
        confirmPassTagRecieved.classList.remove('confirmPassIncorrect');
        checkConfirmPassword = true;
    } else {
        confirmPassTagRecieved.innerHTML = 'Your password doesn\'t match.';
        confirmPassTagRecieved.classList.add('confirmPassIncorrect');
        confirmPassTagRecieved.classList.remove('confirmPassCorrect');
        checkConfirmPassword = false;
    }
}


// fafaEye Password
let fafaEyeRecieved1 = document.getElementById('pass-status-1');
fafaEyeRecieved1.addEventListener('click', fafaEye1);

function fafaEye1() {
    if (passRecieved.type == 'password') {
        passRecieved.type = 'text';
        fafaEyeRecieved1.classList.add('fa-eye-slash');
        fafaEyeRecieved1.classList.remove('fa-eye');
    } else {
        passRecieved.type = 'password';
        fafaEyeRecieved1.classList.add('fa-eye');
        fafaEyeRecieved1.classList.remove('fa-eye-slash');
    }
} 

// fafaEye Confirm Password
let fafaEyeRecieved2 = document.getElementById('pass-status-2');
fafaEyeRecieved2.addEventListener('click', fafaEye2);

function fafaEye2() {
    if (confirmRecieved.type == 'password') {
        confirmRecieved.type = 'text';
        fafaEyeRecieved2.classList.add('fa-eye-slash');
        fafaEyeRecieved2.classList.remove('fa-eye');
    } else {
        confirmRecieved.type = 'password';
        fafaEyeRecieved2.classList.add('fa-eye');
        fafaEyeRecieved2.classList.remove('fa-eye-slash');
    }
} 

// -- Need Roger's Help for forgotten password (Password) --
function changePassword (event) {
    event.preventDefault();

}