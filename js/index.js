document.addEventListener("DOMContentLoaded", (e) =>{

    let loginBtn = document.querySelector(".login-button")
    let signupBtn = document.querySelector(".sign-up-button")

    loginBtn.addEventListener("click", (e) =>{
        alert("Login successful")
        // console.log("Clicked")
    })
    
    signupBtn.addEventListener("click", (e) =>{
        alert("Signup successful")
        // console.log("Clicked")
    })
    

})


let form = document.querySelector("form");
form.addEventListener("submit",(e) =>{
    e.preventDefault();

})

function addEmail(emails) {

    let email =  document.createElement("input");
    email.textContent = input
    console.log(email)
}
// addEmail()

