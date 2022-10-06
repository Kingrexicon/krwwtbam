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
        answer: 'chief daddy'
    },

]

   
   let remove = new Audio("./extras/50-50_sound.mp3")
   let PhoneS = new Audio("./extras/soundb.mp3")
   
   
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


function displayQuestion() {
    for (var a = 0; a < span.length; a++) {
        span[a].style.backgrond = 'none'; 
    }
    question.innerHTML = ` <p class="text-center">Q.${i + 1}</p> <div class="quest">${questionBank[i].question}</div> `
    option0.innerHTML =  ` <div class="choose"> ${questionBank[i].option[0]}</div>`;
    option1.innerHTML = `<div class="choose">${questionBank[i].option[1]}</div>`;
    option2.innerHTML = `<div class="choose">${questionBank[i].option[2]}</div>`;
    option3.innerHTML = `<div class="choose">${questionBank[i].option[3]}</div>`;
    statusbar.innerHTML = "Question" + '' + (i + 1) + '' + 'of' + '' + questionBank.length
}
//function to calculaate scores
function removeOptions(){
    remove.play()
    option3.innerHTML = `<div class="choose"></div>`;
    option2.innerHTML = `<div class="choose"></div>`;
    fifty.innerHTML = ` <img src="./extras/50-50-used.png" alt="">`
}


function callFriend(){
    // <a href="tel:"></a>
    window.location.href= "tel:"
    phone.innerHTML = ` <img src="./extras/phone-a-friend-used.png" alt="">`

}

function calScore(e) {
    if (e.innerHTML === questionBank[i].answer && score < questionBank.length) {
        score= score+1;
        document.getElementById(e.Id);
        e.innerHTML=  `<div width="50px height="50px" style="background-color:green;">work</div>`
        
    }
    else{
        document.getElementById(e.Id)
        e.innerHTML=  `<div width="50px height="50px" style="background-color:red;">work</div>`
        
    }
    setTimeout(nextQuestion, 300 );
}

// function to display next question
function nextQuestion(){
    if (i<questionBank.length-1){
        i=i+1;
        displayQuestion();
        checkAnswer.innerHTML= "er"
    }
    else{
        points.innerHTML=score+'/'+
        questionBank.length;
        quizContainer.style .display= 'none';
        scoreboard.style.display= 'block'

    }
}

// click events to the next button
next.addEventListener('click', nextQuestion);


// back to quiz button event

function backToQuiz(){
    location.href = "index.html";
}

// function to check answers

function checkAnswer(){
    var answeBank = document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answeBank.style.display ='block';
    scoreboard.style.display ='none';
    if(score < questionBank.length){

        list.innerHTML=`e no work`
    }else{
        for(var a =0; a<questionBank.length; a++){
            var list= document.createElement('li');
            list.innerHTML=questionBank[a].answer;
            answers.appendChild(list);
        }
    }
}

displayQuestion();
