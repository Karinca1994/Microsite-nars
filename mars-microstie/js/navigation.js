const mainNav = document.querySelector(".main-menu");
const closeNav = document.querySelector(".close-menu");
const openNav = document.querySelector(".open-menu");




openNav.addEventListener("click", show);
closeNav.addEventListener("click", close);

function show() {
  mainNav.style.display = "flex";
  mainNav.style.top = "0";
}

function close() {
  mainNav.style.top = "-100%";
}
