/*
    @Author Momo, Jaye, Karen
    08/05/2020
    Team Name: MKJ
    Theme: Peaches
*/

// Initalize Live Server
// let sendToPage = 'http://127.0.0.1:5500/Home/home.html';
let sendToPage = 'https://makaren.github.io/BOAproject/Home/home.html';

// Initialize all the .getElementById for all the inputs
let formRecieved = document.getElementById('inputForm');
let userRecieved = document.getElementById('myUsername');
let passRecieved = document.getElementById('myPassword');
let accountStatusRecieved = document.getElementById('accountStatus');



// .addEventListeners
formRecieved.addEventListener('submit', function(event) {
    event.preventDefault();
        axios.get(`https://dsya-server.herokuapp.com/team1/login/`, {
            auth: {
                username: userRecieved.value,
                password: passRecieved.value,
            }
        }) 
            .then (response => {
                console.log('Response', response.data);
                if (response.data == 'username and password ok') {
                    window.location.replace(sendToPage);
                } else {
                    accountStatusRecieved.innerHTML = 'Your username or password is incorrect.';
                }
            }) 
            .catch (error => {
                console.log(error);
                accountStatusRecieved.innerHTML = 'Your username or password is incorrect.';
                userRecieved.classList.add('inputError');
                passRecieved.classList.add('inputError');
            })
});

// fafaEye
let fafaEyeRecieved = document.getElementById('pass-status');
fafaEyeRecieved.addEventListener('click', fafaEye);

function fafaEye() {
    if (passRecieved.type == 'password') {
        passRecieved.type = 'text';
        fafaEyeRecieved.classList.add('fa-eye-slash');
        fafaEyeRecieved.classList.remove('fa-eye');
    } else {
        passRecieved.type = 'password';
        fafaEyeRecieved.classList.add('fa-eye');
        fafaEyeRecieved.classList.remove('fa-eye-slash');
    }
} 
