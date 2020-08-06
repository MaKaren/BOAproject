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
formRecieved.addEventListener('submit', function() {
    axios.get(`https://dsya-server.herokuapp.com/team1/checkusername/${userRecieved.value}`) 
        .then (response => {
            
        }) 
        .catch (error => {

        })
    axios.get(`https://dsya-server.herokuapp.com/team1/checkpassword/${userPassword.value}`) 
        .then (response => {
            
        }) 
        .catch (error => {

        })    
});
