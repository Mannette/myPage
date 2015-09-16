// create question class
function Questions (question, answers, rightAnswer) {
  this.question = question;
  this.answers = answers;
  this.rightAnswer = rightAnswer;
}
// --------------- //
// BEGIN QUESTIONS //
// --------------- //

// Create first question
var questionOne = new Questions(
  'Which is a primitive in JavaScript?',
  {
    1: 'Script',
    2: 'String',
    3: 'this',
    4: 'Java'
  },
  2
);

// Create second question
var questionTwo = new Questions(
  'What does NaN mean?',
  {
    1: 'BaNaNa',
    2: 'New at number',
    3: 'Nothing to see here',
    4: 'Not a number'
  },
  4
);

// Create third question
var questionThree = new Questions(
  'Which company developed JavaScript?',
  {
    1: 'Netscape',
    2: 'Java',
    3: 'Apple geniuses',
    4: 'twitter'
  },
  1
);

// Create fourth question
var questionFour = new Questions(
  'Which of these is used for comments in JavaScript?',
  {
    1: '/-- --/',
    2: '*/ /*',
    3: '/ /',
    4: '` ` `'
  },
  3
);

// Create fifth question
var questionFive = new Questions(
  'Which symbol means "OR"?',
  {
    1: '? ?',
    2: '| |',
    3: '/ ! /',
    4: '& |'
  },
  2
);

// Create sixth question
var questionSix = new Questions(
  'Which one is a looping structure?',
  {
    1: 'do-while',
    2: 'if',
    3: 'during',
    4: 'fizz-buzz'
  },
  1
);

// Create seventh question
var questionSeven = new Questions(
  'What does "4" + "8" equal?',
  {
    1: '24',
    2: '12',
    3: '16',
    4: '48'
  },
  4
);

// Create eigth question
var questionEight = new Questions(
  'What value does NULL represent?',
  {
    1: '0',
    2: 'None',
    3: '< 0',
    4: '> 0'
  },
  2
);

// Create ninth question
var questionNine = new Questions(
  'Which of these is a Boolean operator?',
  {
    1: '<',
    2: '>',
    3: '!',
    4: '=='
  },
  3
);

// Create tenth question
var questionTen = new Questions(
  // change this question.
  'What is my middle name?',
  {
    1: 'Julian',
    2: 'Mark',
    3: 'Antonio',
    4: 'Roy'
  },
  4
);

// Create array to hold questions.
var questionArr =
  [
    questionOne,
    questionTwo,
    questionThree,
    questionFour,
    questionFive,
    questionSix,
    questionSeven,
    questionEight,
    questionNine,
    questionTen
  ];

// ------------------- //
// ** END QUESTIONS ** //
// ------------------- //

// *************************** //

// ------------------ //
// PLAYER ADVANCEMENT //
// ------------------ //

function playerMove () {

  var player = $('.playerCurrent').html();

  // select index with character
  var playerCurrent = $('.playerCurrent').index('.player');

  // select next position
  var nextPosition = playerCurrent + 1;

  // remove character from current position
  $('.playerCurrent').html('');
  $('#playerPosition').children().removeClass('playerCurrent');

  // move character to next position
  var move = $('#playerPosition').children()[nextPosition];
  $(move).addClass('playerCurrent');
  move.innerHTML = player;
}

// ---------------------------- //
// ** END PLAYER ADVANCEMENT ** //
// ---------------------------- //

// **************************** //

// ---------------- //
// MOVE AI TO START //
// ---------------- //

var mario = '<img class="image" src="images/Mario.jpg">';
var luigi = '<img class="image" src="images/Luigi.jpg">';
var peach = '<img class="image" src="images/Peach.jpg">';
var toad = '<img class="image" src="images/Toad.jpg">';

