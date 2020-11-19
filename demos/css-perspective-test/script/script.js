const card = document.querySelector(".card");
const container = document.querySelector(".container");
const clickit = document.querySelector(".down button");
const info = document.querySelector(".info");
const imgbackround = document.querySelector(".img-back-round");
const imageo = document.querySelector(".image-o");
const title = document.querySelector(".title");
const top1 = document.querySelector(".top1");

container.addEventListener("mousemove", (e) => {
    card.style.transition = "none"; 
    let axisX = (window.innerWidth/2 - e.pageX)/15;
    let axisY = (window.innerHeight/2 - e.pageY)/15;
    card.style.transform = `rotateY(${axisX}deg) rotateX(${axisY}deg)`; 
    clickit.style.transform = "translateZ(150px)";
    imageo.style.transform = "translateZ(100px) scale(1.1)";
    info.style.transform = "translateZ(120px)";
    imgbackround.style.transform = "translateZ(30px)";
    title.style.transform = "translateZ(100px)";
});

container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none"; 
});

container.addEventListener("mouseleave", (e) => {
    card.style.transform = `rotateY(0deg) rotateX(0deg)`; 
    card.style.transition = `all 0.8s ease`; 
    title.style.clickit = "translateZ(0px)";
    imageo.style.transform = "translateZ(0px)";
    info.style.transform = "translateZ(0px)";
    clickit.style.transform = "translateZ(0px)";
    imgbackround.style.transform = "translateZ(0px)";
});

clickit.addEventListener("click", (e) => {
    top1.style.top = "-100vh";
});