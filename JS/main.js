function change(color, grade) {
    const menu = document.querySelector(".main");

    let isShow = false;

    menu.addEventListener("click", e => {
        let kick = e.target.parentElement.className;
        
        if (!isShow && kick == "hamburger") {
            document.querySelector(color).classList.add(grade);
            isShow = true;
        } else {
            isShow = false;
            document.querySelector(color).classList.remove(grade);
        }
    })
}

change(".menu-docs", "menu-ham");