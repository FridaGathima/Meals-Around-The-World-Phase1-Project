const allRecipes = document.getElementById('recipes')
const recipeDetails = document.getElementById('recipedetail')
const recipeIngredients = document.getElementById('recipeingredient')

const corbaRecipe = document.getElementById('corba')
const corbaIng = document.getElementById('corbaingredients')
const burekRecipe = document.getElementById('burek')
const burekIng = document.getElementById('burekingredients')
const sushiRecipe = document.getElementById('sushi')

fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
    .then(response => response.json())
    .then((data) => {
        console.log(data.meals)
        data.meals.forEach(dataitem => {
            const recipImg = document.createElement('img')
            recipImg.src = dataitem.strMealThumb
            allRecipes.appendChild(recipImg)

            const recipeCountry = document.createElement('p')
            recipeCountry.innerText = 'Recipe Nationality : '+ '' + dataitem.strArea
            allRecipes.appendChild(recipeCountry)

            const recipeType = document.createElement('p')
            recipeType.innerText = 'Recipe Type : ' + '' + dataitem.strCategory
            allRecipes.appendChild(recipeType)

            const recipeName = document.createElement('p')
            recipeName.innerText = 'Recipe Name : '+ '' + dataitem.strMeal
            allRecipes.appendChild(recipeName)

            recipeName.addEventListener('click', () => {
                displayRecipeInstructions(dataitem)
            })

        // corbaTurkish(data)
        // burekCroatian (data)
        // sushiJapanese(data)
        
        })
    })


function displayRecipeInstructions(dataitem){
    recipeIngredients.innerHTML = ""

    const ingredient1 = document.createElement('li')
    ingredient1.innerText = dataitem.strIngredient1
    recipeIngredients.appendChild(ingredient1)

    const ingredient2 = document.createElement('li')
    ingredient2.innerText = dataitem.strIngredient2
    recipeIngredients.appendChild(ingredient2)

    const ingredient3 = document.createElement('li')
    ingredient3.innerText = dataitem.strIngredient3
    recipeIngredients.appendChild(ingredient3)

    const ingredient4 = document.createElement('li')
    ingredient4.innerText = dataitem.strIngredient4
    recipeIngredients.appendChild(ingredient4)

    const ingredient5 = document.createElement('li')
    ingredient5.innerText = dataitem.strIngredient5
    recipeIngredients.appendChild(ingredient5)

//     const ingredient6 = document.createElement('li')
//     ingredient6.innerText = dataitem.strIngredient6
//     recipeIngredients.appendChild(ingredient6)

//     const ingredient7 = document.createElement('li')
//     ingredient7.innerText = dataitem.strIngredient7
//     recipeIngredients.appendChild(ingredient7)

//     const ingredient8 = document.createElement('li')
//     ingredient8.innerText = dataitem.strIngredient8
//     recipeIngredients.appendChild(ingredient8)

//     const ingredient9 = document.createElement('li')
//     ingredient9.innerText = dataitem.strIngredient9
//     recipeIngredients.appendChild(ingredient9)

//     const ingredient10 = document.createElement('li')
//     ingredient10.innerText = dataitem.strIngredient10
//     recipeIngredients.appendChild(ingredient10)
}

// function corbaTurkish(data) {

//     const corbaImg = document.createElement('img')
//     corbaImg.src = data.meals[0].strMealThumb
//     corbaRecipe.appendChild(corbaImg)

//     const corbaCountry = document.createElement('p')
//     corbaCountry.innerText = 'Country : Turkey'//data.meals[0].strArea 
//     corbaRecipe.appendChild(corbaCountry)

//     const corbaName = document.createElement('p')
//     corbaName.innerText = data.meals[0].strMeal
//     corbaRecipe.appendChild(corbaName)

//     corbaName.addEventListener('click', () => {
//         corbaRecipeInstructions(data)
//     } )

// }


// function corbaRecipeInstructions(data) {
//     corbaIng.innerHTML = ""

//     const corbaLentils = document.createElement('li')
//     corbaLentils.innerText = data.meals[0].strIngredient1
//     corbaIng.appendChild(corbaLentils)

//     const corbaOnions = document.createElement('li')
//     corbaOnions.innerText = data.meals[0].strIngredient2
//     corbaIng.appendChild(corbaOnions)

//     const corbaCarrots = document.createElement('li')
//     corbaCarrots.innerText = data.meals[0].strIngredient3
//     corbaIng.appendChild(corbaCarrots)

//     const corbaTomato = document.createElement('li')
//     corbaTomato.innerText = data.meals[0].strIngredient4
//     corbaIng.appendChild(corbaTomato)

//     const corbaCumin = document.createElement('li')
//     corbaCumin.innerText = data.meals[0].strIngredient5
//     corbaIng.appendChild(corbaCumin)

//     const corbaInstructions = document.createElement('p')
//     corbaInstructions.innerText = data.meals[0].strInstructions
//     corbaIng.appendChild(corbaInstructions)

// }

// function burekCroatian (data) {
//     const burekImg = document.createElement('img')
//     burekImg.src = data.meals[1].strMealThumb
//     burekRecipe.appendChild(burekImg)

//     const burekCountry = document.createElement('p')
//     burekCountry.innerText = 'Country : Croatia ' + '- ' + ' This is a ' + data.meals[1].strArea + ' dish'
//     burekRecipe.appendChild(burekCountry)

//     const burekName = document.createElement ('p')
//     burekName.innerText = data.meals[1].strMeal
//     burekRecipe.appendChild(burekName)

//     burekName.addEventListener('click', () => {
//         burekRecipeInstructions(data)
//     })
// }

// function burekRecipeInstructions(data) {
//     burekIng.innerHTML = ""

//     const burekFilo = document.createElement('li')
//     burekFilo.innerText = data.meals[1].strIngredient1
//     burekIng.appendChild(burekFilo)

//     const burekBeef = document.createElement('li')
//     burekBeef.innerText = data.meals[1].strIngredient2
//     burekIng.appendChild(burekBeef)

//     const burekOnion = document.createElement('li')
//     burekOnion.innerText = data.meals[1].strIngredient3
//     burekIng.appendChild(burekOnion)

//     const burekOil = document.createElement('li')
//     burekOil.innerText = data.meals[1].strIngredient4
//     burekIng.appendChild(burekOil)

//     const burekSalt = document.createElement('li')
//     burekSalt.innerText = data.meals[1].strIngredient5
//     burekIng.appendChild(burekSalt)

//     const burekInstructions = document.createElement('p')
//     burekInstructions.innerText = data.meals[1].strInstructions
//     burekIng.appendChild(burekInstructions)
// }

// function sushiJapanese(data) {
//     const sushiImg = document.createElement('img')
//     sushiImg.src = data.meals[2].strMealThumb
//     sushiRecipe.appendChild(sushiImg)

//     const sushiCountry = document.createElement('p')
//     sushiCountry.innerText = 'Country : Japan'
//     sushiRecipe.appendChild(sushiCountry)

//     const sushiName = document.createElement('p')
//     sushiName.innerText = data.meals[2].strMeal
//     sushiRecipe.appendChild(sushiName)
// }
