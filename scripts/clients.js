const clients = {
  1: {
    image: "./../photos/clients/stock-photo-159577399.png",
    opinion:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.",
    name: "Alon Smith",
    position: "CEO of AVC Group"
  },

  2: {
    image: "./../photos/clients/stock-photo-159577399.png",
    opinion:
      "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    name: "Jane Doe",
    position: "CTO of Microsoft"
  },

  3: {
    image: "./../photos/clients/stock-photo-159577399.png",
    opinion:
      "At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    name: "James Brown",
    position: "CEO of Apple"
  }
};

function changeClient(num) {
  document.querySelector(".opinions__image").src = clients[num].image;
  document.querySelector(".opinions__paragraph").innerHTML =
    clients[num].opinion;
  document.querySelector(".opinions__name").innerHTML = clients[num].name;
  document.querySelector(".opinions__position").innerHTML =
    clients[num].position;
  for (let i = 1; i <= Object.keys(clients).length; i++) {
    if (i === num) {
      document.querySelector(`.dot-${i}`).style.color = "var(--color7)";
    } else {
      document.querySelector(`.dot-${i}`).style.color = "var(--color3)";
    }
  }
}

document.querySelector(".dot-1").addEventListener("click", () => {
  changeClient(1);
  num = 1;
});

document.querySelector(".dot-2").addEventListener("click", () => {
  changeClient(2);
  num = 2;
});

document.querySelector(".dot-3").addEventListener("click", () => {
  changeClient(3);
  num = 3;
});

let num = 1;

changeClient(1);

setInterval(() => {
  num > Object.keys(clients).length ? (num = 1) : (num = num);
  changeClient(num);
  num++;
}, 3000);
