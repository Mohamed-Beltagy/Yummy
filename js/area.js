import { Display } from "./diplay.js";

export class Area {
    constructor() {
        this.getAreaList();
        this.display = new Display();
    }

    async getAreaList() {
        demo.innerHTML = "";
        $(".loading-spiner").fadeIn(300);
        searchContainer.innerHTML = "";

        let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
        respone = await respone.json();

        this.displayAreaList(respone.meals);
        $(".loading-spiner").fadeOut(300);
    }

    displayAreaList(list) {
        let cartoona = "";
        for (let i = 0; i < list.length; i++) {
            cartoona += `
            <div data-area="${list[i].strArea}" class="meals col-md-6 col-lg-3">
                    <div id="area" data-area="${list[i].strArea}" class="rounded-2 text-center cursor-pointer">
                            <i data-area="${list[i].strArea}" class="fa-solid fa-house-laptop fa-4x"></i>
                            <h3 data-area="${list[i].strArea}">${list[i].strArea}</h3>
                    </div>
            </div> `
        }

        demo.innerHTML = cartoona;

        document.querySelectorAll("#area").forEach((area) => {
            area.addEventListener("click", (e) => {
                this.getAreaMeals(e.target.dataset.area);
            })
        })
    }

    async getAreaMeals(area) {
        demo.innerHTML = "";
        $(".loading-spiner").fadeIn(300);

        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
        response = await response.json();

        this.display.displayMeals(response.meals.slice(0, 20));
        $(".loading-spiner").fadeOut(300);
    }
}


