const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show input success message
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Check Email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (input.value === "") {
    showError(input, "Email is required");
  } else if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

// Check input length
function checkLength(input, min, max) {
  if (input.value === "") {
    showError(input, `${getFieldName(input)} is required`);
  } else if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters.`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters.`
    );
  } else {
    showSuccess(input);
  }
}

// Check password match
function checkPasswordsMatch(input1, input2) {
  if (input2.value === "") {
    showError(input2, `Confirm Password is required`);
  } else if (input1.value === input2.value) {
    showSuccess(input2);
  } else {
    showError(input2, "Confirm Password does not match");
  }
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event Listeners
form.addEventListener("submit", function(e) {
  e.preventDefault();

  checkLength(username, 3, 17);
  checkEmail(email);
  checkLength(password, 6, 17);
  checkPasswordsMatch(password, password2);
});
