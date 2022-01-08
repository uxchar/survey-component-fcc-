//querySeletors for HTML elements being tested
let email = document.querySelector("#email").value;
let number = document.querySelector("#number").value;

function validateForm(e, email, number) {
  e.preventDefault();
  validateEmail(email);
  validateYears(number);
}
//function to test email against regex validation
function validateEmail() {
  //if email input passes regex test, continue
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  alert("You have entered an invalid email address!");
  return false;
}

//function to test for valid number input
function validateYears() {
  //check if input is an invalid character , if not alert error
  if (/^\d+$/.test(number)) {
    return true;
  }
  alert("You have entered an invalid input for years of experience.");
  return false;
}
