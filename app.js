/*
 !GENERAL CONSTANTS START 
 */

const formPlaceholder = document.querySelector(`.textBoxClass`);
console.log(formPlaceholder);
const introTextContainer = document.querySelector(`.intro-container`);

const gameContainer = document.querySelector('#game-container');

const selectorContainer = document.querySelector('.selector-container');
const yourNameText = document.querySelector(`.yourName-text`);
const iKnowTheNameBtn = document.querySelector('#iKnowTheNameBtn');
const iKnowTheTeamBtn = document.querySelector('#iKnowTheTeamBtn');

const infoContainer = document.querySelector('.info-container');
const questionNum = document.querySelector('.question-num');
const questionCount = document.querySelector('.question-count');
const sectionText = document.querySelector('.section-text');
const questionText = document.querySelector('.question-text');

const optionAText = document.querySelector(`#option-a`);
const optionBText = document.querySelector(`#option-b`);
const optionCText = document.querySelector(`#option-c`);
const optionDText = document.querySelector(`#option-d`);

const optionARadioCheck = document.querySelector('#a');
const optionBRadioCheck = document.querySelector('#b');
const optionCRadioCheck = document.querySelector('#c');
const optionDRadioCheck = document.querySelector('#d');

const pointsContainer = document.querySelector('.points-container');
const pointsCounter = document.querySelector('.points-counter');
const yourAnswerContainer = document.querySelector('.yourAnswer-container');
const correctAnswerContainer = document.querySelector('.correctAnswer-container');
const correctAnswerText = document.querySelector('.correctAnswer-text');

const historyContainer = document.querySelector('.history-container');
const commentText = document.querySelector('.comment-text');

const answerBtn = document.querySelector('#answerBtn');
const nextBtn = document.querySelector('#nextBtn');
const startBtn = document.querySelector('#startBtn');
const overBtn = document.querySelector('#overBtn');

let yourName;
let pointsSum = 0;
let myLastQuestion = 0;
/*
 !GENERAL CONSTANTS OVER 
 */

/*
 !GENERAL VARIABLES START 
 */
let firstRequestRandom;
let secondRequestRandom;
let howManyQuestionsHaveTheQuiz;

/*
 !GENERAL VARIABLES START 
 */

const objectQuizGame = {
    I_Know_The_Name: [
        {
            section: `I Know The Name`,
            id: 1,
            question: `Who has the nickname of 'The Iceman'?`,
            option_a: `George Gervin`,

            option_b: `Patrick Ewick`,

            option_c: `Shaquil O'neal`,

            option_d: `Larry Bird`,
            answer: `George Gervin`,
            comment: `is an American retired professional basketball player who played in both the American Basketball Association (ABA) and National Basketball Association (NBA) for the Virginia Squires, San Antonio Spurs, and Chicago Bulls. Gervin averaged at least 14 points per game in all 14 of his ABA and NBA seasons, and finished with an NBA career average of 26.2 points per game. In 1996, Gervin was named as one of the 50 Greatest Players in NBA History.`,
        },
        {
            section: `I Know The Name`,
            id: 2,
            question: `What is one of the nicknames of Kobe Bryant?`,
            option_a: `The Iceman`,
            option_b: `The Glove`,
            option_c: `The Black Mamba`,
            option_d: `The Kid`,
            answer: `The Black Mamba`,
            comment: `This nickname is part of the brand atteched to his name`,
        },
        {
            section: `I Know The Name`,
            id: 3,
            question: `Who is the silhouet in the NBA logo?`,
            option_a: `Jerry West`,
            option_b: `Jason Kid`,
            option_c: `Parker`,
            option_d: `Larry bird`,
            answer: `Jerry West`,
            comment: `the NBA logo was created by Alan Siegel in 1969. The logo was well-thought out and it managed to withstand the test of time. It has been around for many years and there is a good chance that the iconic logo will remain for many years to come.`,
        },
    ],
    I_Know_The_Player: [
        {
            section: `I Know The Player`,
            id: 1,
            question: `question one text Demo`,
            option_a: `option a first I Know The Player demo text`,

            option_b: `option b first I Know The Player question demo text`,

            option_c: `option c first I Know The Player question  demo text`,

            option_d: `option d first I Know The Player question  demo text`,

            answer: `option c demo answer`,
            comment: `Text comment first I Know The Player question demo text, this text could be a little more longer than the other text`,
        },
        {
            section: `I Know The Player`,
            id: 2,
            question: `question one text Demo`,
            option_a: `option a second I Know The Player demo text`,

            option_b: `option b second I Know The Player question demo text`,

            option_c: `option c second I Know The Player question  demo text`,

            option_d: `option d second I Know The Player question  demo text`,

            answer: `option d demo answer`,
            comment: `Text comment second I Know The Player question demo text, this text could be a little more longer than the other text`,
        },
        {
            section: `I Know The Player`,
            id: 3,
            question: `question one text Demo`,
            option_a: `option a thirth I Know The Player demo text`,

            option_b: `option b thirth I Know The Player question demo text`,

            option_c: `option c thirth I Know The Player question  demo text`,

            option_d: `option d thirth I Know The Player question  demo text`,

            answer: `option d demo answer`,
            comment: `Text comment thirth I Know The Player question demo text, this text could be a little more longer than the other text`,
        },
    ],
    I_Know_The_Number: [
        {
            id: 1,
            question: `What number wears Kobe Bryant in the begining of his carrer?`,
            option_a: `24`,
            option_b: `9`,
            option_c: `8`,
            option_d: `0`,
            answer: `8`,
            comment: `He use two different numbers in his carrer for the same team, bouth numbers are retired on his honor`,
        },
        {
            id: 2,
            question: `What number wears Michael Jordan in his first retirment return?`,
            option_a: ` 45`,
            option_b: `8`,
            option_c: `23`,
            option_d: `24`,
            answer: `45`,
            comment: `the NBA logo was created by Alan Siegel in 1969. The logo was well-thought out and it managed to withstand the test of time. It has been around for many years and there is a good chance that the iconic logo will remain for many years to come.`,
        },
    ],
};
let currentQuestion = 0;

