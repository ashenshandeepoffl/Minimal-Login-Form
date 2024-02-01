const loginForm = document.querySelector('#loginForm');
const username = loginForm.querySelector('#username');
const password = loginForm.querySelector('#password');
const errorMsg = loginForm.querySelector('.errorMsg');

// Add 'input' event listeners to the username and password fields
username.addEventListener('input', handleInput);
password.addEventListener('input', handleInput);

loginForm.addEventListener('submit', onSubmit);

function handleInput() {
    // Clear the error message when the user starts typing
    errorMsg.classList.remove("error");
    errorMsg.innerHTML = '';
}

function onSubmit(e) {
    e.preventDefault();

    if (username.value === "" || password.value === "") {
        errorMsg.classList.add("error");
        errorMsg.innerHTML = 'Please enter all required fields';
    } else {
        console.log('Successfully');
    }
}
