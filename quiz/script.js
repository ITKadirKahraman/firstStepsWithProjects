let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer1": "Robbie Williams",
        "answer2": "Lady Gaga",
        "answer3": "Tim Berners Lee",
        "answer4": "Justin Bieber",
        "rightAnswer": 3
    },
    {
        "question": "Wofür steht CSS?",
        "answer1": "Creative Style System",
        "answer2": "Cascading Style Sheets",
        "answer3": "Computer Styled Sections",
        "answer4": "Colorful Style Syntax",
        "rightAnswer": 2
    },
    {
        "question": "Welche Sprache wird hauptsächlich für Webseiten-Logik verwendet?",
        "answer1": "JavaScript",
        "answer2": "Photoshop",
        "answer3": "Word",
        "answer4": "Excel",
        "rightAnswer": 1
    },
    {
        "question": "Welche HTML-Tags nutzt man für einen Link?",
        "answer1": "link",
        "answer2": "href",
        "answer3": "a",
        "answer4": "url",
        "rightAnswer": 3
    },
    {
        "question": "Welche Firma entwickelt den Browser Chrome?",
        "answer1": "Apple",
        "answer2": "Microsoft",
        "answer3": "Amazon",
        "answer4": "Google",
        "rightAnswer": 4
    }
];

let position = 1;
let currentQuestion = 0;
let counterRight = 0;
let AUDI_SUCCESS = new Audio('./audio/success.mp3');
let AUDIO_FAIL = new Audio('./audio/failed.mp3');

function init() {
    questionsPosition();
    questionsLeangth();
    showPage();
    showAnswers();
    countQuestion();
    counterRightAnswer();
}

function questionsPosition() {
    document.getElementById('position').innerHTML = position;
    position++;
}

function questionsLeangth() {
    document.getElementById('allQuestions').innerHTML = questions.length;
}

function countQuestion() {
    document.getElementById('counterQuestion').innerHTML = questions.length;
}

function counterRightAnswer() {
    document.getElementById('counterRightAnswer').innerHTML = counterRight;
}

function showPage() {
    if (gameIsOver()) {
        showEndScreen();
    }else {
        updateProgressBar();
        showQuestion(); 
    } 
}

function gameIsOver() {
    return currentQuestion >= questions.length;
}

function showEndScreen() {
    document.getElementById('endscreen').style = '';
    document.getElementById('questionBody').style = 'display: none'; 
    document.getElementById('headerImage').src = './assets/img/tropy.png';
}

function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('questionsText').innerHTML = question['question']; 
}

function updateProgressBar() {
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progressBar').innerHTML = `${percent} %`;
    document.getElementById('progressBar').style = `width: ${percent}%`;
}

function showAnswers() {
    let answer = questions[currentQuestion];
    document.getElementById('answer1').innerHTML = answer['answer1'];
    document.getElementById('answer2').innerHTML = answer['answer2'];
    document.getElementById('answer3').innerHTML = answer['answer3'];
    document.getElementById('answer4').innerHTML = answer['answer4'];
}

function answer(selection) {
    let right = questions[currentQuestion];
    let lastElement = selection.slice(-1);
    let idOfRightAnswer = `answer${right['rightAnswer']}`;

    if (rightAnswerSelected(lastElement)) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        AUDI_SUCCESS.play();
        counterRight++;
        counterRightAnswer();
    }else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }

    document.getElementById('nextBtn').disabled = false;
}

function rightAnswerSelected(element) {
    let right = questions[currentQuestion];
    return element == right['rightAnswer'];
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('nextBtn').disabled = true;
    resetAnserButtons();
    showPage();
    showAnswers();
    questionsPosition();
}

function resetAnserButtons() {
    document.getElementById('answer1').parentNode.classList.remove('bg-success');
    document.getElementById('answer1').parentNode.classList.remove('bg-danger'); 
    document.getElementById('answer2').parentNode.classList.remove('bg-success');
    document.getElementById('answer2').parentNode.classList.remove('bg-danger'); 
    document.getElementById('answer3').parentNode.classList.remove('bg-success');
    document.getElementById('answer3').parentNode.classList.remove('bg-danger'); 
    document.getElementById('answer4').parentNode.classList.remove('bg-success');
    document.getElementById('answer4').parentNode.classList.remove('bg-danger'); 
}

function restartGame() {
    document.getElementById('headerImage').src = './assets/img/quiz.png';
    document.getElementById('endscreen').style = 'display: none'; 
    document.getElementById('questionBody').style = ''; // Fragen anzeigen
    position = 1;
    currentQuestion = 0;
    counterRight = 0;
    init();
}
