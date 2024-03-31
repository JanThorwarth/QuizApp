let questions = [
  {
    "question": "Wer hat HTML erfunden?",
    "answer_1": "Robbie Williams",
    "answer_2": "Lady Gaga",
    "answer_3": "Tim Berners-Lee",
    "answer_4": "Justin Bieber",
    "right_answer": 3,
  },
  {
    "question": "Wie definiert man in JavaScript eine Variable?",
    "answer_1": "let 100 = rate;",
    "answer_2": "100 = let rate;",
    "answer_3": "rate = 100;",
    "answer_4": "let rate = 100;",
    "right_answer": 4,
  },
  {
    "question": "Was bedeutet das HTML Tag &lt;a&gt;?",
    "answer_1": "Text Fett",
    "answer_2": "Container",
    "answer_3": "Ein Link",
    "answer_4": "Kursiv",
    "right_answer": 3,
  },
  {
    "question": "Wie beginnt man in einem HTML- Dokument?",
    "answer_1": "HTML",
    "answer_2": "!DOCTYPE html",
    "answer_3": "HTML start",
    "answer_4": "!DOCTYPE html start",
    "right_answer": 2,
  },
  {
    "question": "Was befindet sich im Tag img src= ?",
    "answer_1": "Ein Text",
    "answer_2": "Eine Datei",
    "answer_3": "Ein Video", 
    "answer_4": "Ein Bild",
    "right_answer": 4,
  },
];

let currentQuestion = 0;


function init() {
  document.getElementById("allQuestions").innerHTML = questions.length;
  document.getElementById("allQuestions2").innerHTML = questions.length;
  document.getElementById("endscreen").classList.add("d-none")
  showQuestion();
}

function showQuestion() {
  let question = questions[currentQuestion];

  

  document.getElementById("questiontext").innerHTML = `<div>
    ${question["question"]}
    </div>`;

    showAnswers();
}

function showAnswers() {

if (currentQuestion >= questions.length) {
  endScreen();

} else {
  
  let answer = questions[currentQuestion];
  document.getElementById("which-question").innerHTML = currentQuestion + 1;
 
  document.getElementById("answer_1").innerHTML = `<div>
  ${answer["answer_1"]}
  </div>`;

  document.getElementById("answer_2").innerHTML = `<div>
  ${answer["answer_2"]}
  </div>`;

  document.getElementById("answer_3").innerHTML = `<div>
  ${answer["answer_3"]}
  </div>`;

  document.getElementById("answer_4").innerHTML = `<div>
  ${answer["answer_4"]}
  </div>`;
}
showQuestion();
}


function answer(selection) {
  let question = questions[currentQuestion]; // der erste Block des JSON Arrays
  console.log(question)

  let correctQuestion = question["right_answer"]; 

  let IdOfRightAnswer =`answer_${question["right_answer"]}`;
  

  let correctAnswer = selection.slice(-1); // .slice(-1) gibt den letzten Buchstabe raus

  if (correctAnswer == correctQuestion) { // wenn die richtige antwort mit dem letzten Buchstaben oder Zahl übereinstimmt dann ist es richtig

    document.getElementById(selection).parentNode.classList.add("bg-success")
  } else {

    document.getElementById(selection).parentNode.classList.add("bg-danger")
    document.getElementById(IdOfRightAnswer).parentNode.classList.add("bg-success")
  }
  document.getElementById("button").disabled = false;
}



function nextQuestion() {
  currentQuestion++;
  

  document.getElementById("button").disabled = true;
  resetAnswerButtons();
  showAnswers();

}


function resetAnswerButtons() {
  document.getElementById("answer_1").parentNode.classList.remove("bg-success")
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger")
  document.getElementById("answer_2").parentNode.classList.remove("bg-success")
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger")
  document.getElementById("answer_3").parentNode.classList.remove("bg-success")
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger")
  document.getElementById("answer_4").parentNode.classList.remove("bg-success")
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger")
}


function endScreen() {
  document.getElementById("card-body").classList.add("d-none")
  document.getElementById("endscreen").classList.remove("d-none")

 

}
