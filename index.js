import blueCardsData from './data/mythicCards/blue/index.js';
import brownCardsData from './data/mythicCards/brown/index.js';
import greenCardsData from './data/mythicCards/green/index.js';
import ancientsData from './data/ancients.js';

//выбор сложности
const difficultyContainer = document.querySelector('.difficulty-container');
const superEasy = document.querySelector('#superEasy');
const easy = document.querySelector('#easy');
const medium = document.querySelector('#medium');
const high = document.querySelector('#high');
const hard = document.querySelector('#hard');
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

const deck = document.querySelector('.deck');
const lastCard = document.querySelector('.last-card');
const stageText1 = document.querySelector('.stage-text1');
const stageText2 = document.querySelector('.stage-text2');
const stageText3 = document.querySelector('.stage-text3');

const azathoth = document.querySelector('#azathoth');
const cthulthu = document.querySelector('#cthulthu');
const iogSothoth = document.querySelector('#iogSothoth');
const shubNiggurath = document.querySelector('#shubNiggurath');

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

//средняя сложность Азатот

let firstStageDeck = [];
let secondStageDeck = [];
let thirdStageDeck = [];

const superEasyDifficulty = (countCards, emptyArr) => {
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < countCards.greenCards) {
    const randomNumber = Math.floor(Math.random() * reshuffleGreen.length);
    if (reshuffleGreen[randomNumber].difficulty === 'hard') {
      continue;
    } else if (reshuffleGreen[randomNumber].difficulty === 'normal') {
      continue;
    }
    emptyArr.push(reshuffleGreen[randomNumber]);
    i++;
    if (i < countCards.greenCards) {
      if (reshuffleGreen[randomNumber].difficulty === 'hard') {
        continue;
      } else if (reshuffleGreen[randomNumber].difficulty === 'easy') {
        continue;
      }
      emptyArr.push(reshuffleGreen[randomNumber]);
    }
  }
  while (j < countCards.brownCards) {
    const randomNumber = Math.floor(Math.random() * reshuffleBrown.length);
    if (reshuffleBrown[randomNumber].difficulty === 'hard') {
      continue;
    } else if (reshuffleBrown[randomNumber].difficulty === 'normal') {
      continue;
    }
    emptyArr.push(reshuffleBrown[randomNumber]);
    j++;
  }
  while (k < countCards.blueCards) {
    const randomNumber = Math.floor(Math.random() * reshuffleBlue.length);
    if (reshuffleBlue[randomNumber].difficulty === 'hard') {
      continue;
    } else if (reshuffleBlue[randomNumber].difficulty === 'normal') {
      continue;
    }
    emptyArr.push(reshuffleBlue[randomNumber]);
    k++;
  }

  return reshuffleCards(emptyArr);
};
const easyDifficulty = (countCards, emptyArr) => {
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < countCards.greenCards) {
    const randomNumber = Math.floor(Math.random() * reshuffleGreen.length);
    if (reshuffleGreen[randomNumber].difficulty === 'hard') {
      continue;
    }
    emptyArr.push(reshuffleGreen[randomNumber]);
    i++;
  }
  while (j < countCards.brownCards) {
    const randomNumber = Math.floor(Math.random() * reshuffleBrown.length);
    if (reshuffleBrown[randomNumber].difficulty === 'hard') {
      continue;
    }
    emptyArr.push(reshuffleBrown[randomNumber]);
    j++;
  }
  while (k < countCards.blueCards) {
    const randomNumber = Math.floor(Math.random() * reshuffleBlue.length);
    if (reshuffleBlue[randomNumber].difficulty === 'hard') {
      continue;
    }
    emptyArr.push(reshuffleBlue[randomNumber]);
    k++;
  }

  return reshuffleCards(emptyArr);
};
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
const highDifficulty = (countCards, emptyArr) => {
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < countCards.greenCards) {
    const randomNumber = Math.floor(Math.random() * reshuffleGreen.length);
    if (reshuffleGreen[randomNumber].difficulty === 'easy') {
      continue;
    }
    emptyArr.push(reshuffleGreen[randomNumber]);
    i++;
  }
  while (j < countCards.brownCards) {
    const randomNumber = Math.floor(Math.random() * reshuffleBrown.length);
    if (reshuffleBrown[randomNumber].difficulty === 'easy') {
      continue;
    }
    emptyArr.push(reshuffleBrown[randomNumber]);
    j++;
  }
  while (k < countCards.blueCards) {
    const randomNumber = Math.floor(Math.random() * reshuffleBlue.length);
    if (reshuffleBlue[randomNumber].difficulty === 'easy') {
      continue;
    }
    emptyArr.push(reshuffleBlue[randomNumber]);
    k++;
  }

  return reshuffleCards(emptyArr);
};
const hardDifficulty = (countCards, emptyArr) => {
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < countCards.greenCards) {
    const randomNumber = Math.floor(Math.random() * reshuffleGreen.length);
    if (reshuffleGreen[randomNumber].difficulty === 'easy') {
      continue;
    } else if (reshuffleGreen[randomNumber].difficulty === 'normal') {
      continue;
    }
    emptyArr.push(reshuffleGreen[randomNumber]);
    i++;
  }
  while (j < countCards.brownCards) {
    const randomNumber = Math.floor(Math.random() * reshuffleBrown.length);
    if (reshuffleBrown[randomNumber].difficulty === 'easy') {
      continue;
    } else if (reshuffleBrown[randomNumber].difficulty === 'normal') {
      continue;
    }
    emptyArr.push(reshuffleBrown[randomNumber]);
    j++;
  }
  while (k < countCards.blueCards) {
    const randomNumber = Math.floor(Math.random() * reshuffleBlue.length);
    if (reshuffleBlue[randomNumber].difficulty === 'easy') {
      continue;
    } else if (reshuffleBlue[randomNumber].difficulty === 'normal') {
      continue;
    }
    emptyArr.push(reshuffleBlue[randomNumber]);
    k++;
  }

  return reshuffleCards(emptyArr);
};
const choiceDifficultyLvl = (numAncient) => {
  if (superEasy.classList.contains('difficulty-button-active') == true) {
    const a = superEasyDifficulty(
      ancientsData[numAncient].firstStage,
      firstStageDeck
    );
    const b = superEasyDifficulty(
      ancientsData[numAncient].secondStage,
      secondStageDeck
    );
    const c = superEasyDifficulty(
      ancientsData[numAncient].thirdStage,
      thirdStageDeck
    );
    const middle = [...a, ...b, ...c];
    return middle;
  }
  if (easy.classList.contains('difficulty-button-active') == true) {
    const a = easyDifficulty(
      ancientsData[numAncient].firstStage,
      firstStageDeck
    );
    const b = easyDifficulty(
      ancientsData[numAncient].secondStage,
      secondStageDeck
    );
    const c = easyDifficulty(
      ancientsData[numAncient].thirdStage,
      thirdStageDeck
    );
    const middle = [...a, ...b, ...c];
    return middle;
  }
  if (medium.classList.contains('difficulty-button-active') == true) {
    const a = mediumDifficulty(
      ancientsData[numAncient].firstStage,
      firstStageDeck
    );
    const b = mediumDifficulty(
      ancientsData[numAncient].secondStage,
      secondStageDeck
    );
    const c = mediumDifficulty(
      ancientsData[numAncient].thirdStage,
      thirdStageDeck
    );
    const middle = [...a, ...b, ...c];

    return middle;
  }
  if (high.classList.contains('difficulty-button-active') == true) {
    const a = highDifficulty(
      ancientsData[numAncient].firstStage,
      firstStageDeck
    );
    const b = highDifficulty(
      ancientsData[numAncient].secondStage,
      secondStageDeck
    );
    const c = highDifficulty(
      ancientsData[numAncient].thirdStage,
      thirdStageDeck
    );
    const middle = [...a, ...b, ...c];
    return middle;
  }
  if (hard.classList.contains('difficulty-button-active') == true) {
    const a = hardDifficulty(
      ancientsData[numAncient].firstStage,
      firstStageDeck
    );
    const b = hardDifficulty(
      ancientsData[numAncient].secondStage,
      secondStageDeck
    );
    const c = hardDifficulty(
      ancientsData[numAncient].thirdStage,
      thirdStageDeck
    );
    const middle = [...a, ...b, ...c];
    return middle;
  }
};

