let questionIndex = 0;
let coinCount = 0;
let countdownValue = 10;
let countdownInterval;

const questions = [
    { question: "Qual é a capital do Brasil?", options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"], correctAnswer: "Brasília" },
    { question: "Quem escreveu 'Dom Quixote'?", options: ["Miguel de Cervantes", "William Shakespeare", "Jane Austen", "Leo Tolstoy"], correctAnswer: "Miguel de Cervantes" },
    { question: "Qual é o maior planeta do Sistema Solar?", options: ["Terra", "Vênus", "Júpiter", "Marte"], correctAnswer: "Júpiter" },
    // Adicione mais perguntas conforme necessário
];

function startGame() {
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('gameContainer').style.display = 'block';

    displayNextQuestion();
}

function displayNextQuestion() {
    if (questionIndex < questions.length) {
        const currentQuestion = questions[questionIndex];

        document.getElementById('questionContainer').innerHTML = currentQuestion.question;

        const optionsContainer = document.createElement('div');
        optionsContainer.id = 'optionsContainer';

        currentQuestion.options.forEach((option, index) => {
            const optionButton = document.createElement('button');
            optionButton.className = 'questionButton';
            optionButton.innerText = option;
            optionButton.addEventListener('click', () => checkAnswer(option));
            optionsContainer.appendChild(optionButton);
        });

        document.getElementById('questionContainer').appendChild(optionsContainer);

        countdownValue = 10;
        updateTimer();

        countdownInterval = setInterval(() => {
            countdownValue -= 1;
            updateTimer();

            if (countdownValue === 0) {
                clearInterval(countdownInterval);
                questionIndex++;
                displayNextQuestion();
            }
        }, 1000);
    } else {
        endGame();
    }
}

function checkAnswer(selectedAnswer) {
    clearInterval(countdownInterval);

    const currentQuestion = questions[questionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
        coinCount += 5;
    } else {
        coinCount -= 2;
    }

    document.getElementById('coinCount').innerText = coinCount;

    questionIndex++;
    displayNextQuestion();
}

function endGame() {
    document.getElementById('gameContainer').innerHTML = `<p>Fim do jogo! Você obteve ${coinCount} moedas.</p>`;
}

function updateTimer() {
    document.getElementById('countdown').innerText = countdownValue;
}

