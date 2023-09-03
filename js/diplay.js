export class Display{
    displayMeals(meals) {
        let cartoona = "";
    
        for (let i = 0; i < meals.length; i++) {
            cartoona += `
            <div data-details="${meals[i].idMeal}" class="meals col-md-6 col-lg-3">
                    <div id="meals" data-details="${meals[i].idMeal}"  class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                        <img data-details="${meals[i].idMeal}" class="w-100" src="${meals[i].strMealThumb}">
                        <div data-details="${meals[i].idMeal}" class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                            <h3 data-details="${meals[i].idMeal}">${meals[i].strMeal}</h3>
                        </div>
                    </div>
            </div>
            `
        }
        demo.innerHTML = cartoona;
        document.querySelectorAll("#meals").forEach((meal) => {
            meal.addEventListener("click", (e) => {
            this.getMealDetails(e.target.dataset.details);
            })
        })
    }

    async getMealDetails(id) {
        demo.innerHTML = "";
        $(".loading-spiner").fadeIn(300);
        searchContainer.innerHTML = "";

        let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        respone = await respone.json();

        this.displayMealDetails(respone.meals[0]);
        $(".loading-spiner").fadeOut(300);
    }


    displayMealDetails(meal) {
        searchContainer.innerHTML = "";
        let ingredients = ``;

        for (let i = 1; i <= 20; i++) {
            if (meal[`strIngredient${i}`]) {
                ingredients += `<li class="alert alert-info m-2 p-1">${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}</li>`
            }
        }

        let tags = meal.strTags?.split(",");
        if (!tags) tags = [];

        let tagsStr = '';
        for (let i = 0; i < tags.length; i++) {
            tagsStr += `
            <li class="alert alert-danger m-2 p-1">${tags[i]}</li>`
        }

        let cartoona = `
        <div class="col-md-4">
                    <img class="w-100 rounded-3" src="${meal.strMealThumb}"
                        alt="">
                        <h2>${meal.strMeal}</h2>
                </div>
                <div class="col-md-8">
                    <h2>Instructions</h2>
                    <p>${meal.strInstructions}</p>
                    <h3><span class="fw-bolder">Area : </span>${meal.strArea}</h3>
                    <h3><span class="fw-bolder">Category : </span>${meal.strCategory}</h3>
                    <h3>Recipes :</h3>
                    <ul class="list-unstyled d-flex g-3 flex-wrap">
                        ${ingredients}
                    </ul>
    
                    <h3>Tags :</h3>
                    <ul class="list-unstyled d-flex g-3 flex-wrap">
                        ${tagsStr}
                    </ul>
    
                    <a target="_blank" href="${meal.strSource}" class="btn btn-success">Source</a>
                    <a target="_blank" href="${meal.strYoutube}" class="btn btn-danger">Youtube</a>
                </div>`

        demo.innerHTML = cartoona;
    }
}