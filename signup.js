/*
    @Author Momo, Jaye, Karen
    07/16/2020
    Team Name: MKJ
    Theme: Peaches
*/

let formRecieved = document.getElementById("inputForm");
let userRecieved = document.getElementById("myUsername");
let passRecieved = document.getElementById("myPassword");
let confirmRecieved = document.getElementById("myConfirmPassword");
let emailRecieved = document.getElementById("myEmail");

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

 

formRecieved.addEventListener("submit", makeAccount);

function makeAccount(event) {
    event.preventDefault();

    // if(userRecieved.value >= 8 && userRecieved.value <= 20){
            
    // }

    console.log("userRecieved", userRecieved.value);
    console.log("passRecieved", passRecieved.value);
    console.log("confirmRecieved", confirmRecieved.value);
    console.log("emailRecieved", emailRecieved.value);
}

// &check; makes a checkmark