azathoth.onclick = () => {
  azathoth.classList.add('ancient-card-active');
  cthulthu.classList.remove('ancient-card-active');
  iogSothoth.classList.remove('ancient-card-active');
  shubNiggurath.classList.remove('ancient-card-active');
  stageText3.style.color = 'black';
  stageText2.style.color = 'black';
  stageText1.style.color = 'black';
  deck.style.backgroundImage = `url('./assets/mythicCardBackground.png')`;
  lastCard.style.backgroundImage = 'none';
  const a = 4;
  const b = 6;

  let count = 0;
  deck.onclick = () => {
    const showCard = (arr) => {
      if (count < arr.length) {
        lastCard.style.backgroundImage = `url('${arr[count].cardFace}')`;
        console.log(`url('${arr[count].cardFace}')`);
      }
      if (count === arr.length) {
        deck.style.backgroundImage = 'none';
        stageText3.style.color = 'black';
      }
      if (count === 0) {
        stageText1.style.color = 'red';
      }
      if (count === a) {
        stageText1.style.color = 'black';
        stageText2.style.color = 'red';
      }
      if (count === a + b) {
        stageText2.style.color = 'black';
        stageText3.style.color = 'red';
      }
      count++;
    };

    showCard(choiceDifficultyLvl(0));
  };
};

