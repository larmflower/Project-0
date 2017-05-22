$(() => {

  console.log('Js loaded');


  // Each div has an index which is targeted by the click event
  // Assigns index to divs when clicked
  // $squares = $('#gameboard div');
  // $squares.on('click', (e) => {
  //   const squareIndex = $(e.target).index();
  // });
  const $squares = $('.div');
  $squares.on('click', (e) => {
    const squareIndex = $(e.target).index();
    console.log(squareIndex);
  });



  // Define array for zombie questions
  // Create array of questions which will align with the matching indexes of divs

  const triviaQuestions = ['What scares Columbus more than zombies?',
    'The zombie breakout was caused by what rotten food?', 'What is Talahasses one weakness?',
    'Rule #17.. Dont be a what?', 'Which famous actor does Columbus shoot for acting like a zombie?',
    'Witchita and Lil Rock are heading where?', 'Which of these is not a valid rule on Columbuss list?',
    'What was the films total gross after three months with its budget of a measley 23 million dollars..?',
    'What scares Columbus more than zombies?',
    'The zombie breakout was caused by what rotten food?', 'What is Talahasses one weakness?',
    'Rule #17.. Dont be a what?', 'Which famous actor does Columbus shoot for acting like a zombie?',
    'Witchita and Lil Rock are heading where?', 'Which of these is not a valid rule on Columbuss list?',
    'What was the films total gross after three months with its budget of a measley 23 million dollars..?' ];

  const triviaQuestionsArray = [{
    text: 'What scares Columbus more than zombies?',
    options: ['spiders', 'clowns', 'mice'],
    answer: 'clowns'}, {
      text: 'The Zombie Breakout was caused by which rotten food?',
      options: ['Sushi', 'Spaghetti', 'Burgers'],
      answer: 'Burgers'}, {
        text: 'What is Talahasse\'s\ one weakness?',
        options: ['Twinkies', 'Puppies', 'Cupcakes'],
        answer: 'Twinkies'},{
          text: 'Rule #17.. Don\'\t be a what?',
          options: ['Zombie', 'Hero', 'Crook'],
          answer: 'Hero'}, {
            text: 'Which famous actor does Columbus shoot for acting like a zombie?',
            options: ['Ben Affleck', 'Bill Murray', 'Brad Pitt'],
            answer: 'Bill Murray'}, {
              text: 'Witchita and Lil Rock are heading where?',
              options: ['The Grand Canyon', 'Disney Land', 'Pacific Playland'],
              answer: 'Pacific Playland'}, {
                text: 'Which of these rules are not on Columbus\'\ list?',
                options: ['Bounty Paper Towels', 'Always wear socks', 'Enjoy the little things'],
                answer: 'Always wear socks'}, {
                  text: 'What was the film\'\s gross three months after it released (with a budget of 23 million dollars)?',
                  options: ['75 million', '1 billion', '40 million'],
                  answer: '75 million'}];


    // targets questions based on their equal index
    // assigns matching index to questions from divs
  $squares.on('click', (e) => {
    const index = $(e.target).index();
    const question = triviaQuestions[index];
    console.log(question);
  });



// prompt from triviaQuestionsArray on click,
// the first value of corresponding question..,
// options displayed in prompt as buttons
// return user input
// compare inner html of user input to inner html of third value in array objects









});
