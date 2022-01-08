//querySeletors for HTML elements being tested
let email = document.querySelector("#email");
let number = document.querySelector("#number");
let survey = document.querySelector("#survey-form");

survey.addEventListener("submit", (event) => {
  event.preventDefault();
  validateEmail();
  validateYears();
});

//function to test email against regex validation
function validateEmail() {
  //if email input passes regex test, continue
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    return true;
  }
  alert("You have entered an invalid email address!");
  return false;
}

//function to test for valid number input
function validateYears() {
  //check if input is an invalid character , if not alert error
  if (/^\d+$/.test(number.value)) {
    return true;
  }
  alert("Please enter valid numeric input for years of experience.");
  return false;
}
