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
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>`
            );
        }

        output.push(
            `<div class="question">{$currentQuestion.question</div>
            <div class="answers"> ${answers.join('')}</div>`
        );

    }
    );
    quizContainer.innerHtml = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    
    let numCorrect = 0;

    myQuestions.forEach( (currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumbne}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if(userAnswer === currentQuestion.correctAnswer){
            numCorrect++;
        }
        answerContainers[questionNumbner].style.color = 'lightgreen';

        else{
            answerContainers[questionNumber].style.color = 'red';
        }
    });
    resultsContainerContainer.innerHTML = `${numCorrect} out of ${myQuestions}.length`;
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