/*
?THIS IS CONSTANT
*/

/* 
? THIS WHIL BE RANDOM
*/
const firstOptionsList = [`option_a`, `option_b`, `option_c`, `option_d`];

function iKnowTheNameGame() {
    const cloneFirstList = [...firstOptionsList];
    const newCloneList = JSON.parse(JSON.stringify(cloneFirstList));
    console.log(newCloneList);
    const listLength = firstOptionsList.length;
    console.log(listLength);

    let iKnowTheNameSectionSelection = objectQuizGame.I_Know_The_Name;
    let iKnowTheNameCurrentQuestion = iKnowTheNameSectionSelection[currentQuestion];
    let iKnowTheNameSectionName = iKnowTheNameCurrentQuestion.section;
    let iKnowTheNameQuestion = iKnowTheNameCurrentQuestion.question;
    let iKnowTheNameId = iKnowTheNameCurrentQuestion.id;
    let iKnowTheNameCurrentQuestionLength = iKnowTheNameSectionSelection.length;

    const iKnowTheNameAnswer = iKnowTheNameCurrentQuestion.answer;
    const iKnowTheNameComment = iKnowTheNameCurrentQuestion.comment;
    console.log(iKnowTheNameSectionSelection);
    console.log(iKnowTheNameCurrentQuestion);

    selectorContainer.style.display = 'none';
    answerBtn.style.display = 'flex';
    infoContainer.style.display = 'block';
    yourAnswerContainer.style.display = 'block';
    pointsContainer.style.display = 'block';
    sectionText.textContent = iKnowTheNameSectionName;
    questionNum.textContent = iKnowTheNameId;
    questionCount.textContent = iKnowTheNameCurrentQuestionLength;
    questionText.textContent = iKnowTheNameQuestion;
    correctAnswerText.textContent = iKnowTheNameAnswer;
    commentText.textContent = iKnowTheNameComment;

    sectionText.textContent = iKnowTheNameSectionName;
    correctAnswerSelected = correctAnswerText.innerHTML;
    howManyQuestionsHaveTheQuiz = questionCount.innerHTML;
    console.log(correctAnswerSelected);
    myLastQuestion = questionNum.innerHTML;
    console.log(myLastQuestion);

    console.log(`This quiz have ${howManyQuestionsHaveTheQuiz} questions`);
    console.log(`And I am in the ${myLastQuestion} question`);

    /*
     *FIRST RANDOM SERCH START
     */
    function firstSerchSelection() {
        const randomFirstNumberSerch = Math.floor(Math.random() * listLength);
        console.log(randomFirstNumberSerch);
        let firstRequestRandomOption = newCloneList[randomFirstNumberSerch];
        console.log(firstRequestRandomOption);

        const firstSelectionSplice = newCloneList.splice(randomFirstNumberSerch, 1);
        console.log(firstSelectionSplice);
        console.log(newCloneList);
        return firstSelectionSplice;
    }
    const firstRandomSelection = firstSerchSelection();
    console.log(firstRandomSelection);
    let firstSelectionOption = iKnowTheNameCurrentQuestion[firstRandomSelection];
    optionAText.textContent = firstSelectionOption;
    optionARadioCheck.setAttribute('class', firstSelectionOption);

    /*
     *FIRST RANDOM SERCH OVER
     */

    /*
     *SECOND RANDOM SERCH START
     */

    function secondSerchSelection() {
        const secondOptionsList = newCloneList;
        console.log(secondOptionsList);
        const secondListLength = secondOptionsList.length;
        console.log(secondListLength);

        const randomSecondNumberSerch = Math.floor(Math.random() * secondListLength);
        console.log(randomSecondNumberSerch);
        let secondRequestRandomOption = secondOptionsList[randomSecondNumberSerch];
        console.log(secondRequestRandomOption);
        const secondSelectionSplice = secondOptionsList.splice(randomSecondNumberSerch, 1);
        console.log(secondSelectionSplice);
        console.log(secondOptionsList);
        return secondSelectionSplice;
    }

    const secondRandomSelection = secondSerchSelection();
    console.log(secondRandomSelection);
    let secondSelectionOption = iKnowTheNameCurrentQuestion[secondRandomSelection];
    optionBText.textContent = secondSelectionOption;
    optionBRadioCheck.setAttribute('class', secondSelectionOption);
    /*
     *SECOND RANDOM SERCH OVER
     */

    /*
     *THIRTH RANDOM SERCH START
     */
    function thirthSerchSelection() {
        const thirthOptionsList = newCloneList;
        console.log(thirthOptionsList);
        const thirthListLength = thirthOptionsList.length;
        console.log(thirthListLength);

        const randomThirthNumberSerch = Math.floor(Math.random() * thirthListLength);
        console.log(randomThirthNumberSerch);
        let thirthRequestRandomOption = thirthOptionsList[randomThirthNumberSerch];
        console.log(thirthRequestRandomOption);
        const thirthSelectionSplice = thirthOptionsList.splice(randomThirthNumberSerch, 1);
        console.log(thirthSelectionSplice);
        console.log(thirthOptionsList);
        return thirthSelectionSplice;
    }

    const thirthRandomSelection = thirthSerchSelection();
    console.log(thirthRandomSelection);
    let thirthSelectionOption = iKnowTheNameCurrentQuestion[thirthRandomSelection];
    optionCText.textContent = thirthSelectionOption;
    optionCRadioCheck.setAttribute('class', thirthSelectionOption);

    /*
     *THIRTH RANDOM SERCH OVER
     */

    const forthOptionList = newCloneList;
    console.log(forthOptionList);
    const forthRandomSelection = forthOptionList[0];
    console.log(forthRandomSelection);
    let forthSelectionOption = iKnowTheNameCurrentQuestion[forthRandomSelection];
    optionDText.textContent = forthSelectionOption;
    optionDRadioCheck.setAttribute('class', forthSelectionOption);
    /* 
?THIS IS CONSTANT 
*/
}

