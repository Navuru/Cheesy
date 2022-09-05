fetch("http://localhost:5050/results", {
    headers: {
        "X-RapidAPI-Host": "tasty.p.rapidapi.com",
        "X-RapidAPI-Key": "b508e43b58mshac31d013719094ap11f413jsn4a338903550b"
    }
})
    .then((res) => res.json())
    .then((res) => {

        let results = res
        // console.log(results)

        let recipe = results[0]

        let imgUrl = recipe.thumbnail_url

        let image = document.createElement('img')
        image.setAttribute('src', imgUrl)
        // document.querySelector("#second").appendChild(image)

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

fetch("http://localhost:5050/count", {
    headers: {
        "X-RapidAPI-Host": "tasty.p.rapidapi.com",
        "X-RapidAPI-Key": "b508e43b58mshac31d013719094ap11f413jsn4a338903550b"
    }
})
.then((res) => res.json())
.then((res) => {
    // console.log(res);
})