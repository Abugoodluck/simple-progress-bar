const button = document.querySelector(".btn");
button.addEventListener("click", run);
function run() {
    let mybar = document.querySelectorAll(".mybar");
    mybar[0].classList.toggle("active");
    mybar[1].classList.toggle('active-2');
    mybar[2].classList.toggle("active-3");
    mybar[3].classList.toggle("active-4");
}