import blueCardsData from './data/mythicCards/blue/index.js';
import brownCardsData from './data/mythicCards/brown/index.js';
import greenCardsData from './data/mythicCards/green/index.js';
import ancientsData from './data/ancients.js';

//выбор древнего
const containerWithAncients = document.querySelector('.ancient-container');
// добавление класса ancient-card-active к выбранному древнему
let selectedAncient;
containerWithAncients.onclick = () => {
  let target = event.target;
  if (target.className !== 'ancient-card') return;
  highlight(target);
};
function highlight(img) {
  if (selectedAncient) {
    selectedAncient.classList.remove('ancient-card-active');
  }
  selectedAncient = img;
  selectedAncient.classList.add('ancient-card-active');
}

//выбор сложности
const difficultyContainer = document.querySelector('.difficulty-container');
// добавление класса difficulty-button-active к выбранной кнопки со сложностью
let selectedDifficultyButton;
difficultyContainer.onclick = () => {
  let target = event.target;
  if (target.className !== 'difficulty-button') return;
  highlightDifficulty(target);
};
function highlightDifficulty(div) {
  if (selectedDifficultyButton) {
    selectedDifficultyButton.classList.remove('difficulty-button-active');
  }
  selectedDifficultyButton = div;
  selectedDifficultyButton.classList.add('difficulty-button-active');
}

//тасуем средний уровень сложности
const deck = document.querySelector('.deck');
const lastCard = document.querySelector('.last-card');
const stageText1 = document.querySelector('.stage-text1');
const stageText2 = document.querySelector('.stage-text2');
const stageText3 = document.querySelector('.stage-text3');

const reshuffleGreen = reshuffleCards(greenCardsData);
const reshuffleBrown = reshuffleCards(brownCardsData);
const reshuffleBlue = reshuffleCards(blueCardsData);

function reshuffleCards(arr) {
  let result = [];
  while (arr.length > 0) {
    let randomNumber = Math.floor(Math.random() * arr.length);
    result.push(arr[randomNumber]);
    arr.splice(randomNumber, 1);
  }
  return result;
}

//средняя сложность

const firstStageDeck = [];
const secondStageDeck = [];
const thirdStageDeck = [];

const mediumDifficulty = (countCards, emptyArr) => {
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < countCards.greenCards) {
    const randomNumber = Math.floor(Math.random() * reshuffleGreen.length);
    emptyArr.push(reshuffleGreen[randomNumber]);
    i++;
  }
  while (j < countCards.brownCards) {
    const randomNumber = Math.floor(Math.random() * reshuffleBrown.length);
    emptyArr.push(reshuffleBrown[randomNumber]);
    j++;
  }
  while (k < countCards.blueCards) {
    const randomNumber = Math.floor(Math.random() * reshuffleBlue.length);
    emptyArr.push(reshuffleBlue[randomNumber]);
    k++;
  }

  return reshuffleCards(emptyArr);
};

const a = mediumDifficulty(ancientsData[0].firstStage, firstStageDeck);
const b = mediumDifficulty(ancientsData[0].secondStage, secondStageDeck);
const c = mediumDifficulty(ancientsData[0].thirdStage, thirdStageDeck);

const middle = [...a, ...b, ...c];
console.log(a);
console.log(b);
console.log(c);
console.log(middle);
let count = 0;
deck.onclick = () => {
  const showCard = (arr) => {
    if (count < arr.length) {
      lastCard.style.backgroundImage = `url('${arr[count].cardFace}')`;
      console.log(`url('${arr[count].cardFace}')`);
    }
    if (count == arr.length) {
      deck.style.backgroundImage = 'none';
      stageText3.style.color = 'black';
    }
    if (count == 0) {
      stageText1.style.color = 'red';
    }
    if (count == a.length) {
      stageText1.style.color = 'black';
      stageText2.style.color = 'red';
    }
    if (count == a.length + b.length) {
      stageText2.style.color = 'black';
      stageText3.style.color = 'red';
    }
    count++;
  };
  showCard(middle);
};
