const quizContainer = document.getElementByID("quiz");

const resultsContainer = document.getElementById("results");

const submitButton = document.getElementById("submit");

function buildQuiz() {
    const output = [];
    //For loop for each question
    myQuestions.forEach(
    (currentQuestion, questionNumber) => {
        //Variable storing list of possible answers
        const answers =[];

        //Contains available answers
        for (letter in currentQuestion.Answers) {
            //Adds a radio button and utilizes $ to add javascript elements to html
            answers.push(
                <label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>
            );
        }
    }
    )
}

//Display the quiz

buildQuiz();

submitButton.addEventListener("click", showResults);

const myQuestions = [
    //First Question
  {
    question: "Which animal is a dog?",
    answers: {
      a: "Rock",
      b: "Parrot",
      c: "Table",
    },

    correctAnswer: "b",
  },
  //Second Question
  {
      question: "Which is a type of bird?",
      answers: {
          a: "Tucan",
          b: "Siberian Husky",
          c: "Mouse"
      },
      correctAnswer: "a",
  },
  //Third Question
  {
  question: "How do birds teach their young to fly?",
  answers: {
    a: "Carry them on their backs",
    b: "Slow take off from the ground",
    c: "Yeet them out of the nest"
  },
  correctAnswer: "c",
  }
];
