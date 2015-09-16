$(document).ready(function () {
  // hides anything that isnt meant for startup screen
  setDefault();

  // ------------ //
  // READY BUTTON //
  // ------------ //
  $('.ready').click(function () {
    $('#raceElements').hide();
    $('#startScreen').hide();
    $('#replay').hide();
    $('#character_select').show();

    var characterSelectAudio = document.createElement('audio');
    characterSelectAudio.setAttribute('src', 'http://themushroomkingdom.net/sounds/wav/mk64/mk64_mario_a09.wav');
    characterSelectAudio.setAttribute('autoplay', 'autoplay');

    // $.get();

    characterSelectAudio.addEventListener('load', function () {
      characterSelectAudio.Play();
    }, true);

    // ---------------- //
    // SETTING DEFAULTS //
    // ---------------- //

    // track area
    $('.position').html('');
    $('#playerStart').html('Start!');
    $('#computerOneStart').html('Start!');
    $('#computerTwoStart').html('Start!');
    $('#computerThreeStart').html('Start!');
    $('#playerFinish').html('Finish!');
    $('#computerOneFinish').html('Finish!');
    $('#computerTwoFinish').html('Finish!');
    $('#computerThreeFinish').html('Finish!');
  });

  // ---------- //
  // CHARACTERS //
  // ---------- //

  var mario = '<img class="image" src="images/Mario.jpg">';
  var luigi = '<img class="image" src="images/Luigi.jpg">';
  var toad = '<img class="image" src="images/Toad.jpg">';
  var peach = '<img class="image" src="images/Peach.jpg">';

  // -------------------- //
  // ** END CHARACTERS ** //
  // -------------------- //

  // ************************ //

  // ----------------- //
  // SELECT CHARACTERS //
  // ----------------- //
  // select mario
  $('#mario').click(function () {
    var player = mario;

    // place player into playerStart
    $('#playerStart').html(player).addClass('playerCurrent');

    $('#playerPosition').css({
      'background': 'red'
    });

    luigiToStart(player);
    toadToStart(player);
    peachToStart(player);

    // hide character images
    $('#character_select').hide();
    $('#raceElements').show();

    // play sound
    var selectMarioAudio = document.createElement('audio');
    selectMarioAudio.setAttribute('src', 'http://themushroomkingdom.net/sounds/wav/mk64/mk64_mario02.wav');
    selectMarioAudio.setAttribute('autoplay', 'autoplay');

    // $.get();

    selectMarioAudio.addEventListener('load', function () {
      selectMarioAudio.Play();
    }, true);

    // Begin quiz.
    // Append first question to question box.
    appendFirst();

  });

  // select luigi
  $('#luigi').click(function () {
    var player = luigi;
    // var computerOne = mario;
    // var computerTwo = toad;
    // var computerThree = peach;

    $('#playerStart').html(player).addClass('playerCurrent');

    $('#playerPosition').css({
      'background': 'green'
    });

    marioToStart(player);
    toadToStart(player);
    peachToStart(player);

    // hide character images
    $('#character_select').hide();
    $('#raceElements').show();

    // play sound
    var selectLuigiAudio = document.createElement('audio');
    selectLuigiAudio.setAttribute('src', 'http://themushroomkingdom.net/sounds/wav/mk64/mk64_luigi03.wav');
    selectLuigiAudio.setAttribute('autoplay', 'autoplay');

    // $.get();

    selectLuigiAudio.addEventListener('load', function () {
      selectLuigiAudio.Play();
    }, true);

    // Begin quiz.
    // Append first question to question box.
    appendFirst();

  });

  $('#toad').click(function () {
    var player = toad;
    // var computerOne = mario;
    // var computerTwo = luigi;
    // var computerThree = peach;

    // place toad into playerStart
    $('#playerStart').html(player).addClass('playerCurrent');

    $('#playerPosition').css({
      'background': 'blue'
    });

    marioToStart(player);
    luigiToStart(player);
    peachToStart(player);

    // hide character images
    $('#character_select').hide();
    $('#raceElements').show();

    // play sound
    var selectToadAudio = document.createElement('audio');
    selectToadAudio.setAttribute('src', 'http://themushroomkingdom.net/sounds/wav/mk64/mk64_toad03.wav');
    selectToadAudio.setAttribute('autoplay', 'autoplay');

    // $.get();

    selectToadAudio.addEventListener('load', function () {
      selectToadAudio.Play();
    }, true);

    // Begin quiz.
    // Append first question to question box.
    appendFirst();

  });

  $('#peach').click(function () {
    var player = peach;
    // var computerOne = mario;
    // var computerTwo = toad;
    // var computerThree = luigi;

    // place peach into playerStart
    $('#playerStart').html(player).addClass('playerCurrent');

    $('#playerPosition').css({
      'background': 'pink'
    });

    marioToStart(player);
    luigiToStart(player);
    toadToStart(player);

    // hide character images
    $('#character_select').hide();
    $('#raceElements').show();

    // play sound
    var selectPeachAudio = document.createElement('audio');
    selectPeachAudio.setAttribute('src', 'http://themushroomkingdom.net/sounds/wav/mk64/mk64_peach08.wav');
    selectPeachAudio.setAttribute('autoplay', 'autoplay');

    // $.get();

    selectPeachAudio.addEventListener('load', function () {
      selectPeachAudio.Play();
    }, true);

    // Begin quiz.
    // Append first question to question box.
    appendFirst();

  });
  // ----------------------------- //
  // ** END CHARACTER SELECTION ** //
  // ----------------------------- //

  // ----------------------- //
  // ** TRACK ADVANCEMENT ** //
  // ----------------------- //
  // advance button.
  $('#advance').click(function () {

    var currentQuestion = $('#questions').html();
    // computer advancing
    cpuOne.computerOneAdvance();
    cpuTwo.computerTwoAdvance();
    cpuThree.computerThreeAdvance();

    // player advancing
    // multiple conditions to determine question and answer
    if (currentQuestion === questionOne.question) {
      // if right answer
      if (questionOne.check() === true) {
        // append next question
        appendSecond();
        // clear checked buttons
        $('input[name = answers]').attr('checked', false);
      }
    }
    if (currentQuestion === questionTwo.question) {
      // if right answer
      if (questionTwo.check() === true) {
        // append next question
        appendThird();
        // clear checked buttons
        $('input[name = answers]').attr('checked', false);
      }
    }
    if (currentQuestion === questionThree.question) {
      // if right answer
      if (questionThree.check() === true) {
        // append next question
        appendFourth();
        // clear checked buttons
        $('input[name = answers]').attr('checked', false);
      }
    }
    if (currentQuestion === questionFour.question) {
      // if right answer
      if (questionFour.check() === true) {
        // append next question
        appendFifth();
        // clear checked buttons
        $('input[name = answers]').attr('checked', false);
      }
    }
    if (currentQuestion === questionFive.question) {
      // if right answer
      if (questionFive.check() === true) {
        // append next question
        appendSixth();
        // clear checked buttons
        $('input[name = answers]').attr('checked', false);
      }
    }
    if (currentQuestion === questionSix.question) {
      // if right answer
      if (questionSix.check() === true) {
        // append next question
        appendSeventh();
        // clear checked buttons
        $('input[name = answers]').attr('checked', false);
      }
    }
    if (currentQuestion === questionSeven.question) {
      // if right answer
      if (questionSeven.check() === true) {
        // append next question
        appendEighth();
        // clear checked buttons
        $('input[name = answers]').attr('checked', false);
      }
    }
    if (currentQuestion === questionEight.question) {
      // if right answer
      if (questionEight.check() === true) {
        // append next question
        appendNinth();
        // clear checked buttons
        $('input[name = answers]').attr('checked', false);
      }
    }
    if (currentQuestion === questionNine.question) {
      // if right answer
      if (questionNine.check() === true) {
        // append next question
        appendTenth();
        // clear checked buttons
        $('input[name = answers]').attr('checked', false);
      }
    }
    if (currentQuestion === questionTen.question) {
      // if right answer
      if (questionTen.check() === true) {
        // clear checked buttons
        $('input[name = answers]').attr('checked', false);

        // hide questions and answers
        $('#clear').hide();
        // show replay button
        $('#replay').show();

      }
    }

    // ---------------------------------- //
    // SOUND FOR CHARACTER WINNING //
    // ---------------------------------- //
    if ($('#playerFinish').html() === mario) {
      // play sound
      var marioFinishAudio = document.createElement('audio');
      marioFinishAudio.setAttribute('src', 'http://themushroomkingdom.net/sounds/wav/mk64/mk64_mario07.wav');
      marioFinishAudio.setAttribute('autoplay', 'autoplay');

      // $.get();

      marioFinishAudio.addEventListener('load', function () {
        marioFinishAudio.Play();
      }, true);

    } else if ($('#playerFinish').html() === luigi) {
      // play sound
      var luigiFinishAudio = document.createElement('audio');
      luigiFinishAudio.setAttribute('src', 'http://themushroomkingdom.net/sounds/wav/mk64/mk64_luigi07.wav');
      luigiFinishAudio.setAttribute('autoplay', 'autoplay');

      // $.get();

      luigiFinishAudio.addEventListener('load', function () {
        luigiFinishAudio.Play();
      }, true);

    } else if ($('#playerFinish').html() === toad) {
      // play sound
      var toadFinishAudio = document.createElement('audio');
      toadFinishAudio.setAttribute('src', 'http://themushroomkingdom.net/sounds/wav/mk64/mk64_toad07.wav');
      toadFinishAudio.setAttribute('autoplay', 'autoplay');

      // $.get();

      toadFinishAudio.addEventListener('load', function () {
        toadFinishAudio.Play();
      }, true);

    } else if ($('#playerFinish').html() === peach) {
      // play sound
      var peachFinishAudio = document.createElement('audio');
      peachFinishAudio.setAttribute('src', 'http://themushroomkingdom.net/sounds/wav/mk64/mk64_peach03.wav');
      peachFinishAudio.setAttribute('autoplay', 'autoplay');

      // $.get();

      peachFinishAudio.addEventListener('load', function () {
        peachFinishAudio.Play();
      }, true);

    }

  });

  // ------------- //
  // REPLAY BUTTON //
  // ------------- //
  $('#replay').click(function () {

    var replayAudio = document.createElement('audio');
    replayAudio.setAttribute('src', 'http://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_thank_you.wav');
    replayAudio.setAttribute('autoplay', 'autoplay');

    // $.get();

    replayAudio.addEventListener('load', function () {
      replayAudio.Play();
    }, true);

    // set defaults
    setDefault();
    $('audio').remove();
  });

});
