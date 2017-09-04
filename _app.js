// I'm going to start by writing Q&A  //


// These are my questions that I want to come up on the page //
/ My questions and answers
var quiz = [
  {
    question: "What is jQuery?",
    choices: [
      "A chewing gum",
      "A search engine",
      "A travel agency",
      "A JavaScript library"
    ],
    answer: 3
    },

  {
    question: "What symbol is used to access jQuery?",
    choices: [
      "$",
      "&",
      "*",
      "The symbol formally known as Prince"
    ],
    answer: 0
  },

  {
    question: "What is Traversing?",
    choices: [
      "A gender operation",
      "Two songs mixed together",
      "Selects Elements based on other Elements",
      "A new Reality show"
    ],
    answer: 2
  },
  
  {
    question: "What is the .class Selector?",
    choices: [
      "the teahers pet",
      "the team captain",
      "Admissions registration program",
      "Find elements with a specific class"
    ],
    answer: 3
  },
  
  {
    question: "What are events?",
    choices: [
      "A celebrity ball",
      "Going to a concert",
      "The Opera",
      "An event represents the precise moment when something happens"
    ],
    answer: 3
  }
];


// Function to turn my array into HTML
function formatArray(array) {
  
    var html = "";
    for (var q in array) { 
    console.log(array[q]);
  }
  
}

// Command to format the quiz array
formatArray(quiz);


  

// I need a start button with and onclick event to start timer & fist q //


  //$(document).ready(function(){
  //$("").onclick("background-color", "red");
}//);


 //$("#btn1").on("click"), function() {
  //  $("#gifmain").slideToggle(200); 
 }

  //(function begin (){
    // $("theQuestion").fadeIn()


  

// Here I will make a countodown that start when the stat button is hit //

window.onload = function() {
  
  }

  
  //var number = 30;
  
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

 


// Here is where I will pull each qquestion from my array  & write to page//

function questions (array) {
  
    var html ="";
    for (var q in array) { 
      console.log(q);
  }
  
  questions(quiz);


 var arrayNum = 0;


$("<h1>").addClass("theQuestion").html(quiz[arrayNum].question).appendTo("body")

for (i = 0; i < quiz.length; i++){

  
  $("<h3>").addClass("theAnswer").html(quiz[arrayNum].choices[i]).appendTo("body")
  // $("#quiz").append('<h1>'+quiz[0].choices[i]+'</h1>');
  // $("#quiz").append(quiz[0].choices[i]);
}


  
$(document).ready(function(){ 

  $("h1").hide(2000).delay(1000).slideDown(1000);
});



  
  



// So far so good timer-wise.  Stil more to do. //

// var quiz = $('#quiz');
//function myTest() {


  //$("#quiz").html(questions[2].choices[1]);

//myTest();
  
}