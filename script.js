var questionBank = [
    {
        question: ' What term is often used for a person who brings embarrassent or shame to their family ',
        option: ['black sheep', 'white horse', 'brown goat', ' animal'],
        answer: 'black sheep'
    },
    {
        question: 'pick  the odd one out',
        option: ['me', 'you', 'she', 'he'],
        answer: 'you'
    },
    {
        question: 'whats the capital of oyo',
        option: ['ibadan', 'jos', 'kano', 'osogbo'],
        answer: 'ibadan'
    },

    {
        question: 'whats 2 + 2',
        option: ['4', '6', '8', '10'],
        answer: '4'
    },
    {
        question: 'how old are you?',
        option: ['3', '5', '6', 'i dont know'],
        answer: 'i dont know'
    },
    {
        question: 'whats the name of americas current president',
        option: ['joe biden', 'donald trump', 'buhari', 'Abraham lincon'],
        answer: 'joe biden'
    },
    {
        question: '"who is your daddy", which nollywood movie has that phrase',
        option: ['chief daddy', 'cook daddy', 'king daddy', 'police daddy'],
        answer: 'chief daddy'
    },

]


let remove = new Audio("./extras/50-50_sound.mp3")
let PhoneS = new Audio("./extras/soundb.mp3")
let audiE = new Audio("./extras/Ask The Audience_sound.mp3")
let correct = new Audio('./extras/sound_correct.mp3')
let inCorrect = new Audio('./extras/sound_incorrect.mp3')


var question = document.getElementById('question');
var quizContainer = document.getElementById('quiz-container');
var scorecard = document.getElementById('scoreboard');
var option0 = document.getElementById('option0');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var next = document.querySelector('.next');
var points = document.getElementById('score');
var span = document.querySelectorAll('span')
var i = 0;
var score = 0;


// function displayQuestion() {
//        for(var a=0; a<span.length;a++){
// span[a].style.background='none';
// }
//     question.innerHTML = ` <p class="text-center">Q.${i + 1}</p> <div class="quest">${questionBank[i].question}</div> `
//     option0.innerHTML =  ` <div class="choose"> A. ${questionBank[i].option[0]}</div>`;
//     option1.innerHTML = `<div class="choose">B. ${questionBank[i].option[1]}</div>`;
//     option2.innerHTML = `<div class="choose">C. ${questionBank[i].option[2]}</div>`;
//     option3.innerHTML = `<div class="choose">D. ${questionBank[i].option[3]}</div>`;
//     statusbar.innerHTML = "Question" + '' + (i + 1) + '' + 'of' + '' + questionBank.length
// }
function displayQuestion() {
    for (var a = 0; a < span.length; a++) {
        span[a].style.background = 'none';
    }
    question.innerHTML = ` <p class="text-center">Q.${i + 1}</p> <div class="quest">${questionBank[i].question}</div> `

    option0.innerHTML = questionBank[i].option[0];
    option1.innerHTML = questionBank[i].option[1];
    option2.innerHTML = questionBank[i].option[2];
    option3.innerHTML = questionBank[i].option[3];
    statusbar.innerHTML = "question" + '' + (i + 1) + '' + 'of' + '' + questionBank.length;
}
//function to calculaate scores
function calScore(e) {
    if (e.innerHTML === questionBank[i].answer && score < questionBank.length) {
        score = score + 1;
        correct.play();
        document.getElementById(e.Id);
        e.innerHTML = `<div width="50px height="50px" style="background-color:green">correct</div>`

    }
    else {
        document.getElementById(e.Id)
        e.innerHTML = `<div width="50px height="50px" style="background-color:red;">wrong</div>`
        inCorrect.play()

        if (inCorrect.play()) { 
            setTimeout(() => {
                restartGame() 
            }, 1000); 
        }

    }
    setTimeout(nextQuestion, 300);
}
var enabled = true
function removeOptions() {
    if (enabled == true) {
        remove.play();
        option3.innerHTML = `<div class="choose"></div>`;
        option2.innerHTML = `<div class="choose"></div>`;
        fifty.innerHTML = ` <img src="./extras/50-50-used.png" alt="">`;
        enabled = false
    } else {
        setTimeout(() => {
            stat.innerHTML = `function already used`
            setTimeout(() => {
                stat.innerHTML = ``
            }, 2000);
        }, 300);

    }
}
const playSong = () => {
    PhoneS.play()
}
var enable = true
function callFriend() {
    if (enable == true) {
        audiE.play();
        window.location.href = "tel:"
        phone.innerHTML = ` <img src="./extras/phone-a-friend-used.png" alt="">`
        enable = false
    }
}
function restartGame() {
    location.reload()
}

// function to display next question
function nextQuestion() {
    if (i < questionBank.length - 1) {
        i = i + 1;
        displayQuestion();
        checkAnswer.innerHTML = "er"
    }
    else {
        points.innerHTML = score + '/' +
            questionBank.length;
        quizContainer.style.display = 'none';
        scoreboard.style.display = 'block'

    }
}

// click events to the next button
next.addEventListener('click', nextQuestion);


// back to quiz button event

function backToQuiz() {
    location.href = "index.html";
}

// function to check answers

function checkAnswer() {
    var answeBank = document.getElementById('answerBank');
    var answers = document.getElementById('answers');
    answeBank.style.display = 'block';
    scoreboard.style.display = 'none';

    for (var a = 0; a < questionBank.length; a++) {
        var list = document.createElement('li');
        list.innerHTML = questionBank[a].answer;
        answers.appendChild(list);
    }

}

displayQuestion();
