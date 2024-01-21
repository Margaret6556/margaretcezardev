// Create a function that will be executed when the form is submitted
function submitForm() {
  // Get the input values from the form fields
  var email = document.getElementById("email_input").value;
  var message = document.getElementById("message_input").value;

  // Validate the input values (add your own validation logic here)
  if (email === undefined) {
    alert("Please enter your email");
    return false;
  }

  if (message===undefined) {
    alert("Please enter your message");
    return false;
  }

  // Create an object with the form data
  var formData = {
    email: email,
    message: message,
  };

  // Do something with the form data (add your own logic here)
  console.log("Form data:", formData);

  // Reset the form fields
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";

  // Prevent the form from submitting
  return false;
}
