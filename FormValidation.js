var form = document.getElementById("form");
var fullname = document.getElementById("firstname");
var surname = document.getElementById("surname");
var email = document.getElementById("email");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {

    const fullnameValue = fullname.value;
    const surnameValue = surname.value;
    const emailValue = email.value;

    if (fullnameValue === '') {
        setErrorFor(fullname, 'Name can not be blank');
    } else {
        setSuccessFor(fullname);
    }

    if (surnameValue === '') {
        setErrorFor(surname, 'Surname can not be blank');
    } else {
        setSuccessFor(surname);
    }

    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if(!validEmail(emailValue)) {
        setErrorFor(email, 'Email is invalid');
    } else {
        setSuccessFor(email);
    }

}

function setErrorFor(input, message) {
    console.log("inSetError function");
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const  formControl = input.parentElement;
    formControl.className = "form-control success";


}

function validEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}