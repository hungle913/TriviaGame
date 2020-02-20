$(document).ready(function(){

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

        $("#start_button").html("SUBMIT ANSWERS")










    });
  
  });

