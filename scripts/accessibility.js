// Theme used in CSS file.
let theme = localStorage.getItem("theme") || "light";

// Checks theme on load and uses users prefference (if changed from default).
window.addEventListener("load", () => {
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
});

// Toggles themes.
document.querySelector(".fa-eye").addEventListener("click", () => {
  if (theme === "light") {
    document.documentElement.setAttribute("data-theme", "dark");
    theme = "dark";
    localStorage.setItem("theme", theme);
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    theme = "light";
    localStorage.setItem("theme", theme);
  }
});

// Default font size used in CSS file.
let fontSize = localStorage.getItem("font") || "regular-text";

// Checks theme on load and uses users prefference (if changed from default).
window.addEventListener("load", () => {
  if (fontSize === "regular-text") {
    document.documentElement.setAttribute("font-size", "regular-text");
  } else if (fontSize === "big-text") {
    document.documentElement.setAttribute("font-size", "big-text");
  } else {
    document.documentElement.setAttribute("font-size", "biggest-text");
  }
});

// Toggles font sizes.
document.querySelector(".normal-text").addEventListener("click", () => {
  document.documentElement.setAttribute("font-size", "regular-text");
  fontSize = "regular-text";
  localStorage.setItem("font", fontSize);
});

document.querySelector(".big-text").addEventListener("click", () => {
  document.documentElement.setAttribute("font-size", "big-text");
  fontSize = "big-text";
  localStorage.setItem("font", fontSize);
});

document.querySelector(".biggest-text").addEventListener("click", () => {
  document.documentElement.setAttribute("font-size", "biggest-text");
  fontSize = "biggest-text";
  localStorage.setItem("font", fontSize);
});
