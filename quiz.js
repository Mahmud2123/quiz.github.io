const questions = [
    {
        question: "Who is the current VC of BASUG?",
        correctAnswer: "a"
    },
    {
        question: "Who is the class rep for the computer science department?",
        correctAnswer: "b"
    },
    {
        question: "Who is your crush?",
        correctAnswer: "c"
    }
    // Add more questions here
];

const questionElement = document.getElementById("question");
const feedbackElement = document.getElementById("feedback");
const buttonElement = document.querySelector("button");

let currentQuestion = 0;

function displayQuestion() {
    questionElement.textContent = `Question ${currentQuestion + 1}: ${questions[currentQuestion].question}`;
    feedbackElement.textContent = "";
    const options = document.querySelectorAll('input[name="answer"]');
    options.forEach(option => {
        option.checked = false;
    });
}

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (!selectedAnswer) {
        feedbackElement.textContent = "Please select an answer.";
        return;
    }

    if (selectedAnswer.value === questions[currentQuestion].correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.classList.add("correct");
    } else {
        feedbackElement.textContent = "Wrong answer. Try again.";
        feedbackElement.classList.add("incorrect");
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        setTimeout(displayQuestion, 1500); // Delay for 1.5 seconds before showing the next question
    } else {
        questionElement.textContent = "Quiz Completed!";
        feedbackElement.textContent = "You have completed the quiz.";
        buttonElement.disabled = true;
    }
}

displayQuestion(); // Initial display of the first question