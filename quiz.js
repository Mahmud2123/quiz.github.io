const questions = [
    {
        question: "Who is the current chief of justices of Nigeria?",
        options: [
        " Ibrahim  ukkasha", 
        " Ibrahim Tanko Muhammad", 
        " Ibrahim Tanko Hassan"
    ],
        correctAnswer: 1 // Index of the correct option
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Earth"],
        correctAnswer: 0
    },
    {
    question: " In Nigeria, democracy day is now celebrated on.",
    options: ["December 1st", "Jume 12th", "Janauary 2nd"],
    correctAnswer: 1
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe"],
        correctAnswer: 1
    }
    // Add more questions with different options here
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const buttonElement = document.querySelector("button");

let currentQuestion = 0;

function displayQuestion() {
    const currentQuestionData = questions[currentQuestion];
    questionElement.textContent = `Question ${currentQuestion + 1}: ${currentQuestionData.question}`;
    feedbackElement.textContent = "";
    optionsElement.innerHTML = "";

    currentQuestionData.options.forEach((option, index) => {
        const optionLabel = document.createElement("label");
        optionLabel.innerHTML = `
            <input type="radio" name="answer" value="${index}">
            ${option}
        `;
        optionsElement.appendChild(optionLabel);
    });
}

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (!selectedAnswer) {
        feedbackElement.textContent = "Please select an answer.";
        return;
    }

    const currentQuestionData = questions[currentQuestion];
    if (parseInt(selectedAnswer.value) === currentQuestionData.correctAnswer) {
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
