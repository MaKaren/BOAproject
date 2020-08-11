/*
    @Author Momo, Jaye, Karen
    07/16/2020
    Team Name: MKJ
    Theme: Peaches
*/

// Initalize Live Server
// let sendToPage = 'http://127.0.0.1:5500/ForgotPwd/forgotpwd.html';
let sendToPage = 'https://makaren.github.io/BOAproject/ForgotPwd/forgotpwd.html';

// Initialize all the .getElementById for all the inputs
let formRecieved = document.getElementById('inputForm');
let userRecieved = document.getElementById('myUsername');
let accountStatus = document.getElementById('accountStatus');

// Initialize all the .getElementById for the restrictions for email
let userTagRecieved = document.getElementById('userTag');

// Initalize Booleans
let checkUsername = false;

// .addEventListeners
formRecieved.addEventListener('keyup', testUsername);
formRecieved.addEventListener('submit', sendToEmail);

// .addEventListeners Email focus/blur
userRecieved.addEventListener('focus', function (event){
    document.getElementById('userRequirement').classList.add('show');
});
userRecieved.addEventListener('blur', function (){
    document.getElementById('userRequirement').classList.remove('show');
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
                if (response.data === 'user exists') {
                    // Username is avaliable
                    userTagRecieved.classList.add('userCorrect');
                    userTagRecieved.classList.remove('userIncorrect');
                    checkUsername = true;
                    // console.log('checkUsername',checkUsername);
                    console.log('response', response.data);
                } else if (response.data === 'not found') {
                    // Username is not avaliable
                    userTagRecieved.innerHTML = ' Username is not found.' 
                    userTagRecieved.classList.add('userIncorrect');
                    userTagRecieved.classList.remove('userCorrect');
                    checkUsername = false;
                    // console.log('checkUsername',checkUsername);
                    console.log('response', response.data);
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

// -- Need Roger's Help for forgotten password (EMAIL) --
function sendToEmail (event) {
    event.preventDefault();
    if (!checkUsername) {
        userRecieved.classList.add('inputError');
        accountStatus.innerHTML = 'Couldn\'t send to email.'
    } else {
        axios.put(`https://dsya-server.herokuapp.com/team1/resetemail/`, {
            username: userRecieved.value,
            link: `https://makaren.github.io/BOAproject/ForgotPwd/forgotpwd.html?user=${userRecieved.value}`,
        })
        .then (response => {
            console.log('response', response);
            // window.location.replace(sentToPage);
            // Send to show that to reset password is successful (check email)
        })
        .catch (error => {
            console.log(error);
        })
    }
}