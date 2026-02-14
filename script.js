function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Demo login credentials
    let correctUser = "divya";
    let correctPass = "1234";

    if (username === correctUser && password === correctPass) {
        document.getElementById("message").style.color = "green";
        document.getElementById("message").innerText = "Login Successful ✅";

        // Redirect (optional)
        // window.location.href = "home.html";

    } else {
        document.getElementById("message").style.color = "red";
        document.getElementById("message").innerText = "Invalid Username or Password ❌";
    }
}
