const quizDB = [
{
  question: "Q1: What does HTML stand for?",
  a: "Hyper Text Preprocessor",
  b: "Hyper Text Markup Language",
  c: "Hyper Text Multiple Language",
  d: "Hyper Tool Multi Language",
  ans: "ans2"
},
{
  question: "Q2: Which of the following is not a HTML5 tag?",
  a: "<track>",
  b: "<video>",
  c: "<slider>",
  d: "<source>",
  ans: "ans3"
},
{
  question: "Q3: How do we write comments in HTML?",
  a: "</…….>",
  b: " <!……>",
  c: "</……/>",
  d: "<…….!>",
  ans: "ans2"
},
{
  question: "Q4: Which element is used for or styling HTML5 layout?",
  a: "CSS",
  b: "jQuery",
  c: "JavaScript",
  d: "PHP",
  ans: "ans1"
},
{
  question: "Q5: The full form of CSS is:",
  a: "Cascading Style Sheets",
  b: "Coloured Special Sheets",
  c: "Color and Style Sheets",
  d: "None of the Above",
  ans: "ans1"
},
{
  question: "Q6: How can we change the text color of an element?",
  a: "background-color",
  b: "color",
  c: "Both A and B",
  d: "None of the above",
  ans: "ans2"
},
{
  question: "Q7: In how many ways can CSS be written in?",
  a: "1",
  b: "2",
  c: "3",
  d: "4",
  ans: "ans3"
},
{
  question: "Q8: Which HTML tag is used to declare internal CSS?",
  a: "<style>",
  b: "<link>",
  c: "<script>",
  d: "None of the above",
  ans: "ans1"
},
{
  question: "Q9: Which one of the following is the correct way for calling the JavaScript code?",
  a: "Preprocessor",
  b: "Triggering Event",
  c: "RMI",
  d: "Function/Method",
  ans: "ans4"
},
{
  question: "Q10: Which of the following number object function returns the value of the number?",
  a: "toString()",
  b: "valueOf()",
  c: "toLocalString()",
  d: "toPrecision()",
  ans: "ans2"
},
{
  question: "Q11: Which character is used to represent when a tag is closed in HTML?",
  a: "#",
  b: "!",
  c: "/",
  d: "?",
  ans: "ans3"
},
{
  question: "Q12:  Among the following, which is the HTML paragraph tag??",
  a: "<p>",
  b: "<pre>",
  c: "<hr>",
  d: "<a>",
  ans: "ans1"
},
];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');
let questionCount = 0;
let score = 0;
const loadQuestion = () => {
  const questionList = quizDB[questionCount];

 question.innerText = questionList.question;

 option1.innerText = questionList.a;
 option2.innerText = questionList.b;
 option3.innerText = questionList.c;
 option4.innerText = questionList.d;
}
loadQuestion();

const getCheckAnswer = () => {
  let answer;

  answers.forEach((curAnsElem) => {
    if(curAnsElem.checked){
      answer = curAnsElem.id;
  }
});
  return answer;
};
const deselectAll = () => {
  answers.forEach((curAnsElem) => curAnsElem.checked = false);
}
submit.addEventListener('click', () => {
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);
  if(checkedAnswer === quizDB[questionCount].ans){
    score++;
  };
   
   questionCount++;
   deselectAll();
  if(questionCount < quizDB.length){
    loadQuestion();
  }else{
     showScore.innerHTML = `
         <h3>You scored ${score}/${quizDB.length} </h3>
         <button class="btn" onclick="location.reload()">Play Again</button>
        `;
        showScore.classList.remove('scoreArea');
  }
});
// count down
var timeleft = 60;
var downloadTimer = setInterval (function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
  if (timeleft==-1) {
    showScore.innerHTML = `
            <h3>You scored ${score}/${quizDB.length} </h3>
            <button class="btn" onclick="location.reload()">Play Again </button>
        `;
        showScore.classList.remove('scoreArea');
}

}, 1000);
  





