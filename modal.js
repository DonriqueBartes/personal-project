var modal = document.getElementById("the-modal");

var bttn = document.getElementById("sub-button");

var modalBox = document.getElementById("modal-text");

var refBttn = document.getElementById("refresh-button");

var fname = document.getElementById("first-name");
var sname = document.getElementById("surname");
var eemail = document.getElementById("email");



successMessage = function () {
    modalBox.innerHTML = 'Your message has been submitted successfully';
}

errorMessage = function () {
    modalBox.innerHTML = 'Invalid details has been entered';
}

refBttn.onclick = function () {
    location.reload();

}


let fnameCheck = fname;
let snameCheck = sname;
let emailCheck = eemail;

validateEmail = function (emailCheck) {
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailCheck.value.match(emailFormat)) {
        return true;
    }
}


//Modal popup
bttn.onclick = function () {

    if (fname.value.length == 0) {

        modal.style.display = "block";
        errorMessage();

    } else if (snameCheck.value.length == 0) {

        modal.style.display = "block";
        errorMessage();

    } else if (!validateEmail(eemail)) {

        modal.style.display = "block";
        errorMessage();
    }

    else {
        modal.style.display = "block";
        successMessage();

    }

}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }

}


