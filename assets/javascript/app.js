
// I'm going to start by writing Q&A  //

$( document ).ready()

var quiz = [
    {
      question: "What is jQuery?",
      choices: ["a chewing gum", "a search engine", "a travel agency", " A JavaScript library"],
      answer: 4
    },

    {
      question: "What symbol is used to access jQuery?",
      choices: ["$", "&", "*", "The symbol formally known as Prince"],
      answer: 1
    },

    {
      question: "What is Traversing?",
      choices: ["A gender operation", "Two songs mixed together", "Selects Elements based on other Elements.", "A new Reality show."],
      answer: 3
    },

    {

      question: "What is the .class Selector",
      choices: ["the teahers pet", "the team captain", "Admissions registration program", "Find elements with a specific class "],
      answer: 4
    },
    {
      question: "What are events?",
      choices: [ "A celebrity ball", "Going to a concert", "The Opera", "An event represents the precise moment when something happens. "],
      answer: 4
    }
];
$(document).ready(function(){
  $(":button").css("background-color", "red");
});



var arrayNum = 0;


$("<h1>").addClass("theQuestion").html(quiz[arrayNum].question).appendTo("body")

for (i = 0; i < quiz.length; i++){

  
  $("<h3>").addClass("theAnswer").html(quiz[arrayNum].choices[i]).appendTo("body")
  // $("#quiz").append('<h1>'+quiz[0].choices[i]+'</h1>');
  // $("#quiz").append(quiz[0].choices[i]);
}

$(document).ready(function(){ 

  $("h1").hide(5000);
});



  
  


/*// Working on the Countdown Timer //

var number = 30;

console.log(questions[2].choices);


//Trying to set it so the start button starts the timer//

function run() {
  intervalId = setInterval(decrement, 1000);
}

function decrement() {

  number--;

  $("#Count_Down").html("<h2>" + number + "</h2>");


  if (number === 0) {

    stop();

    alert("Out of Time!");
  }
}

function stop() {

  clearInterval(intervalId);
}

run();

// So far so good timer-wise.  Stil more to do. //

// var quiz = $('#quiz');
function myTest() {


  $("#quiz").html(questions[2].choices[1]);

myTest();
  
}
*/
