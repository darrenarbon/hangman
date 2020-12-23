let game

const render = () => {
    let puzzleDOM = document.querySelector("#currentPuzzle")
    puzzleDOM.innerHTML = '';
    game.puzzle.split("").forEach((letter) => {
        let oSpan = document.createElement("span")
        puzzleDOM.appendChild(oSpan)
        oSpan.textContent = letter
    })
   

    document.querySelector("#guessesLeft").textContent = game.statusMessage
    document.querySelector("#usedLetters").textContent = game.guessedLetters.toString()
}

const startGame = async() => {
    const puzzle = await getPuzzle('2')
    game = new Hangman(puzzle, 10)
    render()
}

window.addEventListener("keypress", function (e) {
    game.makeGuess(String.fromCharCode(e.charCode))
    render()
})

document.querySelector("#reset").addEventListener('click', startGame)

startGame()


const unOrdered = [21, 45, 7, 18, 12]

const orderNumbers = (arr) => {
    let retArray = []
    let arrCopy = [...arr];
    for (var i = 0; i < arr.length; i++) {
        let nextNumber = returnHighestNumber(arrCopy)
        retArray.unshift(nextNumber)
        arrCopy.splice(arrCopy.indexOf(nextNumber), 1)
    }
    
    return retArray
}

const returnHighestNumber = (arr) => {
    let nextNumber = 0
    arr.forEach(number => {
        if (number > nextNumber) {
            nextNumber = number
        }
    })
    return nextNumber
}

console.log(orderNumbers(unOrdered))


const reverseString = (str) => {
    const aString = str.split('')
    let retArray = []

    aString.forEach(letter => {
        retArray.unshift(letter)
    })

    return retArray.join('');
}

console.log(reverseString('Darren Arbon'))

for (var i = 1; i <= 100; i++) {
    if (i%5 ===0 && i%3 ===0){
        console.log("fizzbuzz")
    } else if (i%5 === 0) {
        console.log("Buzz")
    } else if (i%3 === 0) {
        console.log("Fizz")
    } else {
        console.log(i)
    }
}

const printTeam = (team, coach, ...players) => {
    console.log(`Team: ${team}`)
    console.log(`Coach: ${coach}`)
    console.log(`Players: ${players.join(', ')}`)
}

printTeam("Liberty", "Casey Penn", "Marge", "Aiden", "Herberty", "Sherry")

const todo = {
    id: "hjisfhdjk",
    text: "Hello",
    completed: false
}
