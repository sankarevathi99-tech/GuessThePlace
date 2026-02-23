 Features

*  Random destination image display
*  User input to guess the place
*  Hint option for each destination
*  Score tracking system
*  Restart game option
*  Responsive design using Bootstrap
*  5 Questions per game
*  10 points per correct answer

##  Built With

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* Bootstrap 4


##  How to Play

1. Click Start Guessing
2. Look at the image displayed
3. Enter your guess in the input field
4. Click Check
5. Use Hint if needed
6. Click Next to move to the next question
7. After 5 questions, your final score will be displayed

##  Project Structure

 Guess-The-Indian-Destination
│── front.html      
│── style.css       
│── script.js       
│── README.md      

## Game Logic Overview

* Destinations are stored in an array of objects.

* A random place is selected using:

  javascript
  Math.floor(Math.random() * urls.length)
  

* Score increases by 10 points for each correct answer.

* After 5 questions, the game automatically shows the final result screen.

---

## Destinations Included

Some of the famous places in the game:

* Charminar
* Taj Mahal
* Golden Temple
* India Gate
* Qutub Minar
* Mysore Palace
* Gateway of India
* Red Fort
* Konark Sun Temple
* Ajanta Caves
* Ellora Caves


## Future Improvements

* Add timer 
* Add difficulty levels
* Prevent repeated questions
* Add leaderboard with local storage
* Add sound effects

