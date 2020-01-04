
// create variables to hold value information
var wins = 0;
var losses = 0;
var playerPoint = 0;
var targetPoint = 0;
var greenValue = 0;
var redValue = 0;
var yellowValue = 0;
var blueValue = 0;

var music = new Audio();
music.src = "../music/loz_music.mp3";
music.play();
// $("#numShown").text("green value: " + greenValue);

$(document).ready(function () {


    function run() {
        greenValue = randomNumber(12, 1);
        redValue = randomNumber(12, 1);
        yellowValue = randomNumber(12, 1);
        blueValue = randomNumber(12, 1);
        playerPoint = 0;
        targetPoint = randomNumber(120, 20);
        $("#targetNum").text(targetPoint);
        $("#userNum").text(playerPoint);
        $("#loss").text(losses);
        $("#win").text(wins);
        console.log(greenValue);
        console.log(blueValue);
        console.log(redValue);
        console.log(yellowValue);

        console.log(targetPoint);
        console.log(playerPoint);
        console.log(wins, losses);

    }

    run()

    // create number randomizer to give crystals their value
    function randomNumber(max, min) {
        var returnNumber;
        returnNumber = Math.floor(Math.random() * (max - min) + min);
        return returnNumber;
    }

    // console.log(cherub);

    $("#greenRupee").on("click", function () {
        if (playerPoint === targetPoint) {
            wins++;
            $("#win").text(wins);
            run();
        }
        if (playerPoint > targetPoint) {
            losses++;
            $("#loss").text(losses);
            run();
        } else {
            playerPoint = playerPoint + greenValue;
            $("#userNum").text(playerPoint);
        }
    });

    $("#yellowRupee").on("click", function () {
        if (playerPoint === targetPoint) {
            wins++;
            $("#win").text(wins);
            run();
        }
        if (playerPoint > targetPoint) {
            losses++;
            $("#loss").text(losses);
            run();
        } else {
            playerPoint = playerPoint + yellowValue;
            $("#userNum").text(playerPoint);
        }
    });

    $("#redRupee").on("click", function () {
        if (playerPoint === targetPoint) {
            wins++;
            $("#win").text(wins);
            run();
        }
        if (playerPoint > targetPoint) {
            losses++;
            $("#loss").text(losses);
            run();
        } else {
            playerPoint = playerPoint + redValue;
            $("#userNum").text(playerPoint);
        }
    });

    $("#blueRupee").on("click", function () {
        if (playerPoint === targetPoint) {
            wins++;
            $("#win").text(wins);
            run();
        }
        if (playerPoint > targetPoint) {
            losses++;
            $("#loss").text(losses);
            run();
        } else {
            playerPoint = playerPoint + blueValue;
            $("#userNum").text(playerPoint);
        }
    });



});