$(() => {

  var rps = rps || {};

  console.log('Js loaded');


  $('#button').click(function() {
    $('html, body').animate({
      scrollTop: $('#myDiv').offset().top
    }, 2000);
    rps.audio.play();
  });

// Each div square has an index which is created / targeted by the click event
// OLD CODE: ,  userAnswer = prompt corresponding question from array of objects,
// inject content with javascript to an html elements for display of question with options

// How to get questions to disappear once button selection occurs, .empty();

// Need to get lives to go down if incorrect selection
  rps.$squares = $('.block');
  rps.$answerText = $('.answerText');
  rps.$answerButtons = $('.answerButtons');
  rps.$hearts = $('.hearts');
  rps.$alertBox = $('.inner p');
  rps.$popupWindow = $('.popup');
  rps.$okButton = $('#ok');
  rps.audio = new Audio('/src/assets/sounds/seatbelts.mp3');
  rps.audio2 = new Audio('/src/assets/sounds/playland.wav');
  rps.audio3 = new Audio('/src/assets/sounds/goodbye.mp3.mov');
  rps.audio4 = new Audio('/src/assets/sounds/woulda.wav');

  let question = null;
  let questionIndex = null;
  let lives = 3;

  rps.$squares.on('click', revealQuestion);

  function revealQuestion() {
    $(this).addClass('active');

    questionIndex = $(this).attr('data-id');
    question = rps.triviaQuestionsArray[questionIndex];

    rps.$answerButtons.empty();
    rps.$answerText.html(question.text);

    question.options.forEach((option) => {
      const $btn = $(`<button>${option}</button>`);
      // add the click handler to the button...
      rps.$answerButtons.append($btn);
    });

  }

  rps.$answerButtons.on('click', 'button', checkAnswer);

  function checkAnswer(e) {
    if ($(e.target).text() === 'clowns') {
      displayAlert('Congratulations! You reached the end with enough lives left! Press OK to refresh the page and play again...if you dare.', refreshPage);
      rps.audio2.play();
      // function here to toggle() image
    } else if ($(e.target).text() === question.answer){
      // alert(question.correct);
      rps.$squares.eq(questionIndex).addClass('active');
      displayAlert(question.correct, classInactive);
      rps.audio3.play();
    } else {
      removeHeart();
      rps.audio4.play();
      if (lives === 0) return gameOver();
      rps.$squares.eq(questionIndex).removeClass('active');
      displayAlert(question.rebuttal, classInactive);
    }
  }


  function removeHeart(){
    lives--;
    rps.$hearts.eq(lives).hide();
  }

  function gameOver(){
    console.log('game over');
    displayAlert('You lost all your lives, you\'re zombie food', refreshPage);
    // const playAgain = confirm('Play again?');
    // if (playAgain){
    //   $hearts.show();
    //   lives = 3;
    // }
  }

  function classInactive(){
    rps.$popupWindow.removeClass('active');
  }

  function refreshPage(){
    location.reload();
  }

  function displayAlert(message, onClick){
    rps.$popupWindow.addClass('active');
    rps.$alertBox.text(message);
    rps.$okButton.on('click', onClick);
  }


// Create array of questions which will align with the matching indexes of divs
// array that contains questions, answers and reactions to user input

  rps.triviaQuestionsArray = [{
    text: 'What scares Columbus more than zombies?',
    options: ['spiders', 'clowns', 'mice'],
    answer: 'clowns',
    correct: 'That is correct! Moving right along..',
    rebuttal: 'Sorry! Guess you\'ll have to start over.'
  }, {
    text: 'The Zombie Breakout was caused by which rotten food?',
    options: ['Sushi', 'Spaghetti', 'Burgers'],
    answer: 'Burgers',
    correct: 'Alert GBK! and move ahead one space..',
    rebuttal: 'Seriously? Here\'s a hint, mad cow!'
  }, {
    text: 'What is Talahasse\'s one weakness?',
    options: ['Twinkies', 'Puppies', 'Cupcakes'],
    answer: 'Twinkies',
    correct: 'This twinkie thing ain\'t over yet..Next question!',
    rebuttal: 'Perhaps that is your one weakness? You\'re nearly half-way!'
  },{
    text: 'Rule #17.. Don\'\t be a what?',
    options: ['Zombie', 'Hero', 'Cottenheadedninnymuggins'],
    answer: 'Hero',
    correct: 'So you are doing great keep survivin and thrivin!',
    rebuttal: 'Zombies are eating you, guess better!'
  },{
    text: 'Which famous actor does Columbus shoot for acting like a zombie?',
    options: ['Ben Affleck', 'Bill Murray', 'Brad Pitt'],
    answer: 'Bill Murray',
    correct: 'I knew you\'\d get that one! On to the next question!',
    rebuttal: 'If you got this wrong you deserve to be eaten by zombies.'
  }, {
    text: 'Witchita and Lil Rock are heading where?',
    options: ['The Grand Canyon', 'Disney Land', 'Pacific Playland'],
    answer: 'Pacific Playland',
    correct: 'Well done! Please continue.',
    rebuttal: 'NOPE! Sorry, you\'\re zombie food..'
  }, {
    text: 'Which of these rules are not on Columbus\'\ list?',
    options: ['Bounty Paper Towels', 'Always wear socks', 'Enjoy the little things'],
    answer: 'Always wear socks',
    correct: 'Great start! Move to the next space..',
    rebuttal: 'You\'ll have to do better than that!'
  }, {
    text: 'What was the film\'\s gross three months after it released (with a budget of 23 million dollars)?',
    options: ['75 million', '1 billion', '40 million'],
    answer: '75 million',
    correct: 'That is correct! Moving right along..',
    rebuttal: 'I know right? WRONG. You lose a life.'
  },{
    text: 'What scares Columbus more than zombies?',
    options: ['spiders', 'clowns', 'mice'],
    answer: 'clowns',
    correct: 'You\'\ve nearly won!',
    rebuttal: 'Sorry!, try again..'
  }, {
    text: 'The Zombie Breakout was caused by which rotten food?',
    options: ['Sushi', 'Spaghetti', 'Burgers'],
    answer: 'Burgers',
    correct: 'You live to die another day..',
    rebuttal: 'Seriously?'
  }, {
    text: 'What is Talahasse\'s\ one weakness?',
    options: ['Twinkies', 'Puppies', 'Cupcakes'],
    answer: 'Twinkies',
    correct: 'So you are doing great keep survivin and thrivin!',
    rebuttal: 'Perhaps that is your one weakness?'

  }];



});

