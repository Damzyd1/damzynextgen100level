

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
        question: "What is the normative basis of society?",
        choice1: "A set of rules and expectations that guide behavior",
        choice2: "A system of economic exchange",
        choice3: "A collection of individual preferences",
        choice4: "A historical record of events",
        answer: "A set of rules and expectations that guide behavior",
        rationale: "The normative basis of society refers to the shared rules and expectations that guide behavior and maintain social order."
    },
    {
        question: "Which of the following is a primary agent of socialization?",
        choice1: "Media",
        choice2: "Family",
        choice3: "Government",
        choice4: "Economy",
        answer: "Family",
        rationale: "Family is considered the primary agent of socialization as it is the first and most influential source of social norms and values."
    },
    {
        question: "What is social control?",
        choice1: "The regulation of individual behavior by the government",
        choice2: "The process by which society influences individuals to conform to norms",
        choice3: "The enforcement of economic policies",
        choice4: "The study of deviant behavior",
        answer: "The process by which society influences individuals to conform to norms",
        rationale: "Social control refers to the mechanisms, strategies, and institutions that societies use to ensure individuals conform to norms."
    },
    {
        question: "Which of the following is an example of deviant behavior?",
        choice1: "Paying taxes",
        choice2: "Stealing",
        choice3: "Voting in elections",
        choice4: "Attending school",
        answer: "Stealing",
        rationale: "Deviant behavior refers to actions that violate social norms, such as stealing."
    },
    {
        question: "What is the social construction of deviance?",
        choice1: "The idea that deviance is biologically determined",
        choice2: "The idea that deviance is defined by societal norms and values",
        choice3: "The idea that deviance is universal across cultures",
        choice4: "The idea that deviance is unrelated to social context",
        answer: "The idea that deviance is defined by societal norms and values",
        rationale: "The social construction of deviance refers to the idea that deviance is defined by societal norms and values, which vary across cultures and time."
    },
    {
        question: "What is labelling theory in the context of deviance?",
        choice1: "The idea that deviance is a result of genetic factors",
        choice2: "The idea that deviance is a result of economic inequality",
        choice3: "The idea that deviance is a result of being labeled as deviant by society",
        choice4: "The idea that deviance is a result of individual choice",
        answer: "The idea that deviance is a result of being labeled as deviant by society",
        rationale: "Labelling theory suggests that individuals become deviant because they are labeled as such by society, which influences their behavior."
    },
    {
        question: "What is stigmatization in the context of deviance?",
        choice1: "The process of rewarding conforming behavior",
        choice2: "The process of assigning negative labels to individuals or groups",
        choice3: "The process of promoting social equality",
        choice4: "The process of enforcing laws",
        answer: "The process of assigning negative labels to individuals or groups",
        rationale: "Stigmatization refers to the process of assigning negative labels to individuals or groups, often leading to social exclusion."
    },
    {
        question: "Which of the following is a role of inequality in the control of deviance?",
        choice1: "It promotes social harmony",
        choice2: "It creates opportunities for upward mobility",
        choice3: "It reinforces social hierarchies and power dynamics",
        choice4: "It eliminates deviant behavior",
        answer: "It reinforces social hierarchies and power dynamics",
        rationale: "Inequality reinforces social hierarchies and power dynamics, which can influence who is labeled as deviant and how deviance is controlled."
    },
    {
        question: "Which institution is most responsible for formal social control?",
        choice1: "Family",
        choice2: "Education system",
        choice3: "Criminal justice system",
        choice4: "Media",
        answer: "Criminal justice system",
        rationale: "The criminal justice system is responsible for formal social control through laws, regulations, and enforcement mechanisms."
    },
    {
        question: "What is an example of informal social control?",
        choice1: "Arrest by police",
        choice2: "Gossip and ridicule",
        choice3: "Court sentencing",
        choice4: "Legislation",
        answer: "Gossip and ridicule",
        rationale: "Informal social control includes mechanisms like gossip, ridicule, and social ostracism, which are not formalized but still influence behavior."
    },
    {
        question: "Which of the following is a type of deviant behavior?",
        choice1: "Conforming to social norms",
        choice2: "Breaking a law",
        choice3: "Following religious practices",
        choice4: "Participating in community events",
        answer: "Breaking a law",
        rationale: "Deviant behavior includes actions that violate social norms, such as breaking a law."
    },
    {
        question: "How does culture influence the control of deviance?",
        choice1: "By promoting universal norms",
        choice2: "By defining what is considered deviant",
        choice3: "By eliminating inequality",
        choice4: "By enforcing formal laws",
        answer: "By defining what is considered deviant",
        rationale: "Culture influences the control of deviance by defining what is considered deviant within a specific societal context."
    },
    {
        question: "What role does gender play in the control of deviance?",
        choice1: "It has no influence on deviance",
        choice2: "It determines biological predispositions to deviance",
        choice3: "It shapes societal expectations and responses to deviance",
        choice4: "It eliminates deviant behavior",
        answer: "It shapes societal expectations and responses to deviance",
        rationale: "Gender shapes societal expectations and responses to deviance, influencing how deviant behavior is perceived and controlled."
    },
    {
        question: "Which of the following is an example of formal social control?",
        choice1: "Peer pressure",
        choice2: "Laws and regulations",
        choice3: "Family discipline",
        choice4: "Community norms",
        answer: "Laws and regulations",
        rationale: "Formal social control includes laws and regulations enforced by institutions like the government and criminal justice system."
    },
    {
        question: "What is the primary purpose of social control?",
        choice1: "To promote individualism",
        choice2: "To maintain social order",
        choice3: "To encourage deviance",
        choice4: "To eliminate cultural norms",
        answer: "To maintain social order",
        rationale: "The primary purpose of social control is to maintain social order by ensuring individuals conform to societal norms."
    },
    {
        question: "Which of the following is a characteristic of informal social control?",
        choice1: "It is enforced by the government",
        choice2: "It relies on social interactions and relationships",
        choice3: "It involves formal laws and regulations",
        choice4: "It is applied uniformly across all societies",
        answer: "It relies on social interactions and relationships",
        rationale: "Informal social control relies on social interactions, relationships, and community norms rather than formal laws."
    },
    {
        question: "What is the relationship between socialisation and social control?",
        choice1: "Socialisation eliminates the need for social control",
        choice2: "Socialisation teaches individuals to conform to norms, reducing the need for external control",
        choice3: "Socialisation encourages deviant behavior",
        choice4: "Socialisation is unrelated to social control",
        answer: "Socialisation teaches individuals to conform to norms, reducing the need for external control",
        rationale: "Socialisation teaches individuals to internalize societal norms, reducing the need for external social control mechanisms."
    },
    {
        question: "Which of the following is an example of the social construction of deviance?",
        choice1: "A universal definition of crime",
        choice2: "Cultural variations in what is considered deviant",
        choice3: "Biological explanations for deviance",
        choice4: "Economic theories of deviance",
        answer: "Cultural variations in what is considered deviant",
        rationale: "The social construction of deviance emphasizes that definitions of deviance vary across cultures and societies."
    },
    {
        question: "What is the role of institutions in the control of deviance?",
        choice1: "They promote deviant behavior",
        choice2: "They enforce norms and regulate behavior",
        choice3: "They eliminate social norms",
        choice4: "They encourage individualism",
        answer: "They enforce norms and regulate behavior",
        rationale: "Institutions like the family, education system, and criminal justice system enforce norms and regulate behavior to control deviance."
    },
    {
        question: "Which of the following is an example of labelling in the context of deviance?",
        choice1: "A person being praised for conforming to norms",
        choice2: "A person being called a 'criminal' after committing a crime",
        choice3: "A person receiving an award for good behavior",
        choice4: "A person being ignored by society",
        answer: "A person being called a 'criminal' after committing a crime",
        rationale: "Labelling involves assigning a deviant identity to an individual, such as calling someone a 'criminal' after they commit a crime."
    },
    {
        question: "What is the impact of stigmatization on individuals?",
        choice1: "It promotes social inclusion",
        choice2: "It leads to social exclusion and marginalization",
        choice3: "It encourages conformity to norms",
        choice4: "It eliminates deviant behavior",
        answer: "It leads to social exclusion and marginalization",
        rationale: "Stigmatization often leads to social exclusion and marginalization, as individuals are labeled and treated as outsiders."
    },
    {
        question: "How do lifestyles influence the control of deviance?",
        choice1: "They have no impact on deviance",
        choice2: "They determine biological predispositions to deviance",
        choice3: "They shape opportunities and behaviors that may be labeled as deviant",
        choice4: "They eliminate social norms",
        answer: "They shape opportunities and behaviors that may be labeled as deviant",
        rationale: "Lifestyles shape opportunities and behaviors, which may be labeled as deviant depending on societal norms and values."
    },
    {
        question: "What is the role of inequality in the social construction of deviance?",
        choice1: "It eliminates deviant behavior",
        choice2: "It influences who is labeled as deviant and how deviance is defined",
        choice3: "It promotes social harmony",
        choice4: "It encourages conformity to norms",
        answer: "It influences who is labeled as deviant and how deviance is defined",
        rationale: "Inequality influences the social construction of deviance by shaping who is labeled as deviant and how deviance is defined and controlled."
    },
    {
        question: "Which of the following is an example of formal social control?",
        choice1: "A parent scolding a child",
        choice2: "A teacher giving detention",
        choice3: "A police officer arresting someone",
        choice4: "A friend giving advice",
        answer: "A police officer arresting someone",
        rationale: "Formal social control involves actions taken by authorized institutions, such as a police officer arresting someone."
    },
    {
        question: "What is the role of culture in defining deviance?",
        choice1: "Culture has no influence on deviance",
        choice2: "Culture provides a universal definition of deviance",
        choice3: "Culture shapes what is considered deviant in a society",
        choice4: "Culture eliminates deviant behavior",
        answer: "Culture shapes what is considered deviant in a society",
        rationale: "Culture plays a key role in defining what is considered deviant, as norms and values vary across societies."
    },
    {
        question: "Which of the following is an example of informal social control?",
        choice1: "A judge sentencing a criminal",
        choice2: "A parent grounding a child",
        choice3: "A police officer issuing a ticket",
        choice4: "A teacher giving a grade",
        answer: "A parent grounding a child",
        rationale: "Informal social control involves actions taken by individuals or groups, such as a parent grounding a child."
    },
    {
        question: "What is the primary focus of labelling theory?",
        choice1: "The biological causes of deviance",
        choice2: "The economic causes of deviance",
        choice3: "The social process of labeling individuals as deviant",
        choice4: "The psychological causes of deviance",
        answer: "The social process of labeling individuals as deviant",
        rationale: "Labelling theory focuses on the social process of labeling individuals as deviant and the consequences of such labels."
    },
    {
        question: "How does socialisation contribute to social control?",
        choice1: "By encouraging deviant behavior",
        choice2: "By teaching individuals to conform to societal norms",
        choice3: "By eliminating social norms",
        choice4: "By promoting individualism",
        answer: "By teaching individuals to conform to societal norms",
        rationale: "Socialisation contributes to social control by teaching individuals to internalize and conform to societal norms."
    },
    {
        question: "What is the relationship between deviance and social norms?",
        choice1: "Deviance is unrelated to social norms",
        choice2: "Deviance is defined by the violation of social norms",
        choice3: "Deviance reinforces social norms",
        choice4: "Deviance eliminates social norms",
        answer: "Deviance is defined by the violation of social norms",
        rationale: "Deviance is defined by the violation of social norms, which are the shared expectations and rules of behavior in a society."
    },
    {
        question: "Which of the following is an example of the social construction of deviance?",
        choice1: "A universal law against theft",
        choice2: "Cultural differences in attitudes toward alcohol consumption",
        choice3: "Biological explanations for criminal behavior",
        choice4: "Economic theories of deviance",
        answer: "Cultural differences in attitudes toward alcohol consumption",
        rationale: "The social construction of deviance is illustrated by cultural differences in attitudes toward behaviors like alcohol consumption."
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
