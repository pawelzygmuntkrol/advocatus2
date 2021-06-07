const submitButton = document.getElementById("submit");

const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userNumber = document.getElementById("number");
const userMessage = document.getElementById("message");

const emailIsValid = userEmail => {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    userEmail
  );
};

const numberIsValid = userNumber => {
  return /^\d{9}$/.test(userNumber);
};

const validate = e => {
  e.preventDefault();

  if (userName.value === "") {
    alert("Please enter your first and last name.");
    userName.focus();
    return false;
  }
  if (userEmail.value === "") {
    alert("Please enter your email.");
    userEmail.focus();
    return false;
  }
  if (!emailIsValid(userEmail.value)) {
    alert("Please enter your email this way: 'xxx@xx.xx'.");
    userEmail.focus();
    return false;
  }
  if (userNumber.value === "") {
    alert("Please enter your phone number.");
    userNumber.focus();
    return false;
  }
  if (!numberIsValid(userNumber.value)) {
    alert(
      "Please enter your 9 digits of your phone number like this: XXXYYYZZZ."
    );
    userNumber.focus();
    return false;
  }
  if (userMessage.value === "") {
    alert("Please enter your message.");
    userMessage.focus();
    return false;
  }
  return true;
};

submitButton.addEventListener("click", validate);
