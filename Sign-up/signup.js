/*
    @Author Momo, Jaye, Karen
    07/16/2020
    Team Name: MKJ
    Theme: Peaches
*/

// Initalize Live Server
// let sendToPage = 'http://127.0.0.1:5500/Sign-up/sign-up-successful.html';
let sendToPage = 'https://makaren.github.io/BOAproject/Sign-up/sign-up-successful.html';

// AXIOS - this was used for the package but we chose to change it to direct link
// let axios = require('axios');

// Initialize all the .getElementById for all the inputs fafaeye
let fafaEyeRecieved1 = document.getElementById('pass-status-1');
let fafaEyeRecieved2 = document.getElementById('pass-status-2');

// Initialize all the .getElementById for all the inputs
let formRecieved = document.getElementById('inputForm');
let userRecieved = document.getElementById('myUsername');
let passRecieved = document.getElementById('myPassword');
let confirmRecieved = document.getElementById('myConfirmPassword');
let emailRecieved = document.getElementById('myEmail');
let emailConfirmRevieved = document.getElementById('myConfirmEmail');

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
// Initialize all the .getElementById for the restrictions for email confirm
let emailConfirmTagRevieved = document.getElementById('emailConfirmTag');

// Initalize Booleans
let checkUsername = false;
let checkPassword = false;
let checkConfirmPassword = false;
let checkEmail = false;
let checkConfirmEmail = false;

// .addEventListeners
formRecieved.addEventListener('keyup', testUsername);
formRecieved.addEventListener('keyup', testPassword);
formRecieved.addEventListener('keyup', testConfirmPassword);
formRecieved.addEventListener('keyup', testEmail);
formRecieved.addEventListener('keyup', testConfirmEmail);
formRecieved.addEventListener('submit', makeAccountConfirmation);
fafaEyeRecieved1.addEventListener('click', fafaEye1);
fafaEyeRecieved2.addEventListener('click', fafaEye2);

// .addEventListeners User focus/blur
userRecieved.addEventListener('focus', function (){
    document.getElementById('userRequirement').classList.add('show');
});
userRecieved.addEventListener('blur', function (){
    document.getElementById('userRequirement').classList.remove('show');
});
// .addEventListeners Password focus/blur
passRecieved.addEventListener('focus', function (event){
    document.getElementById('passRequirement').classList.add('show');
    fafaEyeRecieved1.classList.add('fafaEyeSignupPassOnClick');
    fafaEyeRecieved1.classList.remove('fafaEyeSignupPass');
});
passRecieved.addEventListener('blur', function (){
    document.getElementById('passRequirement').classList.remove('show');
    fafaEyeRecieved1.classList.add('fafaEyeSignupPass');
    fafaEyeRecieved1.classList.remove('fafaEyeSignupPassOnClick');
});
// .addEventListeners Confirm focus/blur
confirmRecieved.addEventListener('focus', function (event){
    document.getElementById('confirmRequirement').classList.add('show');
    fafaEyeRecieved2.classList.add('fafaEyeSignupConfirmOnClick');
    fafaEyeRecieved2.classList.remove('fafaEyeSignupConfirm');
    fafaEyeRecieved1.classList.add('fafaEyeSignupPassOnClickWithConfirm');
    fafaEyeRecieved1.classList.remove('fafaEyeSignupPass');
});
confirmRecieved.addEventListener('blur', function (){
    document.getElementById('confirmRequirement').classList.remove('show');
    fafaEyeRecieved2.classList.add('fafaEyeSignupConfirm');
    fafaEyeRecieved2.classList.remove('fafaEyeSignupConfirmOnClick');
    fafaEyeRecieved1.classList.add('fafaEyeSignupPass');
    fafaEyeRecieved1.classList.remove('fafaEyeSignupPassOnClickWithConfirm');
});
// .addEventListeners Email focus/blur
emailRecieved.addEventListener('focus', function (event){
    document.getElementById('emailRequirement').classList.add('show');
    fafaEyeRecieved2.classList.add('fafaEyeSignupConfirmOnClickWithEmail');
    fafaEyeRecieved2.classList.remove('fafaEyeSignupConfirm');
    fafaEyeRecieved1.classList.add('fafaEyeSignupPassOnClickWithEmail');
    fafaEyeRecieved1.classList.remove('fafaEyeSignupPass');
});
emailRecieved.addEventListener('blur', function (){
    document.getElementById('emailRequirement').classList.remove('show');
    fafaEyeRecieved2.classList.add('fafaEyeSignupConfirm');
    fafaEyeRecieved2.classList.remove('fafaEyeSignupConfirmOnClickWithEmail');
    fafaEyeRecieved1.classList.add('fafaEyeSignupPass');
    fafaEyeRecieved1.classList.remove('fafaEyeSignupPassOnClickWithEmail');
});
// .addEventListener Confirm Email focus/blur
emailConfirmRevieved.addEventListener('focus', function() {
    document.getElementById('emailConfirmRequirement').classList.add('show');
    fafaEyeRecieved2.classList.add('fafaEyeSignupConfirmOnClickWithEmail');
    fafaEyeRecieved2.classList.remove('fafaEyeSignupConfirm');
    fafaEyeRecieved1.classList.add('fafaEyeSignupPassOnClickWithEmail');
    fafaEyeRecieved1.classList.remove('fafaEyeSignupPass');
});
emailConfirmRevieved.addEventListener('blur', function () {
    document.getElementById('emailConfirmRequirement').classList.remove('show');
    fafaEyeRecieved2.classList.add('fafaEyeSignupConfirm');
    fafaEyeRecieved2.classList.remove('fafaEyeSignupConfirmOnClickWithEmail');
    fafaEyeRecieved1.classList.add('fafaEyeSignupPass');
    fafaEyeRecieved1.classList.remove('fafaEyeSignupPassOnClickWithEmail');
});

