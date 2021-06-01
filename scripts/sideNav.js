document.getElementsByClassName("fa-bars")[0].addEventListener("click", () => {
  document.querySelector(".side-nav").style.right = "0";
  document.getElementsByClassName("fa-bars")[0].style.visibility = "hidden";
  document.getElementsByClassName("fa-times")[0].style.visibility = "visible";
});

document.getElementsByClassName("fa-times")[0].addEventListener("click", () => {
  document.querySelector(".side-nav").style.right = "-100vw";
  document.getElementsByClassName("fa-bars")[0].style.visibility = "visible";
  document.getElementsByClassName("fa-times")[0].style.visibility = "hidden";
});

document.querySelector(".side-nav__buttons").addEventListener("click", () => {
  document.querySelector(".side-nav").style.right = "-100vw";
  document.getElementsByClassName("fa-bars")[0].style.visibility = "visible";
  document.getElementsByClassName("fa-times")[0].style.visibility = "hidden";
});
