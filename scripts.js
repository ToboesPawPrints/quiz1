const quizContainer = document.getElementByID('quiz');

const resultsContainer = document.getElementById('results');

const submitButton = document.getElementById('submit');

function buildQuiz() {
  
}

//Display the quiz

buildQuiz();

submitButton.addEventListener('click', showResults);

const myQuestions =[
{
    question: "Which animal is a dog?",
    answers: {
        a: "Rock",
        b: "Parrot",
        c: "Table",
    },
},

]