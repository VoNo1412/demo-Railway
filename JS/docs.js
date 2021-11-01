const menuIcon = document.querySelector(".ti-apple");
const logo = document.querySelector(".menu-rail");
const search = document.querySelector(".menu-search");
const Active = document.querySelector(".actives");
const Item = document.querySelectorAll(".menu-link");
const catalogy = document.querySelectorAll(".menu-catalogy");
const header = document.querySelectorAll(".menu-header");
const docs = document.querySelector(".menu-docs");
const login = document.querySelector(".logins");
const intro = document.querySelector(".menu__intro");
const icon = document.querySelectorAll(".menu__icons");
const item = document.querySelectorAll(".menu__item");
const heading = document.querySelectorAll(".heading-sm");
const text = document.querySelectorAll(".text--secondary");
const menuGit = document.querySelector(".menu-github");
const discord = document.querySelectorAll(".menu-discord");
const hamburger = document.querySelector(".ti-menu-alt");
const list = document.querySelector(".menu-list");
const deed = document.querySelector(".deed");
let isGG = false;

menuIcon.addEventListener("click", e => {
    if(e.target.classList.contains("apple") && !isGG) {
        document.body.style.background = "#131415";
        menuIcon.classList.add("railway");
        hamburger.classList.add("railway");
        logo.classList.add("railway");
        docs.classList.add("docs");
        search.classList.add("search");
        Active.classList.add("activeJS");
        deed.classList.add("headerJS");
        list.classList.add("headerJS");
        Item.forEach(el => {
            el.classList.add("item");
        });
        header.forEach(el => {
            el.classList.add("headerJS");
        });
        catalogy.forEach(el => {
            el.classList.add("catalogy");
        });
        discord.forEach(el => {
            el.classList.add("railway");
        });

        login.classList.add("railway");
        intro.classList.add("railway");
        menuGit.classList.add("githubss");
        icon.forEach(el => {
            el.classList.add("icons");
        });
        item.forEach(el => {
            el.classList.add("menu__items");
        });

        heading.forEach(el => {
            el.classList.add("railway");
        });

        text.forEach(el => {
            el.classList.add("railway");
        });

        isGG = true;
    } else{
        docs.classList.remove("docs");
        menuIcon.classList.remove("railway");
        logo.classList.remove("railway");
        search.classList.remove("search");
        Active.classList.remove("activeJS");
        header.forEach(el => {
            el.classList.remove("headerJS");
        });
        document.body.style.background = "#fff";
        Item.forEach(el => {
            el.classList.remove("item");
        })
        catalogy.forEach(el => {
            el.classList.remove("catalogy");
        })

        login.classList.remove("railway");
        intro.classList.remove("railway");
        icon.forEach(el => {
            el.classList.remove("icons");
        });
        item.forEach(el => {
            el.classList.remove("menu__items");
        });
        heading.forEach(el => {
            el.classList.remove("railway");
        });

        text.forEach(el => {
            el.classList.remove("railway");
        });
        discord.forEach(el => {
            el.classList.remove("railway");
        });
        menuGit.classList.remove("githubss");
        hamburger.classList.remove("railway");
        deed.classList.remove("headerJS");
        list.classList.remove("headerJS");


        isGG = false;
    }
})
