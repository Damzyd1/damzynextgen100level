
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
        question: "Who is considered the father of sociology?",
        choice1: "Karl Marx",
        choice2: "Auguste Comte",
        choice3: "Émile Durkheim",
        choice4: "Max Weber",
        answer: 2,
        rationale: "Auguste Comte coined the term 'sociology' and laid the foundation for its study."
    },
    {
        question: "Which of the following best defines sociology?",
        choice1: "The study of individual behavior",
        choice2: "The study of human society and social behavior",
        choice3: "The study of past human societies",
        choice4: "The study of economic systems",
        answer: 2,
        rationale: "Sociology focuses on social structures, interactions, and cultural patterns."
    },
    {
        question: "What term describes the shared beliefs, values, and practices of a group?",
        choice1: "Culture",
        choice2: "Society",
        choice3: "Norms",
        choice4: "Institutions",
        answer: 1,
        rationale: "Culture encompasses the ideas, customs, and social behavior of a particular society."
    },
    {
        question: "What is the term for the process by which individuals learn their society’s norms, values, and roles?",
        choice1: "Acculturation",
        choice2: "Socialization",
        choice3: "Institutionalization",
        choice4: "Assimilation",
        answer: 2,
        rationale: "Socialization is the lifelong process of learning and internalizing societal expectations."
    },
    {
        question: "Which of the following is NOT an agent of socialization?",
        choice1: "Family",
        choice2: "Media",
        choice3: "Biology",
        choice4: "Peers",
        answer: 3,
        rationale: "Socialization is influenced by social institutions, not biological factors."
    },
    {
        question: "Which sociologist introduced the concept of the 'looking-glass self'?",
        choice1: "George Herbert Mead",
        choice2: "Charles Horton Cooley",
        choice3: "Émile Durkheim",
        choice4: "Max Weber",
        answer: 2,
        rationale: "Cooley’s 'looking-glass self' explains how self-identity is shaped by social interactions."
    },
    {
        question: "What term describes a group that strongly influences a person’s behavior and social identity?",
        choice1: "Out-group",
        choice2: "Reference group",
        choice3: "Secondary group",
        choice4: "Primary group",
        answer: 2,
        rationale: "A reference group serves as a standard for evaluating oneself."
    },
    {
        question: "Which type of group is characterized by close, personal, and enduring relationships?",
        choice1: "Primary group",
        choice2: "Secondary group",
        choice3: "Out-group",
        choice4: "Formal organization",
        answer: 1,
        rationale: "Primary groups, like family and close friends, provide emotional support and long-term bonds."
    },
    {
        question: "What is the primary characteristic of a bureaucracy?",
        choice1: "Flexibility",
        choice2: "Hierarchical structure",
        choice3: "Informal relationships",
        choice4: "Lack of leadership",
        answer: 2,
        rationale: "Bureaucracies are structured with a clear hierarchy and formalized procedures."
    },
    {
        question: "What term refers to a system of beliefs and practices that attempts to order life in terms of ultimate meaning?",
        choice1: "Religion",
        choice2: "Government",
        choice3: "Education",
        choice4: "Economy",
        answer: 1,
        rationale: "Religion provides moral guidelines and explanations for human existence."
    },
    {
        question: "Which sociological perspective focuses on power differences and social inequality?",
        choice1: "Functionalism",
        choice2: "Conflict theory",
        choice3: "Symbolic interactionism",
        choice4: "Postmodernism",
        answer: 2,
        rationale: "Conflict theory, developed by Karl Marx, examines social struggles and inequality."
    },
    {
        question: "What is the primary function of social institutions?",
        choice1: "To create individual identities",
        choice2: "To maintain social order",
        choice3: "To eliminate cultural differences",
        choice4: "To enforce social deviance",
        answer: 2,
        rationale: "Institutions like family, education, and government help regulate societal functions."
    },
    {
        question: "Which of the following is NOT considered a social institution?",
        choice1: "Education",
        choice2: "Family",
        choice3: "Government",
        choice4: "Fashion trends",
        answer: 4,
        rationale: "Fashion trends change frequently and do not provide structured social order."
    },
    {
        question: "What term describes the movement of individuals or groups between different social positions?",
        choice1: "Social mobility",
        choice2: "Socialization",
        choice3: "Assimilation",
        choice4: "Gentrification",
        answer: 1,
        rationale: "Social mobility refers to shifts in social status, often through education or economic changes."
    },
    {
        question: "What term refers to the ability of individuals or groups to achieve their goals despite opposition?",
        choice1: "Authority",
        choice2: "Power",
        choice3: "Influence",
        choice4: "Control",
        answer: 2,
        rationale: "Power is the capacity to influence or enforce decisions over others."
    },
    {
        question: "Which theory argues that social institutions work together to maintain stability?",
        choice1: "Symbolic interactionism",
        choice2: "Conflict theory",
        choice3: "Functionalism",
        choice4: "Rational choice theory",
        answer: 3,
        rationale: "Functionalism sees society as a system where institutions contribute to overall stability."
    },
    {
        question: "What is an example of non-material culture?",
        choice1: "A smartphone",
        choice2: "A country's language",
        choice3: "A painting",
        choice4: "Clothing",
        answer: 2,
        rationale: "Non-material culture includes beliefs, values, norms, and language."
    },
    {
        question: "What term describes the cultural standards that define what is good or desirable?",
        choice1: "Norms",
        choice2: "Values",
        choice3: "Laws",
        choice4: "Mores",
        answer: 2,
        rationale: "Values are the moral beliefs of a society, shaping its goals and priorities."
    },
    {
        question: "Which of the following best describes a counterculture?",
        choice1: "A subgroup within a dominant culture",
        choice2: "A group that actively opposes mainstream culture",
        choice3: "A traditional culture",
        choice4: "A form of popular culture",
        answer: 2,
        rationale: "Countercultures reject mainstream values and norms, often advocating alternative lifestyles."
    },
    {
         question: "Which of the following is an example of a folkway?",
        choice1: "Wearing formal attire to a wedding",
        choice2: "Laws against theft",
        choice3: "Religious dietary restrictions",
        choice4: "Punishment for murder",
        answer: 1,
        rationale: "Folkways are informal norms that guide everyday behavior, like dress codes."
    },
    {
        question: "What is the term for norms that are widely observed and have great moral significance?",
        choice1: "Folkways",
        choice2: "Mores",
        choice3: "Laws",
        choice4: "Taboos",
        answer: 2,
        rationale: "Mores are deeply held norms that define moral behavior in a society."
    },
    {
        question: "What is cultural relativism?",
        choice1: "Judging other cultures by the standards of one’s own",
        choice2: "Accepting all cultural practices as equally valid",
        choice3: "Understanding cultures within their own context",
        choice4: "Rejecting one’s own culture",
        answer: 3,
        rationale: "Cultural relativism promotes understanding a culture based on its own values and norms."
    },
    {
        question: "What term refers to the spread of cultural elements from one society to another?",
        choice1: "Cultural diffusion",
        choice2: "Cultural shock",
        choice3: "Cultural integration",
        choice4: "Ethnocentrism",
        answer: 1,
        rationale: "Cultural diffusion occurs when cultural traits, such as ideas and technologies, spread between societies."
    },
    {
        question: "Which term describes a rigid and unfair generalization about a group of people?",
        choice1: "Stereotype",
        choice2: "Prejudice",
        choice3: "Discrimination",
        choice4: "Ethnocentrism",
        answer: 1,
        rationale: "Stereotypes are oversimplified and often inaccurate beliefs about a group."
    },
    {
        question: "What is the term for the process by which individuals learn and adopt a new culture?",
        choice1: "Socialization",
        choice2: "Acculturation",
        choice3: "Assimilation",
        choice4: "Enculturation",
        answer: 2,
        rationale: "Acculturation is the process of adapting to a new cultural environment."
    },
    {
        question: "Which of the following is an example of a total institution?",
        choice1: "A university",
        choice2: "A prison",
        choice3: "A corporation",
        choice4: "A family",
        answer: 2,
        rationale: "Total institutions, like prisons, control nearly all aspects of their members' lives."
    },
    {
        question: "Which sociologist introduced the concept of role-taking?",
        choice1: "Karl Marx",
        choice2: "Émile Durkheim",
        choice3: "George Herbert Mead",
        choice4: "Max Weber",
        answer: 3,
        rationale: "Mead's theory of role-taking explains how individuals adopt perspectives through social interaction."
    },
    {
        question: "What is the term for the expectations associated with a given social position?",
        choice1: "Status",
        choice2: "Role",
        choice3: "Norm",
        choice4: "Culture",
        answer: 2,
        rationale: "A role is a set of behaviors expected of someone occupying a particular status."
    },
    {
        question: "What is the difference between an achieved status and an ascribed status?",
        choice1: "Achieved status is inherited, ascribed status is earned",
        choice2: "Achieved status is voluntary, ascribed status is involuntary",
        choice3: "Achieved status is temporary, ascribed status is permanent",
        choice4: "There is no difference",
        answer: 2,
        rationale: "Achieved status is based on effort, while ascribed status is assigned at birth."
    },
    {
        question: "What term describes a social position that dominates all others in shaping a person's identity?",
        choice1: "Master status",
        choice2: "Primary status",
        choice3: "Role strain",
        choice4: "Role conflict",
        answer: 1,
        rationale: "Master status is a defining social position, such as being a celebrity or a doctor."
    },
    {
        question: "What is the main characteristic of a secondary group?",
        choice1: "Intimate and personal interactions",
        choice2: "Short-term, goal-oriented relationships",
        choice3: "Emotional attachment",
        choice4: "Strong kinship ties",
        answer: 2,
        rationale: "Secondary groups are larger, impersonal, and focused on specific tasks or goals."
    },
    {
        question: "Which type of social organization is characterized by formal rules and hierarchy?",
        choice1: "Primary group",
        choice2: "Bureaucracy",
        choice3: "Reference group",
        choice4: "Peer group",
        answer: 2,
        rationale: "Bureaucracies are structured organizations with set procedures and authority levels."
    },
    {
        question: "Which of the following is an example of social change?",
        choice1: "A person getting a new job",
        choice2: "A new law granting voting rights",
        choice3: "A family moving to another city",
        choice4: "A student learning a new language",
        answer: 2,
        rationale: "Social change refers to shifts in societal norms, institutions, or structures."
    },
    {
        question: "Which theory suggests that technological advancements drive social change?",
        choice1: "Modernization theory",
        choice2: "Conflict theory",
        choice3: "Symbolic interactionism",
        choice4: "Functionalism",
        answer: 1,
        rationale: "Modernization theory explains how industrial and technological progress shape societies."
    },
    {
        question: "Which term refers to the process by which a society becomes industrialized and urbanized?",
        choice1: "Cultural lag",
        choice2: "Globalization",
        choice3: "Modernization",
        choice4: "Socialization",
        answer: 3,
        rationale: "Modernization involves technological, economic, and social transformation."
    },
    {
        question: "What is cultural lag?",
        choice1: "When cultural elements spread too quickly",
        choice2: "When society adopts technology but not the accompanying social norms",
        choice3: "When a culture rejects external influences",
        choice4: "When cultures merge into one",
        answer: 2,
        rationale: "Cultural lag occurs when material culture advances faster than social or moral adaptations."
    },
    {
        question: "Which of the following is an example of globalization?",
        choice1: "A local farmer selling crops at a market",
        choice2: "A multinational corporation operating in multiple countries",
        choice3: "A neighborhood organizing a community event",
        choice4: "A school implementing a new dress code",
        answer: 2,
        rationale: "Globalization refers to the increasing interconnectedness of the world in trade, culture, and technology."
    },
    {
        question: "What term describes a movement aimed at achieving social change?",
        choice1: "Cultural diffusion",
        choice2: "Social movement",
        choice3: "Social mobility",
        choice4: "Institutionalization",
        answer: 2,
        rationale: "Social movements advocate for changes in policies, laws, or cultural practices."
    },
    {
        question: "Which of the following is an example of resistance to social change?",
        choice1: "A government legalizing same-sex marriage",
        choice2: "A company adopting a four-day workweek",
        choice3: "A community opposing environmental regulations",
        choice4: "A school implementing online learning",
        answer: 3,
        rationale: "Resistance to social change occurs when groups actively oppose new policies or cultural shifts."
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