function marioToStart (player) {
  // AI position based on character picked
  if (player === luigi) {
    $('#computerOneStart').html(mario).addClass('computerOneCurrent');

    $('#computerOnePosition').css({
      'background': 'red'
    });
  } else if (player === toad) {
    $('#computerOneStart').html(mario).addClass('computerOneCurrent');

    $('#computerOnePosition').css({
      'background': 'red'
    });
  } else if (player === peach) {
    $('#computerOneStart').html(mario).addClass('computerOneCurrent');

    $('#computerOnePosition').css({
      'background': 'red'
    });
  }
}

function luigiToStart (player) {
  // AI position based on character picked
  if (player === mario) {
    $('#computerOneStart').html(luigi).addClass('computerOneCurrent');

    $('#computerOnePosition').css({
      'background': 'green'
    });
  } else if (player === toad) {
    $('#computerTwoStart').html(luigi).addClass('computerTwoCurrent');

    $('#computerTwoPosition').css({
      'background': 'green'
    });
  } else if (player === peach) {
    $('#computerTwoStart').html(luigi).addClass('computerTwoCurrent');

    $('#computerTwoPosition').css({
      'background': 'green'
    });
  }
}

function toadToStart (player) {
  // AI position based on character picked
  if (player === mario) {
    $('#computerTwoStart').html(toad).addClass('computerTwoCurrent');

    $('#computerTwoPosition').css({
      'background': 'blue'
    });
  } else if (player === luigi) {
    $('#computerTwoStart').html(toad).addClass('computerTwoCurrent');

    $('#computerTwoPosition').css({
      'background': 'blue'
    });
  } else if (player === peach) {
    $('#computerThreeStart').html(toad).addClass('computerThreeCurrent');

    $('#computerThreePosition').css({
      'background': 'blue'
    });
  }
}

function peachToStart (player) {
  // AI position based on character picked
  if (player === mario) {
    $('#computerThreeStart').html(peach).addClass('computerThreeCurrent');

    $('#computerThreePosition').css({
      'background': 'pink'
    });
  } else if (player === luigi) {
    $('#computerThreeStart').html(peach).addClass('computerThreeCurrent');

    $('#computerThreePosition').css({
      'background': 'pink'
    });
  } else if (player === toad) {
    $('#computerThreeStart').html(peach).addClass('computerThreeCurrent');

    $('#computerThreePosition').css({
      'background': 'pink'
    });
  }
}

// --------------------- //
// ** END AI TO START ** //
// --------------------- //

// **************************** //

// ------------ //
// CHECK ANSWER //
// ------------ //

// function to check answer
Questions.prototype.check = function () {
  var userInput = parseInt($("input[type='radio'][name='answers']:checked").val());

  if (userInput === this.rightAnswer) {
    var rightAnswerAudio = document.createElement('audio');
    rightAnswerAudio.setAttribute('src', 'http://themushroomkingdom.net/sounds/wav/smb/smb_coin.wav');
    rightAnswerAudio.setAttribute('autoplay', 'autoplay');

    // $.get();

    rightAnswerAudio.addEventListener('load', function () {
      rightAnswerAudio.Play();
    }, true);
    // Advance to next question.
    playerMove();
    return true;

  } else {
    var wrongAnswerAudio = document.createElement('audio');
    wrongAnswerAudio.setAttribute('src', 'http://themushroomkingdom.net/sounds/wav/sm64/sm64_boo.wav');
    wrongAnswerAudio.setAttribute('autoplay', 'autoplay');

    // $.get();

    wrongAnswerAudio.addEventListener('load', function () {
      wrongAnswerAudio.Play();
    }, true);

  }
};

// ----------------------- //
// ** END CHECK ANSWERS ** //
// ----------------------- //

// ****************************** //

// ------------------------------------ //
// FUNCTIONS TO APPEND QUESTIONS TO DOM //
// ------------------------------------ //
function appendFirst () {
  $('#questions').html(questionArr[0].question);

  $('.question-option')[0].innerHTML = questionArr[0].answers[1];

  $('.question-option')[1].innerHTML = questionArr[0].answers[2];

  $('.question-option')[2].innerHTML = questionArr[0].answers[3];

  $('.question-option')[3].innerHTML = questionArr[0].answers[4];
}

