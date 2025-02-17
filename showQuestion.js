

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
        question: "Which of the following is an example of a fricative consonant?",
        choice1: "/p/",
        choice2: "/t/",
        choice3: "/s/",
        choice4: "/m/",
        answer: "/s/",
        rationale: "/s/ is a fricative consonant because it is produced by forcing air through a narrow channel, creating a hissing sound."
    },
    {
        question: "What is the primary function of a pronoun?",
        choice1: "To describe a noun",
        choice2: "To replace a noun",
        choice3: "To modify a verb",
        choice4: "To connect clauses",
        answer: "To replace a noun",
        rationale: "Pronouns (e.g., 'he,' 'she,' 'it') replace nouns to avoid repetition."
    },
    {
        question: "Which of the following is an example of a nasal consonant?",
        choice1: "/b/",
        choice2: "/d/",
        choice3: "/n/",
        choice4: "/k/",
        answer: "/n/",
        rationale: "/n/ is a nasal consonant because it is produced by allowing air to escape through the nose."
    },
    {
        question: "What is the purpose of a topic sentence in a paragraph?",
        choice1: "To conclude the paragraph",
        choice2: "To introduce the main idea of the paragraph",
        choice3: "To provide evidence",
        choice4: "To summarize the essay",
        answer: "To introduce the main idea of the paragraph",
        rationale: "A topic sentence introduces the main idea or focus of the paragraph."
    },
    {
        question: "Which of the following is an example of a compound sentence?",
        choice1: "She ran quickly.",
        choice2: "She ran, and he walked.",
        choice3: "Because she ran, she was tired.",
        choice4: "Running quickly, she won the race.",
        answer: "She ran, and he walked.",
        rationale: "A compound sentence consists of two independent clauses joined by a coordinating conjunction (e.g., 'and')."
    },
    {
        question: "What is the role of an adverb in a sentence?",
        choice1: "To replace a noun",
        choice2: "To modify a verb, adjective, or another adverb",
        choice3: "To connect clauses",
        choice4: "To describe a noun",
        answer: "To modify a verb, adjective, or another adverb",
        rationale: "Adverbs (e.g., 'quickly,' 'very') modify verbs, adjectives, or other adverbs."
    },
    {
        question: "Which of the following is an example of a vowel sound?",
        choice1: "/b/",
        choice2: "/k/",
        choice3: "/i/",
        choice4: "/s/",
        answer: "/i/",
        rationale: "/i/ is a vowel sound because it is produced without blocking the airflow."
    },
    {
        question: "What is the purpose of a conclusion in an essay?",
        choice1: "To introduce new ideas",
        choice2: "To summarize the main points and restate the thesis",
        choice3: "To provide evidence",
        choice4: "To list references",
        answer: "To summarize the main points and restate the thesis",
        rationale: "The conclusion summarizes the main points and restates the thesis to provide closure."
    },
    {
        question: "Which of the following is an example of a descriptive essay?",
        choice1: "An argumentative essay",
        choice2: "A story about a personal experience",
        choice3: "A detailed description of a place",
        choice4: "A research paper",
        answer: "A detailed description of a place",
        rationale: "A descriptive essay focuses on providing a detailed description of a person, place, or thing."
    },
    {
        question: "What is the primary function of an adjective?",
        choice1: "To replace a noun",
        choice2: "To describe or modify a noun",
        choice3: "To connect clauses",
        choice4: "To express action",
        answer: "To describe or modify a noun",
        rationale: "Adjectives (e.g., 'beautiful,' 'large') describe or modify nouns."
    },
    {
        question: "Which of the following is an example of a plosive consonant?",
        choice1: "/s/",
        choice2: "/m/",
        choice3: "/t/",
        choice4: "/f/",
        answer: "/t/",
        rationale: "/t/ is a plosive consonant because it is produced by completely blocking airflow and then releasing it."
    },
    {
        question: "What is the purpose of brainstorming in the pre-writing stage?",
        choice1: "To edit the final draft",
        choice2: "To generate ideas and gather information",
        choice3: "To write the conclusion",
        choice4: "To proofread for errors",
        answer: "To generate ideas and gather information",
        rationale: "Brainstorming helps generate ideas and gather information before writing."
    },
    {
        question: "Which of the following is an example of an indefinite article?",
        choice1: "The",
        choice2: "A",
        choice3: "This",
        choice4: "That",
        answer: "A",
        rationale: "The word 'a' is an indefinite article because it refers to a nonspecific noun."
    },
    {
        question: "What is the role of a relative pronoun in a sentence?",
        choice1: "To connect clauses and refer to a noun",
        choice2: "To modify a verb",
        choice3: "To describe a noun",
        choice4: "To replace a noun",
        answer: "To connect clauses and refer to a noun",
        rationale: "Relative pronouns (e.g., 'who,' 'which') connect clauses and refer to a noun mentioned earlier."
    },
    {
        question: "Which of the following is an example of a complex sentence?",
        choice1: "She ran quickly.",
        choice2: "She ran, and he walked.",
        choice3: "Because she ran, she was tired.",
        choice4: "Running quickly, she won the race.",
        answer: "Because she ran, she was tired.",
        rationale: "A complex sentence contains one independent clause and one or more dependent clauses."
    },
    {
        question: "What is the purpose of a hook in an essay introduction?",
        choice1: "To summarize the essay",
        choice2: "To grab the reader's attention",
        choice3: "To provide evidence",
        choice4: "To conclude the essay",
        answer: "To grab the reader's attention",
        rationale: "A hook is used to grab the reader's attention at the beginning of an essay."
    },
    {
        question: "Which of the following is an example of an auxiliary verb?",
        choice1: "Run",
        choice2: "Be",
        choice3: "Quickly",
        choice4: "Beautiful",
        answer: "Be",
        rationale: "The word 'be' is an auxiliary verb because it helps the main verb express tense, mood, or voice."
    },
    {
        question: "What is the primary function of a conjunction?",
        choice1: "To replace a noun",
        choice2: "To connect words, phrases, or clauses",
        choice3: "To modify a verb",
        choice4: "To describe a noun",
        answer: "To connect words, phrases, or clauses",
        rationale: "Conjunctions (e.g., 'and,' 'but,' 'because') connect words, phrases, or clauses."
    },
    {
        question: "Which of the following is a voiceless consonant?",
        choice1: "/b/",
        choice2: "/d/",
        choice3: "/p/",
        choice4: "/g/",
        answer: "/p/",
        rationale: "/p/ is a voiceless consonant because it is produced without vibration of the vocal cords."
    },
    {
        question: "Which vowel is a high front vowel?",
        choice1: "/a/",
        choice2: "/i/",
        choice3: "/u/",
        choice4: "/o/",
        answer: "/i/",
        rationale: "/i/ is a high front vowel because the tongue is positioned high and at the front of the mouth."
    },
    {
        question: "Which of the following is an example of a diphthong?",
        choice1: "/e/",
        choice2: "/aɪ/",
        choice3: "/ɪ/",
        choice4: "/ʊ/",
        answer: "/aɪ/",
        rationale: "/aɪ/ is a diphthong because it involves a smooth transition between two vowel sounds within the same syllable."
    },
    {
        question: "What is the primary function of a preposition?",
        choice1: "To connect clauses",
        choice2: "To describe a noun",
        choice3: "To show the relationship between a noun and another word",
        choice4: "To replace a noun",
        answer: "To show the relationship between a noun and another word",
        rationale: "Prepositions show relationships between nouns (or pronouns) and other words in a sentence, such as direction, location, or time."
    },
    {
        question: "Which of the following is a coordinating conjunction?",
        choice1: "Although",
        choice2: "Because",
        choice3: "And",
        choice4: "Unless",
        answer: "And",
        rationale: "The word 'and' is a coordinating conjunction because it connects words, phrases, or clauses of equal importance."
    },
    {
        question: "What is the purpose of an auxiliary verb?",
        choice1: "To replace a noun",
        choice2: "To modify a noun",
        choice3: "To help the main verb express tense, mood, or voice",
        choice4: "To connect two clauses",
        answer: "To help the main verb express tense, mood, or voice",
        rationale: "Auxiliary verbs (e.g., 'is,' 'have,' 'will') help the main verb express tense, mood, or voice."
    },
    {
        question: "Which of the following is an example of a definite article?",
        choice1: "A",
        choice2: "An",
        choice3: "The",
        choice4: "Some",
        answer: "The",
        rationale: "The word 'the' is a definite article because it refers to a specific noun."
    },
    {
        question: "What is the role of a qualifier in a sentence?",
        choice1: "To replace a noun",
        choice2: "To modify or limit the meaning of another word",
        choice3: "To connect clauses",
        choice4: "To express action",
        answer: "To modify or limit the meaning of another word",
        rationale: "Qualifiers (e.g., 'very,' 'somewhat') modify or limit the meaning of adjectives, adverbs, or verbs."
    },
    {
        question: "Which of the following is an example of a possessive pronoun?",
        choice1: "He",
        choice2: "She",
        choice3: "His",
        choice4: "They",
        answer: "His",
        rationale: "The word 'his' is a possessive pronoun because it shows ownership."
    },
    {
        question: "What is the primary purpose of pre-writing in the writing process?",
        choice1: "To edit the final draft",
        choice2: "To generate ideas and plan the structure",
        choice3: "To write the conclusion",
        choice4: "To proofread for errors",
        answer: "To generate ideas and plan the structure",
        rationale: "Pre-writing involves brainstorming, outlining, and organizing ideas before drafting."
    },
    {
        question: "Which of the following is a characteristic of a formal essay?",
        choice1: "Use of slang and informal language",
        choice2: "Clear structure with an introduction, body, and conclusion",
        choice3: "Personal anecdotes as the main evidence",
        choice4: "Lack of a thesis statement",
        answer: "Clear structure with an introduction, body, and conclusion",
        rationale: "A formal essay has a clear structure, including an introduction, body paragraphs, and a conclusion."
    },
    {
        question: "What is the purpose of post-writing activities?",
        choice1: "To brainstorm ideas",
        choice2: "To revise and polish the draft",
        choice3: "To write the first draft",
        choice4: "To ignore errors",
        answer: "To revise and polish the draft",
        rationale: "Post-writing involves revising, editing, and proofreading to improve the draft."
    },
    {
        question: "Which of the following is an example of creative writing?",
        choice1: "A research paper",
        choice2: "A business report",
        choice3: "A poem",
        choice4: "A news article",
        answer:  "A poem",
        rationale: "Creative writing includes imaginative works like poems, stories, and plays."
    },
    {
        question: "What is the role of a modifier in a sentence?",
        choice1: "To replace a noun",
        choice2: "To describe or add detail to another word",
        choice3: "To connect clauses",
        choice4: "To express action",
        answer: "To describe or add detail to another word",
        rationale: "Modifiers (e.g., adjectives, adverbs) provide additional information about other words."
    },
    {
        question: "Which of the following is an example of a subordinating conjunction?",
        choice1: "And",
        choice2: "But",
        choice3: "Because",
        choice4: "Or",
        answer: "Because",
        rationale: "The word 'because' is a subordinating conjunction because it connects a dependent clause to an independent clause."
    },
    {
        question: "What is the primary function of an article in a sentence?",
        choice1: "To replace a noun",
        choice2: "To modify a verb",
        choice3: "To specify or generalize a noun",
        choice4: "To connect clauses",
        answer: "To specify or generalize a noun",
        rationale: "Articles (e.g., 'a,' 'an,' 'the') specify or generalize the noun they precede."
    },
    {
        question: "Which of the following is an example of a personal pronoun?",
        choice1: "This",
        choice2: "Who",
        choice3: "She",
        choice4: "Which",
        answer: "She",
        rationale: "The word 'she' is a personal pronoun because it refers to a specific person."
    },
    {
        question: "What is the purpose of a thesis statement in an essay?",
        choice1: "To summarize the essay",
        choice2: "To introduce the main argument or focus",
        choice3: "To provide evidence",
        choice4: "To conclude the essay",
        answer: "To introduce the main argument or focus",
        rationale: "A thesis statement presents the main argument or focus of the essay."
    },
    {
        question: "Which of the following is an example of a narrative essay?",
        choice1: "An argumentative essay",
        choice2: "A descriptive essay",
        choice3: "A story about a personal experience",
        choice4: "A research paper",
        answer: "A story about a personal experience",
        rationale: "A narrative essay tells a story, often based on personal experiences."
    },
    {
        question: "What is the role of a conjunction in a sentence?",
        choice1: "To replace a noun",
        choice2: "To connect words, phrases, or clauses",
        choice3: "To modify a verb",
        choice4: "To describe a noun",
        answer: "To connect words, phrases, or clauses",
        rationale: "Conjunctions (e.g., 'and,' 'but,' 'because') connect words, phrases, or clauses."
    },
    {
        question: "Which reading strategy focuses on reducing inner speech to increase reading speed?",
        choice1: "Eye regression",
        choice2: "Sub-vocalization",
        choice3: "Previewing",
        choice4: "Skimming",
        answer: "Sub-vocalization",
        rationale: "Sub-vocalization is the habit of silently pronouncing words while reading, which slows down reading speed."
    },
    {
        question: "Intensive reading focuses on:",
        choice1: "Understanding overall themes in a text",
        choice2: "Detailed analysis of grammar and vocabulary",
        choice3: "Reading for pleasure",
        choice4: "Reading at a fast pace to improve fluency",
        answer: "Detailed analysis of grammar and vocabulary",
        rationale: "Intensive reading involves careful examination of grammar and vocabulary to understand language structure."
    },
    {
        question: "Which reading approach involves reading a large amount of text to grasp the general meaning?",
        choice1: "Intensive reading",
        choice2: "Sub-vocalization",
        choice3: "Extensive reading",
        choice4: "Regression reading",
        answer: "Extensive reading",
        rationale: "Extensive reading emphasizes comprehension of overall themes rather than focusing on detailed analysis."
    },
    {
        question: "Which of the following is an example of a principal (independent) clause?",
        choice1: "Because she was late, she missed the meeting.",
        choice2: "She missed the meeting.",
        choice3: "Although he tried his best, he lost the race.",
        choice4: "If the weather improves, we will go out.",
        answer: "She missed the meeting.",
        rationale: "An independent clause can stand alone as a complete sentence, unlike dependent clauses."
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
        question: "What type of clause is in the sentence: 'He was late because he missed the bus'?",
        choice1: "Noun clause",
        choice2: "Adverbial clause",
        choice3: "Adjectival clause",
        choice4: "Principal clause",
        answer: "Adverbial clause",
        rationale: "The clause 'because he missed the bus' explains the reason for the action, making it an adverbial clause."
    },
    {
        question: "Which of the following best describes the role of ICT in language learning?",
        choice1: "It replaces traditional teaching methods entirely",
        choice2: "It enhances interaction and personalized learning",
        choice3: "It eliminates the need for teachers",
        choice4: "It focuses only on multimedia content delivery",
        answer: "It enhances interaction and personalized learning",
        rationale: "ICT supports interactive and adaptive learning, making language acquisition more personalized and engaging."
    },
    {
        question: "Which ICT tool is specifically designed to provide automated feedback and evaluation in language learning?",
        choice1: "Learning Management Systems (LMS)",
        choice2: "Multimedia content creators",
        choice3: "Social media platforms",
        choice4: "Virtual keyboards",
        answer: "Learning Management Systems (LMS)",
        rationale: "LMS platforms integrate assessment and feedback tools to track and evaluate language learners' progress."
    },
    {
        question: "Artificial Intelligence in language learning primarily enhances which aspect?",
        choice1: "Replacing teachers with AI tutors",
        choice2: "Creating static learning materials",
        choice3: "Providing adaptive learning experiences based on user performance",
        choice4: "Standardizing teaching methods for all students",
        answer: "Providing adaptive learning experiences based on user performance",
        rationale: "AI-driven tools analyze user data to offer personalized learning paths, adapting to the learner’s needs."
    },
    {
        question: "Which of the following is NOT a direct advantage of ICT in education?",
        choice1: "Increased accessibility to learning resources",
        choice2: "Instant feedback and assessment",
        choice3: "Complete elimination of classroom learning",
        choice4: "Enhanced multimedia engagement",
        answer: "Complete elimination of classroom learning",
        rationale: "ICT supplements traditional learning but does not entirely replace physical classroom settings."
    },
    {
        question: "Which of these is a major disadvantage of ICT in modern learning?",
        choice1: "It restricts student collaboration",
        choice2: "Over-reliance on technology may reduce critical thinking skills",
        choice3: "It completely removes human interaction",
        choice4: "It eliminates the need for teacher evaluation",
        answer: "Over-reliance on technology may reduce critical thinking skills",
        rationale: "Students may become too dependent on digital solutions, affecting independent problem-solving skills."
    },
    {
        question: "Which reading strategy focuses on reducing inner speech to increase reading speed?",
        choice1: "Eye regression",
        choice2: "Sub-vocalization",
        choice3: "Previewing",
        choice4: "Skimming",
        answer: "Sub-vocalization",
        rationale: "Sub-vocalization is the habit of silently pronouncing words while reading, which slows down reading speed."
    },
    {
        question: "Eye regression during reading refers to:",
        choice1: "Looking back at previously read text",
        choice2: "Reading a text out loud",
        choice3: "Scanning for keywords",
        choice4: "Using external notes while reading",
        answer: "Looking back at previously read text",
        rationale: "Eye regression occurs when readers look back at words they have already read, often slowing comprehension."
    },
    {
        question: "Which of the following is a characteristic of extensive reading?",
        choice1: "Focusing on grammatical structures",
        choice2: "Reading for detailed comprehension",
        choice3: "Reading large amounts for general understanding",
        choice4: "Analyzing vocabulary deeply",
        answer: "Reading large amounts for general understanding",
        rationale: "Extensive reading involves consuming a large volume of text to develop fluency and overall comprehension."
    },
    {
        question: "Which of these is an example of an independent (principal) clause?",
        choice1: "Because she was late, she missed the meeting.",
        choice2: "She missed the meeting.",
        choice3: "Although he tried his best, he lost the race.",
        choice4: "If the weather improves, we will go out.",
        answer: "She missed the meeting.",
        rationale: "An independent clause can stand alone as a complete sentence, unlike dependent clauses."
    },
    {
        question: "What distinguishes a dependent (subordinate) clause from an independent clause?",
        choice1: "It always contains a subject and a verb",
        choice2: "It can stand alone as a sentence",
        choice3: "It requires an independent clause to make sense",
        choice4: "It never contains a verb",
        answer: "It requires an independent clause to make sense",
        rationale: "A dependent clause does not express a complete thought and must be attached to an independent clause."
    },
    {
        question: "Which of the following is an example of an adverbial clause?",
        choice1: "The book that she borrowed was interesting.",
        choice2: "She left the party because she was tired.",
        choice3: "The person who called you is my friend.",
        choice4: "I need to know where he went.",
        answer: "She left the party because she was tired.",
        rationale: "An adverbial clause modifies a verb and often explains reasons, time, or conditions."
    },
    {
        question: "Which of the following is a relative (adjectival) clause?",
        choice1: "Because she was tired, she left early.",
        choice2: "The girl who won the competition is my cousin.",
        choice3: "If it rains, we will stay inside.",
        choice4: "He left before I arrived.",
        answer: "The girl who won the competition is my cousin.",
        rationale: "A relative clause modifies a noun and usually begins with a relative pronoun such as 'who' or 'that'."
    },
    {
        question: "A noun clause functions as:",
        choice1: "An adjective modifying a noun",
        choice2: "A verb in a sentence",
        choice3: "A subject, object, or complement",
        choice4: "An adverb modifying a verb",
        answer: "A subject, object, or complement",
        rationale: "A noun clause acts as a noun in the sentence, often functioning as a subject, object, or complement."
    },
    {
        question: "Which of the following sentences contains a noun clause?",
        choice1: "I know where he lives.",
        choice2: "She danced gracefully on stage.",
        choice3: "The book that I borrowed was interesting.",
        choice4: "He left because he was tired.",
        answer: "I know where he lives.",
        rationale: "The clause 'where he lives' acts as the object of the verb 'know', making it a noun clause."
    },
    {
        question: "Which of these conjunctions is commonly used to introduce an adverbial clause?",
        choice1: "That",
        choice2: "Because",
        choice3: "Who",
        choice4: "Which",
        answer: "Because",
        rationale: "Adverbial clauses often begin with subordinating conjunctions such as 'because', 'although', or 'if'."
    },
    {
        question: "Which clause is used to modify a noun and provides additional information about it?",
        choice1: "Adjectival clause",
        choice2: "Adverbial clause",
        choice3: "Noun clause",
        choice4: "Principal clause",
        answer: "Adjectival clause",
        rationale: "Adjectival (relative) clauses modify nouns and often begin with relative pronouns like 'who' or 'which'."
    },
    {
        question: "What role does an adverbial clause play in a sentence?",
        choice1: "It modifies a noun",
        choice2: "It acts as a subject or object",
        choice3: "It modifies a verb, adjective, or another adverb",
        choice4: "It provides a complete thought on its own",
        answer: "It modifies a verb, adjective, or another adverb",
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
        answer: "Argumentative",
        rationale: "An argumentative essay presents a position and supports it with evidence and reasoning."
    },
    {
        question: "What is the purpose of structural editing?",
        choice1: "Checking for coherence and organization",
        choice2: "Correcting spelling errors",
        choice3: "Adding more information",
        choice4: "Making the essay longer",
        answer: "Checking for coherence and organization",
        rationale: "Structural editing ensures logical flow, clarity, and coherence in a written work."
    },
    {
        question: "What should a well-structured essay contain?",
        choice1: "A topic sentence only",
        choice2: "An introduction, body, and conclusion",
        choice3: "Several unrelated paragraphs",
        choice4: "Only long sentences",
        answer: "An introduction, body, and conclusion",
        rationale: "A well-structured essay consists of three main parts: introduction, body, and conclusion."
    },
    {
        question: "Which of the following is an essential writing skill?",
        choice1: "Using complicated words to sound intelligent",
        choice2: "Writing clearly and concisely",
        choice3: "Avoiding all forms of punctuation",
        choice4: "Making sentences as long as possible",
        answer: "Writing clearly and concisely",
        rationale: "Clear and concise writing enhances readability and communication."
    },
    {
        question: "What is the main purpose of proofreading?",
        choice1: "Checking for errors and improving clarity",
        choice2: "Rewriting the entire essay",
        choice3: "Adding new ideas",
        choice4: "Removing all punctuation marks",
        answer: "Checking for errors and improving clarity",
        rationale: "Proofreading involves reviewing a document to correct grammar, spelling, and clarity issues."
    },
    {
        question: "What is the function of the conclusion in an essay?",
        choice1: "Introducing new ideas",
        choice2: "Summarizing key points and closing the discussion",
        choice3: "Expanding the introduction",
        choice4: "Listing all the sources used",
        answer: "Summarizing key points and closing the discussion",
        rationale: "A conclusion reinforces key points and provides a final perspective on the topic."
    },
    {
        question: "Which of the following is NOT a type of formal writing?",
        choice1: "Business letters",
        choice2: "Technical reports",
        choice3: "Social media posts",
        choice4: "Research papers",
        answer: "Social media posts",
        rationale: "Social media posts are generally informal and do not follow strict writing conventions."
    },
    {
        question: "Why is logical progression important in writing?",
        choice1: "It makes the essay longer",
        choice2: "It helps the reader understand the flow of ideas",
        choice3: "It makes the writing complex",
        choice4: "It removes the need for paragraphs",
        answer: "It helps the reader understand the flow of ideas",
        rationale: "Logical progression ensures ideas are presented in a clear and structured manner."
    },
    {
        question: "Which of the following best defines an expository essay?",
        choice1: "A story based on personal experience",
        choice2: "A piece of writing that explains or informs",
        choice3: "A written argument with opinions",
        choice4: "A poetic composition",
        answer: "A piece of writing that explains or informs",
        rationale: "Expository essays provide explanations or information without personal bias."
    },
    {
        question: "Which of these is NOT a step in the editing process?",
        choice1: "Checking for spelling errors",
        choice2: "Improving sentence structure",
        choice3: "Writing new ideas",
        choice4: "Ensuring coherence",
        answer: "Writing new ideas",
        rationale: "Editing involves refining existing content, not adding new ideas."
    },
    {
        question: "Which part of an essay introduces the thesis statement?",
        choice1: "The conclusion",
        choice2: "The introduction",
        choice3: "The body paragraphs",
        choice4: "The references section",
        answer: "The introduction",
        rationale: "The thesis statement is typically presented in the introduction to guide the essay's focus."
    },
    {
        question: "What is the role of a topic sentence in a paragraph?",
        choice1: "To introduce the main idea of the paragraph",
        choice2: "To conclude the entire essay",
        choice3: "To cite a source",
        choice4: "To provide additional examples",
        answer: "To introduce the main idea of the paragraph",
        rationale: "A topic sentence gives the main idea of a paragraph, guiding its content."
    },
    {
        question: "Which of the following is an example of a transition word?",
        choice1: "Quickly",
        choice2: "Moreover",
        choice3: "Apple",
        choice4: "Running",
        answer: "Moreover",
        rationale: "Transition words like 'Moreover' help connect ideas smoothly."
    },
    {
        question: "What does coherence in writing mean?",
        choice1: "Using a lot of punctuation",
        choice2: "Organizing ideas logically and smoothly",
        choice3: "Writing in complex language",
        choice4: "Making sentences unnecessarily long",
        answer: "Organizing ideas logically and smoothly",
        rationale: "Coherence ensures that ideas flow logically and are easy to follow."
    },
    {
        question: "Which of these is an informal writing feature?",
        choice1: "Use of contractions like 'can't'",
        choice2: "Avoiding slang",
        choice3: "Following strict grammar rules",
        choice4: "Using citations",
        answer: "Use of contractions like 'can't'",
        rationale: "Informal writing often includes contractions and casual language."
    },
    {
        question: "What is the purpose of a citation in writing?",
        choice1: "To make the text longer",
        choice2: "To give credit to sources",
        choice3: "To decorate the essay",
        choice4: "To confuse the reader",
        answer: "To give credit to sources",
        rationale: "Citations acknowledge the sources of information and prevent plagiarism."
    },
    {
        question: "Which of these is a correct formal writing rule?",
        choice1: "Using emojis",
        choice2: "Writing in short, incomplete sentences",
        choice3: "Using proper grammar and avoiding slang",
        choice4: "Mixing formal and informal styles",
        answer: "Using proper grammar and avoiding slang",
        rationale: "Formal writing follows grammar rules and avoids slang or informal expressions."
    },
    {
        question: "Which of the following is an example of plagiarism?",
        choice1: "Summarizing a source in your own words and citing it",
        choice2: "Copying another person’s work without credit",
        choice3: "Using a citation for a direct quote",
        choice4: "Writing an original essay",
        answer: "Copying another person’s work without credit",
        rationale: "Plagiarism is using someone else's work without giving proper credit."
    },
    {
        question: "\"Having something to say and saying it clearly as you can\" is advised by which scholar?",
        choice1: "Matthew Arnold",
        choice2: "Professor Abdullahi Kadir",
        choice3: "Aristotle",
        choice4: "Geoffrey K.",
        answer: "Matthew Arnold",
        rationale: "Matthew Arnold emphasized clear and effective communication in writing."
    },
    {
        question: "The dominant characteristics of writings are __",
        choice1: "Audience, writer, and listener",
        choice2: "Subject, matter, and object",
        choice3: "Audience, writer, and purpose",
        choice4: "Audience, subject matter, and purpose",
        answer: "Audience, subject matter, and purpose",
        rationale: "Effective writing considers audience, subject matter, and purpose to communicate ideas clearly."
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
