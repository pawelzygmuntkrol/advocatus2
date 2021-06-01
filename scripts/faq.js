const questions = document.querySelectorAll(".container__question");

const answers = {
  1: "Long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using `Content here, content here`, making it look like readable English.",
  2: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using `Content here, content here`, making it look like readable English.Long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
  3: "Readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using `Content here, content here`, making it look like readable English.Long established fact that a reader will be distracted by the ",
  4: "As opposed to using `Content here, content here`, making it look like readable English.Long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, ",
  5: "Looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using `Content here, content here`, making it look like readable English.Long established fact that a reader will be distracted by the readable content of a page when ",
  6: "`Content here, content here`, making it look like readable English.Long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "
};

for (let i = 1; i < questions.length + 1; i++) {
  document.querySelector(`.question-${i}`).addEventListener("click", () => {
    document.querySelector(`.question-1`).style.color = "";
    for (let j = 1; j < questions.length + 1; j++) {
      document
        .querySelector(`.question-${j}`)
        .classList.remove("container__question--active");
      document.querySelector(`.mark-${j}`).innerText = "+";
    }
    document
      .querySelector(`.question-${i}`)
      .classList.add("container__question--active");
    document.querySelector(`.mark-${i}`).innerText = "–";
    document.querySelector(".container__paragraph").innerText = answers[i];
  });
}
