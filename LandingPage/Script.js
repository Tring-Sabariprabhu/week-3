const title1 = ["Unlock the ", "Smart Solutions for ", "Tranform Ideas ","Seamless Streaming,"];
const title2 = ["Power of AI", "Modern Finance", "into Innovation"," Anywhere, Anytime"];
  let index = 0;

  function changeText() {
    let elt1 = document.getElementById("changingTitle1");
    let elt2 = document.getElementById("changingTitle2");
    
    // Fade out
    elt1.style.opacity = 0;
    elt2.style.opacity = 0;

    setTimeout(() => {
      elt1.textContent = title1[index]; // Change text
      elt2.textContent = title2[index];
      elt1.style.opacity = 1; // Fade in
      elt2.style.opacity = 1;
      index = (index + 1) % title1.length; // Loop back
    }, 500);
   
  }

  setInterval(changeText, 3000); // Change every 2 seconds

  const locateToSignInPage = ()=>{
    window.location.href = "D:/Tringapps/SignIn/index.html";
};
