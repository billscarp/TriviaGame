// My questions and answers
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