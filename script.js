const emailValidator = "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/";

function subscribeClicked() {

    console.log("Hello");

    const input = document.getElementById("emailInput");

    const email = input.value; 

    if (isInvalidEmail(email)) {
        emailError();
    }
    else {
        removeEmailError();
    }
}

function isInvalidEmail(email) {

    return email.match(emailValidator);
}

function emailError() {

    const emailError = document.getElementById("emailErrorMessage");

    if (emailError.classList.contains("errorHidden")) {
        emailError.classList.remove("errorHidden");
        emailError.classList.add("errorShown");
    }
}

function removeEmailError() {

    const emailError = document.getElementById("emailErrorMessage");

    if (emailError.classList.contains("errorShown")) {
        emailError.classList.remove("errorShown");
        emailError.classList.add("errorHidden");
    }
}

const button = document.getElementById("subscribeButton");

button.addEventListener("click", subscribeClicked);

console.log("Hi");