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
        question: " The hottest region in the world is called?",
        options: ["Desert", "Kalahari Desert", "Sahara Desert"],
        correctAnswer: 2
    },
    {
        question: "  Which is the second-largest continent in the world?",
        options: ["Europe", "Asia", "Africa"],
        correctAnswer: 2
    },
    {
    question: "Who is the current Governor of the Central Bank of Nigeria?",
    options: [" Folashodun Shonubi", "Abubakar Muhammad", "Godwin Emefiele"],
    correctAnswer: 0
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe"],
        correctAnswer: 1
    },
    {
        question: " Nigeria’s Inspector General of Police is?",
        options: ["Yakubu Gowon", "Adamu Muhammed", "Garba Gambo"],
        correctAnswer: 1
        },
        {
            question: "  Who was the first President of Nigeria?",
            options: ["Dr. Nnamdi Azikiwe, Oct. 1st, 1960 – Jan. 15th, 1966", "Dr. Nnamdi Azikiwe, Jan. 1st, 1950 – Jan. 15th, 1970", "Janauary 2nd", "None of the above"],
            correctAnswer: 0
            },
            {
                question: " In Nigeria, democracy day is now celebrated on.",
                options: ["December 1st", "Jume 12th", "Janauary 2nd"],
                correctAnswer: 1
                },
    // Add more questions with different options here
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");
const submitButton = document.getElementById("submitButton");
const restartButton = document.getElementById("restartButton");

let currentQuestion = 0;
let userScore = 0;
const userAnswers = new Array(questions.length);

function displayQuestion() {
    const currentQuestionData = questions[currentQuestion];
    questionElement.textContent = `Question ${currentQuestion + 1}: ${currentQuestionData.question}`;
    feedbackElement.textContent = "";
    optionsElement.innerHTML = "";

    currentQuestionData.options.forEach((option, index) => {
        const optionLabel = document.createElement("label");
        optionLabel.innerHTML = `
            <input type="radio" name="answer" value="${index}" ${userAnswers[currentQuestion] === index ? 'checked' : ''}>
            ${option}
        `;
        optionsElement.appendChild(optionLabel);
    });

    updateButtonVisibility();
}

function updateButtonVisibility() {
    previousButton.style.display = currentQuestion === 0 ? 'none' : 'block';
    nextButton.style.display = currentQuestion === questions.length - 1 ? 'none' : 'block';
    submitButton.style.display = currentQuestion === questions.length - 1 ? 'block' : 'none';
    restartButton.style.display = 'none';
}

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (!selectedAnswer) {
        feedbackElement.textContent = "Please select an answer.";
        return;
    }

    userAnswers[currentQuestion] = parseInt(selectedAnswer.value);

    const currentQuestionData = questions[currentQuestion];
    if (userAnswers[currentQuestion] === currentQuestionData.correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.classList.add("correct");
        userScore++; // Increment the user's score
    } else {
        feedbackElement.textContent = "Wrong answer. Try again.";
        feedbackElement.classList.add("incorrect");
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        checkAnswer();
        currentQuestion--;
        displayQuestion();
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        checkAnswer();
        currentQuestion++;
        displayQuestion();
    } else {
        submitQuiz();
    }
}

function submitQuiz() {
    checkAnswer();
    displayQuestion();
    questionElement.textContent = `Quiz Completed! You scored ${userScore} out of ${questions.length}.`;
    optionsElement.innerHTML = "";
    feedbackElement.textContent = "";
    nextButton.style.display = 'none';
    previousButton.style.display = 'none';
    submitButton.style.display = 'none';
    restartButton.style.display = 'block';
}

function restartQuiz() {
    currentQuestion = 0;
    userScore = 0;
    userAnswers.fill(undefined);
    displayQuestion();
}

displayQuestion(); // Initial display of the first question
