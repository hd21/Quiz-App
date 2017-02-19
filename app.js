$(document).ready(function () {

// Questions and Answers
	var	data = [

	{
		question: "After turning down a promotion at her law firm, Rebecca decided to move from New York City to which city?",
		answers: [
			'a. East Covina, WA',
			'b. Kansas City, MO',
			'c. Miami, FL',
			'd. West Covina, CA',
			'e. Los Angeles, CA'
		],

		correctAnswerIndex: 3
	},

	{
		question: "What is the name of Rebecca's new workplace?",
		answers: [
			'a. Whitefeather and Associates',
			'b. Whitefeather and Whitefeather',
			'c. Nightfeather and Associates',
			'd. 7 Eleven',
			'e. Morgan and Morgan'
		],
		
		correctAnswerIndex: 0
	},

	{
		question: "Finish the Lyrics: I'm a good person, that's my thing. My nickname is _________________.",
		answers: [
			'a. Superior Amazing Super King',
			'b. Father Christmas Luther King',
			'c. Mother Theresa Luther King',
			'd. The Only Good Thing That Can Bring',
			'e. Sweetest Queen - I Mean King'
		],
		
		correctAnswerIndex: 2
	},

	{
		question: "Rebecca's true archnemesis is",
		answers: [
			'a. Rachel Marina',
			'b. Greg Serrano',
			'c. Grocery clerk with half an eyelid',
			'd. Audra Levine',
			'e. Valencia Perez'
		],
		
		correctAnswerIndex: 3
	},

	{
		question: "Although not explicitly mentioned, Rebecca's primary reason for moving to West Covina, California was because of",
		answers: [
			'a. an old colleague from Harvard',
			'b. a new job opportunity',
			'c. Josh Chan',
			'd. amazing weather',
			'e. Trent Maddock'
		],
		
		correctAnswerIndex: 2
	},

	{
		question: "Name this Song: Like, what if I stopped liking my mom? If it worked on guacamole, it could work on my mom!",
		answers: [
			'a. Maybe this Dream (sung by Paula Proctor)',
			'b. Thought Bubbles (sung by Josh Chan)',
			'c. I Have Friends (sung by Rebecca Bunch, etc.)',
			'd. Angry Mad (sung by Josh Chan)',
			'e. Having a Few People Over (sung by Darryl Whitefeather)'
		],
		
		correctAnswerIndex: 1
	},

	{
		question: "Where does Greg eventually leave to on Season 2?",
		answers: [
			'a. Harvard University',
			'b. University of California - Los Angeles',
			'c. Stanford University',
			'd. New York University',
			'e. Emory University'
		],
		
		correctAnswerIndex: 4
	},

	{
		question: "Finish the Lyrics: Don't think about it too hard, too, too hard. It's a  _____________.",
		answers: [
			"a. crazy, weird thing!",
			"b. dumb thing - can't stress about it now!",
			"c. wormhole. It's a Mobius strip!",
			"d. rabbit hole! Whoa!",
			"e. really strange thing!"
		],
		
		correctAnswerIndex: 2
	},

	{
		question: "Why did Josh decide to run from this wedding?",
		answers: [
			'a. He decided to become a priest',
			'b. He found out that Rebecca was cheating on him',
			'c. Cold feet from an early commitment',
			'd. He fell out of love',
			'e. He is indecisive'
		],
		
		correctAnswerIndex: 0
	},

	{
		question: "Who is the newest addition to Whitefeather and Associates?",
		answers: [
			'a. George Greg',
			'b. Michael McMillian',
			'c. Benjamin Siemon',
			'd. Nathaniel Plimpton III',
			'e. Sunil Odhav'
		],
		
		correctAnswerIndex: 3

	}
	];

// Misc Variables

var questionCounter = 0;
var totalQuestions = data.length;
var totalCorrect = 0;

// Show Questions Function
function showQuestion(){
	$('.question-number').text('Question ' + (questionCounter + 1) + ' of ' + totalQuestions);
	$('#question').text(data[questionCounter].question);
	$('#answers').empty();
	var totalAnswer = data[questionCounter].answers.length;
		for (var i = 0; i < totalAnswer; i++) {
			$('#answers').append("<input type = 'radio' class='choice' value =" + i + ">" + " " + data[questionCounter].answers[i] + "<br>");
		}
} 

// Start Quiz
	$('.start-button').click(function(){
		$('#intro').hide();
		$('#quiz').removeClass('hidden');
		showQuestion();
	});

// Quiz Questions

// Notes: Need to be able to select correct answer, find its value, and compare that value to the correctAnswerIndex.
// If submit button is clicked, it must check if value matches correct answer
// If value matches correctAnswerIndex, add ++ to var totalCorrect


$('#submit-answer').on('click', function(){
	event.preventDefault();

	var selectedAnswer = $("input[class=choice]:checked").val();
	var correctAnswer = data[questionCounter].correctAnswerIndex;

	if(selectedAnswer == correctAnswer){
		$('#correct-response').removeClass('hidden');
		$('#quiz').hide();
		totalCorrect++;
	}
	else {
		$('#incorrect-response').removeClass('hidden');
		$('#quiz').hide();
	}


// Showing Results
	if((questionCounter + 1) === totalQuestions) {
		if (totalCorrect < 3){
			$('#results').text('You only got ' + totalCorrect + ' out of ' + totalQuestions + ' questions right! That is pretty sad.');
		}
		else if (totalCorrect <= 7 && totalCorrect > 3){
			$('#results').text('You got ' + totalCorrect + ' out of ' + totalQuestions + ' questions right! Not bad, not bad at all.');
		}
		else if (totalCorrect <=10 && totalCorrect > 7){
			$('#results').text('You got ' + totalCorrect + ' out of ' + totalQuestions + ' questions right! That is too awesome! You rocked this quiz.');
		}

		$('#quiz').hide();
		$('#correct-response').hide();
		$('#incorrect-response').hide();
		$('#final').removeClass('hidden');

	}


});

// Continuing the Quiz after Comments

$('#correct-continue').on('click', function(){
	$('#correct-response').addClass('hidden');
	$('#quiz').show();

	questionCounter++;
	showQuestion();
});

$('#incorrect-continue').on('click', function(){
	$('#incorrect-response').addClass('hidden');
	$('#quiz').show();

	questionCounter++;
	showQuestion();

});

});

// Effects
$('button').hover(
	function(){
		$(this).addClass("hover");
	}, function(){
		$(this).removeClass("hover");
	}
	);

$('.start-over-btn').click(function(){
	location.reload();

});




	