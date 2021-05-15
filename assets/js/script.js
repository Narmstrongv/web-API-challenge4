//Rules
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

//QUESTION LIST START
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
            c: "Where is everyone?",
            d: "car"
        },
        correctAnswer: "b"
    }
];
//QUESTION LIST END

const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
const quit_quiz = result_box.querySelector(".buttons .quit");
const next_btn = document.querySelector("footer .next_btn");
const continue_btn = info_box.querySelector(".buttons .restart");

let timeValue =  75;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter = 0;
let counterLine;
let widthValue = 0;

//this hides things
//document.getElementById('multi').style.display= "none";

//upon correct answer
//make box disappear
//then show next question
//correct answer etc

var submitAnswer = function() {
    var radios = document.getElementsByName('choice')
    var val = "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            val = radios[i].value;
            break;
        }
    }

    if (val == "") {
        alert('please select an answer');
    } else if (val == "language") {
        alert('Correct!');
    } else {
        alert('Wrong Answer');
    }
};

//startQuiz button (not needed?)

//continueQuiz button
next_btn.addEventListener('click', function(){
    //     var question = '';
    // for(var i = 0; i < myQuestions.length; i++) {
    //      question += (myQuestions[i].q + ' <br/>' + '<input type="radio">' + myQuestions[i].a);

    //     document.getElementById('questions').innerHTML = question;
    // }
    

    document.getElementById('questions').innerHTML = '<h1>'+ myQuestions[counter].q + '</h1> ';
    counter = counter + 1;
}) 


    
