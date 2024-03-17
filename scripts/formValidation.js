function validateForm() {
    var emailInput = document.getElementById("email").value;
    if (emailInput === "") {
      alert("Please enter your email address.");
      return false;
    }
}