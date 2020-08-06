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
formRecieved.addEventListener('keyup', function() {
    // if (userRecieved.value.length >= 8 && userRecieved.value.length <= 20) {
        axios.get(`https://dsya-server.herokuapp.com/team1/checkusername/${userRecieved.value}`) 
            .then (response => {
                if (response.data === 'user exist') {
                    checkUsername = true;
                } 
            }) 
            .catch (error => {
                console.log(error);
            })
        axios.get(`https://dsya-server.herokuapp.com/team1/checkpassword/${userPassword.value}`) 
            .then (response => {
                if (response.data === 'password exist') {
                    checkPassword = true;
                }
            }) 
            .catch (error => {
                console.log(error);
            })    
    // }
    console.log('Password:', userPassword.value);
    console.log('Status:', checkUsername && checkPassword);
    if (checkUsername && checkPassword) {
        // Direct them to the home page.
        // home.html
    }
});
