import { Quote } from './Quote.js'

class Game {
    constructor({imgWrapper, passwordWrapper, categoryWrapper, keyboardWrapper}) {
        this.imgWrapper = imgWrapper;
        this.passwordWrapper = passwordWrapper;
        this.categoryWrapper = categoryWrapper;
        this.keyboardWrapper = keyboardWrapper;

        this.quotes = [
            {
                text: "test ",
                category: "film",
            },
            {
                text: "test test",
                category: "gra",
            },
            {
                text: "test test test",
                category: "motoryzacja",
            },
            {
                text: "test test test test",
                category: "motoryzacja",
            },
            {
                text: "test test test test test ",
                category: "motoryzacja",
            },
            {
                text: "test test test test test test",
                category: "motoryzacja",
            }
        ];
    }

    generatePassword() {
        const randomNumber = Math.floor(Math.random() * this.quotes.length);
        const {text, category} = this.quotes[randomNumber];
        this.quote = new Quote(text);
        this.categoryWrapper.textContent = category;
    }

    guess(letter) {
        console.log(letter)
    }

    generateKeyboard() {
        for (let i = 0; i < 26; i++) {
            const letter = (i + 10).toString(36);
            const btn = document.createElement('button');
            btn.classList.add('letterBtn');
            btn.textContent = letter;
            btn.addEventListener('click', () => this.guess(letter));
            this.keyboardWrapper.appendChild(btn);
        }
    }


    start() {
        this.generatePassword();
        this.generateKeyboard();
    }
}

const game = new Game({
    imgWrapper: document.querySelector('.game-container__img'),
    passwordWrapper: document.querySelector('.game-container__password'),
    categoryWrapper: document.querySelector('.game-container__category'),
    keyboardWrapper: document.querySelector('.game-container__keyboard'),
});

game.start();
