const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", loginFormSubmit);

function loginFormSubmit(event) {
  event.preventDefault();

  const {email, password} = event.currentTarget.elements;

  if (email.value == false || password.value == false) {
    alert("All form fields must be filled in");
    return;
  }

  const loginFormData = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  console.log(loginFormData);
  loginForm.reset();
}

