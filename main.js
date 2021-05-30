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

const Xpot = '<svg version="1.1" id="prefix__Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 512 512" xml:space="preserve"><style>.prefix__st0{fill:none;stroke:orange;stroke-width:100;stroke-linecap:round;stroke-miterlimit:10}</style><path class="prefix__st0" d="M116 116l280 280M116 396l280-280"/></svg>';

const Opot = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><circle cx="256" cy="256" r="180.4" fill="none" stroke="orange" stroke-width="75" stroke-linecap="round" stroke-miterlimit="10"/></svg>';

function move(e) {
    if (turnX === false) {
        // It's turn O
        e.innerHTML = Opot;
        turnX = true;
        
        // add element index of parent
        oPeac.push(getElIndex(e));
        if (win(oPeac)) {
            whoWin = "O";
            winDowOpen();
        }
    } else {
        // It's turn X
        e.innerHTML = Xpot;
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
        // placed and win checker for any move
        if (e.innerHTML === "" && win(xPeac) != true && win(oPeac) != true) {
            move(e);
        }
    })
});
