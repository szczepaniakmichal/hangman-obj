class Game {

    constructor({imgWraper, passwordWraper, categorywraper, keybordwraper}) {
        this.imgWraper = imgWraper;
        this.passwordWraper = passwordWraper;
        this.categoryWraper = categorywraper;
        this.keybordWraper = keybordwraper;
    }

    quotes = [
        {
            text: "test jeden",
            category: "film",
        },
        {
            text: "test dwa",
            category: "gra",
        },
        {
            text: "test trzy",
            category: "motoryzacja",
        }
    ];


    generatePassword() {
        console.log("this.quotes", this.quotes)
        const randomNumber = Math.floor(Math.random() * this.quotes.length);
        const { text, category } = this.quotes;
        console.log(text)
        this.passwordWraper.textContent = text;
        this.categoryWraper.textContent = category;
    }

    guess(letter) {
        console.log(letter)
    }

    generateKeybord() {
        for (let i = 0; i < 26; i++) {
            const letter = (i + 10).toString(36);
            const btn = document.createElement('button');
            btn.classList.add('letterBtn');
            btn.textContent = letter;
            btn.addEventListener('click', () => this.guess(letter));
            this.keybordWraper.appendChild(btn);
        }
    }

    start() {
        this.generatePassword();
        this.generateKeybord();
    }

}

const game = new Game({
    imgWraper: document.querySelector('.game-container__img'),
    passwordWraper: document.querySelector('.game-container__password'),
    categorywraper: document.querySelector('.game-container__category'),
    keybordwraper: document.querySelector('.game-container__keybord'),
});

game.start();