function startGame() {
    yourName = formPlaceholder.value;
    console.log(yourName);
    introTextContainer.style.display = 'none';
    selectorContainer.style.display = 'flex';
    startBtn.style.display = 'none';
    yourNameText.textContent = yourName;
}
function serchAnswer() {
    console.log(myAnswerSelected);
    correctAnswerContainer.style.display = 'block';
    historyContainer.style.display = 'block';
    answerBtn.style.display = 'none';
    nextBtn.style.display = 'flex';
    if (myAnswerSelected === correctAnswerSelected) {
        yourAnswerText.style.color = 'var(--lightBlue)';
        pointsSum++;
        pointsCounter.textContent = pointsSum;
    } else {
        yourAnswerText.style.color = 'var(--red)';
    }
}

function nextQuestion() {
    if (myLastQuestion === howManyQuestionsHaveTheQuiz) {
        overBtn.style.display = 'flex';
        nextBtn.style.display = 'none';

        historyContainer.style.display = 'none';
        correctAnswerContainer.style.display = 'none';
        yourAnswerText.textContent = '';
    } else {
        currentQuestion++;
        iKnowTheNameGame();
        nextBtn.style.display = 'none';
        correctAnswerContainer.style.display = 'none';

        historyContainer.style.display = 'none';
        yourAnswerText.textContent = '';
    }
}

nextBtn.addEventListener('click', nextQuestion);
answerBtn.addEventListener('click', serchAnswer);
startBtn.addEventListener('click', startGame);
iKnowTheNameBtn.addEventListener('click', iKnowTheNameGame);
