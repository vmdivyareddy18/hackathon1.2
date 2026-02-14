// SIGNUP FUNCTION
function signup() {

    let user = document.getElementById("newUser").value;
    let pass = document.getElementById("newPass").value;

    if (user === "" || pass === "") {
        document.getElementById("msg").innerText = "Fill all fields ❌";
        return;
    }

    // Save in localStorage
    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);

    document.getElementById("msg").style.color = "green";
    document.getElementById("msg").innerText = "Signup Successful ✅";

    // Go to login page after 1 sec
    setTimeout(() => {
        window.location.href = "login.html";
    }, 1000);
}



// LOGIN FUNCTION
function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Get stored data
    let storedUser = localStorage.getItem("username");
    let storedPass = localStorage.getItem("password");

    if (username === storedUser && password === storedPass) {

        window.location.href = "home.html";

    } else {

        document.getElementById("message").innerText =
            "Wrong Username or Password ❌";
    }
}
