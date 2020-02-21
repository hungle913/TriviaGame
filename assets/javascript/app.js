$(document).ready(function(){

    document.getElementById("submit_answers").style.visibility = 'hidden';

    $("#start_button").click(function() {

        var number = 300
        var intervalID;
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
            }
        }
    
        function stop() {
            clearInterval(intervalID);
        }
    
        run();
        $("#instruction").html("GOOD LUCK!")
        document.getElementById("start_button").style.visibility = 'hidden';
        document.getElementById("submit_answers").style.visibility = "visible";

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
        question: "What is Hockey played on",
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
        question1: "How many innings are in a Baseball game",
        answers: {
            a: "8 innings",
            b: "9 innings",
            c: "10 innings",
            d: "11 innings"
        },
        correctAnswer: "b"
        },
        {
        question1: "How many quarters are in a football game?",
        answers: {
            a: "1 quarter",
            b: "2 quarters",
            c: "3 quarters",
            d: "4 quarters"
        },
        correctAnswer: "d"
        },
        {
        question1: "How many NFL teams are there?",
        answers: {
            a: "28 teams",
            b: "30 teams",
            c: "32 teams",
            d: "34 teams"
        },
        correctAnswer: "c"
        },
        {
        question1: "How many MLB teams are there?",
        answers: {
            a: "30 teams",
            b: "32 teams",
            c: "34 teams",
            d: "36 teams"
        },
        correctAnswer: "a"
        },
        {
        question1: "How many NBA teams are there?",
        answers: {
            a: "28 teams",
            b: "30 teams",
            c: "32 teams",
            d: "34 teams"
        },
        correctAnswer: "b"
        },             
    ];

        //need a function to build the quiz

        //need to start the quiz right away

        //need function to submit and show the results of the quiz









    });
  
  });

