/*
    @Author Momo, Jaye, Karen
    07/16/2020
    Team Name: MKJ
    Theme: Peaches
*/

let passRecieved = document.getElementById('myPassword');
let confirmRecieved = document.getElementById('myConfirmPassword');
let emailRecieved = document.getElementById('myEmail');

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
// .addEventListeners Email focus/blur
emailRecieved.addEventListener('focus', function (event){
    document.getElementById('emailRequirement').classList.add('show');
});
emailRecieved.addEventListener('blur', function (){
    document.getElementById('emailRequirement').classList.remove('show');
});

// fafaEye
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

// fafaEye
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