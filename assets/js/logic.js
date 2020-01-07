var startBtn = document.getElementById('start');

var submitBtn = document.getElementById('Submit');

var answerStorage = [];

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

   
    if (questions.length === questionsNo) {
        stop();


        //creates submit button 
        var submitButton = document.createElement("button")

      

        submitButton.innerHTML = "Submit Results"
        document.getElementById('quizContainer').appendChild(submitButton);
        submitButton.style.backgroundColor = "green"
        submitButton.style.height = "150px"
        submitButton.style.width = "250px"
    };


    var questionTitle = document.createElement("div")
    questionTitle.innerHTML = questions[questionsNo].title
    document.getElementById("quizContainer").appendChild(questionTitle);

    questionTitle.style.fontSize = "30px"

    var answer = questions[questionsNo].answer
    var choices = questions[questionsNo].choices

    for (var i = 0; i < choices.length; i++) {
        var answerTitle = document.createElement("button")
        answerTitle.innerHTML = choices[i]
        answerTitle.value = choices[i]

        answerTitle.style.backgroundColor = "gray"
        answerTitle.style.height = "50px"
        answerTitle.style.width = "150px"
        answerTitle.style.margin = "10px"

        document.getElementById("quizContainer").appendChild(answerTitle);

        answerTitle.addEventListener("click", function (e) {

            console.log(e.target.value)
            console.log(answer)
            if (e.target.value === answer) {

                // clear div
                document.getElementById("quizContainer").innerHTML = "";

                displayQuiz(++questionsNo);
            };
        });
    };
};


// timer
function startTimer() {
     $seconds = document.querySelector('#countdown');
    (function countdown() {
        $seconds.textContent = "Time Left: " + seconds + (seconds == 1 ? '' : 's')
        if (seconds-- > 0) setTimeout(countdown, 750)
    })();
};


var seconds = 75;












