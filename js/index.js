document.addEventListener("DOMContentLoaded", (e) =>{

    fetch("http://localhost:5050/results", {
        headers: {
            "X-RapidAPI-Host" : "tasty.p.rapidapi.com",
            "X-RapidAPI-Key" : "b508e43b58mshac31d013719094ap11f413jsn4a338903550b"
        },
        // body: JSON.stringify()
    })    
    .then((res) => res.json())
    .then((res) => {
    
    let results = res
     let recipe = results[0]

     let foodTitle = recipe.name
     // console.log(foodTitle)
     let h2 = document.createElement("h2")
     h2.innerText = foodTitle
     document.querySelector("#second").appendChild(h2)


     let description = recipe.description
     let p = document.createElement("p")
     p.innerText = description
     document.querySelector("#second").appendChild(p)


     // lets grab ingredients
     let ingredients = recipe.sections[0]
     let ingredientTitle = document.createElement("h3")
     ingredientTitle.textContent = "Ingredients"
     document.querySelector("#second").appendChild(ingredientTitle)
     
     ingredients.components.forEach((ingredient) => {
         let ingredientsList = (`${ingredient.raw_text}`)
         // console.log(`${ingredient.raw_text}`)

         let li = document.createElement('li');
         li.textContent = ingredientsList
         document.querySelector("#second").appendChild(li);
     })


     let instructions = recipe.instructions
     let h3 = document.createElement("h3")
     h3.textContent = "Instructions"
     document.querySelector("#second").appendChild(h3)

     instructions.forEach((instruction) => {

         let list = (`Step ${instruction.position} : `, `${instruction.display_text}`)
         let li = document.createElement('li')
         li.textContent = list
         document.querySelector("#second").appendChild(li)

     })

    
    })

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

let likeBtn1 = document.querySelector("#firstBtn")


let likeBtn2 = document.querySelector("#secondBtn")

let likeBtn3 = document.querySelector("#thirdBtn")

likeBtn1.addEventListener("click", (e) => {
   console.log("click1")
})

likeBtn2.addEventListener("click", (e) => {
    console.log("click2")
 })

 likeBtn3.addEventListener("click", (e) => {
    console.log("click3")
 })



let likesCount1 = document.querySelector('#like-count1');

let totalLikes

function handleLike(event){
    console.log("handleLike")

    totalLikes ++
    likesCount1.innerHTML = `${totalLikes} likes`
}



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


function  create(recipe){

    let div = document.createElement("div");

    let h1 = document.createElement("h1");      
    let h3_ingredients = document.createElement("h3");
    let ol_ingredients = document.createElement("ol")
    let h3_instructions = document.createElement("h3");
    let ol_instructions = document.createElement("ol");




}