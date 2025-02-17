
window.addEventListener("popstate", function(event){
  history.pushState(null, "", window.location.href);
});

document.addEventListener("keydown", e => {
  if((e.ctrlKey || e.metaKey) &&  e.key.toLowerCase() === 'r'){
    e.preventDefault();
  }
});



const topic = "GST 111 <br> Exam Simulation";
const topicId = document.getElementById("topic");
topicId.innerHTML = topic;
setTimeout(disappear, 100000);
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
        question: "Which of the following is an example of a fricative consonant?",
        choice1: "/p/",
        choice2: "/t/",
        choice3: "/s/",
        choice4: "/m/",
        answer: 3,
        rationale: "/s/ is a fricative consonant because it is produced by forcing air through a narrow channel, creating a hissing sound."
    },
    {
        question: "What is the primary function of a pronoun?",
        choice1: "To describe a noun",
        choice2: "To replace a noun",
        choice3: "To modify a verb",
        choice4: "To connect clauses",
        answer: 2,
        rationale: "Pronouns (e.g., 'he,' 'she,' 'it') replace nouns to avoid repetition."
    },
    {
        question: "Which of the following is an example of a nasal consonant?",
        choice1: "/b/",
        choice2: "/d/",
        choice3: "/n/",
        choice4: "/k/",
        answer: 3,
        rationale: "/n/ is a nasal consonant because it is produced by allowing air to escape through the nose."
    },
    {
        question: "What is the purpose of a topic sentence in a paragraph?",
        choice1: "To conclude the paragraph",
        choice2: "To introduce the main idea of the paragraph",
        choice3: "To provide evidence",
        choice4: "To summarize the essay",
        answer: 2,
        rationale: "A topic sentence introduces the main idea or focus of the paragraph."
    },
    {
        question: "Which of the following is an example of a compound sentence?",
        choice1: "She ran quickly.",
        choice2: "She ran, and he walked.",
        choice3: "Because she ran, she was tired.",
        choice4: "Running quickly, she won the race.",
        answer: 2,
        rationale: "A compound sentence consists of two independent clauses joined by a coordinating conjunction (e.g., 'and')."
    },
    {
        question: "What is the role of an adverb in a sentence?",
        choice1: "To replace a noun",
        choice2: "To modify a verb, adjective, or another adverb",
        choice3: "To connect clauses",
        choice4: "To describe a noun",
        answer: 2,
        rationale: "Adverbs (e.g., 'quickly,' 'very') modify verbs, adjectives, or other adverbs."
    },
    {
        question: "Which of the following is an example of a vowel sound?",
        choice1: "/b/",
        choice2: "/k/",
        choice3: "/i/",
        choice4: "/s/",
        answer: 3,
        rationale: "/i/ is a vowel sound because it is produced without blocking the airflow."
    },
    {
        question: "What is the purpose of a conclusion in an essay?",
        choice1: "To introduce new ideas",
        choice2: "To summarize the main points and restate the thesis",
        choice3: "To provide evidence",
        choice4: "To list references",
        answer: 2,
        rationale: "The conclusion summarizes the main points and restates the thesis to provide closure."
    },
    {
        question: "Which of the following is an example of a descriptive essay?",
        choice1: "An argumentative essay",
        choice2: "A story about a personal experience",
        choice3: "A detailed description of a place",
        choice4: "A research paper",
        answer: 3,
        rationale: "A descriptive essay focuses on providing a detailed description of a person, place, or thing."
    },
    {
        question: "What is the primary function of an adjective?",
        choice1: "To replace a noun",
        choice2: "To describe or modify a noun",
        choice3: "To connect clauses",
        choice4: "To express action",
        answer: 2,
        rationale: "Adjectives (e.g., 'beautiful,' 'large') describe or modify nouns."
    },
    {
        question: "Which of the following is an example of a plosive consonant?",
        choice1: "/s/",
        choice2: "/m/",
        choice3: "/t/",
        choice4: "/f/",
        answer: 3,
        rationale: "/t/ is a plosive consonant because it is produced by completely blocking airflow and then releasing it."
    },
    {
        question: "What is the purpose of brainstorming in the pre-writing stage?",
        choice1: "To edit the final draft",
        choice2: "To generate ideas and gather information",
        choice3: "To write the conclusion",
        choice4: "To proofread for errors",
        answer: 2,
        rationale: "Brainstorming helps generate ideas and gather information before writing."
    },
    {
        question: "Which of the following is an example of an indefinite article?",
        choice1: "The",
        choice2: "A",
        choice3: "This",
        choice4: "That",
        answer: 2,
        rationale: "The word 'a' is an indefinite article because it refers to a nonspecific noun."
    },
    {
        question: "What is the role of a relative pronoun in a sentence?",
        choice1: "To connect clauses and refer to a noun",
        choice2: "To modify a verb",
        choice3: "To describe a noun",
        choice4: "To replace a noun",
        answer: 1,
        rationale: "Relative pronouns (e.g., 'who,' 'which') connect clauses and refer to a noun mentioned earlier."
    },
    {
        question: "Which of the following is an example of a complex sentence?",
        choice1: "She ran quickly.",
        choice2: "She ran, and he walked.",
        choice3: "Because she ran, she was tired.",
        choice4: "Running quickly, she won the race.",
        answer: 3,
        rationale: "A complex sentence contains one independent clause and one or more dependent clauses."
    },
    {
        question: "What is the purpose of a hook in an essay introduction?",
        choice1: "To summarize the essay",
        choice2: "To grab the reader's attention",
        choice3: "To provide evidence",
        choice4: "To conclude the essay",
        answer: 2,
        rationale: "A hook is used to grab the reader's attention at the beginning of an essay."
    },
    {
        question: "Which of the following is an example of an auxiliary verb?",
        choice1: "Run",
        choice2: "Be",
        choice3: "Quickly",
        choice4: "Beautiful",
        answer: 2,
        rationale: "The word 'be' is an auxiliary verb because it helps the main verb express tense, mood, or voice."
    },
    {
        question: "What is the primary function of a conjunction?",
        choice1: "To replace a noun",
        choice2: "To connect words, phrases, or clauses",
        choice3: "To modify a verb",
        choice4: "To describe a noun",
        answer: 2,
        rationale: "Conjunctions (e.g., 'and,' 'but,' 'because') connect words, phrases, or clauses."
    },
    {
        question: "Which of the following is a voiceless consonant?",
        choice1: "/b/",
        choice2: "/d/",
        choice3: "/p/",
        choice4: "/g/",
        answer: 3,
        rationale: "/p/ is a voiceless consonant because it is produced without vibration of the vocal cords."
    },
    {
        question: "Which vowel is a high front vowel?",
        choice1: "/a/",
        choice2: "/i/",
        choice3: "/u/",
        choice4: "/o/",
        answer: 2,
        rationale: "/i/ is a high front vowel because the tongue is positioned high and at the front of the mouth."
    },
    {
        question: "Which of the following is an example of a diphthong?",
        choice1: "/e/",
        choice2: "/aɪ/",
        choice3: "/ɪ/",
        choice4: "/ʊ/",
        answer: 2,
        rationale: "/aɪ/ is a diphthong because it involves a smooth transition between two vowel sounds within the same syllable."
    },
    {
        question: "What is the primary function of a preposition?",
        choice1: "To connect clauses",
        choice2: "To describe a noun",
        choice3: "To show the relationship between a noun and another word",
        choice4: "To replace a noun",
        answer: 3,
        rationale: "Prepositions show relationships between nouns (or pronouns) and other words in a sentence, such as direction, location, or time."
    },
    {
        question: "Which of the following is a coordinating conjunction?",
        choice1: "Although",
        choice2: "Because",
        choice3: "And",
        choice4: "Unless",
        answer: 3,
        rationale: "The word 'and' is a coordinating conjunction because it connects words, phrases, or clauses of equal importance."
    },
    {
        question: "What is the purpose of an auxiliary verb?",
        choice1: "To replace a noun",
        choice2: "To modify a noun",
        choice3: "To help the main verb express tense, mood, or voice",
        choice4: "To connect two clauses",
        answer: 3,
        rationale: "Auxiliary verbs (e.g., 'is,' 'have,' 'will') help the main verb express tense, mood, or voice."
    },
    {
        question: "Which of the following is an example of a definite article?",
        choice1: "A",
        choice2: "An",
        choice3: "The",
        choice4: "Some",
        answer: 3,
        rationale: "The word 'the' is a definite article because it refers to a specific noun."
    },
    {
        question: "What is the role of a qualifier in a sentence?",
        choice1: "To replace a noun",
        choice2: "To modify or limit the meaning of another word",
        choice3: "To connect clauses",
        choice4: "To express action",
        answer: 2,
        rationale: "Qualifiers (e.g., 'very,' 'somewhat') modify or limit the meaning of adjectives, adverbs, or verbs."
    },
    {
        question: "Which of the following is an example of a possessive pronoun?",
        choice1: "He",
        choice2: "She",
        choice3: "His",
        choice4: "They",
        answer: 3,
        rationale: "The word 'his' is a possessive pronoun because it shows ownership."
    },
    {
        question: "What is the primary purpose of pre-writing in the writing process?",
        choice1: "To edit the final draft",
        choice2: "To generate ideas and plan the structure",
        choice3: "To write the conclusion",
        choice4: "To proofread for errors",
        answer: 2,
        rationale: "Pre-writing involves brainstorming, outlining, and organizing ideas before drafting."
    },
    {
        question: "Which of the following is a characteristic of a formal essay?",
        choice1: "Use of slang and informal language",
        choice2: "Clear structure with an introduction, body, and conclusion",
        choice3: "Personal anecdotes as the main evidence",
        choice4: "Lack of a thesis statement",
        answer: 2,
        rationale: "A formal essay has a clear structure, including an introduction, body paragraphs, and a conclusion."
    },
    {
        question: "What is the purpose of post-writing activities?",
        choice1: "To brainstorm ideas",
        choice2: "To revise and polish the draft",
        choice3: "To write the first draft",
        choice4: "To ignore errors",
        answer: 2,
        rationale: "Post-writing involves revising, editing, and proofreading to improve the draft."
    },
    {
        question: "Which of the following is an example of creative writing?",
        choice1: "A research paper",
        choice2: "A business report",
        choice3: "A poem",
        choice4: "A news article",
        answer: 3,
        rationale: "Creative writing includes imaginative works like poems, stories, and plays."
    },
    {
        question: "What is the role of a modifier in a sentence?",
        choice1: "To replace a noun",
        choice2: "To describe or add detail to another word",
        choice3: "To connect clauses",
        choice4: "To express action",
        answer: 2,
        rationale: "Modifiers (e.g., adjectives, adverbs) provide additional information about other words."
    },
    {
        question: "Which of the following is an example of a subordinating conjunction?",
        choice1: "And",
        choice2: "But",
        choice3: "Because",
        choice4: "Or",
        answer: 3,
        rationale: "The word 'because' is a subordinating conjunction because it connects a dependent clause to an independent clause."
    },
    {
        question: "What is the primary function of an article in a sentence?",
        choice1: "To replace a noun",
        choice2: "To modify a verb",
        choice3: "To specify or generalize a noun",
        choice4: "To connect clauses",
        answer: 3,
        rationale: "Articles (e.g., 'a,' 'an,' 'the') specify or generalize the noun they precede."
    },
    {
        question: "Which of the following is an example of a personal pronoun?",
        choice1: "This",
        choice2: "Who",
        choice3: "She",
        choice4: "Which",
        answer: 3,
        rationale: "The word 'she' is a personal pronoun because it refers to a specific person."
    },
    {
        question: "What is the purpose of a thesis statement in an essay?",
        choice1: "To summarize the essay",
        choice2: "To introduce the main argument or focus",
        choice3: "To provide evidence",
        choice4: "To conclude the essay",
        answer: 2,
        rationale: "A thesis statement presents the main argument or focus of the essay."
    },
    {
        question: "Which of the following is an example of a narrative essay?",
        choice1: "An argumentative essay",
        choice2: "A descriptive essay",
        choice3: "A story about a personal experience",
        choice4: "A research paper",
        answer: 3,
        rationale: "A narrative essay tells a story, often based on personal experiences."
    },
    {
        question: "What is the role of a conjunction in a sentence?",
        choice1: "To replace a noun",
        choice2: "To connect words, phrases, or clauses",
        choice3: "To modify a verb",
        choice4: "To describe a noun",
        answer: 2,
        rationale: "Conjunctions (e.g., 'and,' 'but,' 'because') connect words, phrases, or clauses."
    },
    {
        question: "Which of the following best describes the role of ICT in language learning?",
        choice1: "It replaces traditional teaching methods entirely",
        choice2: "It enhances interaction and personalized learning",
        choice3: "It eliminates the need for teachers",
        choice4: "It focuses only on multimedia content delivery",
        answer: 2,
        rationale: "ICT supports interactive and adaptive learning, making language acquisition more personalized and engaging."
    },
    {
        question: "Which ICT tool is specifically designed to provide automated feedback and evaluation in language learning?",
        choice1: "Learning Management Systems (LMS)",
        choice2: "Multimedia content creators",
        choice3: "Social media platforms",
        choice4: "Virtual keyboards",
        answer: 1,
        rationale: "LMS platforms integrate assessment and feedback tools to track and evaluate language learners' progress."
    },
    {
        question: "Artificial Intelligence in language learning primarily enhances which aspect?",
        choice1: "Replacing teachers with AI tutors",
        choice2: "Creating static learning materials",
        choice3: "Providing adaptive learning experiences based on user performance",
        choice4: "Standardizing teaching methods for all students",
        answer: 3,
        rationale: "AI-driven tools analyze user data to offer personalized learning paths, adapting to the learner’s needs."
    },
    {
        question: "Which of the following is NOT a direct advantage of ICT in education?",
        choice1: "Increased accessibility to learning resources",
        choice2: "Instant feedback and assessment",
        choice3: "Complete elimination of classroom learning",
        choice4: "Enhanced multimedia engagement",
        answer: 3,
        rationale: "ICT supplements traditional learning but does not entirely replace physical classroom settings."
    },
    {
        question: "Which of these is a major disadvantage of ICT in modern learning?",
        choice1: "It restricts student collaboration",
        choice2: "Over-reliance on technology may reduce critical thinking skills",
        choice3: "It completely removes human interaction",
        choice4: "It eliminates the need for teacher evaluation",
        answer: 2,
        rationale: "Students may become too dependent on digital solutions, affecting independent problem-solving skills."
    },
    {
        question: "Which reading strategy focuses on reducing inner speech to increase reading speed?",
        choice1: "Eye regression",
        choice2: "Sub-vocalization",
        choice3: "Previewing",
        choice4: "Skimming",
        answer: 2,
        rationale: "Sub-vocalization is the habit of silently pronouncing words while reading, which slows down reading speed."
    },
    {
        question: "Eye regression during reading refers to:",
        choice1: "Looking back at previously read text",
        choice2: "Reading a text out loud",
        choice3: "Scanning for keywords",
        choice4: "Using external notes while reading",
        answer: 1,
        rationale: "Eye regression occurs when readers look back at words they have already read, often slowing comprehension."
    },
    {
        question: "Intensive reading focuses on:",
        choice1: "Understanding overall themes in a text",
        choice2: "Detailed analysis of grammar and vocabulary",
        choice3: "Reading for pleasure",
        choice4: "Reading at a fast pace to improve fluency",
        answer: 2,
        rationale: "Intensive reading involves careful examination of grammar and vocabulary to understand language structure."
    },
    {
        question: "Which reading approach involves reading a large amount of text to grasp the general meaning?",
        choice1: "Intensive reading",
        choice2: "Sub-vocalization",
        choice3: "Extensive reading",
        choice4: "Regression reading",
        answer: 3,
        rationale: "Extensive reading emphasizes comprehension of overall themes rather than focusing on detailed analysis."
    },
    {
        question: "Which of the following is an example of a principal (independent) clause?",
        choice1: "Because she was late, she missed the meeting.",
        choice2: "She missed the meeting.",
        choice3: "Although he tried his best, he lost the race.",
        choice4: "If the weather improves, we will go out.",
        answer: 2,
        rationale: "An independent clause can stand alone as a complete sentence, unlike dependent clauses."
    },
    {
        question: "A subordinate (dependent) clause:",
        choice1: "Can stand alone as a complete sentence",
        choice2: "Always contains both a subject and a verb",
        choice3: "Cannot exist without being attached to an independent clause",
        choice4: "Never contains a verb",
        answer: 3,
        rationale: "A subordinate clause relies on an independent clause to form a complete thought."
    },
    {
        question: "Which of the following is an example of an adverbial clause?",
        choice1: "The book that she borrowed was interesting.",
        choice2: "She left the party because she was tired.",
        choice3: "The person who called you is my friend.",
        choice4: "I need to know where he went.",
        answer: 2,
        rationale: "An adverbial clause modifies a verb and often explains reasons, time, or conditions."
    },
    {
        question: "What distinguishes a relative (adjectival) clause?",
        choice1: "It modifies a noun",
        choice2: "It modifies a verb",
        choice3: "It always starts with a subordinating conjunction",
        choice4: "It never contains a subject",
        answer: 1,
        rationale: "A relative (adjectival) clause provides additional information about a noun in the sentence."
    },
    {
        question: "Which of these sentences contains a noun clause?",
        choice1: "I know where he lives.",
        choice2: "She danced gracefully on stage.",
        choice3: "The book that I borrowed was interesting.",
        choice4: "He left because he was tired.",
        answer: 1,
        rationale: "A noun clause functions as a noun within a sentence, often acting as a subject or object."
    },
    {
        question: "Which type of clause typically begins with subordinating conjunctions like 'although,' 'because,' and 'if'?",
        choice1: "Noun clause",
        choice2: "Adjectival clause",
        choice3: "Adverbial clause",
        choice4: "Principal clause",
        answer: 3,
        rationale: "Adverbial clauses often indicate reasons, conditions, or contrasts and begin with subordinating conjunctions."
    },
    {
        question: "What type of clause is in the sentence: 'He was late because he missed the bus'?",
        choice1: "Noun clause",
        choice2: "Adverbial clause",
        choice3: "Adjectival clause",
        choice4: "Principal clause",
        answer: 2,
        rationale: "The clause 'because he missed the bus' explains the reason for the action, making it an adverbial clause."
    },
    {
        question: "A 'bounce clause' is best described as:",
        choice1: "A clause that emphasizes a contrasting idea",
        choice2: "A clause that always begins with a preposition",
        choice3: "A type of independent clause",
        choice4: "A clause that can function as both dependent and independent",
        answer: 1,
        rationale: "A bounce clause contrasts two ideas in a sentence, often using words like 'however' or 'although.'"
    },
    {
        question: "Which of the following best describes the role of ICT in language learning?",
        choice1: "It replaces traditional teaching methods entirely",
        choice2: "It enhances interaction and personalized learning",
        choice3: "It eliminates the need for teachers",
        choice4: "It focuses only on multimedia content delivery",
        answer: 2,
        rationale: "ICT supports interactive and adaptive learning, making language acquisition more personalized and engaging."
    },
    {
        question: "Which ICT tool is specifically designed to provide automated feedback and evaluation in language learning?",
        choice1: "Learning Management Systems (LMS)",
        choice2: "Multimedia content creators",
        choice3: "Social media platforms",
        choice4: "Virtual keyboards",
        answer: 1,
        rationale: "LMS platforms integrate assessment and feedback tools to track and evaluate language learners' progress."
    },
    {
        question: "Artificial Intelligence in language learning primarily enhances which aspect?",
        choice1: "Replacing teachers with AI tutors",
        choice2: "Creating static learning materials",
        choice3: "Providing adaptive learning experiences based on user performance",
        choice4: "Standardizing teaching methods for all students",
        answer: 3,
        rationale: "AI-driven tools analyze user data to offer personalized learning paths, adapting to the learner’s needs."
    },
    {
        question: "Which of the following is NOT a direct advantage of ICT in education?",
        choice1: "Increased accessibility to learning resources",
        choice2: "Instant feedback and assessment",
        choice3: "Complete elimination of classroom learning",
        choice4: "Enhanced multimedia engagement",
        answer: 3,
        rationale: "ICT supplements traditional learning but does not entirely replace physical classroom settings."
    },
    {
        question: "Which of these is a major disadvantage of ICT in modern learning?",
        choice1: "It restricts student collaboration",
        choice2: "Over-reliance on technology may reduce critical thinking skills",
        choice3: "It completely removes human interaction",
        choice4: "It eliminates the need for teacher evaluation",
        answer: 2,
        rationale: "Students may become too dependent on digital solutions, affecting independent problem-solving skills."
    },
    {
        question: "Which reading strategy focuses on reducing inner speech to increase reading speed?",
        choice1: "Eye regression",
        choice2: "Sub-vocalization",
        choice3: "Previewing",
        choice4: "Skimming",
        answer: 2,
        rationale: "Sub-vocalization is the habit of silently pronouncing words while reading, which slows down reading speed."
    },
    {
        question: "Eye regression during reading refers to:",
        choice1: "Looking back at previously read text",
        choice2: "Reading a text out loud",
        choice3: "Scanning for keywords",
        choice4: "Using external notes while reading",
        answer: 1,
        rationale: "Eye regression occurs when readers look back at words they have already read, often slowing comprehension."
    },
    {
        question: "Which of the following is a characteristic of extensive reading?",
        choice1: "Focusing on grammatical structures",
        choice2: "Reading for detailed comprehension",
        choice3: "Reading large amounts for general understanding",
        choice4: "Analyzing vocabulary deeply",
        answer: 3,
        rationale: "Extensive reading involves consuming a large volume of text to develop fluency and overall comprehension."
    },
    {
        question: "Which of these is an example of an independent (principal) clause?",
        choice1: "Because she was late, she missed the meeting.",
        choice2: "She missed the meeting.",
        choice3: "Although he tried his best, he lost the race.",
        choice4: "If the weather improves, we will go out.",
        answer: 2,
        rationale: "An independent clause can stand alone as a complete sentence, unlike dependent clauses."
    },
    {
        question: "What distinguishes a dependent (subordinate) clause from an independent clause?",
        choice1: "It always contains a subject and a verb",
        choice2: "It can stand alone as a sentence",
        choice3: "It requires an independent clause to make sense",
        choice4: "It never contains a verb",
        answer: 3,
        rationale: "A dependent clause does not express a complete thought and must be attached to an independent clause."
    },
    {
        question: "Which of the following is an example of an adverbial clause?",
        choice1: "The book that she borrowed was interesting.",
        choice2: "She left the party because she was tired.",
        choice3: "The person who called you is my friend.",
        choice4: "I need to know where he went.",
        answer: 2,
        rationale: "An adverbial clause modifies a verb and often explains reasons, time, or conditions."
    },
    {
        question: "Which of the following is a relative (adjectival) clause?",
        choice1: "Because she was tired, she left early.",
        choice2: "The girl who won the competition is my cousin.",
        choice3: "If it rains, we will stay inside.",
        choice4: "He left before I arrived.",
        answer: 2,
        rationale: "A relative clause modifies a noun and usually begins with a relative pronoun such as 'who' or 'that'."
    },
    {
        question: "A noun clause functions as:",
        choice1: "An adjective modifying a noun",
        choice2: "A verb in a sentence",
        choice3: "A subject, object, or complement",
        choice4: "An adverb modifying a verb",
        answer: 3,
        rationale: "A noun clause acts as a noun in the sentence, often functioning as a subject, object, or complement."
    },
    {
        question: "Which of the following sentences contains a noun clause?",
        choice1: "I know where he lives.",
        choice2: "She danced gracefully on stage.",
        choice3: "The book that I borrowed was interesting.",
        choice4: "He left because he was tired.",
        answer: 1,
        rationale: "The clause 'where he lives' acts as the object of the verb 'know', making it a noun clause."
    },
    {
        question: "Which of these conjunctions is commonly used to introduce an adverbial clause?",
        choice1: "That",
        choice2: "Because",
        choice3: "Who",
        choice4: "Which",
        answer: 2,
        rationale: "Adverbial clauses often begin with subordinating conjunctions such as 'because', 'although', or 'if'."
    },
    {
        question: "Which clause is used to modify a noun and provides additional information about it?",
        choice1: "Adjectival clause",
        choice2: "Adverbial clause",
        choice3: "Noun clause",
        choice4: "Principal clause",
        answer: 1,
        rationale: "Adjectival (relative) clauses modify nouns and often begin with relative pronouns like 'who' or 'which'."
    },
    {
        question: "What role does an adverbial clause play in a sentence?",
        choice1: "It modifies a noun",
        choice2: "It acts as a subject or object",
        choice3: "It modifies a verb, adjective, or another adverb",
        choice4: "It provides a complete thought on its own",
        answer: 3,
        rationale: "Adverbial clauses function as adverbs, modifying verbs, adjectives, or other adverbs."
    },
    {
        question: "Which of the following is NOT a stage of writing?",
        choice1: "Pre-Writing",
        choice2: "Writing",
        choice3: "Proofreading",
        choice4: "Listening",
        answer: 4,
        rationale: "Listening is not part of the writing process; it is unrelated to writing stages."
    },
    {
        question: "What is the main goal of pre-writing?",
        choice1: "Correcting grammatical errors",
        choice2: "Organizing ideas and gathering materials",
        choice3: "Writing the final draft",
        choice4: "Adding unnecessary details",
        answer: 2,
        rationale: "Pre-writing focuses on brainstorming, organizing thoughts, and preparing content before drafting."
    },
    {
        question: "Which type of essay is used to argue a point?",
        choice1: "Narrative",
        choice2: "Descriptive",
        choice3: "Argumentative",
        choice4: "Expository",
        answer: 3,
        rationale: "An argumentative essay presents a position and supports it with evidence and reasoning."
    },
    {
        question: "What is the purpose of structural editing?",
        choice1: "Checking for coherence and organization",
        choice2: "Correcting spelling errors",
        choice3: "Adding more information",
        choice4: "Making the essay longer",
        answer: 1,
        rationale: "Structural editing ensures logical flow, clarity, and coherence in a written work."
    },
    {
        question: "What should a well-structured essay contain?",
        choice1: "A topic sentence only",
        choice2: "An introduction, body, and conclusion",
        choice3: "Several unrelated paragraphs",
        choice4: "Only long sentences",
        answer: 2,
        rationale: "A well-structured essay consists of three main parts: introduction, body, and conclusion."
    },
    {
        question: "Which of the following is an essential writing skill?",
        choice1: "Using complicated words to sound intelligent",
        choice2: "Writing clearly and concisely",
        choice3: "Avoiding all forms of punctuation",
        choice4: "Making sentences as long as possible",
        answer: 2,
        rationale: "Clear and concise writing enhances readability and communication."
    },
    {
        question: "What is the main purpose of proofreading?",
        choice1: "Checking for errors and improving clarity",
        choice2: "Rewriting the entire essay",
        choice3: "Adding new ideas",
        choice4: "Removing all punctuation marks",
        answer: 1,
        rationale: "Proofreading involves reviewing a document to correct grammar, spelling, and clarity issues."
    },
    {
        question: "What is the function of the conclusion in an essay?",
        choice1: "Introducing new ideas",
        choice2: "Summarizing key points and closing the discussion",
        choice3: "Expanding the introduction",
        choice4: "Listing all the sources used",
        answer: 2,
        rationale: "A conclusion reinforces key points and provides a final perspective on the topic."
    },
    {
        question: "Which of the following is NOT a type of formal writing?",
        choice1: "Business letters",
        choice2: "Technical reports",
        choice3: "Social media posts",
        choice4: "Research papers",
        answer: 3,
        rationale: "Social media posts are generally informal and do not follow strict writing conventions."
    },
    {
        question: "Why is logical progression important in writing?",
        choice1: "It makes the essay longer",
        choice2: "It helps the reader understand the flow of ideas",
        choice3: "It makes the writing complex",
        choice4: "It removes the need for paragraphs",
        answer: 2,
        rationale: "Logical progression ensures ideas are presented in a clear and structured manner."
    },
    {
        question: "Which of the following best defines an expository essay?",
        choice1: "A story based on personal experience",
        choice2: "A piece of writing that explains or informs",
        choice3: "A written argument with opinions",
        choice4: "A poetic composition",
        answer: 2,
        rationale: "Expository essays provide explanations or information without personal bias."
    },
    {
        question: "Which of these is NOT a step in the editing process?",
        choice1: "Checking for spelling errors",
        choice2: "Improving sentence structure",
        choice3: "Writing new ideas",
        choice4: "Ensuring coherence",
        answer: 3,
        rationale: "Editing involves refining existing content, not adding new ideas."
    },
    {
        question: "Which part of an essay introduces the thesis statement?",
        choice1: "The conclusion",
        choice2: "The introduction",
        choice3: "The body paragraphs",
        choice4: "The references section",
        answer: 2,
        rationale: "The thesis statement is typically presented in the introduction to guide the essay's focus."
    },
    {
        question: "What is the role of a topic sentence in a paragraph?",
        choice1: "To introduce the main idea of the paragraph",
        choice2: "To conclude the entire essay",
        choice3: "To cite a source",
        choice4: "To provide additional examples",
        answer: 1,
        rationale: "A topic sentence gives the main idea of a paragraph, guiding its content."
    },
    {
        question: "Which of the following is an example of a transition word?",
        choice1: "Quickly",
        choice2: "Moreover",
        choice3: "Apple",
        choice4: "Running",
        answer: 2,
        rationale: "Transition words like 'Moreover' help connect ideas smoothly."
    },
    {
        question: "What does coherence in writing mean?",
        choice1: "Using a lot of punctuation",
        choice2: "Organizing ideas logically and smoothly",
        choice3: "Writing in complex language",
        choice4: "Making sentences unnecessarily long",
        answer: 2,
        rationale: "Coherence ensures that ideas flow logically and are easy to follow."
    },
    {
        question: "Which of these is an informal writing feature?",
        choice1: "Use of contractions like 'can't'",
        choice2: "Avoiding slang",
        choice3: "Following strict grammar rules",
        choice4: "Using citations",
        answer: 1,
        rationale: "Informal writing often includes contractions and casual language."
    },
    {
        question: "What is the purpose of a citation in writing?",
        choice1: "To make the text longer",
        choice2: "To give credit to sources",
        choice3: "To decorate the essay",
        choice4: "To confuse the reader",
        answer: 2,
        rationale: "Citations acknowledge the sources of information and prevent plagiarism."
    },
    {
        question: "Which of these is a correct formal writing rule?",
        choice1: "Using emojis",
        choice2: "Writing in short, incomplete sentences",
        choice3: "Using proper grammar and avoiding slang",
        choice4: "Mixing formal and informal styles",
        answer: 3,
        rationale: "Formal writing follows grammar rules and avoids slang or informal expressions."
    },
    {
        question: "Which of the following is an example of plagiarism?",
        choice1: "Summarizing a source in your own words and citing it",
        choice2: "Copying another person’s work without credit",
        choice3: "Using a citation for a direct quote",
        choice4: "Writing an original essay",
        answer: 2,
        rationale: "Plagiarism is using someone else's work without giving proper credit."
    },
    {
        question: "\"Having something to say and saying it clearly as you can\" is advised by which scholar?",
        choice1: "Matthew Arnold",
        choice2: "Professor Abdullahi Kadir",
        choice3: "Aristotle",
        choice4: "Geoffrey K.",
        answer: 1,
        rationale: "Matthew Arnold emphasized clear and effective communication in writing."
    },
    {
        question: "The dominant characteristics of writings are __",
        choice1: "Audience, writer, and listener",
        choice2: "Subject, matter, and object",
        choice3: "Audience, writer, and purpose",
        choice4: "Audience, subject matter, and purpose",
        answer: 4,
        rationale: "Effective writing considers audience, subject matter, and purpose to communicate ideas clearly."
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
let durationInMinutes = 35;
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
