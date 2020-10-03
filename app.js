//Make 3x3 grid, then turn them into circles
//make 9 divs inside of a container and give them a class to access later
//Add a click event listener to each div
//make mole, turn each div to red one at a time
//create start game button, make it functional,
//track the clicks of each time mole gets clicked, create a 30 second timer
//make reset button that resets everything
//style better
//add mole image instead of red dot


                                       
                                        
document.addEventListener("DOMContentLoaded", () => {
  const start = document.querySelector(".start");
  const timer = document.querySelector(".timer");
  const reset = document.querySelector(".reset");
  let clicks = document.querySelectorAll(".pocket"); //turns into an array; use for loop to iterate through the array
  let resultsButton = document.querySelector(".result--button");
  let modalClose = document.querySelector(".modal-close");
  let modalBg = document.querySelector(".modal-bg");
  let playerName = document.querySelector("name");
  let scoreSystem = document.querySelector(".score-system");
  let s1 = document.querySelector("#s1");
  let s2 = document.querySelector("#s2");
  let s3 = document.querySelector("#s3");
  let textBox = document.querySelector("#text-box");
  let highScoreButton = document.querySelector("#hs-button");
  let newHighScore = document.querySelector("#high--scores");
  let timerLeft = 0;
  let whacks = 0;
  // let player1 = 0
  // let player2 = 0
  let whackIncrm = document.querySelector(".clicks");
  whackIncrm.innerHTML = `Whacks: ${whacks}`;
  let scoreBoard1 = 0;
  let scoreBoard2 = 0;
  let scoreBoard3 = 0;

  window.setInterval(function () {
    if (timerLeft <= 0) {
      clearInterval((timerLeft = 0));
    }
    timer.innerHTML = "Timer: " + timerLeft;
    if (timerLeft > 0) {
      timerLeft -= 1;
    }
  }, 1000);

  const timeout = () => {
    turnRed(getRandomDiv());
    // setTimeout(turnBurlywood, 10000)
    // div.style.backgroundColor ='burlywood'
  };

  const getRandomDiv = () => {
    let randNum = Math.floor(Math.random() * 9).toString();
    return document.getElementById(randNum);
  };

  //not every 3 secs but after 3 secs; 1 at a time
  //div parameter is.....(answer here: )
  const turnRed = (div) => {
    if (timerLeft > 0) {
      div.style.backgroundImage = "url('./Assets/new-mole3.jpg')";
      div.style.backgroundPosition = "center";
      div.style.backgroundSize = "cover";
      setTimeout(turnBurlywood, 600, div);
    } else {
      start.style.display = "block";
      if (whacks > scoreBoard1) {
        scoreBoard3 = scoreBoard2; //reassigns highest scores
        scoreBoard2 = scoreBoard1;
        scoreBoard1 = whacks;
        s1.innerHTML = `1. ${scoreBoard1}`;
        s2.innerHTML = `2. ${scoreBoard2}`;
        s3.innerHTML = `3. ${scoreBoard3}`;
      } else if (whacks > scoreBoard2) {
        scoreBoard3 = scoreBoard2; //whacks second highest score it takes that place
        scoreBoard2 = whacks;
        s1.innerHTML = `1. ${scoreBoard1}`;
        s2.innerHTML = `2. ${scoreBoard2}`;
        s3.innerHTML = `3. ${scoreBoard3}`;
      } else if (whacks > scoreBoard3) {
        scoreBoard3 = whacks;
        s1.innerHTML = `1. ${scoreBoard1}`;
        s2.innerHTML = `2. ${scoreBoard2}`;
        s3.innerHTML = `3. ${scoreBoard3}`;
      }
      whacks = 0;
      timerLeft = 0;
    }
  };

  //attempting to get whacks up by 1
  const trackClicks = (event) => {
    if (event.target.style[4] === "background-image") {
      whacks++;
      whackIncrm.innerHTML = `Whacks: ${whacks}`;
    }
  };
  //conditional to see if image is there, then count++

  // const addToLeaderBoard = () => {
  // scoreBoard.push({playerName: playerName.innerHTML, score: whacks})
  //

  //randnum=1-8 divs, keeping track using randNum
  //
  const turnBurlywood = (div) => {
    div.style.backgroundImage = "";
    // div.style.backgroundImage = 'none'
    div.style.backgroundColor = "burlywood";
    timeout();
  };

  const resetButton = () => {
    window.location.reload();
  };

  // event listeners

  // event listener for start button
  start.addEventListener("click", (event) => {
    timerLeft = 30;
    timeout(event);
    // countdown(event)
    start.style.display = "none"; //look up docs
  });

  clicks.forEach((each) => each.addEventListener("click", trackClicks));
  reset.addEventListener("click", resetButton);

  // event listeners for pockets
  clicks.forEach((each) => each.addEventListener("click", trackClicks));
  clicks.forEach((each) => each.addEventListener);

  resultsButton.addEventListener("click", function () {
    modalBg.classList.add("bg-active");
  });

  modalClose.addEventListener("click", function () {
    modalBg.classList.remove("bg-active");
  });

  // eventListener for reset button
  reset.addEventListener("click", resetButton);

  highScoreButton.addEventListener("click", (event) => {
    let name = textBox.value;
    event.preventDefault();
    newHighScore.innerHTML = `Great job ${name}! You got ${scoreBoard1} whacks`;
  });
});
