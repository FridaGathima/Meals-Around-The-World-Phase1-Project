const allRecipes = document.getElementById('recipes')
const corbaRecipe = document.getElementById('corba')
const corbaIng = document.getElementById('corbaingredients')
const burekRecipe = document.getElementById('burek')
const burekIng = document.getElementById('burekingredients')

fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
    .then(response => response.json())
    .then((data) => {
        console.log(data.meals)
      //  data.meals.forEach(dataitem => {
        corbaTurkish(data)
        burekCroatian (data)
        
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

function burekCroatian (data) {
    const burekImg = document.createElement('img')
    burekImg.src = data.meals[1].strMealThumb
    burekRecipe.appendChild(burekImg)

    const burekCountry = document.createElement('p')
    burekCountry.innerText = 'Country : Croatia ' + '- ' + ' This is a ' + data.meals[1].strArea + ' dish'
    burekRecipe.appendChild(burekCountry)

    const burekName = document.createElement ('p')
    burekName.innerText = data.meals[1].strMeal
    burekRecipe.appendChild(burekName)

    burekName.addEventListener('click', () => {
        burekRecipeInstructions(data)
    })
}

function burekRecipeInstructions(data) {
    burekIng.innerHTML = ""

    const burekFilo = document.createElement('li')
    burekFilo.innerText = data.meals[1].strIngredient1
    burekIng.appendChild(burekFilo)

    const burekBeef = document.createElement('li')
    burekBeef.innerText = data.meals[1].strIngredient2
    burekIng.appendChild(burekBeef)

    const burekOnion = document.createElement('li')
    burekOnion.innerText = data.meals[1].strIngredient3
    burekIng.appendChild(burekOnion)

    const burekOil = document.createElement('li')
    burekOil.innerText = data.meals[1].strIngredient4
    burekIng.appendChild(burekOil)

    const burekSalt = document.createElement('li')
    burekSalt.innerText = data.meals[1].strIngredient5
    burekIng.appendChild(burekSalt)

    const burekInstructions = document.createElement('p')
    burekInstructions.innerText = data.meals[1].strInstructions
    burekIng.appendChild(burekInstructions)
}
