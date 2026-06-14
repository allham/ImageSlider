const nextEl = document.querySelector(".next");
const imageContainerEl = document.querySelector(".image-container");
const imgsEl = document.querySelectorAll("img");
const prevEl = document.querySelector(".prev");

const p = document.querySelector("p");
let timeout;
let currentImg = 0;
prevEl.addEventListener("click", ()=>{
    currentImg--;
    clearTimeout(timeout);
    updateImg();
})
nextEl.addEventListener("click", ()=>{
    currentImg ++;
    clearTimeout(timeout);
    updateImg();
})
updateImg();
function updateImg(){
    if(currentImg === imgsEl.length){
        currentImg = 0;
    }else if(currentImg < 1){
        currentImg = imgsEl.length - 1;
    }
    imageContainerEl.style.transform = `translateX(-${(currentImg)* 500}px)`;
    timeout = setTimeout(()=>{
        currentImg++;
        updateImg();
    }, 10000);
};
