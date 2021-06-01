let theme = "light";

document.querySelector(".fa-eye").addEventListener("click", () => {
  if (theme === "light") {
    document.documentElement.setAttribute("data-theme", "dark");
    theme = "dark";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    theme = "light";
  }
});

let fontSize = "regular-text";

document.querySelector(".normal-text").addEventListener("click", () => {
  document.documentElement.setAttribute("font-size", "regular-text");
  fontSize = "regular-text";
});

document.querySelector(".big-text").addEventListener("click", () => {
  document.documentElement.setAttribute("font-size", "big-text");
  fontSize = "big-text";
});

document.querySelector(".biggest-text").addEventListener("click", () => {
  document.documentElement.setAttribute("font-size", "biggest-text");
  fontSize = "biggest-text";
});
