let themeChanger = document.querySelector(".themeChanger");

let body = document.querySelector(".body");

themeChanger.onclick = function () {
    if (body.classList.contains != "dark") {
        body.classList.toggle("dark")
    }
    else {
        body.classList.remove("dark")
    }
}