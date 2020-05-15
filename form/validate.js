const inputList = document.querySelectorAll('input[data-input]')
const checkboxList = document.querySelectorAll('input[data-checkbox]')

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

function checkRequired(inputArry) {
    //implementation of check required  
    inputArry.forEach(input => {
        if (input.value === '') {
            showErro(input, `${input.dataset.input} is required`)
        } else {
            console.log('wassup with you')
            showSucces(input)
        }
    })
}
// Add event listers
checkboxList.forEach(function (checkbox) {
    checkbox.addEventListener('click', function (e) {
        if (e.target.checked) {
            e.target.parentElement.classList = 'checked'
        } else {
            e.target.parentElement.classList = ''
        }
    })
})

inputList.forEach(input => {
    input.addEventListener('blur', e => {
        checkRequired([e.target])
    })
})
//check if required for each input  
form.addEventListener('submit', function (e) {
    e.preventDefault()

    //Regular expresion for email   
    function isVlaidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    checkRequired(inputList)
})