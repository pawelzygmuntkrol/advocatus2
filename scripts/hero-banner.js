const banners = {
  1: {
    image: "./../photos/hero-banner/stock-photo-177211577.png"
  },

  2: {
    image: "./../photos/hero-banner/image-1-2.jpg"
  },

  3: {
    image: "./../photos/hero-banner/image-1-3.jpg"
  }
};

let id = 1;

// Function that changes image based on chosen dot and also changes the dot color.
function changeBanner(id) {
  document.querySelector(
    ".hero-banner"
  ).style.backgroundImage = `url(${banners[id].image})`;
  for (let i = 1; i <= Object.keys(banners).length; i++) {
    if (i === id) {
      document.querySelector(`.hero-banner__dot-${i}`).style.color =
        "var(--color7)";
    } else {
      document.querySelector(`.hero-banner__dot-${i}`).style.color =
        "var(--color3)";
    }
  }
}

changeBanner(1);

// Manual change of the banner.
for (
  let i = 1;
  i <= document.querySelectorAll(".hero-banner__dot").length;
  i++
) {
  document
    .querySelector(`.hero-banner__dot-${i}`)
    .addEventListener("click", () => {
      changeBanner(i);
      id = i;
    });
}

// Automatic change of the banner.
setInterval(() => {
  id > Object.keys(banners).length ? (id = 1) : (id = id);
  changeBanner(id);
  id++;
}, 3000);
