
let currentQuestionIndex = 0;
let yourScore = 0;
const progressBar = document.querySelector(".progress-bar");

startButton.addEventListener("click", function () {
  firstDiv.classList.add("d-none");
  secondDiv.classList.remove("d-none");
  secondDiv.classList.add("d-block");
  renderQuestions();
});
exitButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    window.close();
  });
});
cards.forEach((card) => {
  card.addEventListener("click", function () {
    answerSelection(card.getAttribute("id"));
  });
});

function renderQuestions() {

  if (currentQuestionIndex < questions.length) {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.quest;
    optionA.textContent = currentQuestion.answ[0][1];
    optionB.textContent = currentQuestion.answ[1][1];
    optionC.textContent = currentQuestion.answ[2][1];
    questionNumber.innerHTML = `${currentQuestionIndex + 1}.`;
    selectedAnswer = null;
  } else {
    secondDiv.classList.remove("d-block");
    secondDiv.classList.add("d-none");
    thirdDiv.classList.remove("d-none");
    thirdDiv.classList.add("d-block");
    score.innerHTML = `${yourScore}/${questions.length}`;
    resultContent.textContent = "Quiz finished. Your score is: ";
    score.innerHTML = `${yourScore}/${questions.length}`;
  }
}

function answerSelection(selected) {
  if (!selectedAnswer) {
    selectedAnswer = selected;
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.trueAnsw) {
      yourScore++;
      console.log("Correct!");

      imgt.classList.remove("d-none");
      imgt.classList.add("d-block");

      setTimeout(function () {
        imgt.classList.remove("d-block");
        imgt.classList.add("d-none");
      }, 500);

      console.log(selectedAnswer);
    } else {
      console.log("Incorrect.");
      console.log(selectedAnswer);
      imgx.classList.remove("d-none");
      imgx.classList.add("d-block");

      setTimeout(function () {
        imgx.classList.remove("d-block");
        imgx.classList.add("d-none");
      }, 500);
    }
    currentQuestionIndex++;
    renderQuestions();
    const progress = (currentQuestionIndex / questions.length) * 100;
    updateProgressBar(progress);
  }
}
restartButton.addEventListener("click", function () {
  progressBar.style.width = "0%";
  currentQuestionIndex = 0;
  yourScore = 0;
  resultContent.classList.remove("score-visible");
  secondDiv.classList.remove("d-none");
  secondDiv.classList.add("d-block");
  thirdDiv.classList.remove("d-block");
  thirdDiv.classList.add("d-none");
  renderQuestions();
});
function updateProgressBar(progress) {
  const progressBar = document.querySelector(".progress-bar");
  progressBar.style.width = progress + "%";
  progressBar.setAttribute("aria-valuenow", progress);
}

