var questions = ['Q. Which videogame holds the record for having the highest budget ever to produce?', 
'Q. What is the name of the racing series that is a spinoff of "Super Mario Brothers"?', 
'Q. What does Mario jump on when he completes a level?', 
'Q. The original designer behind the game "Tetris" is from which nation?', 
'Q. The most-popular American football videogame franchise is named after which individual?', 
'Q. Which item made Mario invincible in "Super Mario Bros."?', 
'Q. What is the date setting of the original "Call of Duty"?', 
'Q. What is the main character of Metal Gear Solid 2?', 
'Q. Who are the original creators of Rachet & Clank?', 
'Q. What was the name of the company that created “The Last of Us”?'];

var wrongAnswers = ["A. Grand Theft Auto V", 
"A. Mario Kart", 
"A. A flag pole", 
"A. Russia", 
"A. John Madden", 
"A. Starman", 
"A. World War II", 
"A. Raiden", 
"A. Insomniac Games", 
"A. Naughty Dog"];                 


var questionMap = new Map([
['Q. Which videogame holds the record for having the highest budget ever to produce?',
    'A. Grand Theft Auto V'],
['Q. What is the name of the racing series that is a spinoff of "Super Mario Brothers"?',
    'A. Mario Kart'],
['Q. What does Mario jump on when he completes a level?',
    "A. A flag pole"],
['Q. The original designer behind the game "Tetris" is from which nation?',
    'A. Russia'],
['Q. The most-popular American football videogame franchise is named after which individual?',
    'A. John Madden'],
['Q. Which item made Mario invincible in "Super Mario Bros."?',
    'A. Starman'],
['Q. What is the date setting of the original "Call of Duty"?',
    'A. World War II'],
['Q. What is the main character of Metal Gear Solid 2?', 
    'A. Raiden'],
['Q. Who are the original creators of Rachet & Clank?',
    'A. Insomniac Games'],
['c',
    'A. Naughty Dog']]); 


     
     
     





// var intervalId;
// var clockRunning = false;
var time = 60;
// console.log(questionMap);     
// console.log(questionMap.size); 
// console.log(Math.floor(Math.random() * questionMap.size)); <- generates 0 - 9 random number


function initializeTriviaGame() {
    // start timer here
    // start appending questions 
    $("#start-btn").remove();
    
    // 카운트다운 하는 펑션 만들고 부르기
    setInterval(countDown, 1000);

    setTimeout(function() {
        // 60초가 지났을떄 끝내는 펑션 만들고 부르기
    }, 60000);



    // 답 리스트랑 done 만들기
    for(var i = 0; i < questions.length; i++) {
        var questionP = $("<p>");
        questionP.attr("id", "eachQuestion");
        questionP.text(questions[i]);
        $("#questions").append(questionP);

        for(var j = 0; j < wrongAnswers.length; j++) {
            var answerBtn = $("<button>");
            answerBtn.attr("value", wrongAnswers[j]);
            answerBtn.text(wrongAnswers[j]);
            $("#questions").append(answerBtn);
        }
    }

    // Generating random indices for the trivia questions
    /* var usedIndices = [];
    for(var i = 0; i < questionMap.size; i++) {
        var randNum = Math.floor(Math.random() * questionMap.size);    
        while(usedIndices.includes(randNum)) {
            randNum = Math.floor(Math.random() * questionMap.size);
        }
        usedIndices.push(randNum);
    }
    console.log(usedIndices); */
    
} 

function countDown() {
    time--;
    var currentTime = timeConverter(time);
    $("#display").text(currentTime);
}


function timeConverter(t) {

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    if (minutes === 0) {
      minutes = "00";
    }
  
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    return minutes + ":" + seconds;
}

