

window.addEventListener("popstate", function(event){
  history.pushState(null, "", window.location.href);
});

/*const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoretext = document.getElementById("score");
const progressbarfull = document.getElementById("progressbarfull");
const loader = document.getElementById("loader");
const game = document.getElementById("game");
let currentQuestion = {};
let questionNo;
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];
*/
 let questions = [
    {
        question: "What is the meaning of social problems?",
        choice1: "Issues that affect a small group of people",
        choice2: "Issues that are universally accepted as harmful",
        choice3: "Conditions or behaviors that negatively affect a large number of people and are recognized as needing solutions",
        choice4: "Problems that only occur in developing countries",
        answer: "Conditions or behaviors that negatively affect a large number of people and are recognized as needing solutions",
        rationale: "Social problems are conditions or behaviors that have negative consequences for a significant portion of the population and are widely recognized as needing to be addressed."
    },
    {
        question: "Which of the following is NOT an approach to understanding social problems?",
        choice1: "Functionalist approach",
        choice2: "Conflict approach",
        choice3: "Symbolic interactionist approach",
        choice4: "Isolationist approach",
        answer: "Isolationist approach",
        rationale: "The isolationist approach is not a recognized sociological perspective for understanding social problems."
    },
    {
        question: "Which sociological theory emphasizes the role of power and inequality in understanding social problems?",
        choice1: "Functionalism",
        choice2: "Conflict theory",
        choice3: "Symbolic interactionism",
        choice4: "Feminist theory",
        answer: "Conflict theory",
        rationale: "Conflict theory focuses on how power dynamics and inequalities contribute to social problems."
    },
    {
        question: "Which type of social problem involves the illegal trade of humans for exploitation?",
        choice1: "Cybercrime",
        choice2: "Drug trafficking",
        choice3: "Human trafficking",
        choice4: "Electoral violence",
        answer: "Human trafficking",
        rationale: "Human trafficking specifically refers to the illegal trade of humans for purposes such as forced labor or sexual exploitation."
    },
    {
        question: "What is a common solution to reducing poverty?",
        choice1: "Increasing taxes on the poor",
        choice2: "Providing access to education and job training",
        choice3: "Reducing social welfare programs",
        choice4: "Encouraging urbanization",
        answer: "Providing access to education and job training",
        rationale: "Providing access to education and job training helps individuals gain skills and opportunities to escape poverty."
    },
    {
        question: "Which of the following is an example of a social problem caused by technological advancement?",
        choice1: "Poverty",
        choice2: "Cybercrime",
        choice3: "Unemployment",
        choice4: "Drug trafficking",
        answer: "Cybercrime",
        rationale: "Cybercrime is a social problem that has emerged due to the rise of technology and the internet."
    },
    {
        question: "Which sociological theory focuses on how individuals interpret and give meaning to social problems?",
        choice1: "Functionalism",
        choice2: "Conflict theory",
        choice3: "Symbolic interactionism",
        choice4: "Feminist theory",
        answer: "Symbolic interactionism",
        rationale: "Symbolic interactionism examines how individuals interpret and assign meaning to social issues through interactions."
    },
    {
        question: "What is a major cause of electoral violence?",
        choice1: "High voter turnout",
        choice2: "Political instability and competition",
        choice3: "Strong democratic institutions",
        choice4: "Equal distribution of resources",
        answer: "Political instability and competition",
        rationale: "Electoral violence often arises from political instability and intense competition for power."
    },
    {
        question: "Which of the following is a consequence of unemployment?",
        choice1: "Increased economic growth",
        choice2: "Higher rates of poverty and crime",
        choice3: "Improved mental health",
        choice4: "Reduced social inequality",
        answer: "Higher rates of poverty and crime",
        rationale: "Unemployment often leads to poverty and can increase crime rates due to lack of economic opportunities."
    },
    {
        question: "Which approach to social problems focuses on how institutions work together to maintain societal stability?",
        choice1: "Conflict approach",
        choice2: "Functionalist approach",
        choice3: "Symbolic interactionist approach",
        choice4: "Feminist approach",
        answer: "Functionalist approach",
        rationale: "The functionalist approach examines how different parts of society work together to maintain stability and order."
    },
    {
        question: "What is a key characteristic of drug trafficking as a social problem?",
        choice1: "It only affects rural areas",
        choice2: "It is a global issue with widespread consequences",
        choice3: "It has no connection to organized crime",
        choice4: "It is easily eradicated through legal measures",
        answer: "It is a global issue with widespread consequences",
        rationale: "Drug trafficking is a global issue that involves organized crime and has far-reaching social and economic impacts."
    },
    {
        question: "Which of the following is a solution to cybercrime?",
        choice1: "Reducing internet access",
        choice2: "Strengthening cybersecurity measures",
        choice3: "Encouraging anonymous online activities",
        choice4: "Ignoring digital privacy concerns",
        answer: "Strengthening cybersecurity measures",
        rationale: "Strengthening cybersecurity measures is a practical solution to combat cybercrime and protect individuals and organizations."
    },
    {
        question: "Which sociological theory highlights the role of gender in understanding social problems?",
        choice1: "Functionalism",
        choice2: "Conflict theory",
        choice3: "Symbolic interactionism",
        choice4: "Feminist theory",
        answer: "Feminist theory",
        rationale: "Feminist theory focuses on how gender inequalities contribute to social problems."
    },
    {
        question: "What is a common cause of poverty?",
        choice1: "High levels of education",
        choice2: "Lack of access to resources and opportunities",
        choice3: "Strong social welfare systems",
        choice4: "Low population growth",
        answer: "Lack of access to resources and opportunities",
        rationale: "Poverty is often caused by a lack of access to resources, education, and economic opportunities."
    },
    {
        question: "Which of the following is an example of a structural solution to social problems?",
        choice1: "Providing individual counseling",
        choice2: "Implementing policy changes to address inequality",
        choice3: "Encouraging personal responsibility",
        choice4: "Promoting charity events",
        answer:  "Implementing policy changes to address inequality",
        rationale: "Structural solutions involve systemic changes, such as policy reforms, to address the root causes of social problems."
    },
    {
        question: "Which type of social problem involves the use of violence to influence election outcomes?",
        choice1: "Cybercrime",
        choice2: "Drug trafficking",
        choice3: "Electoral violence",
        choice4: "Human trafficking",
        answer: "Electoral violence",
        rationale: "Electoral violence refers to the use of force or intimidation to influence the electoral process."
    },
    {
        question: "What is a key factor in addressing unemployment?",
        choice1: "Reducing access to education",
        choice2: "Creating job opportunities and skill development programs",
        choice3: "Increasing automation in industries",
        choice4: "Encouraging early retirement",
        answer: "Creating job opportunities and skill development programs",
        rationale: "Creating job opportunities and providing skill development programs are essential for reducing unemployment."
    },
    {
        question: "Which of the following is a consequence of human trafficking?",
        choice1: "Economic growth",
        choice2: "Violation of human rights",
        choice3: "Improved international relations",
        choice4: "Reduced crime rates",
        answer: "Violation of human rights",
        rationale: "Human trafficking violates the basic human rights of individuals, leading to exploitation and abuse."
    },
    {
        question: "Which approach to social problems emphasizes the importance of social change and activism?",
        choice1: "Functionalist approach",
        choice2: "Conflict approach",
        choice3: "Symbolic interactionist approach",
        choice4: "Feminist approach",
        answer: "Conflict approach",
        rationale: "The conflict approach advocates for social change and activism to address inequalities and injustices."
    },
    {
        question: "What is a major challenge in solving social problems?",
        choice1: "Lack of awareness",
        choice2: "Overabundance of resources",
        choice3: "Universal agreement on solutions",
        choice4: "Absence of government involvement",
        answer: "Lack of awareness",
        rationale: "A lack of awareness and understanding of social problems can hinder efforts to address them effectively."
    },
    {
        question: "Which of the following is an example of a cultural solution to social problems?",
        choice1: "Changing societal attitudes and norms",
        choice2: "Implementing stricter laws",
        choice3: "Increasing police presence",
        choice4: "Building more prisons",
        answer: "Changing societal attitudes and norms",
        rationale: "Cultural solutions involve changing societal attitudes, beliefs, and norms to address social problems."
    },
    {
        question: "Which sociological theory views social problems as a result of the breakdown of societal norms?",
        choice1: "Functionalism",
        choice2: "Conflict theory",
        choice3: "Symbolic interactionism",
        choice4: "Feminist theory",
        answer: "Functionalism",
        rationale: "Functionalism sees social problems as arising from the breakdown of societal norms and institutions."
    },
    {
        question: "What is a common characteristic of social problems?",
        choice1: "They affect only individuals",
        choice2: "They are easily solved without collective effort",
        choice3: "They have widespread societal impact",
        choice4: "They are unrelated to economic factors",
        answer: "They have widespread societal impact",
        rationale: "Social problems typically have a broad impact on society and require collective efforts to address."
    },
    {
        question: "Which of the following is a solution to electoral violence?",
        choice1: "Encouraging voter suppression",
        choice2: "Promoting free and fair elections",
        choice3: "Increasing political polarization",
        choice4: "Limiting access to information",
        answer: "Promoting free and fair elections",
        rationale: "Promoting free and fair elections helps reduce electoral violence by ensuring transparency and accountability."
    },
    {
        question: "Which type of social problem is characterized by the illegal distribution of controlled substances?",
        choice1: "Cybercrime",
        choice2: "Drug trafficking",
        choice3: "Human trafficking",
        choice4: "Poverty",
        answer: "Drug trafficking",
        rationale: "Drug trafficking involves the illegal production, distribution, and sale of controlled substances."
    },
    {
        question: "What is a key step in addressing social problems?",
        choice1: "Ignoring the issues",
        choice2: "Identifying root causes",
        choice3: "Blaming individuals",
        choice4: "Avoiding collective action",
        answer: "Identifying root causes",
        rationale: "Identifying the root causes of social problems is essential for developing effective solutions."
    },
    {
        question: "Which of the following is an example of a social problem related to technology?",
        choice1: "Poverty",
        choice2: "Unemployment",
        choice3: "Cyberbullying",
        choice4: "Human trafficking",
        answer: "Cyberbullying",
        rationale: "Cyberbullying is a social problem that has emerged with the rise of digital communication technologies."
    },
    {
        question: "Which sociological theory focuses on the role of communication and interaction in shaping social problems?",
        choice1: "Functionalism",
        choice2: "Conflict theory",
        choice3: "Symbolic interactionism",
        choice4: "Feminist theory",
        answer: "Symbolic interactionism",
        rationale: "Symbolic interactionism emphasizes how communication and interaction influence the perception and construction of social problems."
    },
    {
        question: "What is a major consequence of poverty?",
        choice1: "Improved health outcomes",
        choice2: "Increased access to education",
        choice3: "Limited access to basic needs",
        choice4: "Reduced social inequality",
        answer: "Limited access to basic needs",
        rationale: "Poverty often leads to limited access to basic needs such as food, shelter, and healthcare."
    },
    {
        question: "Which of the following is a solution to human trafficking?",
        choice1: "Increasing demand for cheap labor",
        choice2: "Strengthening international cooperation and laws",
        choice3: "Reducing awareness campaigns",
        choice4: "Ignoring the issue",
        answer: "Strengthening international cooperation and laws",
        rationale: "Strengthening international cooperation and enforcing laws are critical steps in combating human trafficking."
    }
];
    
























