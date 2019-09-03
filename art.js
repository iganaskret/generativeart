"use strict";

const artOne = document.querySelector("#artwork1");
const artTwo = document.querySelector("#artwork2");
const artThree = document.querySelector("#artwork3");
const artFour = document.querySelector("#artwork4");
const artFive = document.querySelector("#artwork5");
const artSix = document.querySelector("#artwork6");
const artSeven = document.querySelector("#artwork7");
const artEight = document.querySelector("#artwork8");
const artNine = document.querySelector("#artwork9");

for (let i = 100; i < 300; i += 20) {
  let div = document.createElement("div");
  div.classList.add("box");
  div.style.width = `${i}px`;
  div.style.height = `${i}px`;

  artOne.appendChild(div);
}

for (let i = 0; i < 90; i += 10) {
  let div = document.createElement("div");
  div.classList.add("box");
  div.style.transform = `rotate(${i}deg)`;

  artTwo.appendChild(div);
}

for (let i = 0; i < 200; i += 10) {
  let div = document.createElement("div");
  div.classList.add("circle");
  div.style.width = `${i}px`;
  div.style.height = `${i}px`;

  artThree.appendChild(div);
}

for (let i = -90; i < 90; i += 20) {
  let div = document.createElement("div");
  div.classList.add("box");
  div.style.transform = `translate(${i}px, ${i}px)`;

  artFour.appendChild(div);
}

for (let i = 1; i < 512; i *= 2) {
  let div = document.createElement("div");
  div.classList.add("circle");
  div.style.width = `${i}px`;
  div.style.height = `${i}px`;

  artFive.appendChild(div);
}

for (let i = -20; i < 45; i += 5) {
  let div = document.createElement("div");
  div.classList.add("circle");
  div.style.transform = `translate(${i - 50}px)` + `rotate(${i * 4}deg)`;

  artSix.appendChild(div);
}

for (let i = 0; i < 200; i += 10) {
  let div = document.createElement("div");
  div.classList.add("circle");
  div.style.width = `${i}px`;
  div.style.height = `${i}px`;
  div.style.transform = `translate(${i}px,${-i / 2}px)`;

  artSeven.appendChild(div);
}

for (let i = 50; i < 200; i += 10) {
  let div = document.createElement("div");
  div.classList.add("box");
  div.style.width = `${i}px`;
  div.style.height = `${i}px`;
  div.style.transform = `translate(${i / 2}px)` + `rotate(${i}deg)`;

  artEight.appendChild(div);
}

for (let i = 50; i < 200; i += 30) {
  let div = document.createElement("div");
  div.classList.add("box");
  div.style.width = `${i}px`;
  div.style.height = `${i}px`;

  artNine.appendChild(div);
}

for (let i = 50; i < 200; i += 30) {
  let div = document.createElement("div");
  div.classList.add("circle");
  div.style.width = `${i}px`;
  div.style.height = `${i}px`;

  artNine.appendChild(div);
}
