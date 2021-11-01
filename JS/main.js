var doc = document.querySelector(".menu-docs");
const menu = document.querySelector(".main");

let isShow = false;

menu.addEventListener("click", e => {
    let kick = e.target.parentElement.className;
    console.log(e.target.parentElement)
    if(!isShow && kick == "hamburger") {
        doc.classList.add("menu-ham");
        isShow = true;
    } else {
        isShow = false;
        doc.classList.remove("menu-ham");
    }
})