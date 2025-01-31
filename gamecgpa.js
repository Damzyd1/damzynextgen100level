
window.addEventListener("popstate", function(event){
  history.pushState(null, "", window.location.href);
});

document.addEventListener("keydown", e => {
  if((e.ctrlKey || e.metaKey) &&  e.key.toLowerCase() === 'r'){
    e.preventDefault();
  }
});



const topic = "Css 101: <br> Exam Simulation";
const topicId = document.getElementById("topic");
topicId.innerHTML = topic;
setTimeout(disappear, 10000);
function disappear(){
  topicId.style.opacity = 0;
}


const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoretext = document.getElementById("score");
const progressbarfull = document.getElementById("progressbarfull");
const loader = document.getElementById("loader");
const game = document.getElementById("game");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
let currentQuestion = {};
let questionNo;
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];
let questions = [
    {
        question: "What is criminology primarily concerned with?",
        choice1: "Crime investigation",
        choice2: "The study of crime and criminal behavior",
        choice3: "Law enforcement procedures",
        choice4: "Criminal justice system structure",
        answer: 2,
        rationale: "Criminology is the study of crime, its causes, and its effects."
    },
    {
        question: "Which of the following is a major theory in criminology?",
        choice1: "Biological Theory",
        choice2: "Behavioral Theory",
        choice3: "Structural Strain Theory",
        choice4: "Psychological Theory",
        answer: 3,
        rationale: "Structural Strain Theory, proposed by Robert Merton, suggests that society sets goals without providing equal means to achieve them."
    },
    {
        question: "Which of the following refers to 'organized crime'?",
        choice1: "Spontaneous acts of violence",
        choice2: "Group crime that is structured and often involves illegal activities like drug trafficking",
        choice3: "Individual crimes like theft or assault",
        choice4: "Small-time street crime",
        answer: 2,
        rationale: "Organized crime refers to a group of criminals who engage in illegal activities systematically, often for profit."
    },
    {
        question: "According to the social disorganization theory, crime occurs due to:",
        choice1: "Weak family structures",
        choice2: "Lack of social cohesion in a community",
        choice3: "Biological influences on criminal behavior",
        choice4: "Individuals' genetic predispositions",
        answer: 2,
        rationale: "Social disorganization theory posits that crime occurs in communities with weak social structures or bonds."
    },
    {
        question: "Which theory of crime causation focuses on the differential association of individuals with criminals?",
        choice1: "Labeling Theory",
        choice2: "Routine Activities Theory",
        choice3: "Differential Association Theory",
        choice4: "Strain Theory",
        answer: 3,
        rationale: "Differential Association Theory, proposed by Edwin Sutherland, suggests that criminal behavior is learned through interactions with others."
    },
    {
        question: "In criminology, which crime typology refers to a crime involving theft or property damage?",
        choice1: "Violent Crime",
        choice2: "Property Crime",
        choice3: "White-Collar Crime",
        choice4: "Organized Crime",
        answer: 2,
        rationale: "Property crime refers to offenses such as theft, burglary, and vandalism."
    },
    {
        question: "The term 'victimology' refers to:",
        choice1: "The study of crime victims and their role in criminal events",
        choice2: "The study of criminal offenders",
        choice3: "A criminological theory",
        choice4: "The study of criminal law",
        answer: 1,
        rationale: "Victimology is the study of crime victims and how they are affected by crime."
    },
    {
        question: "Which of the following is considered a white-collar crime?",
        choice1: "Robbery",
        choice2: "Fraud",
        choice3: "Murder",
        choice4: "Assault",
        answer: 2,
        rationale: "White-collar crime refers to non-violent crimes, typically committed by individuals in positions of trust, like fraud or embezzlement."
    },
    {
        question: "Which category of crime involves illegal acts committed by individuals or groups against the state or government?",
        choice1: "Organized Crime",
        choice2: "Political Crime",
        choice3: "Property Crime",
        choice4: "Victimless Crime",
        answer: 2,
        rationale: "Political crimes are illegal acts that are against the government, such as terrorism or espionage."
    },
    {
        question: "Which is a primary function of the criminal justice system?",
        choice1: "Punish offenders",
        choice2: "Rehabilitate offenders",
        choice3: "Maintain social order through law enforcement",
        choice4: "All of the above",
        answer: 4,
        rationale: "The criminal justice system has multiple functions including punishment, rehabilitation, and maintaining social order."
    },
    {
        question: "What is a primary objective of law enforcement agencies?",
        choice1: "Punish criminals",
        choice2: "Collect taxes",
        choice3: "Maintain public order and safety",
        choice4: "Define criminal law",
        answer: 3,
        rationale: "Law enforcement agencies are primarily tasked with maintaining public order and safety."
    },
    {
        question: "Which type of law is concerned with the rules of conduct that govern relations between individuals and society?",
        choice1: "Civil Law",
        choice2: "Criminal Law",
        choice3: "Administrative Law",
        choice4: "Constitutional Law",
        answer: 2,
        rationale: "Criminal law deals with actions that are offenses against society, such as theft, assault, and murder."
    },
    {
        question: "The concept of 'double jeopardy' refers to:",
        choice1: "Being tried for the same crime twice",
        choice2: "Punishment for two separate crimes",
        choice3: "Reinvestigation of a case after an appeal",
        choice4: "The protection of constitutional rights for criminals",
        answer: 1,
        rationale: "Double jeopardy is the legal principle that a person cannot be tried twice for the same offense."
    },
    {
        question: "In which criminal justice system stage is the defendant formally charged and presented with evidence?",
        choice1: "Arrest",
        choice2: "Trial",
        choice3: "Pretrial hearing",
        choice4: "Sentencing",
        answer: 3,
        rationale: "The pretrial hearing is where the defendant is formally charged, and evidence is presented."
    },
    {
        question: "Which of the following is an example of a victimless crime?",
        choice1: "Drug use",
        choice2: "Robbery",
        choice3: "Murder",
        choice4: "Burglary",
        answer: 1,
        rationale: "Victimless crimes involve actions that harm no one other than the perpetrator, such as drug use."
    },
    {
        question: "What is a key component of national security?",
        choice1: "Military defense",
        choice2: "Economic stability",
        choice3: "Political stability",
        choice4: "All of the above",
        answer: 4,
        rationale: "National security encompasses military, economic, and political aspects to ensure a country's safety."
    },
    {
        question: "Which of the following is an example of a transnational crime?",
        choice1: "Local burglary",
        choice2: "Drug trafficking across borders",
        choice3: "Assault",
        choice4: "Pickpocketing",
        answer: 2,
        rationale: "Transnational crime involves illegal activities that cross national borders, such as drug trafficking."
    },
    {
        question: "International security studies focus primarily on:",
        choice1: "Domestic law enforcement",
        choice2: "Global conflicts and threats",
        choice3: "Local police tactics",
        choice4: "Criminal trials",
        answer: 2,
        rationale: "International security studies address global threats such as terrorism, nuclear proliferation, and interstate wars."
    },
    {
        question: "What is one of the primary goals of security studies?",
        choice1: "Punish offenders",
        choice2: "Analyze national and international security threats",
        choice3: "Rehabilitate offenders",
        choice4: "Enforce criminal laws",
        answer: 2,
        rationale: "Security studies aim to analyze and address threats to national and international security."
    },
    {
        question: "The crime of piracy is an example of:",
        choice1: "Domestic crime",
        choice2: "Transnational crime",
        choice3: "Organized crime",
        choice4: "White-collar crime",
        answer: 2,
        rationale: "Piracy is a transnational crime that takes place on the high seas and involves illegal activities such as hijacking ships."
    },
    {
        question: "Which of the following is an example of international law enforcement cooperation?",
        choice1: "FBI conducting local investigations",
        choice2: "Interpol coordinating efforts to catch international criminals",
        choice3: "A state's local police force tackling drug use",
        choice4: "A local sheriff arresting suspects",
        answer: 2,
        rationale: "Interpol is an international organization that helps police from different countries cooperate in solving cross-border crimes."
    },
    {
        question: "The term 'criminal justice system' refers to:",
        choice1: "A system to enforce civil law",
        choice2: "The police and their investigation methods",
        choice3: "A network of agencies to enforce laws and administer justice",
        choice4: "Only the courts and sentencing procedures",
        answer: 3,
        rationale: "The criminal justice system is a comprehensive network of agencies involved in law enforcement, courts, and corrections."
    },
    {
        question: "The Uniform Crime Report (UCR) is a key tool used by which agency?",
        choice1: "FBI",
        choice2: "CIA",
        choice3: "Department of Homeland Security",
        choice4: "Department of Justice",
        answer: 1,
        rationale: "The UCR is published by the FBI and provides national statistics on crime rates."
    },
    {
        question: "Which of the following is considered a part of the criminal justice process?",
        choice1: "Investigation",
        choice2: "Arrest",
        choice3: "Trial",
        choice4: "All of the above",
        answer: 4,
        rationale: "The criminal justice process includes investigation, arrest, trial, and sentencing."
    },
    {
        question: "Which of the following is an example of a terrorist act?",
        choice1: "Robbery",
        choice2: "Assault",
        choice3: "Bombing for political or religious purposes",
        choice4: "Fraud",
        answer: 3,
        rationale: "Terrorist acts often involve violence to achieve political, religious, or ideological objectives."
    },
    {
        question: "The concept of 'cybercrime' primarily refers to:",
        choice1: "Traditional theft",
        choice2: "Crimes committed via computers or the internet",
        choice3: "Drug trafficking",
        choice4: "Organized crime",
        answer: 2,
        rationale: "Cybercrime involves criminal activities that are carried out through computers or the internet."
    },
    {
        question: "Which of the following is true about criminal law?",
        choice1: "It governs relationships between individuals",
        choice2: "It focuses on punishing individuals for crimes committed against society",
        choice3: "It is unrelated to constitutional law",
        choice4: "It only applies to violent crimes",
        answer: 2,
        rationale: "Criminal law focuses on actions that harm society and punishes offenders accordingly."
    },
    {
        question: "Which crime typology refers to financial crimes committed by individuals in positions of trust?",
        choice1: "Organized Crime",
        choice2: "White-Collar Crime",
        choice3: "Violent Crime",
        choice4: "Property Crime",
        answer: 2,
        rationale: "White-collar crimes are non-violent crimes often committed by professionals or individuals in power for financial gain."
    },
    {
        question: "What is the main idea behind the Classical School of Criminology?",
        choice1: "Criminal behavior is determined by biological factors",
        choice2: "Punishment should be based on divine will",
        choice3: "People have free will and commit crimes after weighing benefits and costs",
        choice4: "Crime is a mental disorder",
        answer: 3,
        rationale: "The Classical School argues that people are rational and make choices based on pleasure and pain calculations."
    },
    {
        question: "Cesare Beccaria’s major work, ‘On Crimes and Punishments,’ argued for what key reform?",
        choice1: "Harsher punishments for serious crimes",
        choice2: "Torture as an effective interrogation method",
        choice3: "Fair and proportional punishment based on the severity of the crime",
        choice4: "More reliance on divine judgment",
        answer: 3,
        rationale: "Beccaria advocated for just and proportionate punishments to deter crime without excessive cruelty."
    },
    {
        question: "According to Beccaria, which of the following is most effective in preventing crime?",
        choice1: "Severe and brutal punishments",
        choice2: "Certainty and swiftness of punishment",
        choice3: "Religious interventions",
        choice4: "Public executions",
        answer: 2,
        rationale: "Beccaria emphasized that punishment should be swift and certain rather than excessively harsh."
    },
    {
        question: "Jeremy Bentham’s theory of Utilitarianism focuses on what?",
        choice1: "Punishment should cause maximum pain to criminals",
        choice2: "Laws should ensure the greatest happiness for the greatest number",
        choice3: "Crime is caused by genetic factors",
        choice4: "Judges should have complete discretion in sentencing",
        answer: 2,
        rationale: "Bentham’s Utilitarianism seeks to maximize social happiness through rational laws and punishments."
    },
    {
        question: "Which of the following best describes Bentham’s concept of the ‘Panopticon’?",
        choice1: "A religious-based legal system",
        choice2: "A prison design allowing constant surveillance to encourage self-discipline",
        choice3: "A torture device used in classical criminology",
        choice4: "A method for rehabilitating offenders using psychological therapy",
        answer: 2,
        rationale: "Bentham’s Panopticon was a circular prison with a central watchtower, promoting behavioral control through surveillance."
    },
    {
        question: "What did Beccaria believe about capital punishment (death penalty)?",
        choice1: "It is necessary for the most serious crimes",
        choice2: "It should be abolished because it is ineffective and inhumane",
        choice3: "It should be applied to all crimes to maintain order",
        choice4: "It should be left to religious authorities to decide",
        answer: 2,
        rationale: "Beccaria argued that the death penalty was not an effective deterrent and called for its abolition."
    },
    {
        question: "According to Classical Criminology, why do people commit crimes?",
        choice1: "They are influenced by biological and psychological traits",
        choice2: "They lack proper education and moral guidance",
        choice3: "They make rational choices based on potential rewards and punishments",
        choice4: "They are controlled by supernatural forces",
        answer: 3,
        rationale: "Classical theorists believed that individuals weigh the pros and cons before committing crimes."
    },
    {
        question: "How does the Classical School of Criminology view human nature?",
        choice1: "Humans are naturally evil and must be controlled through strict laws",
        choice2: "Humans are rational beings who make choices based on self-interest",
        choice3: "Human behavior is solely determined by psychological conditions",
        choice4: "Criminal behavior is the result of divine punishment",
        answer: 2,
        rationale: "Classical theorists like Beccaria and Bentham saw humans as rational actors who calculate risks and benefits."
    },
    {
        question: "Which of the following best describes Auguste Comte’s positivist criminology?",
        choice1: "Criminals are born with inherent evil tendencies",
        choice2: "Crime is a result of rational choice and free will",
        choice3: "Scientific methods should be used to study crime and its causes",
        choice4: "Criminal punishment should be purely based on religious doctrines",
        answer: 3,
        rationale: "Comte introduced positivism, which applies scientific methods to understand crime based on social and biological factors."
    },
    {
        question: "What is a major difference between Classical and Positivist criminology?",
        choice1: "Classical criminology focuses on free will, while positivism looks at external influences",
        choice2: "Classical criminology supports the death penalty, while positivism opposes it",
        choice3: "Positivism believes in supernatural explanations for crime",
        choice4: "Classical criminology rejects the concept of rational choice",
        answer: 1,
        rationale: "Classical criminology argues that crime results from rational choice, while positivism focuses on social, psychological, and biological factors."
    },
    {
        question: "According to Comte’s positivism, which of the following should be used to study crime?",
        choice1: "Philosophical debates",
        choice2: "Scientific observation and empirical research",
        choice3: "Religious texts and moral discussions",
        choice4: "Personal opinions of legal scholars",
        answer: 2,
        rationale: "Positivism emphasizes using scientific methods and data to study criminal behavior."
    },
    {
        question: "How did Auguste Comte classify human knowledge in his positivist theory?",
        choice1: "Religious, Scientific, and Political",
        choice2: "Theological, Metaphysical, and Positive",
        choice3: "Criminal, Non-Criminal, and Neutral",
        choice4: "Biological, Psychological, and Sociological",
        answer: 2,
        rationale: "Comte’s three stages of knowledge include Theological (supernatural explanations), Metaphysical (abstract thinking), and Positive (scientific reasoning)."
    }
];





















    

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = questions.length;
const Total_Score = 10*MAX_QUESTIONS;

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
    localStorage.setItem("Max_Score", Total_Score);
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


