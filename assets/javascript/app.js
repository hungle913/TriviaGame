$(document).ready(function(){

    document.getElementById("submit_answers").style.visibility = 'hidden';

    var intervalID;
    function stop() {
       clearInterval(intervalID);
    }
    

    $("#start_button").click(function() {

        var number = 150

        $("#start_button").on("click", run);
        
        function run() {
            clearInterval(intervalID);
            intervalID = setInterval(decrement, 1000)
        }
        function decrement() {
            number--;
            $("#timer").html("TIME REMAINING ON QUIZ: " + number );
                if (number === 0) {
            stop()
            alert("Time Up!")
            showResults();
            }
        }
    

    
        run();
        $("#instruction").html("GOOD LUCK!")
        document.getElementById("start_button").style.visibility = 'hidden';
        document.getElementById("submit_answers").style.visibility = "visible";


       //need a function to build the quiz

       function startQuiz(){
        var output = [];
        myQuestions.forEach(
            (currentQuestion, questionNumber) => {
             var answers = [];
             for(letter in currentQuestion.answers){
                 answers.push(
                     `<label>
                     <input type="radio" name="question${questionNumber}" value="${letter}">
                     ${letter} : 
                     ${currentQuestion.answers[letter]}
                     </label>`
                 );
             }
             output.push(
                 `<div class="question"> ${currentQuestion.question}</div><br>
                 <div class="answers"> ${answers.join('')}</div><br><br>`
             );
        }
        );
        questionContainer.innerHTML = output.join('');
    }

        //need function to submit and show the results of the quiz

        function showResults(){
            var answerContainers = questionContainer.querySelectorAll(".answers");
            let numCorrect = 0
            myQuestions.forEach((currentQuestion, questionNumber) => {
                var answerContainer = answerContainers[questionNumber];
                var selector = `input[name=question${questionNumber}]:checked`;
                var userAnswer = (answerContainer.querySelector(selector)||{}).value;
                    if(userAnswer === currentQuestion.correctAnswer){
                        numCorrect++;
                        answerContainers[questionNumber].style.color = "green";
                    }
                    else{
                        answerContainers[questionNumber].style.color = "red";
                }
            });
            resultsContainer.innerHTML = `<br>${numCorrect} out of ${myQuestions.length}`;
            stop();
        }

        //need to reference questions, results, and submit ID's for later use
        var questionContainer = document.getElementById("questions");
        var resultsContainer = document.getElementById("results");
        var submitButton = document.getElementById("submit_answers");

        //create variable of array of questions. 

        var myQuestions = [
        {
        question: "How long is a football field?",
        answers: {
            a: "100 yards",
            b: "100 feet",
            c: "1000 yards",
            d: "1000 feet"
        },
        correctAnswer: "a"
        },
        {
        question: "What is Hockey played on?",
        answers: {
            a: "Dirt",
            b: "Grass",
            c: "Ice",
            d: "Cement"
        },
        correctAnswer: "c"
        },
        {
        question: "How many quarters are in a basketball game?",
        answers: {
            a: "1 quarter",
            b: "2 quarters",
            c: "3 quarters",
            d: "4 quarters"
        },
        correctAnswer: "d"
        },
        {
        question: "How many periods are in a Soccer game?",
        answers: {
            a: "1 period",
            b: "2 periods",
            c: "3 periods",
            d: "4 periods"
        },
        correctAnswer: "b"
        },
        {
        question: "How many periods are in a Hockey game?",
        answers: {
            a: "1 period",
            b: "2 periods",
            c: "3 periods",
            d: "4 periods"
        },
        correctAnswer: "c"
        },
        {
        question: "How many innings are in a Baseball game?",
        answers: {
            a: "8 innings",
            b: "9 innings",
            c: "10 innings",
            d: "11 innings"
        },
        correctAnswer: "b"
        },
        {
        question: "How many quarters are in a football game?",
        answers: {
            a: "1 quarter",
            b: "2 quarters",
            c: "3 quarters",
            d: "4 quarters"
        },
        correctAnswer: "d"
        },
        {
        question: "How many NFL teams are there?",
        answers: {
            a: "28 teams",
            b: "30 teams",
            c: "32 teams",
            d: "34 teams"
        },
        correctAnswer: "c"
        },
        {
        question: "How many MLB teams are there?",
        answers: {
            a: "30 teams",
            b: "32 teams",
            c: "34 teams",
            d: "36 teams"
        },
        correctAnswer: "a"
        },
        {
        question: "How many NBA teams are there?",
        answers: {
            a: "28 teams",
            b: "30 teams",
            c: "32 teams",
            d: "34 teams"
        },
        correctAnswer: "b"
        },             
    ];


        //need to start the quiz right away

        startQuiz();


        submitButton.addEventListener('click', showResults);






    });
  
  });

