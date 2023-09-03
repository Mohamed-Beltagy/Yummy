import { Display } from "./diplay.js";
let searchContainer = document.getElementById("searchContainer");

export class Search {
    constructor(){
        this.display = new Display();
    }

    showSearchInputs() {
        searchContainer.innerHTML = `
        <div class="row py-4 ">
            <div class="col-md-6 ">
                <input id="Search-B-N" class=" form-control bg-transparent text-white" type="text" placeholder="Search By Name">
            </div>
            <div class="col-md-6">
                <input id="Search-B-L"  maxlength="1" class="form-control bg-transparent text-white" type="text" placeholder="Search By First Letter">
            </div>
        </div>`

        demo.innerHTML = "";

        let searchBN = document.querySelector("#Search-B-N");
        searchBN.addEventListener("keyup", () => {
            console.log(searchBN.value);
            this.searchByName(searchBN.value);
        });

        let searchBL = document.querySelector("#Search-B-L");
        searchBL.addEventListener("keyup", () => {
            console.log(searchBL.value);
            this.searchByFLetter(searchBL.value);
        });
    }

    async searchByName(term) {
        demo.innerHTML = "";
        $(".loading-spiner").fadeIn(300);

        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`);
        response = await response.json();

        this.display.displayMeals(response.meals);
        $(".loading-spiner").fadeOut(300);
    }

    async searchByFLetter(term) {
        demo.innerHTML = "";
        $(".loading-spiner").fadeIn(300);

        term == "" ? term = "a" : "";
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${term}`);
        response = await response.json();

        response.meals ? this.display.displayMeals(response.meals) : this.display.displayMeals([]);
        $(".loading-spiner").fadeOut(300);
    }
}
