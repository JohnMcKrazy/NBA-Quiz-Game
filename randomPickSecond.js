/*
 !GENERAL CONSTANTS START 
 */

const optionAText = document.querySelector(`.option-a`);
const optionBText = document.querySelector(`.option-b`);
const optionCText = document.querySelector(`.option-c`);
const optionDText = document.querySelector(`.option-d`);

const optionARadioCheck = document.querySelector('#a');
const optionBRadioCheck = document.querySelector('#b');
const optionCRadioCheck = document.querySelector('#c');
const optionDRadioCheck = document.querySelector('#d');

const sectionText = document.querySelector('.section-text');
const questionText = document.querySelector('.question-text');
const correctAnswerText = document.querySelector('.correct-answer-text');
const commentText = document.querySelector('.comment-text');

/*
 !GENERAL CONSTANTS OVER 
 */

/*
 !GENERAL VARIABLES START 
 */
let firstRequestRandom;
let secondRequestRandom;
/*
 !GENERAL VARIABLES START 
 */

const objectQuizGame = [
    [
        {
            section: `I Know The Number`,
            id: 1,
            question: `What number wears Kobe Bryants in the begining of his carrer with Los Angeles Lakers`,
            option_a: `9`,

            option_b: `0`,

            option_c: `24`,

            option_d: `8`,
            answer: `8`,
            comment: `His two numbewrs are retired`,
        },
        {
            section: `I Know The Name`,
            id: 2,
            question: `question one text Demo`,
            option_a: `option a second I Know The Name question demo text`,

            option_b: `option b second I Know The Name question demo text`,

            option_c: `option c second I Know The Name question  demo text`,

            option_d: `option d second I Know The Name question  demo text`,

            answer: `option a demo answer`,
            comment: `Text comment second I Know The Name question demo text, this text could be a little more longer than the other text`,
        },
        {
            section: `I Know The Name`,
            id: 3,
            question: `question one text Demo`,
            option_a: `option a thirth I Know The Name question demo text`,

            option_b: `option b thirth I Know The Name question demo text`,

            option_c: `option c thirth I Know The Name question  demo text`,

            option_d: `option d thirth I Know The Name question  demo text`,

            answer: `option b demo answer`,
            comment: `Text comment thirth I Know The Name question demo text, this text could be a little more longer than the other text`,
        },
    ],
    [
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
];
const threeOptionsList = [`a`, `b`, `c`];
const optionsSecondtListWhitoutA = [`option_b`, `option_c`, `option_d`];

const optionsSecondtListWhitoutB = [`option_a`, `option_c`, `option_d`];

const optionsSecondtListWhitoutC = [`option_a`, `option_b`, `option_d`];

const optionsSecondtListWhitoutD = [`option_a`, `option_b`, `option_c`];

const iKnowTheNameSectionSelection = objectQuizGame[0];
const iKnowTheNameFirstQuestion = iKnowTheNameSectionSelection[0];
const iKnowTheNameSectionName = iKnowTheNameFirstQuestion.section;
const iKnowTheNameQuestion = iKnowTheNameFirstQuestion.question;

const iKnowTheNameAnswer = iKnowTheNameFirstQuestion.answer;
const iKnowTheNameComment = iKnowTheNameFirstQuestion.comment;
console.log(iKnowTheNameSectionSelection);
console.log(iKnowTheNameFirstQuestion);

const optionsFirstList = [`option_a`, `option_b`, `option_c`, `option_d`];
const firstListLength = optionsFirstList.length;
console.log(`El largo de la primera lista es ${firstListLength}`);

/*
!FIRST SERCH RANDOM START
*/
function serchFirstRandom() {
    const randomNumberSelection = Math.floor(firstListLength * Math.random());
    /* console.log(randomNumberSelection); */
    let requestFirstRandom = optionsFirstList[randomNumberSelection];
    /* console.log(requestFirstRandom); */
    return requestFirstRandom;
}
firstRequestRandom = serchFirstRandom();
let writeFirstRandomOption = iKnowTheNameFirstQuestion[firstRequestRandom];
console.log(writeFirstRandomOption);
optionAText.textContent = writeFirstRandomOption;

/*
!FIRST SERCH RANDOM OVER
*/

/*
!SECOND SERCH RANDOM START
*/
function serchSecondRandomWhitoutA() {
    const secondListLength = threeOptionsList.length;
    const randomNumberSelection = Math.floor(secondListLength * Math.random());
    let requestSecondRandomWhitoutA = optionsSecondtListWhitoutA[randomNumberSelection];
    return requestSecondRandomWhitoutA;
}
function serchSecondRandomWhitoutB() {
    const secondListLength = threeOptionsList.length;
    const randomNumberSelection = Math.floor(secondListLength * Math.random());
    let requestSecondRandomWhitoutB = optionsSecondtListWhitoutB[randomNumberSelection];
    return requestSecondRandomWhitoutB;
}
function serchSecondRandomWhitoutC() {
    const secondListLength = threeOptionsList.length;
    const randomNumberSelection = Math.floor(secondListLength * Math.random());
    let requestSecondRandomWhitoutC = optionsSecondtListWhitoutC[randomNumberSelection];
    return requestSecondRandomWhitoutC;
}
function serchSecondRandomWhitoutD() {
    const secondListLength = threeOptionsList.length;
    const randomNumberSelection = Math.floor(secondListLength * Math.random());
    let requestSecondRandomWhitoutD = optionsSecondtListWhitoutD[randomNumberSelection];
    return requestSecondRandomWhitoutD;
}
if (firstRequestRandom === `option_a`) {
    console.log(serchSecondRandomWhitoutA());
    secondRequestRandom = serchSecondRandomWhitoutA();
    let writeSecondRandomOption = iKnowTheNameFirstQuestion[secondRequestRandom];
    optionBText.textContent = writeSecondRandomOption;
} else if (firstRequestRandom === `option_b`) {
    console.log(serchSecondRandomWhitoutB());
    secondRequestRandom = serchSecondRandomWhitoutB();
    let writeSecondRandomOption = iKnowTheNameFirstQuestion[secondRequestRandom];
    optionBText.textContent = writeSecondRandomOption;
} else if (firstRequestRandom === `option_c`) {
    console.log(serchSecondRandomWhitoutC());
    secondRequestRandom = serchSecondRandomWhitoutC();
    let writeSecondRandomOption = iKnowTheNameFirstQuestion[secondRequestRandom];
    optionBText.textContent = writeSecondRandomOption;
} else if (firstRequestRandom === `option_d`) {
    console.log(serchSecondRandomWhitoutD());
    secondRequestRandom = serchSecondRandomWhitoutD();
    let writeSecondRandomOption = iKnowTheNameFirstQuestion[secondRequestRandom];
    optionBText.textContent = writeSecondRandomOption;
}

/*
!SECOND SERCH RANDOM OVER
*/

/*
 !THERTH SERCH RANDOM START 
 */

/*
 !THERTH SERCH RANDOM START 
 */

/*
?THIS IS CONSTANT
*/
sectionText.textContent = iKnowTheNameSectionName;
questionText.textContent = iKnowTheNameQuestion;

/* 
? THIS WHIL BE RANDOM








 */

/* 
?THIS IS CONSTANT 
*/

correctAnswerText.textContent = iKnowTheNameAnswer;
commentText.textContent = iKnowTheNameComment;
