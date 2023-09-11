const questions = [
  {
    quest: "Which is the biggest country in the world?",
    answ: [
      ["A", "Russia"],
      ["B", "Canada"],
      ["C", "USA"],
    ],
    trueAnsw: "A",
  },
  {
    quest: "Which is the most populous country in the world?",
    answ: [
      ["A", "China"],
      ["B", "Korea"],
      ["C", "USA"],
    ],
    trueAnsw: "A",
  },
  {
    quest: "Which is the highest point in the world?",
    answ: [
      ["A", "Mont Blanc"],
      ["B", "Mount Everest"],
      ["C", "Mount Kazbek"],
    ],
    trueAnsw: "B",
  },
  {
    quest: "Which is the deepest point in the world?",
    answ: [
      ["A", "Bermuda"],
      ["B", "Puerto Rico"],
      ["C", "Mariana Trench"],
    ],
    trueAnsw: "C",
  },
  {
    quest: "With which country does Azerbaijan share its longest border?",
    answ: [
      ["A", "Armenia"],
      ["B", "Russia"],
      ["C", "Turkey"],
    ],
    trueAnsw: "A",
  },
  {
    quest: "With which country does Azerbaijan share its shortest border?",
    answ: [
      ["A", "Georgia"],
      ["B", "Turkey"],
      ["C", "Iran"],
    ],
    trueAnsw: "B",
  },
  {
    quest: "The largest district of Azerbaijan is:",
    answ: [
      ["A", "Kelbajar"],
      ["B", "Quba"],
      ["C", "Absheron"],
    ],
    trueAnsw: "A",
  },
  {
    quest: "Which is the saltiest sea in the world?",
    answ: [
      ["A", "Red Sea"],
      ["B", "Black Sea"],
      ["C", "Caribbean Sea"],
    ],
    trueAnsw: "A",
  },
  {
    quest: "Which is the biggest ocean in the world?",
    answ: [
      ["A", "Atlantic Ocean"],
      ["B", "Pacific Ocean"],
      ["C", "Indian Ocean"],
    ],
    trueAnsw: "B",
  },
  {
    quest: "Which is the largest planet in our solar system?",
    answ: [
      ["A", "Jupiter"],
      ["B", "Mars"],
      ["C", "Venus"],
    ],
    trueAnsw: "A",
  },
];

const startButton = document.querySelector("#start");
const restartButton = document.querySelector("#restart");

const exitButtons = document.querySelectorAll(".exit");

const firstDiv = document.querySelector(".firstDiv");
const secondDiv = document.querySelector(".secondDiv");
const thirdDiv = document.querySelector(".thirdDiv");
const questionElement = document.getElementById("question");
const questionNumber = document.querySelector(".questionNumber");

const imgx=document.querySelector(".imgx")
const imgt=document.querySelector(".imgt")

const optionA = document.getElementById("optionA");
const optionB = document.getElementById("optionB");
const optionC = document.getElementById("optionC");
const resultContent = document.querySelector(".resultContent");
const score = document.querySelector(".score");
const cards = document.querySelectorAll(".card");
 const A=document.querySelector("#A")
 const B=document.querySelector("#B")
 const C=document.querySelector("#C")

let currentQuestionIndex = 0;
let yourScore = 0;

startButton.addEventListener("click", function () {
  firstDiv.classList.add("d-none");
  secondDiv.classList.remove("d-none");
  secondDiv.classList.add("d-block");
  renderQuestions();
});

exitButtons.forEach(function(button){
button.addEventListener("click",function () {
  window.close()
  
})
})
cards.forEach((card) => {
  card.addEventListener("click", function () {
    handleAnswerSelection(card.getAttribute("id"));
  });
});

function renderQuestions() {
  if (currentQuestionIndex < questions.length) {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.quest;
    optionA.textContent = currentQuestion.answ[0][1];
    optionB.textContent = currentQuestion.answ[1][1];
    optionC.textContent = currentQuestion.answ[2][1];
    questionNumber.innerHTML=`${currentQuestionIndex+1}.`
    selectedAnswer = null;
  } else {
    secondDiv.classList.remove("d-block");
    secondDiv.classList.add("d-none");
    thirdDiv.classList.remove("d-none");
    thirdDiv.classList.add("d-block");
    score.innerHTML = `${yourScore}/${questions.length}`;
    resultContent.textContent = "Quiz finished. Your score is: "
    score.innerHTML=`${yourScore}/${questions.length}`
    // resultContent.classList.add("score-visible");
  }
}

function handleAnswerSelection(selected) {
  if (!selectedAnswer) {
    selectedAnswer = selected;
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.trueAnsw) {
      yourScore++;
      console.log("Correct!");

imgt.classList.remove("d-none");
imgt.classList.add("d-block");

setTimeout(function() {
  imgt.classList.remove("d-block");
  imgt.classList.add("d-none");
}, 500); 





    
      // document.getElementById(selectedAnswer).classList.add("bg-success");
      console.log(selectedAnswer);
    } else {
      console.log("Incorrect.");
      // document.getElementById(selectedAnswer).classList.add("bg-danger");
      console.log(selectedAnswer);
      imgx.classList.remove("d-none");
      imgx.classList.add("d-block");
      
      setTimeout(function() {
        imgx.classList.remove("d-block");
        imgx.classList.add("d-none");
      }, 500); 
     

    }
    // A.addEventListener("click",function(){
    //   handleAnswerSelection("A")
    // })
    // C.addEventListener("click",function(){
    //   handleAnswerSelection("B")
    // })
    // C.addEventListener("click",function(){
    //   handleAnswerSelection("C")
    // })

    currentQuestionIndex++;
    // document.getElementById(selectedAnswer).classList.remove("bg-danger");
    // document.getElementById(selectedAnswer).classList.remove("bg-success");


    renderQuestions();
  }
}
restartButton.addEventListener("click", function () {
  currentQuestionIndex = 0;
  yourScore = 0;
  resultContent.classList.remove("score-visible");
  secondDiv.classList.remove("d-none");
  secondDiv.classList.add("d-block");
  thirdDiv.classList.remove("d-block");
  thirdDiv.classList.add("d-none");
  renderQuestions();
});

