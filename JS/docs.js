const menuIcon = document.querySelector(".ti-apple");
const logo = document.querySelector(".menu-rail");
const search = document.querySelector(".menu-search");
const Active = document.querySelector(".actives");
const Item = document.querySelectorAll(".menu-link");
const catalogy = document.querySelectorAll(".menu-catalogy");

let isShow = false;

menuIcon.addEventListener("click", e => {
    if(e.target.tagName == "I" && !isShow) {
        document.body.style.background = "#131415";
        menuIcon.classList.add("railway");
        logo.classList.add("railway");
        search.classList.add("search");
        Active.classList.add("activeJS");
        Item.forEach(el => {
            el.classList.add("item");
        })
        catalogy.forEach(el => {
            el.classList.add("catalogy");
        })

        isShow = true;
    } else {
        menuIcon.classList.remove("railway");
        logo.classList.remove("railway");
        search.classList.remove("search");
        Active.classList.remove("activeJS");
        document.body.style.background = "#fff";
        Item.forEach(el => {
            el.classList.remove("item");
        })
        catalogy.forEach(el => {
            el.classList.remove("catalogy");
        })

        isShow = false;
    }
})
