//Make 3x3 grid, then turn them into circles
//make 9 divs inside of a container and give them a class to access later
//Add a click event listener to each div
//make mole, turn each div to red one at a time
//create start game button, make it functional,
//track the clicks of each time mole gets clicked, create a 30 second timer
//make reset button that resets everything
//style better
//add mole image instead of red dot

let timerLeft = 30
let whacks = 0

const countdown = () => {
    const start = () => {
        start()  
    }
    setInterval(() => {
        if(timerLeft <= 0){
            clearInterval(timerLeft = 0)
        }
        let timer = document.querySelector('.timer')
        timer.innerHTML = 'Timer: ' + timerLeft
        timerLeft -=1
    }, 1000);
}

//countdown function
const timeout = () => {
    turnRed(getRandomDiv())
}

//turnRed is the the function th
const getRandomDiv = () => {
    let randNum = (Math.floor(Math.random() * 9)).toString() 
    return document.getElementById(randNum)
    //to get image set background image? try it
}

//not every 3 secs but after 3 secs; 1 at a time
//div parameter is.....(answer here: )
const turnRed = (div) => {
    div.style.backgroundImage = "url('./Assets/new-mole3.jpg')";
    div.style.backgroundPosition = 'center'
    div.style.backgroundSize = 'cover'
    setTimeout(turnBurlywood, 1000, div)
}

//attempting to get whacks up by 1
const trackClicks = (event) => {
    
    if(event.target.style[4] === 'background-image'){
        whacks++
        let whackIncrm = document.querySelector('.whacked')
        whackIncrm.innerHTML = ` ${whacks}`
    }
}

//conditional to see if image is there, then count++
const clearBoard = () => {
    if(timerLeft = 0){
        // looks like you're missing something here
    }
}

//randnum=1-8 divs, keeping track using randNum
const turnBurlywood = (div) => {
    div.style.backgroundImage = ''
    div.style.backgroundColor ='burlywood'
    timeout()
}

const resetButton = () => {
    console.log("Reset button was clicked!")
    // clearInterval(timerLeft = 0)
    // div.style.backgroundColor = 'burlywood
    //whacks = 0
    // timerLeft = 30
    // console.log(whacks)
    // timerLeft = 30
    // whacks = 0
    // whackIncrm = document.querySelector('.whacked')
    // whackIncrm.innerHTML = ` ${whacks}` 
    // window.location.reload()
}

document.addEventListener('DOMContentLoaded', ()=>{
    const start = document.querySelector('.start')
    const reset = document.querySelector('.reset')
    let clicks = document.querySelectorAll('.pocket')//turns into an array; use for loop to iterate through the array

    // event listener for start button
    start.addEventListener('click', (event) =>{
        timeout(event)
        countdown(event)
        start.style.display = 'none'//look up docs
        //console.log(start)
    })

    // event listeners for pockets
    clicks.forEach(each => each.addEventListener('click', trackClicks))

    // eventListener for reset button
    reset.addEventListener('click', resetButton)
})