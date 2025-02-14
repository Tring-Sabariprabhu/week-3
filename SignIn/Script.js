const locateToSignUpPage = ()=>{
    window.location.href = "D:/Tringapps/SignUp/index.html";
};


document.getElementById("Form").addEventListener("submit", function (event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    // alert("Got User Inputs !!");
    if(localStorage.length == 0){
        alert("Invalid No users found!! ");
    } 
    else if(localStorage.getItem("email") == email && localStorage.getItem("password") == password){
        alert("Good! User details are Valid.");
        window.location.href = "D:/Tringapps/LandingPage/index.html";
    }
    else{
        alert("User details are Invalid!! ");
    }
    
});