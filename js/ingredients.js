
import { Display } from "./diplay.js";

export class Ingredients {
    constructor() {
        this.getIngredientsList();
        this.display = new Display();
    }

    async getIngredientsList() {
        demo.innerHTML = "";
        $(".loading-spiner").fadeIn(300);
        searchContainer.innerHTML = "";

        let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
        respone = await respone.json();

        this.displayIngredientsList(respone.meals.slice(0, 20));
        $(".loading-spiner").fadeOut(300);
    }

    displayIngredientsList(list) {
        let cartoona = "";

        for (let i = 0; i < list.length; i++) {
            cartoona += `
            <div data-ingra="${list[i].strIngredient}" class="meals col-md-6 col-lg-3">
                    <div id="ingra" data-ingra="${list[i].strIngredient}" class="rounded-2 text-center cursor-pointer">
                            <i data-ingra="${list[i].strIngredient}" class="fa-solid fa-drumstick-bite fa-4x"></i>
                            <h3 data-ingra="${list[i].strIngredient}">${list[i].strIngredient}</h3>
                            <p data-ingra="${list[i].strIngredient}">${list[i].strDescription.split(" ").slice(0, 20).join(" ")}</p>
                    </div>
            </div>
            `
        }

        demo.innerHTML = cartoona;
        document.querySelectorAll("#ingra").forEach((ingra) => {
            ingra.addEventListener("click", (e) => {
                this.getIngredientsMeals(e.target.dataset.ingra);
            })
        })
    }

    async getIngredientsMeals(ingredients) {
        demo.innerHTML = "";
        $(".loading-spiner").fadeIn(300);
        
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`);
        response = await response.json();

        this.display.displayMeals(response.meals.slice(0, 20));
        $(".loading-spiner").fadeOut(300);
    }
}
