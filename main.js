// blocks container
const container = document.querySelector('#container');
// any peace place
const blocks = container.childNodes;
const winLine = document.querySelector('#winLine');
// WIn window :|
const winDow = document.querySelector('#winDow');
// who's turn is
let turnX = true;
let whoWin;
// X moves
let xPeac = [];
// O moves
let oPeac = [];

// get element index of parent function
function getElIndex(el) {
    for (var i = 0; el = el.previousElementSibling; i++);
    return i;
}

// check who won
function win(array) {
    if (array.includes(2) && array.includes(4) && array.includes(6)) {
        winLine.style.transform = "translate(-50%, -50%) rotate(45deg)"
        return true;
    } else if (array.includes(0) && array.includes(1) && array.includes(2)) {
        winLine.style.transform = "translate(-50%, -50%) rotate(90deg)"
        winLine.style.top = "16.5%";
        return true;
    } else if (array.includes(3) && array.includes(4) && array.includes(5)) {
        winLine.style.transform = "translate(-50%, -50%) rotate(90deg)"
        return true;
    } else if (array.includes(6) && array.includes(7) && array.includes(8)) {
        winLine.style.transform = "translate(-50%, -50%) rotate(90deg)"
        winLine.style.top = "82.5%";
        return true;
    } else if (array.includes(0) && array.includes(3) && array.includes(6)) {
        winLine.style.transform = "translate(-50%, -50%)"
        winLine.style.left = "16.5%";
        return true;
    } else if (array.includes(1) && array.includes(4) && array.includes(7)) {
        winLine.style.transform = "translate(-50%, -50%)"
        return true;
    } else if (array.includes(2) && array.includes(5) && array.includes(8)) {
        winLine.style.transform = "translate(-50%, -50%)"
        winLine.style.left = "82.5%";
        return true;
    } else if (array.includes(0) && array.includes(4) && array.includes(8)) {
        winLine.style.transform = "translate(-50%, -50%) rotate(-45deg)"
        return true;
    }
    winLine.style.height = getComputedStyle(container).height;
}

function winDowClose() {
    setTimeout(() => {
        winDow.style.display = "none";
        winLine.style.display = "none";
    }, 500);
    winDow.style.opacity = "0";
    setTimeout(() => {
        location = location;
    }, 1000);
}

function winDowOpen() {
    setTimeout(() => {
        winDow.style.opacity = "1";
    }, 1);
    winDow.style.display = "block";
    winLine.style.display = "block";
    winDow.querySelector('h1').innerText = whoWin + " Win!";
}

function move(block, e) {
    if (turnX === false) {
        // It's turn O
        block.src = "https://i.postimg.cc/B8QwZ5Sk/O.png";
        turnX = true;
        
        // add element index of parent
        oPeac.push(getElIndex(e));
        if (win(oPeac)) {
            whoWin = "O";
            winDowOpen();
        }
    } else {
        // It's turn X
        block.src = "https://i.postimg.cc/mcXpPchD/X.png";
        turnX = false;

        // add element index of parent
        xPeac.push(getElIndex(e));
        if (win(xPeac)) {
            whoWin = "X";
            winDowOpen();
        }
    }
}

blocks.forEach(e => {
    e.addEventListener('click', () => {
        let block = e.querySelector('img');
        // placed and win checker for any move
        if (block.getAttribute('src') === "" && win(xPeac) != true && win(oPeac) != true) {
            move(block, e);
        }
    })
});
