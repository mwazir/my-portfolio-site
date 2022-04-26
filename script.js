// setting up namespacing
const app = {};

const h1TextElem = document.querySelector('.h1-text');
const h1BracketBegElem = document.querySelector('.h1-bracket-beg');
const h1BracketEndElem = document.querySelector('.h1-bracket-end');
const h1inputCursorElem = document.querySelector('.h1-input-cursor');
const h2inputCursorElem = document.querySelector('.h2-input-cursor');
const h2Elem = document.querySelector('h2');

app.typeH2Sentence = async (sentence, delay = 70) => {
    const letters = sentence.split("");
    let i = 0;
    h2inputCursorElem.classList.add('show');
    while (i < letters.length) {
        await app.waitForMs(delay);
        h2Elem.append(letters[i]);
        i++;
    }
    h2inputCursorElem.classList.remove('show');
    return;
}

app.typeH1Sentence = async (sentence, delay = 120) => {
    const letters = sentence.split("");
    let i = 0;
    while (i < letters.length) {
        await app.waitForMs(delay);
        if (i < 1) {
            h1BracketBegElem.append(letters[i])
        } else if (i > 8) {
            h1BracketEndElem.append(letters[i]);
        } else {
            h1TextElem.append(letters[i]);
        }
        i++;
    }
    h1inputCursorElem.classList.add('hide');
    app.typeH2Sentence("{ Front-end Web Developer }")
    return;
}

app.waitForMs = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

app.setupSlideOutNav = () => {
    const slideOutNavCheckboxElem = document.querySelector('#opens-sidebar-menu');
    const toggleBtnElem = document.querySelector('#toggle-btn');

    // on page load close nav bar
    slideOutNavCheckboxElem.checked = false;

    toggleBtnElem.addEventListener('click', () => {
        slideOutNavCheckboxElem.checked = false;
    })
}

// set up init function
app.init = () => {
    // set up the nav menu
    app.setupSlideOutNav();
    app.typeH1Sentence("<Muhammad>");
}

// initialize app
app.init();