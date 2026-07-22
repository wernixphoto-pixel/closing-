const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");

window.onload = () => {

    setTimeout(() => {

        line1.classList.add("show");

    }, 500);

    setTimeout(() => {

        line2.classList.add("show");

    }, 1800);

};