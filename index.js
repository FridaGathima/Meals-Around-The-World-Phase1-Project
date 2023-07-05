const allRecipes = document.getElementById('recipes')

fetch ("https://www.themealdb.com/api/json/v1/1/search.php?s")
.then(response => response.json())
.then(data => {console.log(data)})

function totalRecipes(){
    
}
totalRecipes()