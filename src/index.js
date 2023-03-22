import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });
// Kodlar buraya gelecek!

const navA = document.querySelectorAll("nav a");

navA.forEach((x) =>
  x.addEventListener("mouseover", (event) => {
    event.target.backgroundColor = "blue";
  })
);

const heading = document.querySelector(".logo-heading");

heading.addEventListener("mouseover", (event) => {
  backgroundColor = "green";
});

const demo = document.createElement("div");
document.body.appendChild(demo);
demo.classList.add("hey");

document.querySelector("footer p").addEventListener("onselect", (x) => {
  alert("hey");
});

const head = document.querySelector("header");
document.addEventListener("scroll", (event) => {
  head.style.backgroundColor = "blue";
});

window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
});

window.addEventListener("load", () => {
  alert("bişey");
});
