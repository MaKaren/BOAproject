/*
    @Author Momo, Jaye, Karen
    08/11/2020
    Team Name: MKJ
    Theme: Peaches
*/

// Query String
const params = new URLSearchParams(window.location.search);
console.log(params.get('user'));

// Initialize all the .getElementById for all the inputs
// let formRecieved = document.getElementById('inputForm');
let userRecieved = document.getElementById('myUsername');

userRecieved.innerHTML = 'Welcome back ' + params.get('user');