function appendSecond () {
  $('#questions').html(questionArr[1].question);

  $('.question-option')[0].innerHTML = questionArr[1].answers[1];

  $('.question-option')[1].innerHTML = questionArr[1].answers[2];

  $('.question-option')[2].innerHTML = questionArr[1].answers[3];

  $('.question-option')[3].innerHTML = questionArr[1].answers[4];
}

function appendThird () {
  $('#questions').html(questionArr[2].question);

  $('.question-option')[0].innerHTML = questionArr[2].answers[1];

  $('.question-option')[1].innerHTML = questionArr[2].answers[2];

  $('.question-option')[2].innerHTML = questionArr[2].answers[3];

  $('.question-option')[3].innerHTML = questionArr[2].answers[4];
}

function appendFourth () {
  $('#questions').html(questionArr[3].question);

  $('.question-option')[0].innerHTML = questionArr[3].answers[1];

  $('.question-option')[1].innerHTML = questionArr[3].answers[2];

  $('.question-option')[2].innerHTML = questionArr[3].answers[3];

  $('.question-option')[3].innerHTML = questionArr[3].answers[4];
}

function appendFifth () {
  $('#questions').html(questionArr[4].question);

  $('.question-option')[0].innerHTML = questionArr[4].answers[1];

  $('.question-option')[1].innerHTML = questionArr[4].answers[2];

  $('.question-option')[2].innerHTML = questionArr[4].answers[3];

  $('.question-option')[3].innerHTML = questionArr[4].answers[4];
}

function appendSixth () {
  $('#questions').html(questionArr[5].question);

  $('.question-option')[0].innerHTML = questionArr[5].answers[1];

  $('.question-option')[1].innerHTML = questionArr[5].answers[2];

  $('.question-option')[2].innerHTML = questionArr[5].answers[3];

  $('.question-option')[3].innerHTML = questionArr[5].answers[4];
}

function appendSeventh () {
  $('#questions').html(questionArr[6].question);

  $('.question-option')[0].innerHTML = questionArr[6].answers[1];

  $('.question-option')[1].innerHTML = questionArr[6].answers[2];

  $('.question-option')[2].innerHTML = questionArr[6].answers[3];

  $('.question-option')[3].innerHTML = questionArr[6].answers[4];
}

function appendEighth () {
  $('#questions').html(questionArr[7].question);

  $('.question-option')[0].innerHTML = questionArr[7].answers[1];

  $('.question-option')[1].innerHTML = questionArr[7].answers[2];

  $('.question-option')[2].innerHTML = questionArr[7].answers[3];

  $('.question-option')[3].innerHTML = questionArr[7].answers[4];
}

function appendNinth () {
  $('#questions').html(questionArr[8].question);

  $('.question-option')[0].innerHTML = questionArr[8].answers[1];

  $('.question-option')[1].innerHTML = questionArr[8].answers[2];

  $('.question-option')[2].innerHTML = questionArr[8].answers[3];

  $('.question-option')[3].innerHTML = questionArr[8].answers[4];
}

function appendTenth () {
  $('#questions').html(questionArr[9].question);

  $('.question-option')[0].innerHTML = questionArr[9].answers[1];

  $('.question-option')[1].innerHTML = questionArr[9].answers[2];

  $('.question-option')[2].innerHTML = questionArr[9].answers[3];

  $('.question-option')[3].innerHTML = questionArr[9].answers[4];
}

// ------------------- //
// ** END APPENDING ** //
// ------------------- //

// ************************** //

// -------- //
// DEFAULTS //
// -------- //

function setDefault () {
  $('#raceElements').hide();
  $('#character_select').hide();
  $('#startScreen').show();
  $('#clear').show();
}

// ------------------ //
// ** END DEFAULTS ** //
// ------------------ //


// on advance, determine if next question will be a 'special' question.
// function specialQuestion(questionArr) {
//   var specialOdds = Math.ceil(Math.random() * 4);
//   if (specialOdds === 2) {
//     // change question at index to special question.
//     // give player item on correct answer.
//   }
//   else {
//     // normal question.
//   }
// }

module.exports = Questions;
