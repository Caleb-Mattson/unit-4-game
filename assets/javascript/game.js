// $(document).ready(function () {

    // create variables to hold value information
    var crystalValue = [];
    var playerPoint = 0;
    var targetPoint = '';

    // create number randomizer to give crystals their value
    function randomNumber(max, min){
        var returnNumber;
        returnNumber = Math.floor(Math.random() * (max-min) + min)
       return returnNumber;    
       }

       $("clickMe").on("click", function(){
        randomNumber(12, 1);
        console.log(returnNumber);
       });


// });