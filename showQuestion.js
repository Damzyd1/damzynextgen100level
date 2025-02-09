

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
  question: "Which of the following is NOT an element of crime?",
    choice1: "Actus Reus",
    choice2: "Mens Rea",
    choice3: "Causation",
    choice4: "Intentional negligence",
    answer: "Intentional negligence",
    rationale: "Intentional negligence is not an element of crime. The core elements are Actus Reus (guilty act), Mens Rea (guilty mind), and Causation."
  },
  {
    question: "What does 'Actus Reus' refer to in criminal law?",
    choice1: "The mental state of the offender",
    choice2: "The physical act of committing a crime",
    choice3: "The consequences of the crime",
    choice4: "The legal defense for the crime",
    answer: "The physical act of committing a crime",
    rationale: "Actus Reus refers to the physical act or conduct that constitutes a crime."
  },
  {
    question: "Which of the following best describes 'Mens Rea'?",
    choice1: "The physical act of committing a crime",
    choice2: "The intention or knowledge of wrongdoing",
    choice3: "The legal consequences of a crime",
    choice4: "The victim's state of mind",
    answer: "The intention or knowledge of wrongdoing",
    rationale: "Mens Rea refers to the mental state or intention to commit a crime."
  },
  {
    question: "What is the primary focus of penology?",
    choice1: "Defining criminal offenses",
    choice2: "Punishment and rehabilitation of offenders",
    choice3: "Investigating crimes",
    choice4: "Prosecuting criminals",
    answer: "Punishment and rehabilitation of offenders",
    rationale: "Penology is the study of punishment and rehabilitation in the criminal justice system."
  },
  {
    question: "Which historical event significantly influenced the development of Nigeria's criminal law?",
    choice1: "The American Civil War",
    choice2: "The colonization by the British",
    choice3: "The French Revolution",
    choice4: "The World War II",
    answer: "The colonization by the British",
    rationale: "Nigeria's criminal law was heavily influenced by British colonization, which introduced English common law."
  },
  {
    question: "What is the primary purpose of criminal law?",
    choice1: "To compensate victims",
    choice2: "To maintain social order and protect society",
    choice3: "To provide civil remedies",
    choice4: "To regulate private disputes",
    answer: "To maintain social order and protect society",
    rationale: "Criminal law aims to maintain social order and protect society by defining and punishing crimes."
  },
  {
    question: "Which of the following is a key principle of criminal law?",
    choice1: "Strict liability",
    choice2: "Vicarious liability",
    choice3: "Presumption of innocence",
    choice4: "Civil liability",
    answer: "Presumption of innocence",
    rationale: "The presumption of innocence is a fundamental principle in criminal law, ensuring that the accused is considered innocent until proven guilty."
  },
  {
    question: "What is the term for a crime punishable by death or life imprisonment?",
    choice1: "Misdemeanor",
    choice2: "Felony",
    choice3: "Infraction",
    choice4: "Tort",
    answer: "Felony",
    rationale: "A felony is a serious crime that is often punishable by death or life imprisonment."
  },
  {
    question: "Which of the following is an example of a strict liability offense?",
    choice1: "Murder",
    choice2: "Speeding",
    choice3: "Theft",
    choice4: "Assault",
    answer: "Speeding",
    rationale: "Speeding is a strict liability offense because it does not require proof of intent, only the act itself."
  },
  {
    question: "What is the primary goal of rehabilitation in penology?",
    choice1: "To punish the offender",
    choice2: "To deter future crimes",
    choice3: "To reform the offender",
    choice4: "To compensate the victim",
    answer: "To reform the offender",
    rationale: "Rehabilitation aims to reform the offender and reintegrate them into society as a law-abiding citizen."
  },
  {
    question: "Which of the following is NOT a type of crime?",
    choice1: "Personal crime",
    choice2: "Property crime",
    choice3: "Inchoate crime",
    choice4: "Civil crime",
    answer: "Civil crime",
    rationale: "Civil crime is not a recognized category of crime. The main types are personal, property, and inchoate crimes."
  },
  {
    question: "What is the term for a crime that is incomplete or preparatory in nature?",
    choice1: "Felony",
    choice2: "Misdemeanor",
    choice3: "Inchoate crime",
    choice4: "Strict liability offense",
    answer: "Inchoate crime",
    rationale: "Inchoate crimes are incomplete or preparatory acts, such as attempt, conspiracy, or solicitation."
  },
  {
    question: "Which of the following is a key feature of Nigeria's criminal justice system?",
    choice1: "Reliance on customary law only",
    choice2: "A combination of English common law and customary law",
    choice3: "Exclusive use of Sharia law",
    choice4: "Complete independence from colonial influences",
    answer: "A combination of English common law and customary law",
    rationale: "Nigeria's criminal justice system combines English common law (from colonization) and customary law."
  },
  {
    question: "What is the primary purpose of deterrence in criminal law?",
    choice1: "To reform the offender",
    choice2: "To prevent future crimes by imposing penalties",
    choice3: "To compensate the victim",
    choice4: "To rehabilitate the offender",
    answer: "To prevent future crimes by imposing penalties",
    rationale: "Deterrence aims to prevent future crimes by imposing penalties that discourage criminal behavior."
  },
  {
    question: "Which of the following is an example of a property crime?",
    choice1: "Assault",
    choice2: "Burglary",
    choice3: "Murder",
    choice4: "Perjury",
    answer: "Burglary",
    rationale: "Burglary is a property crime because it involves the unlawful entry into a building to commit theft or another felony."
  },
  {
    question: "What is the term for a minor crime, typically punishable by fines or short-term imprisonment?",
    choice1: "Felony",
    choice2: "Misdemeanor",
    choice3: "Inchoate crime",
    choice4: "Strict liability offense",
    answer: "Misdemeanor",
    rationale: "A misdemeanor is a minor crime, usually punishable by fines or short-term imprisonment."
  },
  {
    question: "Which of the following is a key principle of historical development in Nigeria's criminal law?",
    choice1: "Complete reliance on Sharia law",
    choice2: "Integration of English common law",
    choice3: "Exclusive use of customary law",
    choice4: "Rejection of colonial legal systems",
    answer: "Integration of English common law",
    rationale: "Nigeria's criminal law integrates English common law, a legacy of British colonization."
  },
  {
    question: "What is the term for the legal principle that a person cannot be punished for an act that was not a crime at the time it was committed?",
    choice1: "Double jeopardy",
    choice2: "Ex post facto",
    choice3: "Habeas corpus",
    choice4: "Stare decisis",
    answer: "Ex post facto",
    rationale: "Ex post facto laws prohibit punishing someone for an act that was not a crime when it was committed."
  },
  {
    question: "Which of the following is a key element of causation in criminal law?",
    choice1: "The offender's intent",
    choice2: "The victim's consent",
    choice3: "The link between the act and the harm caused",
    choice4: "The severity of the punishment",
    answer: "The link between the act and the harm caused",
    rationale: "Causation requires establishing a direct link between the offender's act and the harm caused."
  },
  {
    question: "What is the term for a legal defense where the accused claims they were forced to commit a crime due to a threat of immediate harm?",
    choice1: "Insanity defense",
    choice2: "Duress",
    choice3: "Entrapment",
    choice4: "Self-defense",
    answer: "Duress",
    rationale: "Duress is a defense where the accused claims they were forced to commit a crime due to an immediate threat of harm."
  },
  {
    question: "Which of the following is a key feature of Nigeria's penal system?",
    choice1: "Exclusive use of capital punishment",
    choice2: "Rehabilitation as the sole focus",
    choice3: "A combination of punishment and rehabilitation",
    choice4: "Complete absence of custodial sentences",
    answer: "A combination of punishment and rehabilitation",
    rationale: "Nigeria's penal system combines punishment and rehabilitation to address criminal behavior."
  },
  {
    question: "What is the term for a crime that involves deception for personal or financial gain?",
    choice1: "Burglary",
    choice2: "Fraud",
    choice3: "Assault",
    choice4: "Perjury",
    answer: "Fraud",
    rationale: "Fraud involves deception for personal or financial gain."
  },
  {
    question: "Which of the following is a key principle of criminal liability?",
    choice1: "Vicarious liability",
    choice2: "Strict liability",
    choice3: "Mens Rea",
    choice4: "Civil liability",
    answer: "Mens Rea",
    rationale: "Mens Rea, or the guilty mind, is a key principle of criminal liability."
  },
  {
    question: "What is the term for a crime that involves the unlawful killing of another person without premeditation?",
    choice1: "Murder",
    choice2: "Manslaughter",
    choice3: "Assault",
    choice4: "Battery",
    answer: "Manslaughter",
    rationale: "Manslaughter involves the unlawful killing of another person without premeditation."
  },
  {
    question: "Which of the following is a key feature of Nigeria's criminal procedure?",
    choice1: "Trial by ordeal",
    choice2: "Adversarial system",
    choice3: "Inquisitorial system",
    choice4: "Exclusive use of Sharia courts",
    answer: "Adversarial system",
    rationale: "Nigeria's criminal procedure follows the adversarial system, inherited from English common law."
  },
  {
    question: "What is the term for a crime that involves intentionally setting fire to property?",
    choice1: "Burglary",
    choice2: "Arson",
    choice3: "Vandalism",
    choice4: "Trespassing",
    answer: "Arson",
    rationale: "Arson involves the intentional act of setting fire to property."
  },
  {
    question: "Which of the following is a key principle of criminal law regarding punishment?",
    choice1: "Retribution",
    choice2: "Compensation",
    choice3: "Mediation",
    choice4: "Restitution",
    answer: "Retribution",
    rationale: "Retribution is a key principle of criminal law, focusing on punishment as a form of justice."
  },
  {
    question: "What is the term for a crime that involves the unlawful taking of someone else's property with the intent to permanently deprive them of it?",
    choice1: "Burglary",
    choice2: "Robbery",
    choice3: "Theft",
    choice4: "Fraud",
    answer: "Theft",
    rationale: "Theft involves the unlawful taking of someone else's property with the intent to permanently deprive them of it."
  },
  {
    question: "Which of the following is a key feature of Nigeria's criminal law regarding juvenile offenders?",
    choice1: "Mandatory life imprisonment",
    choice2: "Focus on rehabilitation and reform",
    choice3: "Exclusive use of capital punishment",
    choice4: "Complete absence of legal protections",
    answer: "Focus on rehabilitation and reform",
    rationale: "Nigeria's criminal law emphasizes rehabilitation and reform for juvenile offenders."
  },
  {
    question: "What is the term for a crime that involves the use of force or threat of force to take property from another person?",
    choice1: "Burglary",
    choice2: "Robbery",
    choice3: "Theft",
    choice4: "Fraud",
    answer: "Robbery",
    rationale: "Robbery involves the use of force or threat of force"
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
