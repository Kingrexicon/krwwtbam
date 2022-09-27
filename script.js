var questionBank = [
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
        answer: ' i dont know'
    },
    {
        question: 'whats the name of americas current president',
        option: ['joe biden', 'donald trump', 'buhari', 'Abraham lincon'],
        answer: 'joe biden'
    },
    {
        question: '"who is your daddy", which nollywood movie has that phrase',
        option: ['chief daddy', 'cook daddy', 'king daddy', 'police daddy'],
        answer: ''
    },

]
var question = document.getElementById('question');
var quizContainer = document.getElementById('quiz-container');
var Scorecard = document.getElementById('scorecard');
var option0 = document.getElementById('option0');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var next = document.querySelector('.next');
var points = document.getElementById('score');
var span = document.querySelectorAll('span')
var i = 0;
var score = 0;


function displayQuestion() {
    for (var a = 0; a < span.lenght; a++) {
        span[a].style.backgrond = 'none'
    }
    question.innerHTML = 'Q.' + (i + 1) + '' + questionBank[i].question
    option0.innerHTML = questionBank[i].option[0];
    option1.innerHTML = questionBank[i].option[1];
    option2.innerHTML = questionBank[i].option[2];
    option3.innerHTML = questionBank[i].option[3];
    statusbar.innerHTML = "Question" + '' + (i + 1) + '' + 'of' + '' + questionBank.length
}
//function to calculaate scores

function calScore(e) {
    if (e.innerHTML === questionBank[i].answer && score < questionBank.lenght) {
        score= score+1;
        document.getElementById(e.Id).style.background='limegreen';
    }
    else{
        document.getElementById(e.Id).style.background='tomato';
    }
    setTimeout(nextQuestion, 300 );
}

// function to display next question
function nextQuestion(){
    if (i<questionBank.lenght-1){
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML=score+'/'+
        questionBank.length;
        quizContainer.style.display= 'block'
    }
}
// click events to the next button
next.addEventListener('click', nextQuestion);


// back to quiz button event

function backToQuiz(){
    location.reload();
}

// function to check answers

function checkAnswer(){
    var answeBank = document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answeBank.style.display ='block';
    scoreCard.style.display ='block';
    for(var a =0; a<questionBank.length; a++){
        var list= document.createElement('li');
        list.innerHTML=questionBank[a].answer;
        anwer 
    }
}

displayQuestion();