function change(color, grade) {
    const menuIcon = document.querySelector(".ti-apple");

    let isShow = false;

    menuIcon.addEventListener("click", e => {
        let kick = e.target.classList.contains("apple")

        if (kick && !isShow) {
            document.body.style.background = "#131415";
            document.querySelector(color).classList.add(grade);
            isShow = true;
        } else {
            isShow = false;
            document.body.style.background = "#fff";
            document.querySelector(color).classList.remove(grade);
        }
    });
}

function change2(color, grade) {
    const menuIcon = document.querySelector(".ti-apple");

    let isShow = false;

    menuIcon.addEventListener("click", e => {
        let kick = e.target.classList.contains("apple")

        if (kick && !isShow) {
            document.body.style.background = "#131415";
            document.querySelectorAll(color).forEach(element => {
                element.classList.add(grade);
            });
            isShow = true;
        } else {
            isShow = false;
            document.body.style.background = "#fff";
            document.querySelectorAll(color).forEach(element => {
                element.classList.add(grade);
            });
        }
    })
}

change(".ti-apple", "railway");
change(".logins", "railway");
change(".menu-rail", "railway");
change(".menu-search", "search");
change(".actives", "activeJS");
change(".ti-menu-alt", "railway");
change(".menu-docs", "docs");
change(".menu__intro", "railway");
change(".menu-github", "githubss");
change(".menu-list", "headerJS");
change(".deed", "headerJS");
change(".menu-header", "bg-black");

change2(".menu-catalogy", "railway");
change2(".menu-discord", "railway");
change2(".menu-link", "item");
change2(".catalogy", "catalogy");
change2(".menu__icons", "icons");
change2(".menu__item", "menu__items");
change2(".heading-sm", "railway");
change2(".text--secondary", "railway");