cthulthu.onclick = () => {
  azathoth.classList.remove('ancient-card-active');
  cthulthu.classList.add('ancient-card-active');
  iogSothoth.classList.remove('ancient-card-active');
  shubNiggurath.classList.remove('ancient-card-active');
  deck.style.backgroundImage = `url('./assets/mythicCardBackground.png')`;
  lastCard.style.backgroundImage = 'none';
  stageText3.style.color = 'black';
  stageText2.style.color = 'black';
  stageText1.style.color = 'black';

  const a = 4;
  const b = 4;

  let count = 0;

  deck.onclick = () => {
    function showCard(arr) {
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
      if (count == a) {
        stageText1.style.color = 'black';
        stageText2.style.color = 'red';
      }
      if (count == a + b) {
        stageText2.style.color = 'black';
        stageText3.style.color = 'red';
      }
      count++;
    }

    showCard(choiceDifficultyLvl(1));
  };
};
iogSothoth.onclick = () => {
  azathoth.classList.remove('ancient-card-active');
  cthulthu.classList.remove('ancient-card-active');
  iogSothoth.classList.add('ancient-card-active');
  shubNiggurath.classList.remove('ancient-card-active');
  deck.style.backgroundImage = `url('./assets/mythicCardBackground.png')`;
  lastCard.style.backgroundImage = 'none';
  stageText3.style.color = 'black';
  stageText2.style.color = 'black';
  stageText1.style.color = 'black';
  const a = 3;
  const b = 6;

  let count = 0;

  deck.onclick = () => {
    function showCard(arr) {
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
      if (count == a) {
        stageText1.style.color = 'black';
        stageText2.style.color = 'red';
      }
      if (count == a + b) {
        stageText2.style.color = 'black';
        stageText3.style.color = 'red';
      }
      count++;
    }
    showCard(choiceDifficultyLvl(2));
  };
};

shubNiggurath.onclick = () => {
  azathoth.classList.remove('ancient-card-active');
  cthulthu.classList.remove('ancient-card-active');
  iogSothoth.classList.remove('ancient-card-active');
  shubNiggurath.classList.add('ancient-card-active');
  deck.style.backgroundImage = `url('./assets/mythicCardBackground.png')`;
  lastCard.style.backgroundImage = 'none';
  stageText3.style.color = 'black';
  stageText2.style.color = 'black';
  stageText1.style.color = 'black';
  const a = 4;
  const b = 6;

  let count = 0;
  deck.onclick = () => {
    function showCard(arr) {
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
      if (count == a) {
        stageText1.style.color = 'black';
        stageText2.style.color = 'red';
      }
      if (count == a + b) {
        stageText2.style.color = 'black';
        stageText3.style.color = 'red';
      }
      count++;
    }
    console.log(choiceDifficultyLvl(3));
    showCard(choiceDifficultyLvl(3));
  };
};
