// Shows side-nav and close button when hamburger button is clicked.
document.getElementsByClassName("fa-bars")[0].addEventListener("click", () => {
  document.querySelector(".side-nav").style.display = "flex";
  document.getElementsByClassName("fa-bars")[0].style.visibility = "hidden";
  document.getElementsByClassName("fa-times")[0].style.visibility = "visible";
});
// Hides side-nav and shows hamburger button when close button is clicked.
document.getElementsByClassName("fa-times")[0].addEventListener("click", () => {
  document.querySelector(".side-nav").style.display = "none";
  document.getElementsByClassName("fa-bars")[0].style.visibility = "visible";
  document.getElementsByClassName("fa-times")[0].style.visibility = "hidden";
});
// Hides side-nav and shows hamburger button when any menu button is clicked.
document.querySelector(".side-nav__buttons").addEventListener("click", () => {
  document.querySelector(".side-nav").style.display = "none";
  document.getElementsByClassName("fa-bars")[0].style.visibility = "visible";
  document.getElementsByClassName("fa-times")[0].style.visibility = "hidden";
});
