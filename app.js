//Make 3x3 grid, then turn them into circles
//make 9 divs inside of a container and give them a class to access later
//Add a click event listener to each div
//make mole, turn each div to red one at a time
//create start game button, make it functional,
//track the clicks of each time mole gets clicked, create a 30 second timer
//make reset button that resets everything
//style better
//add mole image instead of red dot
//make top score conditional
//figure out modal
//style better
                                       
//here is where I grab all my elements from HTML to use in the app.js
document.addEventListener("DOMContentLoaded", () => {
  const start = document.querySelector(".start");
  const timer = document.querySelector(".timer");
  const reset = document.querySelector(".reset");
  let clicks = document.querySelectorAll(".pocket");
  let resultsButton = document.querySelector(".result--button");
  let modalClose = document.querySelector(".modal-close");
  let modalBg = document.querySelector(".modal-bg");
  let playerName = document.querySelector("name"); // delete if not using
  let scoreSystem = document.querySelector(".score-system"); // delete if not using
  let s1 = document.querySelector("#s1");
  let s2 = document.querySelector("#s2");
  let s3 = document.querySelector("#s3");
  let textBox = document.querySelector("#text-box");
  let highScoreButton = document.querySelector("#hs-button");
  let newHighScore = document.querySelector("#high--scores");
  let timerLeft = 0;
  let whacks = 0;
  let whackIncrm = document.querySelector(".clicks");
  whackIncrm.innerHTML = `Whacks: ${whacks}`;
  let scoreBoard1 = 0;
  let scoreBoard2 = 0;
  let scoreBoard3 = 0;

  //Countdown timer being used here
  // This is a super hacky way of doing things. It works! 
  // So props for that, but I'd love to see something that 
  // isn't constantly running in the background unecessarily. 
  // Instead, set an interval inside of start event listener,
  // and clear it once timerLeft=0. Ask for help on how to
  // do this if you're not sure!
  window.setInterval(function () {
    console.log("Timer Left:", timerLeft)
    if (timerLeft <= 0) {
      clearInterval((timerLeft = 0));
    }
    timer.innerHTML = "Timer: " + timerLeft;
    if (timerLeft > 0) {
      timerLeft -= 1;
    }
  }, 1000);

  //This function is calling the turnRed function which essentially switches the cirle from being burlywood to the image, then calls math.random to randomize the moles over the board
  // const timeout = () => {
  //   turnRed(getRandomDiv());
  // };

  // This function randomizes my divs using math.random
  // The above sentence could be more clear with something like: "returns a randomly selected div"
  // I would rename this to getRandomHole, to get even more specific
  const getRandomDiv = () => {
    let randNum = Math.floor(Math.random() * 9).toString();
    return document.getElementById(randNum);//randnum=1-8 divs, keeping track using randNum
  };

  //This function is whats making the mole pop in and out of each hole. Using the set timeout to bring the color back to its original color after about half a second.Then making the image re-appear using the display to block. Then my winning condition
  // I would rename this to makeMoleAppear or something like that
  const turnRed = (div) => {
    if (timerLeft > 0) {
      div.style.backgroundImage = "url('./Assets/new-mole3.jpg')";
      div.style.backgroundPosition = "center";
      div.style.backgroundSize = "cover";
      setTimeout(turnBurlywood, 600, div); // make sure you can explain what the third argument is doing here
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
        scoreBoard3 = whacks;//the third just stays third
        s1.innerHTML = `1. ${scoreBoard1}`;
        s2.innerHTML = `2. ${scoreBoard2}`;
        s3.innerHTML = `3. ${scoreBoard3}`;
      }
      whacks = 0;
      timerLeft = 0;
    }
  };

  //This function increments the whacks up by one only if the image is inside of the hole
  const trackClicks = (event) => {
    if (event.target.style[4] === "background-image") {
      whacks++;
      whackIncrm.innerHTML = `Whacks: ${whacks}`;
    }
  };

 
  //This function turns the mole back to its original color, then calls timeout to run the code again
  const turnBurlywood = (div) => {
    div.style.backgroundImage = "";
    // div.style.backgroundImage = 'none'
    div.style.backgroundColor = "burlywood";
    // timeout(); // replacing this with turnRed(getRandomDiv())
    turnRed(getRandomDiv())
  };

  //I know this method is not recommended but did it for lack time purposes and this works
  // need to manually reset the game
  const resetButton = () => {
    window.location.reload();
  };

  // event listener for start button
  start.addEventListener("click", (event) => {
    timerLeft = 30;
    // timeout(event); 
    // looks like the line above is just running turnRed(getRandomDiv())
    // and doesnt even use the event object that is being passed into it
    // so I'm replacing it with the code it's actually running
    turnRed(getRandomDiv()); // this is replacing timeout(event)
    // countdown(event) // get rid of this since you're not using it?
    start.style.display = "none"; 
  });
  clicks.forEach((each) => each.addEventListener("click", trackClicks));
  reset.addEventListener("click", resetButton);
  // event listeners for pockets // you already add the event listeners for the holes above
  // clicks.forEach((each) => each.addEventListener("click", trackClicks));
  // clicks.forEach((each) => each.addEventListener);

  //event listener to open pop up modal, made a new class for the pop up window
  resultsButton.addEventListener("click", function () {
    modalBg.classList.add("bg-active");
  });
  //event listener that removes pop up box after the X is clicked
  modalClose.addEventListener("click", function () {
    modalBg.classList.remove("bg-active");
  });

  //eventListener for reset button XD
  reset.addEventListener("click", resetButton);

  //Event listener for the input field to put your name in, and submit button
  highScoreButton.addEventListener("click", (event) => {
    let name = textBox.value;
    event.preventDefault();
    newHighScore.innerHTML = `Great job ${name}! You got ${scoreBoard1} whacks`;
  });

});
