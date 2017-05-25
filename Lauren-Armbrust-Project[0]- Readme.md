![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# Zombieland Trivia Game


### Lauren Armbrust WDI27
-

#### First steps to build and run the code:

Here are the steps to begin building and running the code.

- Download or clone the repo
- `npm i` to install dependencies
- `gulp` to compile the source code and open in browser

> **Note**: You'll need to have `gulp-cli` installed globally
> `npm i -g gulp-cli`


#### A Brief History of Zombieland Trivia

Short Description of Project

Use screenshots

![Scroll Effect](desktop/scroll.jpg)


#### What technologies were used?

Software languages that were used during this process include:

- HTML 5
- SCSS
- JavaScript ES6
- jQuery 3.10
- Gulp
- NPM
- Git & github

#### What were the biggest challenges?

Of all the many challenges faced during this project, some of my favourites were:

- INITIALIZE SCROLL EVENT: First I needed to create the 'click' listener. But it wouldn't work so giving the element an id and animating the entire body solved this issue so it would scroll 'down' to set location of other element.
- STATIONARY GAMEBOARD: Divs were bouncing all over when responding to page resizing. Giving the container a position of 'absolute' and setting a width to the gameboard resolved this issue.
- CREATING OPTION BUTTONS WITH APPEND: Needed to target the 'option' key in the main array by using forEach() and append(). Important to empty the buttons beforehand so they could be filled with each corresponding question.
	

#### No regrets, but, what would you change if you could?

Some handy improvements I might add:

- Setting restrictions so users must work through gameboard sequentially rather than being able to skip ahead.
- Add extra difficulty levels! Create levels in the game to align with the arch of the movie.
- Virtual reality so you could interact with the environment of the game.



