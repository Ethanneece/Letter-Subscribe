const emailValidator = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

function subscribeClicked() {

    const input = document.getElementById("emailInput");

    const email = input.value; 
    
    console.log(isInvalidEmail(email));

    if (isInvalidEmail(email)) {
        emailError();
        return;
    }

    removeEmailError();

    const signUpContent = document.getElementById("signUpContent");
    const successPage = document.getElementById("success");
    const successP = document.getElementById("successMessage");

    signUpContent.classList.add("hidden");
    signUpContent.classList.remove("content");

    successPage.classList.remove("hidden");
    successPage.classList.add("successContainer");

    successP.innerHTML = "A confirmation email has been sent to <b>" +  email + "</b> Please open it and click the button inside to confirm your subscription."
}

function dismissClicked() {

    const signUpPage = document.getElementById("signUpContent");
    const successPage = document.getElementById("success");

    signUpPage.classList.remove("hidden");
    signUpPage.classList.add("content");

    successPage.classList.remove("successContainer");
    successPage.classList.add("hidden");
}

function isInvalidEmail(email) {

    return !emailValidator.test(email);
}

function emailError() {

    const emailError = document.getElementById("emailErrorMessage");
    const input = document.getElementById("emailInput");

    if (emailError.classList.contains("errorHidden")) {
        emailError.classList.remove("errorHidden");
        emailError.classList.add("errorShown");
    }

    if (!input.classList.contains("inputError")) {
        input.classList.add("inputError");
    }
}

function removeEmailError() {

    const emailError = document.getElementById("emailErrorMessage");
    const input = document.getElementById("emailInput");


    if (emailError.classList.contains("errorShown")) {
        emailError.classList.remove("errorShown");
        emailError.classList.add("errorHidden");
    }

    if (input.classList.contains("inputError")) {
        input.classList.remove("inputError");
    }
}

const subButton = document.getElementById("subscribeButton");
const disButton = document.getElementById("disButton");

const input = document.getElementById("emailInput");

subButton.addEventListener("click", subscribeClicked);
disButton.addEventListener("click", dismissClicked);

input.addEventListener("focus", () => removeEmailError());