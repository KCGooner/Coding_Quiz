
var startBtn = document.getElementById('start');

var submitBtn = document.getElementById('Submit');

var answerStorage = [];

var seconds = 70;

// var questionsNo = 0;

//click to start quiz
startBtn.addEventListener('click', startQuiz);
// startBtn.addEventListener('click', startTimer);

function startQuiz() {
    //empty out quiz intro
    $("#quizIntro").empty();
    displayQuiz(0);
    startTimer();
};

//generate questions
function displayQuiz(questionsNo) {
    console.log(questionsNo);

    // TODO: if no question end game
    if (questions.length === questionsNo) {
        stop();
    }


    var questionTitle = document.createElement("div")
    questionTitle.innerHTML = questions[questionsNo].title
    document.getElementById("quizContainer").appendChild(questionTitle);
    var answer = questions[questionsNo].answer
    var choices = questions[questionsNo].choices

    for (var i = 0; i < choices.length; i++) {
        var answerTitle = document.createElement("button")
        answerTitle.innerHTML = choices[i]
        answerTitle.value = choices[i]
        document.getElementById("quizContainer").appendChild(answerTitle);

        answerTitle.addEventListener("click", function (e) {

            console.log(e.target.value)
            console.log(answer)
            if (e.target.value === answer) {
                document.getElementById("quizContainer").innerHTML = "";
                displayQuiz(++questionsNo);
            }
        });
    };

};

//timer
function startTimer() {
    $seconds = document.querySelector('#countdown');
    (function countdown() {
        $seconds.textContent = "Time Left: " + seconds + (seconds == 1 ? '' : 's')
        if (seconds-- > 0) setTimeout(countdown, 750)
    })();
};












