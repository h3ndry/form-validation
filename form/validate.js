const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

//Show input erro message
function showErro(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    formControl.classList = 'form-control error'
    small.innerHTML = message;
}

// Show input success 
function showSucces(input) {

    const formControl = input.parentElement;
    formControl.classList = 'form-control success'
}

// Add event listers
form.addEventListener('submit', function (e) {
    e.preventDefault()

    if (username.value === '') {
        showErro(username, 'user name is required')
    } else {
        showSucces(username)
    }

    //Regular expresion for email   
    function isVlaidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    //Check for email   
    if (email.value === '') {
        showErro(email, 'email is required')
    } else if (!isVlaidEmail(email.value)) {

        showErro(email, 'Please provide a valid email')
    } else {
        showSucces(email)
    }

    //Cheack for password
    if (password.value === '') {
        showErro(password, 'password is required')
    } else {
        showSucces(password)
    }

    //check for password 2
    if (password2.value === '') {
        showErro(password2, 'password2 is required')
    } else {
        showSucces(password2)
    }
})