let demo = document.getElementById("demo");
import { Area } from "./area.js";
import { Category } from "./category.js";
import { Ingredients } from "./ingredients.js";
import { Contact } from "./contact.js";
import { Search } from "./search.js";
let search = new Search();
let contact = new Contact();

$(document).ready(() => {
    search.searchByName("").then(() => {
        $(".loading").fadeOut(500);
    })
})

$("#Search").click(() => {
    search.showSearchInputs();
    closeSideBar();
})

$("#Categories").click(() => {
    new Category();
    closeSideBar();
})

$("#Area").click(() => {
    new Area();
    closeSideBar();
})

$("#Ingredients").click(() => {
    new Ingredients();
    closeSideBar();
})

$("#Contact").click(() => {
    contact.showContacts();
    closeSideBar();
})

function openSideBar() {
    $(".side-bar").animate({ left: "0px" }, 500);
    for (let i = 0; i < 5; i++) {
        $(".links li").eq(i).animate({ top: 0 }, (i + 5) * 100)
    }
    $(".open-close-icon").removeClass("fa-align-justify");
    $(".open-close-icon").addClass("fa-x");
}

function closeSideBar() {
    let sideBarPosition = $(".side-bar .left-bar").innerWidth();
    $(".side-bar").animate({ left: -sideBarPosition }, 500);
    $(".links li").animate({ top: 300 }, 500);
    $(".open-close-icon").addClass("fa-align-justify");
    $(".open-close-icon").removeClass("fa-x");
}
closeSideBar();

$(".open-close-icon").click(() => {
    if ($(".side-bar").css("left") == "0px") {
        closeSideBar();
    } else {
        openSideBar();
    }
})







