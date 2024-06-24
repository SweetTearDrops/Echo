function expandMenu() {
    var menu = document.getElementById("menu");
    var menuBox = document.getElementById('menu-box');

    if (menuBox.style.display == "block") {
        menuBox.style.display = "none";
        menuBox.style.opacity = "0";
        menu.style.transform = 'rotate(0deg)';
    } else {
        menuBox.style.display = "block";
        menuBox.style.opacity = "1";
        menu.style.transform = 'rotate(-90deg)';
    }
}

const checkbox = document.getElementById("checkbox")
var ball = document.getElementById("ball");
var slider = document.getElementById('label');
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark")
})