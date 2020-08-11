/*
    @Author Momo, Jaye, Karen
    08/11/2020
    Team Name: MKJ
    Theme: Peaches
*/


// Initialize all the .getElementById for all the inputs
// let formRecieved = document.getElementById('inputForm');
let userRecieved = document.getElementById('myUsername');

function getUsername (){
    axios.get(`https://dsya-server.herokuapp.com/team1/login/`, {
        auth: {
            // username: userRecieved.value,
        }
    }) 
        .then (response => {
            console.log('Response', response.data);
            // Code to get response from axios
            userRecieved.innerHTML = 'Welcome Back ' + response.data;

        }) 
        .catch (error => {
            console.log(error);
            userRecieved.innerHTML = 'Error';
        })
}