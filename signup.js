/*
    @Author Momo, Jaye, Karen
    07/16/2020
    Team Name: MKJ
    Theme: Peaches
*/

// Initialize all the .getElementById for all the inputs
let formRecieved = document.getElementById("inputForm");
let userRecieved = document.getElementById("myUsername");
let passRecieved = document.getElementById("myPassword");
let confirmRecieved = document.getElementById("myConfirmPassword");
let emailRecieved = document.getElementById("myEmail");


//  What does this do? - Karen vv ==================================
// let getUser = document.querySelector("#myUsername");
// let message = document.querySelector("#userTag");

//function validate(event) {
//    let inputVar = event.target.value;
//    console.log("inputVar", inputVar);
//    if(inputVar.length < 7) {
//console.log("invalid input");
 //   } else {
//        message.setAttribute("class", "validUser");
 //   }
//}

 // getUser.addEventListener("change", validate);
// ==================================================================
 
// .addEventListeners
formRecieved.addEventListener("submit", makeAccount);

function makeAccount(event) {
// What is this? Is it to check in the console? - Karen =============
    console.log("userRecieved", userRecieved.value);
    console.log("passRecieved", passRecieved.value);
    console.log("confirmRecieved", confirmRecieved.value);
    console.log("emailRecieved", emailRecieved.value);
// ==================================================================

event.preventDefault();
// Check for Username
    if(userRecieved.value.length >= 8 && userRecieved.value.length <= 20){
        document.getElementById('userTag').innerHTML = userRecieved.value;
    } else if (userRecieved.value.length <= 8){
        document.getElementById('userTag').innerHTML = 'Your username is too short.'
        // Use class='userIncorrect' = true (true that it's incorrect and doesn't work)
    // != 0 is to prevent default from changing when there's no username input
    } else if (userRecieved.value.length > 20 && userRecieved.value.length != 0){ 
        document.getElementById('userTag').innerHTML = 'Your username is too long.'
        // Use class='userIncorrect' = true (true that it's incorrect and doesn't work)
    }
// Check for password
    // Check for password length
    if (passRecieved.value.length >= 8 && passRecieved.value.length <= 20){
        // Checking if this will work - in the end we will make sure the password isn't visiable
        document.getElementById('passwordTag-1').innerHTML = passRecieved.value;
    } else if (passRecieved.value.length <= 8){
        document.getElementById('passwordTag-1').innerHTML = 'Your password is too short.';
        // Use class='passwordIncorrect' = true (true that it's incorrect and doesn't work)
    // != 0 is to prevent default from changing when there's no password input
    } else if (passRecieved.value.length >= 20 && passRecieved.value.length != 0){
        document.getElementById('passwordTag-1').innerHTML = 'Your password is too long.';
        // Use class='passwordIncorrect' = true (true that it's incorrect and doesn't work)
    }

    // Check for password 1 number, 1 uppercase, 1 symbol


// Check for confirm password
    // != 0 is to prevent default from changing when there's no password input
    if (passRecieved.value == confirmRecieved.value && passRecieved.value.length != 0) {
        document.getElementById('confirmPasswordTag').innerHTML = 'Matches!: ' + confirmRecieved.value;
    } else {
        document.getElementById('confirmPasswordTag').innerHTML = 'Your password doesn\'t match: ' + confirmRecieved.value;
        // Use class='confirmPasswordIncorrect' = true (true that it doesn't match and doesn't work)
    }

// Check for email


}

// &check; makes a checkmark
