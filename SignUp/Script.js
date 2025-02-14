const locateToSignInPage = ()=>{
    window.location.href = "D:/Tringapps/SignIn/index.html";
};




document.getElementById("Form").addEventListener("submit", function (event) {
    event.preventDefault();
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    alert("Inputs saved!");
    window.location.href = "D:/Tringapps/LandingPage/index.html";
});