
    // I'm going to start by writing Q&A  //
   
   
    
      var questions =

    [
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
        choices: ["A gener operation", "Two songs mixed together", "Selects Elements based on other Elements.", "A new Reality show."],
        answer: 3
        },

    {

        question: "What is the .class Selector",
        choices: ["the teahers pet", "the team captain", "Admissions registration program", "Find elements with a specific class "],
        answer: 4
        },
{
        question: "What are events?",
        choices: ["A celebrity ball", "Going to a concert", "The Opera", "An event represents the precise moment when something happens. "],
        answer: 4
        }
  ]
        console.log("questions");
    
  

// Working on the Countdown Timer //

  var number = 30;
  
    
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
    