/*const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 4;

function startGame(){
  questionCounter = 0;
  score = 0;
  //using spread operators to spread the contents of the array as shown in line 52
  availableQuestions = [...questions];
  getNewQuestion();
  startTestTimer();
}
function getNewQuestion(){
  if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
    //setSCore and transfer to end.html
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("end.html");
  }
  questionCounter++;
  progressText.innerHTML = questionCounter + "/"+ MAX_QUESTIONS;
  //Update the progress bar
  let progress_percent = questionCounter / MAX_QUESTIONS * 100;
  progressbarfull.style.width = progress_percent+"%";
  const questionIndex = Math.floor(Math.random()* availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerHTML = currentQuestion.question;
  
  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerHTML = currentQuestion['choice' + number];
  });
  
  availableQuestions.splice(questionIndex,1);
  
  acceptingAnswers = true;
}

choices.forEach(choice => {
  choice.addEventListener("click",e => {
    if (!acceptingAnswers) return;
    
    acceptingAnswers = false;
    const selectedChoice = e.target
    const selectedAnswer = selectedChoice.dataset["number"];
    const classToApply = selectedAnswer == currentQuestion.answer? "correct": "incorrect";
    
    selectedChoice.parentElement.classList.add(classToApply);
    if(classToApply == "correct"){
      score+=10;
    }
    scoretext.innerHTML = score;
    setTimeout(remove_next, 1000);
    function remove_next(){
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }
  });
});

let durationInMinutes = 1
let timeInSeconds = durationInMinutes * 60;
const timerDisplay = document.getElementById("timer");

function startTestTimer(){
  const timerInterval = setInterval( () => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    
    const formattedTime = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    timerDisplay.innerHTML = formattedTime;
    
    if(timeInSeconds <= 0){
      clearInterval(timerInterval);
      return window.location.assign("end.html");
    }else{
      timeInSeconds--;
    }
    
  },1000);
}
setTimeout(delay, 2000);
function delay(){
  game.classList.remove("hidden");
  loader.style.display = "none";
  startGame();
}
*/



/*
Cretaing folders for question storage.
let questionContainer = document.getElementById("questionCont")

let firstBtn = document.getElementById("firstBtn");
let secondBtn = document.getElementById("css 303");
let thirdBtn = document.getElementById("css 305");
let fourthBtn = document.getElementById("css 307");
let fifthBtn = document.getElementById("css 309");
let sixthBtn = document.getElementById("css 311");
let seventhBtn = document.getElementById("css 313");
let eighthBtn = document.getElementById("css 315");

firstBtn.addEventListener("click", function(){
  questionContainer.style.display = "block";
});

*/
let text = "";
let questionNo = 0;
const questionBox = document.getElementById("questionBox");
for (let i=0; i< questions.length; i++){
  questionNo++;
  text+= questionNo+"."+" "+questions[i].question+'<br>'+"Answer:"+" "+questions[i].answer+'<br>'+questions[i].rationale+'<br>'+'<br>';
}

questionBox.innerHTML = text;
