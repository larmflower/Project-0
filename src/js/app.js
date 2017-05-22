$(() => {

  console.log('Js loaded');

// Each div square has an index which is created / targeted by the click event
// OLD CODE: ,  userAnswer = prompt corresponding question from array of objects,
// inject content with javascript to an html elements for display of question with options

// .innerHTML to display question in div
// use .clone()? , Creates duplicate that replaces the old div

// create element button in button div?
// answer? button... generate them with question

// How to get questions to disappear once button selection occurs

  const $squares = $('.div');
  $squares.on('click', (e) => {
    const squareIndex = $(e.target).index();
    const question = triviaQuestionsArray[squareIndex];
    const div = document.querySelector('.answerBox');
    div.innerHTML = div.innerHTML + question.text;
    const button = document.createElement('button');
    document.querySelector('.answerBox2').appendChild(button);
    // const userAnswer = prompt(question.text);
    // if (userAnswer !== question.answer){
    //   alert(question.rebuttal);
    // } else {
    //   alert(question.correct);
    // }

  });

// Create array of questions which will align with the matching indexes of divs
// array that contains questions, answers and reactions to user input

  const triviaQuestionsArray = [{
    text: 'What scares Columbus more than zombies?',
    options: ['spiders', 'clowns', 'mice'],
    answer: 'clowns',
    correct: 'correct',
    rebuttal: 'no'
  }, {
    text: 'The Zombie Breakout was caused by which rotten food?',
    options: ['Sushi', 'Spaghetti', 'Burgers'],
    answer: 'Burgers',
    correct: 'correct',
    rebuttal: 'no'
  }, {
    text: 'What is Talahasse\'s\ one weakness?',
    options: ['Twinkies', 'Puppies', 'Cupcakes'],
    answer: 'Twinkies',
    correct: 'correct',
    rebuttal: 'no'
  },{
    text: 'Rule #17.. Don\'\t be a what?',
    options: ['Zombie', 'Hero', 'Crook'],
    answer: 'Hero',
    correct: 'correct',
    rebuttal: 'no'
  },{
    text: 'Which famous actor does Columbus shoot for acting like a zombie?',
    options: ['Ben Affleck', 'Bill Murray', 'Brad Pitt'],
    answer: 'Bill Murray',
    correct: 'correct',
    rebuttal: 'no'
  }, {
    text: 'Witchita and Lil Rock are heading where?',
    options: ['The Grand Canyon', 'Disney Land', 'Pacific Playland'],
    answer: 'Pacific Playland',
    correct: 'correct',
    rebuttal: 'no'
  }, {
    text: 'Which of these rules are not on Columbus\'\ list?',
    options: ['Bounty Paper Towels', 'Always wear socks', 'Enjoy the little things'],
    answer: 'Always wear socks',
    correct: 'correct',
    rebuttal: 'no'
  }, {
    text: 'What was the film\'\s gross three months after it released (with a budget of 23 million dollars)?',
    options: ['75 million', '1 billion', '40 million'],
    answer: '75 million',
    correct: 'correct',
    rebuttal: 'no'
  },{
    text: 'What scares Columbus more than zombies?',
    options: ['spiders', 'clowns', 'mice'],
    answer: 'clowns',
    correct: 'correct',
    rebuttal: 'no'
  }, {
    text: 'The Zombie Breakout was caused by which rotten food?',
    options: ['Sushi', 'Spaghetti', 'Burgers'],
    answer: 'Burgers',
    correct: 'correct',
    rebuttal: 'no'
  }, {
    text: 'What is Talahasse\'s\ one weakness?',
    options: ['Twinkies', 'Puppies', 'Cupcakes'],
    answer: 'Twinkies',
    correct: 'correct',
    rebuttal: 'no'
  },{
    text: 'Rule #17.. Don\'\t be a what?',
    options: ['Zombie', 'Hero', 'Crook'],
    answer: 'Hero',
    correct: 'correct',
    rebuttal: 'no'
  },{
    text: 'Which famous actor does Columbus shoot for acting like a zombie?',
    options: ['Ben Affleck', 'Bill Murray', 'Brad Pitt'],
    answer: 'Bill Murray',
    correct: 'correct',
    rebuttal: 'no'
  }, {
    text: 'Witchita and Lil Rock are heading where?',
    options: ['The Grand Canyon', 'Disney Land', 'Pacific Playland'],
    answer: 'Pacific Playland',
    correct: 'correct',
    rebuttal: 'no'
  }, {
    text: 'Which of these rules are not on Columbus\'\ list?',
    options: ['Bounty Paper Towels', 'Always wear socks', 'Enjoy the little things'],
    answer: 'Always wear socks',
    correct: 'correct',
    rebuttal: 'no'
  }, {
    text: 'What was the film\'\s gross three months after it released (with a budget of 23 million dollars)?',
    options: ['75 million', '1 billion', '40 million'],
    answer: '75 million',
    correct: 'correct',
    rebuttal: 'no'
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
