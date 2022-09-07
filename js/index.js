document.addEventListener("DOMContentLoaded", (e) =>{

    fetch("https://tasty.p.rapidapi.com/recipes/list?from=0&size=10&tags=under_30_minutes", {
        headers: {
            "X-RapidAPI-Host" : "tasty.p.rapidapi.com",
            "X-RapidAPI-Key" : "b508e43b58mshac31d013719094ap11f413jsn4a338903550b"
        },
        // body: JSON.stringify()
    })    
    .then((res) => res.json())
    .then((res) => {
    
    let results = res.results
     let recipe1 = results[0]

     let foodTitle1 = recipe1.name
     // console.log(foodTitle1)
     let h2 = document.createElement("h2")
     h2.innerText = foodTitle1
     document.querySelector("#second-recipe").appendChild(h2)


     let description1 = recipe1.description
     let p = document.createElement("p")
     p.innerText = description1
     document.querySelector("#second-recipe").appendChild(p)


     // lets grab ingredients
     let ingredients = recipe1.sections[0]
     let ingredientTitle = document.createElement("h3")
     ingredientTitle.textContent = "Ingredients"
     document.querySelector("#second-recipe").appendChild(ingredientTitle)
     
     ingredients.components.forEach((ingredient) => {
         let ingredientsList = (`${ingredient.raw_text}`)
         // console.log(`${ingredient.raw_text}`)

         let li = document.createElement('li');
         li.textContent = ingredientsList
         document.querySelector("#second-recipe").appendChild(li);
     })

     let instructions = recipe1.instructions
     let h3 = document.createElement("h3")
     h3.textContent = "Instructions"
     document.querySelector("#second-recipe").appendChild(h3)

     instructions.forEach((instruction) => {

         let list = (`Step ${instruction.position} : `, `${instruction.display_text}`)
         let li = document.createElement('li')
         li.textContent = list
         document.querySelector("#second-recipe").appendChild(li)

     })

     let imgUrl = recipe1.thumbnail_url

     let image = document.createElement('img')
     image.setAttribute('src', imgUrl)
    //  document.querySelector("#second-recipe").appendChild(image)


     let recipe2 = results[2]
    //  console.log(recipe2)

    let foodTitle2 = recipe2.name
    let title2 = document.createElement("h2")
    title2.innerText = foodTitle2
    document.querySelector("#third-recipe").appendChild(title2)

    let foodDescription2 = recipe2.description
     let description2 = document.createElement("p")
     description2.innerText = foodDescription2
     document.querySelector("#third-recipe").appendChild(description2)

     let ingredients2 = recipe2.sections[0]
    //  console.log(ingredients2)
     let ingredient2Title = document.createElement("h3")
     ingredient2Title.textContent = "Ingredients"
     document.querySelector("#third-recipe").appendChild(ingredient2Title)
     
     ingredients2.components.forEach((ingredient) => {
         let ingredients2List = (`${ingredient.raw_text}`)
        //  console.log(`${ingredient.raw_text}`)

         let li2 = document.createElement('li');
         li2.textContent = ingredients2List
         document.querySelector("#third-recipe").appendChild(li2);

     })

     let instructions2 = recipe2.instructions
     let instructions2Title = document.createElement("h3")
     instructions2Title.textContent = "Instructions"
     document.querySelector("#third-recipe").appendChild(instructions2Title)

        instructions2.forEach((instruction) => {
    
             let instruction2List = (`Step ${instruction.position} : `, `${instruction.display_text}`)
             let li2Instructions = document.createElement('li')
             li2Instructions.textContent = instruction2List
            //  console.log(li2Instructions)
             document.querySelector("#third-recipe").appendChild(li2Instructions)
    
            })

    
            let imgUrl2 = recipe2.thumbnail_url

            let image2 = document.createElement('img')
            image2.setAttribute('src', imgUrl2)
            // document.querySelector("#third-recipe").appendChild(image2)


            let recipe3 = results[3]
            //  console.log(recipe3)
                
            let foodTitle3 = recipe3.name
            let title3 = document.createElement("h2")
            title3.innerText = foodTitle3
            document.querySelector("#fourth-recipe").appendChild(title3)

            let foodDescription3 = recipe3.description
            let description3 = document.createElement("p")
            description3.innerText = foodDescription3
            document.querySelector("#fourth-recipe").appendChild(description3)

     let ingredients3 = recipe3.sections[0]
    //  console.log(ingredients2)
     let ingredient3Title = document.createElement("h3")
     ingredient3Title.textContent = "Ingredients"
     document.querySelector("#fourth-recipe").appendChild(ingredient3Title)

     ingredients3.components.forEach((ingredient) => {
        let ingredients3List = (`${ingredient.raw_text}`)
        // console.log(`${ingredient.raw_text}`)

        let li3 = document.createElement('li');
        li3.textContent = ingredients3List
        document.querySelector("#fourth-recipe").appendChild(li3);

    })

    let instructions3 = recipe3.instructions
     let instructions3Title = document.createElement("h3")
     instructions3Title.textContent = "Instructions"
     document.querySelector("#fourth-recipe").appendChild(instructions3Title)

        instructions3.forEach((instruction) => {
    
             let instruction3List = (`Step ${instruction.position} : `, `${instruction.display_text}`)
             let li3Instructions = document.createElement('li')
             li3Instructions.textContent = instruction3List
            //  console.log(li3Instructions)
             document.querySelector("#fourth-recipe").appendChild(li3Instructions)
    
            })
            let imgUrl3 = recipe3.thumbnail_url

            let image3 = document.createElement('img')
            image3.setAttribute('src', imgUrl3)
            // document.querySelector("#fourth-recipe").appendChild(image3)

    
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

let likeBtn4 = document.querySelector("#fourthBtn")



let likes1 = 0
let likes2 = 0
let likes3 = 0
let likes4 = 0

let likesCount1 = document.querySelector('#like-count1');

likeBtn1.addEventListener("click", (e) => {
//    console.log("click1")
   likes1 ++
   console.log(likes1)
   likesCount1.innerHTML = likes1
})

let likesCount2 = document.querySelector('#like-count2');
likeBtn2.addEventListener("click", (e) => {
    // console.log("click2")
    likes2 ++
    console.log(likes2)
    likesCount2.innerHTML = likes2
 })

 let likesCount3 = document.querySelector('#like-count3');
 likeBtn3.addEventListener("click", (e) => {
    // console.log("click3")
    likes3 ++
    console.log(likes3)
    likesCount3.innerHTML = likes3
 })

 let likesCount4 = document.querySelector('#like-count4');
 likeBtn4.addEventListener("click", (e) => {
    // console.log("click4")
    likes4 ++
    console.log(likes4)
    likesCount4.innerHTML = likes4
 })


let form = document.querySelector("#subscribe-form");
form.addEventListener("submit",(e) =>{
    e.preventDefault();
    addEmail(e.target.email.value)
        form.reset()

})

function addEmail(email) {

    let emails =  document.querySelector("input");
    emails.textContent = email
    console.log(email)
}