const correctRemarks = [
    "Awesome!",
    "Nice!",
    "Great job!",
    "Well done!",
    "Scholar!",
    "Sharp!"
  ];
  
const wrongRemarks = [
    "Come on!",
    "Keep going!",
    "You can do better!",
    "Keep trying!",
    "Do not give up!",
    "Believe!"
  ];
  
function getRandomRemark(remarks){
  const index = Math.floor(Math.random() * remarks.length);
  return remarks[index];
}
  
choices.forEach(choice => {
  choice.addEventListener("click",e => {
    if (!acceptingAnswers) return;
    
    acceptingAnswers = false;
    const selectedChoice = e.target
    const selectedAnswer = selectedChoice.dataset["number"];
    const classToApply = selectedAnswer == currentQuestion.answer? "correct": "incorrect";
    
    selectedChoice.parentElement.classList.add(classToApply);
    let remark = "";
    if(classToApply == "correct"){
      score+=10;
      remark = getRandomRemark(correctRemarks);
    }else{
      remark = getRandomRemark(wrongRemarks);
    }
    displayRemark(remark);
    scoretext.innerHTML = score;
    setTimeout(remove_next, 1000);
    function remove_next(){
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }
  });
});

function displayRemark(remark){
  const remarkElement = document.getElementById("remark");
  remarkElement.innerHTML = remark;
  setTimeout(remove, 2000);
  function remove(){
    remarkElement.style.opacity = 0;
  }
}
let durationInMinutes = 20;
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
/*next.addEventListener("click", function(){
  getNewQuestion();
});
*/
