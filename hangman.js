class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = "playing"
    }

    get puzzle() {
        let retPhrase = ''
        this.word.forEach(letter => {
            (this.guessedLetters.includes(letter) || letter === ' ') ? retPhrase += letter : retPhrase += '*'
        });
        return retPhrase
    }

    makeGuess(letter) {
        letter = letter.toLowerCase()
        if (this.guessedLetters.includes(letter)) {
            console.log("You have already guessed that letter")
        } else {
            this.guessedLetters.push(letter)
            if (!this.word.includes(letter)) {
                this.remainingGuesses--
            }
        }
        this.calcStatus()
    }

    calcStatus() {
        if (this.remainingGuesses === 0) {
            this.status = "failed"
        } else {
            const gameCompleted = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')
            if (gameCompleted) {
                this.status = "finished"
            }
        }
    }

    get statusMessage() {
        let message = ""
        if (this.status === "playing"){
            message = `You have ${this.remainingGuesses} turns left.`
        } else if (this.status === "failed") {
            message = `Game over. The word was "${this.word.join('')}"`
        } else if (this.status === "finished"){
            message = "Great work! You guessed the word!"
        }
        return message
    }
}