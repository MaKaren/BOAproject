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

// Initlize Boolean
let checkUsername = false;
let checkPassword = false;

// .addEventListeners
formRecieved.addEventListener('submit', function(event) {
    event.preventDefault();
    // if (userRecieved.value.length >= 8 && userRecieved.value.length <= 20) {
        axios.get(`https://dsya-server.herokuapp.com/team1/login/`, {
            auth: {
                username: userRecieved.value,
                password: passRecieved.value,
            }
        }) 
            .then (response => {
                console.log('Response', response.data);
                window.location.replace('http://127.0.0.1:5500/Home/home.html');
            }) 
            .catch (error => {
                console.log(error);
            })
});
