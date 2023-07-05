const allRecipes = document.getElementById('recipes')


function totalRecipes() {
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
    .then(response => response.json())
    .then((data) => {
        console.log(data.meals)
        data.meals.forEach(dataitem => {

        // const recipeIntroAll = document.createElement('p')
        // recipeIntroAll.innerText = ''
        // allRecipes.appendChild(recipeIntroAll)

        const recipeName = document.createElement('img')
        recipeName.src = dataitem.strMealThumb
        allRecipes.appendChild(recipeName)
        })
    })

}
totalRecipes()
