class MemoryGame {
    constructor(cards) {
        this.cards = cards;
        this.pickedCards = []
        this.pairsClicked = 0
        this.pairsGuessed = 0
    }

    shuffleCards() {
        let newCards = []

        if (!this.cards) { // repasar todo el proceso
            return undefined
        } else {
            for (let i = this.cards.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1))
                let temp = this.cards[j]
                this.cards[j] = this.cards[i]
                this.cards[i] = temp
            }
            return newCards
        }
    }

    checkIfPair(card1, card2) {
        this.pairsClicked++
            if (card1 === card2) {
                this.pairsGuessed++
                    return true
            } else {
                return false
            }
    }

    checkIfFinished() {
        if (this.pairsGuessed === 12) {
            return true
        } else {
            return false
        }
    }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;