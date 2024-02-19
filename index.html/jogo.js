const phrases = [
    { question: "Complete a frase: 'O gato mia de _____.'", options: ["dor", "amor", "cor", "odor"], correctAnswer: "amor" },
    // Adicione mais frases com opções e respostas corretas conforme necessário
];

let currentQuestionIndex = 0;
let coins = 0;

function startGame() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "flex";
    displayQuestion();
}

function displayQuestion() {
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");

    questionContainer.innerHTML = phrases[currentQuestionIndex].question;
    optionsContainer.innerHTML = "";

    phrases[currentQuestionIndex].options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(userAnswer) {
    const correctAnswer = phrases[currentQuestionIndex].correctAnswer;

    if (userAnswer === correctAnswer) {
        coins += 5;
    } else {
        coins -= 2;
    }

    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < phrases.length) {
        displayQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    document.getElementById("game-screen").style.display = "none";
    document.getElementById("result-screen").style.display = "flex";

    const resultMessage = document.getElementById("result-message");
    const totalCoins = document.getElementById("total-coins");

    resultMessage.textContent = `Parabéns! Você conseguiu ${coins} moedas.`;
    totalCoins.textContent = `Total de Moedas: ${coins}`;
}
