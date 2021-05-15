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


    
//     //quiz questions summoned
//     quiz_box.classList.add("activeQuiz");
//     showQuestions(0);
//     queCounter(1);
//     startTimer(75);
//     startTimerLine(0);
// }

//nextQue button

    // if(que_count < questions.length - 1){ 
    //     que_count++; 
    //     que_numb++; 
    //     showQuetions(que_count); //calling showQestions function
    //     queCounter(que_numb); 
    //     clearInterval(counter); 
    //     clearInterval(counterLine); 
    //     startTimer(timeValue); 
    //     startTimerLine(widthValue);
    //     timeText.textContent = "Time Left"; //change the timeText to Time Left
    //     next_btn.classList.remove("show"); //hide the next button
    // }else{
    //     clearInterval(counter); //clear counter
    //     clearInterval(counterLine); //clear counterLine
    //     showResult(); //calling showResult function
    // }
// }

//quitQuiz button
// quit_quiz.onclick = ()=>{
//     window.location.reload();
// }

//INSERT QUESTIONS

//results func
function showResult(){
    info_box.classList.remove("activeInfo"); 
    quiz_box.classList.remove("activeQuiz"); 
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>and congrats! , You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore > 1){ // if user scored more than 1
        let scoreTag = '<span>and nice , You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>and sorry , You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
            let correcAns = questions[que_count].answer; //getting correct answer from array
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn.classList.add("show"); //show the next button if user selected any option
        }
    }
}

//question counter func
function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}

