const title = document.querySelector(".title");
const subtitle = document.querySelector(".subtitle");
const line = document.querySelector(".line");

function animate(){

    title.classList.remove("showTitle");
    subtitle.classList.remove("showSubtitle");
    line.classList.remove("showLine");

    void title.offsetWidth;

    title.classList.add("showTitle");

    setTimeout(()=>{

        subtitle.classList.add("showSubtitle");

    },300);

    setTimeout(()=>{

        line.classList.add("showLine");

    },700);

}

window.onload=()=>{

    animate();

    setInterval(animate,3000);

};
