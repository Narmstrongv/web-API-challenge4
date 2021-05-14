// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

//BEGIN TEST 1
// var quizContainer = document.getElementById('quiz');
// var resultsContainer = document.getElementById('results');
// var submitButton = document.getElementById('submit')

// function buildQuiz(){
//     //stores html output(??)
//     var output = [];
//     //each question
//     myQuestions.forEach(
//         (currentQuestion, questionNumber) => {
//             //stores answer list
//             var a = [];
//             //each answer
//             for(letter in currentQuestion.a){
//                 //adds an HTML radio button
//                 a.push(
//                     `<label>
//                         <input type="radio" name="question${questionNumber}" value="${letter}">
//                         ${letter} :
//                         ${currentQuestion.answers[letter]}
//                     </label>`
//                 );
//             }
//             //add this q & its a to output
//             output.push(
//                 `<div class="q"> ${currentQuestion.q} </div>
//                 <div class="a"> ${a.join('')} </div>`
//             );
//         }

//     );
//     //combine output list into 1 string of html & put it on page
//     quizContainer.innerHTML = output.join('');
// }

// function showResults(){}

// //displays the quiz
// buildQuiz();

// //on submit, show results
// submitButton.addEventListener('click', showResults);
//END TEST 1

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var myQuestions = [
    {
        q: "What is Javascript?",
        a: {
            a: "A programming language",
            b: "A foreign word",
            c: "Man, Idk, where even am I?",
            d: "An experimental weapon"
        },
        correctAnswer: "a"
    },
    {
        q: "Javscript came out in _____?",
        a: {
            a: "1930",
            b: "1950",
            c: "Seriously, where am I?",
            d: "1995"
        },
        correctAnswer: "d"
    },
    {
        q: "How do you make a new variable?",
        a: {
            a: "bar",
            b: "var",
            c: "And where is everyone?",
            d: "car"
        },
        correctAnswer: "b"
    }
];

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        //stores output & answer choices
        var output = [];
        var answers;

        //for each q
        for(var i=0; i<questions.length; i++){
            //reset list of answers
            answers = [];
            //each available answer to the question
            for(letter in questions[i].answers){
                //add html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '    
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            //add this q and its a's to output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
			    + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
        //combine output list into 1 string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }
    showQuestions(questions, quizContainer);

    function showResults(questions, quizContainer, resultsContainer){
        
	    // gather answer containers from our quiz
	    var answerContainers = quizContainer.querySelectorAll('.answers');
	
	    // keep track of user's answers
	    var userAnswer = '';
	    var numCorrect = 0;
	
	    // for each question...
	    for(var i=0; i<questions.length; i++){

		    // find selected answer
		    userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		    // if answer is correct
		    if(userAnswer===questions[i].correctAnswer){
			    // add to the number of correct answers
			    numCorrect++;
			
			    // color the answers green
			    answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		    }
	    }

	    // show number of correct answers out of total
	    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    //show questions
    showQuestions(questions,quizContainer);

    //upon user 'submit' click, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }
}
generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);























// var myQuestions = [
//     {
//         q: "What is Javascript?",
//         a: {
//             a: "A programming language",
//             b: "A foreign word",
//             c: "Man, Idk, where even am I?",
//             d: "An experimental weapon"
//         },
//         correctAnswer: "a"
//     },
//     {
//         q: "Javscript came out in _____?",
//         a: {
//             a: "1930",
//             b: "1950",
//             c: "Seriously, where am I?",
//             d: "1995"
//         },
//         correctAnswer: "d"
//     },
//     {
//         q: "How do you make a new variable?",
//         a: {
//             a: "bar",
//             b: "var",
//             c: "And where is everyone?",
//             d: "car"
//         },
//         correctAnswer: "b"
//     }
// ];