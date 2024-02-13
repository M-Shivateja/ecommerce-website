function login() {
  let Username = document.getElementById("user").value;
  let Password = document.getElementById("pass").value;

  if (Username == "" || Password == "") {
    alert("Please fill out all fields");
    return false;
  } else {
    alert("Form  submitted successfully!");
    return true;
  }
  console.log("data");
}
let icon = document.getElementById("icon");
let Password = document.getElementById("pass");

function showPassword() {
  if (Password.type === "password") {
    icon.classList.add("fa-eye-slash");
    icon.classList.remove("fa-eye");
    Password.type = "text";
  } else {
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
    Password.type = "password";
  }
}
