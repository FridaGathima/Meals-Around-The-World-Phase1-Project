 document.addEventListener('DOMContentLoaded', () => { //adding the DOMContentLoaded event listener to this JavaScript file

    const allRecipes = document.getElementById('recipes')
    const recipeIngredients = document.getElementById('ingredients')
    const recipeMeasurements = document.getElementById('measurements')
    const contactUss = document.getElementById('contactus')
    const newsLetterr = document.getElementById('newsletter')

    // This function fetches the main details of the recipe i.e name, country of origin and its image. It is also where data was 
    // fetched from the public API

    function recipes() {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
            .then(response => response.json())
            .then((data) => {
                console.log(data.meals)
                data.meals.forEach(dataitem => {
                    const recipImg = document.createElement('img')
                    recipImg.src = dataitem.strMealThumb
                    allRecipes.appendChild(recipImg)

                    const likeButtonn = document.createElement('button')
                    likeButtonn.innerHTML = `
                        <iconify-icon icon="icon-park-outline:like"></iconify-icon>
                        `
                    allRecipes.appendChild(likeButtonn)


                    const recipeCountry = document.createElement('p')
                    recipeCountry.innerText = 'Recipe Nationality : ' + '' + dataitem.strArea
                    allRecipes.appendChild(recipeCountry)

                    const recipeType = document.createElement('p')
                    recipeType.innerText = 'Recipe Type : ' + '' + dataitem.strCategory
                    allRecipes.appendChild(recipeType)

                    const recipeName = document.createElement('p')
                    recipeName.innerText = 'Recipe Name : ' + '' + dataitem.strMeal
                    allRecipes.appendChild(recipeName)

                    recipeName.addEventListener('click', () => { //added an event listener to the Recipe Name
                        displayRecipeInstructions(dataitem)
                        displayRecipeMeasuremets(dataitem)
                    })

                })
            })
    }
    recipes()

    // this function displays the ingredients information as fetched from the API

    function displayRecipeInstructions(dataitem) {
        recipeIngredients.innerHTML = ""

        const ingredientIntro = document.createElement('p')
        ingredientIntro.innerText = 'The ingredients you will need are: '
        recipeIngredients.appendChild(ingredientIntro)

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

        const ingredient6 = document.createElement('li')
        ingredient6.innerText = dataitem.strIngredient6
        recipeIngredients.appendChild(ingredient6)

        const ingredient7 = document.createElement('li')
        ingredient7.innerText = dataitem.strIngredient7
        recipeIngredients.appendChild(ingredient7)

        const ingredient8 = document.createElement('li')
        ingredient8.innerText = dataitem.strIngredient8
        recipeIngredients.appendChild(ingredient8)

        const ingredient9 = document.createElement('li')
        ingredient9.innerText = dataitem.strIngredient9
        recipeIngredients.appendChild(ingredient9)

        const ingredient10 = document.createElement('li')
        ingredient10.innerText = dataitem.strIngredient10
        recipeIngredients.appendChild(ingredient10)

        const ingredient11 = document.createElement('li')
        ingredient11.innerText = dataitem.strIngredient11
        recipeIngredients.appendChild(ingredient11)

        const ingredient12 = document.createElement('li')
        ingredient12.innerText = dataitem.strIngredient12
        recipeIngredients.appendChild(ingredient12)

        const ingredient13 = document.createElement('li')
        ingredient13.innerText = dataitem.strIngredient13
        recipeIngredients.appendChild(ingredient13)

        const ingredient14 = document.createElement('li')
        ingredient14.innerText = dataitem.strIngredient14
        recipeIngredients.appendChild(ingredient14)

        const ingredient15 = document.createElement('li')
        ingredient15.innerText = dataitem.strIngredient15
        recipeIngredients.appendChild(ingredient1)

        const ingredient16 = document.createElement('li')
        ingredient1.innerText = dataitem.strIngredient16
        recipeIngredients.appendChild(ingredient16)

    }

    // this function displays the ingredient measurements information as fetched from the API

    function displayRecipeMeasuremets(dataitem) {
        recipeMeasurements.innerHTML = ""

        const measurementIntro = document.createElement('p')
        measurementIntro.innerText = 'The measurements are as follows: '
        recipeMeasurements.appendChild(measurementIntro)

        const measurement1 = document.createElement('li')
        measurement1.innerText = dataitem.strMeasure1
        recipeMeasurements.appendChild(measurement1)

        const measurement2 = document.createElement('li')
        measurement2.innerText = dataitem.strMeasure2
        recipeMeasurements.appendChild(measurement2)

        const measurement3 = document.createElement('li')
        measurement3.innerText = dataitem.strMeasure3
        recipeMeasurements.appendChild(measurement3)

        const measurement4 = document.createElement('li')
        measurement4.innerText = dataitem.strMeasure4
        recipeMeasurements.appendChild(measurement4)

        const measurement5 = document.createElement('li')
        measurement5.innerText = dataitem.strMeasure5
        recipeMeasurements.appendChild(measurement5)

        const measurement6 = document.createElement('li')
        measurement6.innerText = dataitem.strMeasure6
        recipeMeasurements.appendChild(measurement6)

        const measurement7 = document.createElement('li')
        measurement7.innerText = dataitem.strMeasure7
        recipeMeasurements.appendChild(measurement7)

        const measurement8 = document.createElement('li')
        measurement8.innerText = dataitem.strMeasure8
        recipeMeasurements.appendChild(measurement8)

        const measurement9 = document.createElement('li')
        measurement9.innerText = dataitem.strMeasure9
        recipeMeasurements.appendChild(measurement9)

        const measurement10 = document.createElement('li')
        measurement10.innerText = dataitem.strMeasure10
        recipeMeasurements.appendChild(measurement10)

        const measurement11 = document.createElement('li')
        measurement11.innerText = dataitem.strMeasure11
        recipeMeasurements.appendChild(measurement11)

        const measurement12 = document.createElement('li')
        measurement12.innerText = dataitem.strMeasure12
        recipeMeasurements.appendChild(measurement12)

        const measurement13 = document.createElement('li')
        measurement13.innerText = dataitem.strMeasure13
        recipeMeasurements.appendChild(measurement13)

        const measurement14 = document.createElement('li')
        measurement14.innerText = dataitem.strMeasure14
        recipeMeasurements.appendChild(measurement14)

        const measurement15 = document.createElement('li')
        measurement15.innerText = dataitem.strMeasure15
        recipeMeasurements.appendChild(measurement15)

        const measurement16 = document.createElement('li')
        measurement16.innerText = dataitem.strMeasure16
        recipeMeasurements.appendChild(measurement16)

    }

    // adding the click event listener to contact us form
    const submitContactUs = document.createElement('button')
    submitContactUs.innerText = 'Submit'
    contactUss.appendChild(submitContactUs)

    submitContactUs.addEventListener('click', (e) => {
        e.preventDefault()
        recipes()
    }
    )

    // adding the submit event listener to subscribe to our newsletter form
    newsLetterr.addEventListener('submit', (e) => {  
        e.preventDefault()
        const username = document.getElementById('formname').value
        console.log(username)
        const phoneNumberr = document.getElementById('phonenumber').value
        console.log(phoneNumberr)
        const emailAddress = document.getElementById('email').value
        console.log(emailAddress)
    })

}) 