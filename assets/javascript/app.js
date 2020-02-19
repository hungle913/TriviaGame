$(document).ready(function(){

    // Need load function for game to start

    $("#start_button").click(function() {

        $("#start_button").html("SUBMIT ANSWERS")

        function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

            function showQuestions(questions, quizContainer){
                // code will go here
            }
        
            function showResults(questions, quizContainer, resultsContainer){
                // code will go here
            }
        
            // show the questions
            showQuestions(questions, quizContainer);
        
            // when user clicks submit, show results
            submitButton.onclick = function(){
                showResults(questions, quizContainer, resultsContainer);
            }
        }



    });
  
  });

