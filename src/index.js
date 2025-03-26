// Project code goes below here.
import "./style.css";
import beach from "../assets/beach.jpg";
import cyberpunk from "../assets/cyberpunk.jpg";
import vietnam from "../assets/vietnam.jpg";
import banff from "../assets/banff.jpg";

const imgs = [beach, cyberpunk, vietnam, banff];

const frame = document.querySelector(".frame");
const carousel = document.querySelector(".carousel");
let currImg = 1;
const min = 1;
const max = imgs.length;

for (let i = 1; i <= max; i++) {
  const img = document.createElement("img");
  img.id = `img${i}`;
  img.src = imgs[i - 1];
  carousel.append(img);
}

const nextBtn = document.createElement("button");
nextBtn.textContent = "Next";
nextBtn.addEventListener("click", next);
nextBtn.classList.add(...["btn", "next"]);

const prevBtn = document.createElement("button");
prevBtn.textContent = "Prev";
prevBtn.addEventListener("click", prev);
prevBtn.classList.add(...["btn", "prev"]);

const navBtnCont = document.createElement("div");
navBtnCont.classList.add("nav-cont");
for (let i = 1; i <= max; i++) {
  const navBtn = document.createElement("button");
  navBtn.id = `nav${i}`;
  navBtn.classList.add(...["nav"]);
  navBtn.addEventListener("click", navBtnHandler);
  navBtnCont.append(navBtn);
}

frame.append(prevBtn, nextBtn, navBtnCont);

function display(imgNum) {
  const newImg = document.getElementById(`img${imgNum}`);
  newImg.classList.toggle("visible");
  const newNav = document.getElementById(`nav${imgNum}`);
  newNav.classList.toggle("active");
}

function next() {
  const currentImg = document.getElementById(`img${currImg}`);
  currentImg.classList.toggle("visible");
  const currentNav = document.getElementById(`nav${currImg}`);
  currentNav.classList.toggle("active");
  if (currImg >= max) {
    currImg = 1;
  } else {
    currImg++;
  }
  display(currImg);
}

function prev() {
  const currentImg = document.getElementById(`img${currImg}`);
  currentImg.classList.toggle("visible");
  const currentNav = document.getElementById(`nav${currImg}`);
  currentNav.classList.toggle("active");
  if (currImg <= min) {
    currImg = max;
  } else {
    currImg--;
  }
  display(currImg);
}

function navBtnHandler(event) {
  const currentImg = document.getElementById(`img${currImg}`);
  currentImg.classList.toggle("visible");
  const currentNav = document.getElementById(`nav${currImg}`);
  currentNav.classList.toggle("active");
  const imgNum = event.currentTarget.id.substring(3);
  currImg = imgNum;
  display(imgNum);
}

// Display the first one
display(currImg);
window.setInterval(next, 5000);
