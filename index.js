const allRecipes = document.getElementById('recipes')
const corbaRecipe = document.getElementById('corba')
const corbaIng = document.getElementById('corbaingredients')
const burekRecipe = document.getElementById('burek')
const burekIng = document.getElementById('burekingridients')

fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
    .then(response => response.json())
    .then((data) => {
        console.log(data.meals)
      //  data.meals.forEach(dataitem => {
        corbaTurkish(data)
        
      //  })
    })

function corbaTurkish(data) {

    const corbaImg = document.createElement('img')
    corbaImg.src = data.meals[0].strMealThumb
    corbaRecipe.appendChild(corbaImg)

    const corbaCountry = document.createElement('p')
    corbaCountry.innerText = 'Country : Turkey'//data.meals[0].strArea 
    corbaRecipe.appendChild(corbaCountry)

    const corbaName = document.createElement('p')
    corbaName.innerText = data.meals[0].strMeal
    corbaRecipe.appendChild(corbaName)

    corbaName.addEventListener('click', () => {
        corbaRecipeInstructions(data)
    } )

}


function corbaRecipeInstructions(data) {
    corbaIng.innerHTML = ""

    const corbaLentils = document.createElement('li')
    corbaLentils.innerText = data.meals[0].strIngredient1
    corbaIng.appendChild(corbaLentils)

    const corbaOnions = document.createElement('li')
    corbaOnions.innerText = data.meals[0].strIngredient2
    corbaIng.appendChild(corbaOnions)

    const corbaCarrots = document.createElement('li')
    corbaCarrots.innerText = data.meals[0].strIngredient3
    corbaIng.appendChild(corbaCarrots)

    const corbaTomato = document.createElement('li')
    corbaTomato.innerText = data.meals[0].strIngredient4
    corbaIng.appendChild(corbaTomato)

    const corbaCumin = document.createElement('li')
    corbaCumin.innerText = data.meals[0].strIngredient5
    corbaIng.appendChild(corbaCumin)

    const corbaInstructions = document.createElement('p')
    corbaInstructions.innerText = data.meals[0].strInstructions
    corbaIng.appendChild(corbaInstructions)

}

function BurekCroatian (data) {
    const burekImg = document.createElement('img')
    burekImg.src = data.meals[1].strMealThumb

}
