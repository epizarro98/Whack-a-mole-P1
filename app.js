//Make 3x3 grid, then turn them into circles
//make 9 divs inside of a container and give them a class to access later
//Add a click event listener to each div
//make mole, turn each div to red one at a time
//create start game button, make it functional,
//track the clicks of each time mole gets clicked, create a 30 second timer
//make reset button that resets everything
//style better
//add mole image instead of red dot




// handling the circles click event
// const pocketClick = () => {
//     // console.log('working')
//     document.getElementById('2').style.backgroundColor = 'red'
// }


// const getBack2 = (colorChange) => {
    //     debugger
    //     document.getElementById(colorChange.toString()).style.backgroundColor = 'red'
    // }
    
    document.addEventListener('DOMContentLoaded', () => {
        const start = document.querySelector('.start')
        
        const timeout = () => {
            turnRed(getRandomDiv())
        }
        
        //turnRed is the the function th
        const getRandomDiv = () => {
            let randNum = (Math.floor(Math.random() * 9)).toString() 
            return document.getElementById(randNum)
        }
        //not every 3 secs but after 3 secs; 1 at a time
        //div parameter is.....(answer here: )
        const turnRed = (div) => {
            div.style.backgroundColor = 'red'
            setTimeout(turnBurlywood, 500, div)
        }
        //randnum=1-8 divs, keeping track using randNum
        
        const turnBurlywood = (div) => {
            div.style.backgroundColor ='burlywood'
            timeout()
        }
        
        // timeout()
        start.addEventListener('click', timeout)
        
    })
        // setTimeout((getBack2(colorChange)), 1000)
        // setTimeout(getBack, 3000, randNum)
    // debugger
    // count++






//let start = document.querySelector('.start').addEventListener('click', changeColor())
//let pocket = document.getElementById('2').addEventListener('click', pocketClick)
    








//=============================================================
//This was me attempting to get my divs to randomly get a color
//=============================================================
// const changeColor = () => {
//     let newColor = makeColor()
//     let circles = document.getElementsByClassName('.pocket')
//     // document.getElementsByClassName('.rgb').innerHTML = newColor
// }

// const makeColor = () => {
//     let arr = []
//     for(let i = 0; i < 9; i++){
//         let num = Math.floor(Math.random() * 8)
//         arr.push(num)
//     }
// }
