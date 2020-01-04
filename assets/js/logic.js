var startBtn = document.getElementById('start');

var submitBtn = document.getElementById('Submit');

var currentQuestion = 0;

startBtn.addEventListener('click', startQuiz);

function quizQuestion(title, choices, answer) {
    this.title = title;
    this.choices = choices;
    this.answer = answer;
    console.log();
}

function startQuiz(questions) {
    
};