// Check for Username
function testUsername(event) {
    if (userRecieved.value.length >= 8 && userRecieved.value.length <= 20 && userRecieved.value.length != 0) {
        userTagRecieved.classList.add('userIncorrect');
        userTagRecieved.classList.remove('userCorrect');
    }
    if (userRecieved.value.length >= 8 && userRecieved.value.length <= 20 && userRecieved.value.length != 0) {
        // console.log('User Recieved:', userRecieved.value);
        // Axios reads from the back-end
        axios.get(`https://dsya-server.herokuapp.com/team1/checkusername/${userRecieved.value}`)
            .then (response => {
                if (response.data === 'not found') {
                    // Username is avaliable
                    userTagRecieved.classList.add('userCorrect');
                    userTagRecieved.classList.remove('userIncorrect');
                    checkUsername = true;
                } else if (response.data === 'user exists') {
                    // Username is not avaliable
                    userTagRecieved.innerHTML = ' Username is not avaliable' 
                    userTagRecieved.classList.add('userIncorrect');
                    userTagRecieved.classList.remove('userCorrect');
                    checkUsername = false;
                }
                // console.log('response:', response);
            })
            .catch (error => {
                console.log('error:', error);
            })
    } else {
        userTagRecieved.classList.add('userIncorrect');
        userTagRecieved.classList.remove('userCorrect');
    }
}

// Check for password 
function testPassword(event) {
    // Test to see if all critera is met
    let checkPass1 = false;
    let checkPass2 = false;
    let checkPass3 = false;
    let checkPass4 = false;

// Check for password length
    if (passRecieved.value.length >= 8 && passRecieved.value.length <= 20){
        // Checking if this will work - in the end we will make sure the password isn't visiable
        passTagRevieved1.innerHTML = ' Password should be between 8 - 20 characters.';
        passTagRevieved1.classList.add('passCorrect-1');
        passTagRevieved1.classList.remove('passIncorrect-1');
        checkPass1 = true;
    // != 0 is to prevent default from changing when there's no password input
    } else if (passRecieved.value.length <= 8 && passRecieved.value.length != 0){
        passTagRevieved1.innerHTML = ' Your password is too short.';
        passTagRevieved1.classList.add('passIncorrect-1');
        passTagRevieved1.classList.remove('passCorrect-1');
        checkPass1 = false;
    } else if (passRecieved.value.length >= 20){
        passTagRevieved1.innerHTML = ' Your password is too long.';
        passTagRevieved1.classList.add('passIncorrect-1');
        passTagRevieved1.classList.remove('passCorrect-1');
        checkPass1 = false;
    } else {
        passTagRevieved1.innerHTML = ' Password should be between 8 - 20 characters.';
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

// Check for email confirmation validation
function testConfirmEmail (event) {
    if (emailConfirmRevieved.value == emailRecieved.value && emailRecieved.value.length != 0) {
        emailConfirmTagRevieved.classList.add('emailConfirmCorrect');
        emailConfirmTagRevieved.classList.remove('emailConfirmIncorrect');
        checkConfirmEmail = true;
    } else {
        emailConfirmTagRevieved.classList.add('emailConfirmIncorrect');
        emailConfirmTagRevieved.classList.remove('emailConfirmCorrect');
        checkConfirmEmail = false;
        
    }
}

// Check if the account was successfully made or not (ON SUBMIT)
function makeAccountConfirmation(event) {
    let allUserSave = [];
    let userSave = [];
    event.preventDefault();
    if (checkUsername && checkPassword && checkConfirmPassword && checkEmail && checkConfirmEmail) {
        // document.getElementById('accountStatus').innerHTML = 'Your account has been made'; 
        let object = {
            username: userRecieved.value,
            password: passRecieved.value,
            email: emailRecieved.value,
        };
        userSave.push(object);

        axios.post('https://dsya-server.herokuapp.com/team1/createuser/', object)
            .then(response => {
                console.log(response);
                console.log('object: ', object);
                // console.log('userSave:', userSave);
                allUserSave.push(userSave);
                // console.log('allUserSave:',allUserSave);
            // LocalStorage
                localStorage.user = JSON.stringify(allUserSave);
                // console.log('JSON Data:', JSON.stringify(allUserSave));
                // Test Code ===================================
                // Login page:
                let userGet = JSON.parse(localStorage.user);
                // console.log('userGet:', userGet);
                // =============================================
                window.location.replace(sendToPage);
            })
            .catch(error => {
                console.log(error);
            })
    } else {
        document.getElementById('accountStatus').innerHTML = '*Your account could not be made. Make sure to check all the requirements.'
        if (!checkUsername) {
            userRecieved.classList.add('inputError');
        } else {
            userRecieved.classList.remove('inputError');
        }
        if (!checkPassword) {
            passRecieved.classList.add('inputError');
        } else {
            passRecieved.classList.remove('inputError');
        }
        if (!checkConfirmPassword) {
            confirmRecieved.classList.add('inputError');
        } else {
            confirmRecieved.classList.remove('inputError');
        }
        if (!checkEmail) {
            emailRecieved.classList.add('inputError');
        } else {
            emailRecieved.classList.remove('inputError');
        }
        if (!checkConfirmEmail) {
            emailConfirmRevieved.classList.add('inputError');
        } else {
            emailConfirmRevieved.classList.remove('inputError');     
        }
    }
}

// fafaEye Password
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