// const $squares = $('.div');
// $squares.on('click', (e) => {
//   const squareIndex = $(e.target).index();
//   const question = triviaQuestionsArray[squareIndex];
//   const userAnswer = prompt(question.text);
//   console.log(squareIndex);
//
//   if (userAnswer !== question.answer){
//     alert(question.rebuttal);
//   } else {
//     alert(question.correct);
//   }
//
// });

// targets questions based on their equal index
// assigns matching index to questions from divs

  // $squares.on('click', (e) => {
  //   const index = $(e.target).index();
  //   const question = triviaQuestionsArray[index];
  //   console.log(question);
  // });

// for loop to check user input with answer:
  // for (let i = 0, l = triviaQuestionsArray.length; i < l; i++) {
  //   const userAnswer = prompt(triviaQuestionsArray[i].question);
  //   if (userAnswer === triviaQuestionsArray[i].answer){
  //     alert(triviaQuestionsArray[i].rebuttal);
  //     i--;
  //   } else {
  //     alert(triviaQuestionsArray[i].correct);
  //   }
  // }

  // show background images on gameboard
    // $('.block').click(function() {
    //   $background.show();
    // });

    // function to toggle the background image on and off
    // $('.block').toggle(
    //   function() {
    //       $(this).css('background-image','url('on.jpg')');
    //   },
    //   function() {
    //       $(this).css('background-image','url('off.jpg')');
    //   });

// const triviaQuestions = ['What scares Columbus more than zombies?',
//   'The zombie breakout was caused by what rotten food?', 'What is Talahasses one weakness?',
//   'Rule #17.. Dont be a what?', 'Which famous actor does Columbus shoot for acting like a zombie?',
//   'Witchita and Lil Rock are heading where?', 'Which of these is not a valid rule on Columbuss list?',
//   'What was the films total gross after three months with its budget of a measley 23 million dollars..?',
//   'What scares Columbus more than zombies?',
//   'The zombie breakout was caused by what rotten food?', 'What is Talahasses one weakness?',
//   'Rule #17.. Dont be a what?', 'Which famous actor does Columbus shoot for acting like a zombie?',
//   'Witchita and Lil Rock are heading where?', 'Which of these is not a valid rule on Columbuss list?',
//   'What was the films total gross after three months with its budget of a measley 23 million dollars..?' ];
//

// function displayAlertCorrect(){
//   $popupWindow.addClass('active');
//   $alertBox.text(question.correct);
//   $okButton.on('click', classInactive);
// }
//
// function displayAlertWinner(){
//   $popupWindow.addClass('active');
//   $alertBox.text('Congratulations! You win!');
//   $okButton.on('click', refreshPage);
// }
//
// function displayAlertGameOver(){
//   $popupWindow.addClass('active');
//   $alertBox.text('You lost all your lives, you\'re zombie food');
//   $okButton.on('click', refreshPage);
// }
