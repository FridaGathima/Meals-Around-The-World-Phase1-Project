const allRecipes = document.getElementById('recipes')
const corbaRecipe = document.getElementById('corba')


fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
    .then(response => response.json())
    .then((data) => {
        console.log(data.meals)
       // data.meals.forEach(dataitem => {
        corbaTurkish(data)
        
      //  })
    })

function corbaTurkish(data) {

    const corbaImg = document.createElement('img')
    corbaImg.src = data.meals[0].strMealThumb
    corbaRecipe.appendChild(corbaImg)

    const corbaCountry = document.createElement('p')
    corbaCountry.innerText = data.meals[0].strArea
    corbaRecipe.append(corbaCountry)

    const corbaName = document.createElement('p')
    corbaName.innerText = data.meals[0].strMeal
    corbaRecipe.append(corbaName)

}

function corbaRecipeInstructions(data)
