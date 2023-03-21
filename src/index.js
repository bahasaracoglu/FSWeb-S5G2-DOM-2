import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });
// Kodlar buraya gelecek!

const allP = document.querySelectorAll("p");

allP.addEventListener("mouseover", (event) => {
  for (let i = 0; i < allP.length; i++) {
    allP[i].style.backgroundColor = "red";
  }
});

const destination = document.getElementsByClassName("destination");

destination.addEventListener("mouseover", (event) => {
  destination.style.backgroundColor = "yellow";
});
