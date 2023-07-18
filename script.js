const buttons = document.querySelectorAll(".btn");
const answerDivs = document.querySelectorAll(".answer-div");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const questionDiv = button.parentElement;
    const currentAnswerDiv = questionDiv.nextElementSibling;

    answerDivs.forEach(function (answerDiv) {
      if (answerDiv === currentAnswerDiv) {
        answerDiv.classList.toggle("hidden");
      } else {
        answerDiv.classList.add("hidden");
      }
    });
  });
});


