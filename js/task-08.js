const form = document.querySelector(".login-form");
const email = document.querySelector("[name='email']");
const password = document.querySelector("[name='password']");
const submit = document.querySelector("button[type='submit']");

submit.addEventListener("click", (event) => {
  event.preventDefault();
  if (email.value.trim() !== "" && password.value.trim() !== "") {
    console.log(
      `{${email.name}: ${email.value}, ${password.name}: ${password.value}}`
    );
  } else {
    alert("All input fields must be filled before proceeding!");
  }
  form.reset();
});
