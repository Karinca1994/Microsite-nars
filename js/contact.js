const form = document.querySelector("#contact-form");
const fullName = document.querySelector("#full-name");
const fullNameError = document.querySelector("#fullname-error");
const message = document.querySelector("#message");
const messageError = document.querySelector("#message-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const messageValid = document.querySelector(".form-avalible");


function validateForm(event) {
  event.preventDefault();

  if (checkLength(fullName.value, 0) === true) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }

  if (checkLength(message.value, 0) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

}

form.addEventListener("submit", validateForm);


function submitForm(event) {
  event.preventDefault();

  if (
    checkLength(message.value, 0) &&
    checkLength(fullName.value, 0) &&
    validateEmail(email.value)
  ) {
    messageValid.style.display = "block";
    messageValid.innerHTML = `<div class="form-message">
							<p>Your message has been sent</p></div>`;
    form.reset();
    window.scroll({
      top: 100,
      left: 100,
      behavior: "smooth"
    });
  } else {
    messageValid.style.display = "none";
  }
}
form.addEventListener("submit", submitForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
