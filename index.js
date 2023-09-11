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

const imgx = document.querySelector(".imgx");
const imgt = document.querySelector(".imgt");

const optionA = document.getElementById("optionA");
const optionB = document.getElementById("optionB");
const optionC = document.getElementById("optionC");

const resultContent = document.querySelector(".resultContent");
const score = document.querySelector(".score");
const cards = document.querySelectorAll(".card");
