var startBtn = document.getElementById('start');

var submitBtn = document.getElementById('Submit');

var currentQuestion = 0;
var questionsNo = 0;

//click to start quiz
startBtn.addEventListener('click', startQuiz);
startBtn.addEventListener('click', startTimer);


function startQuiz() {
    displayQuiz(questionsNo);
}
//generate questions
function displayQuiz(questionsNo) {
    console.log(questions[questionsNo]);
    questions[questionsNo].title, questions[questionsNo].choices;

    var questionTitle = document.createElement("div")
    questionTitle.innerHTML = questions[questionsNo].title
    document.getElementById("quizContainer").appendChild(questionTitle);

    var choices = questions[questionsNo].choices
    for (var i = 0; i < choices.length; i++) {

        var answerTitle = document.createElement("div")
        answerTitle.innerHTML = choices[i]
        document.getElementById("quizContainer").appendChild(answerTitle);
    };
    questionsNo++;

};

//timer
function startTimer() {
    var seconds = 70, $seconds = document.querySelector('#countdown');
    (function countdown() {
        $seconds.textContent = "time left: " + seconds + (seconds == 1 ? '' : 's')
        if (seconds-- > 0) setTimeout(countdown, 750)
    })();
};









