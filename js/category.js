import { Display } from "./diplay.js";

export class Category {
    constructor() {
        this.getCategoryList();
        this.display = new Display();
    }

    async getCategoryList() {
        $(".loading-spiner").fadeIn(300);

        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        response = await response.json();

        this.displayCategoryList(response.categories);
        $(".loading-spiner").fadeOut(300);
    }

    displayCategoryList(list) {
        searchContainer.innerHTML = "";
        let cartoona = "";

        for (let i = 0; i < list.length; i++) {
            cartoona += `
                <div data-category="${list[i].strCategory}" class="col-md-6 col-lg-3">
                        <div id="meals" data-category="${list[i].strCategory}" class="meal  position-relative overflow-hidden rounded-2 cursor-pointer">
                            <img data-category="${list[i].strCategory}" class="w-100" src="${list[i].strCategoryThumb}" >
                            <div data-category="${list[i].strCategory}" class="meal-layer position-absolute text-center text-black p-2">
                                <h3 data-category="${list[i].strCategory}">${list[i].strCategory}</h3>
                                <p data-category="${list[i].strCategory}">${list[i].strCategoryDescription.split(" ").slice(0, 20).join(" ")}</p>
                            </div>
                        </div>
                </div>
                `
        }
        demo.innerHTML = cartoona;
        document.querySelectorAll("#meals").forEach((meal) => {
            meal.addEventListener("click", (e) => {
                this.getCategoryMeals(e.target.dataset.category);
            })
        })
        $(".meal-layer").css("flex-direction", "column");
    }

    async getCategoryMeals(category) {
        demo.innerHTML = "";
        $(".loading-spiner").fadeIn(300);

        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        response = await response.json();

        this.display.displayMeals(response.meals.slice(0, 20));
        $(".loading-spiner").fadeOut(300);
    }
}
