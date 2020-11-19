const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
const cellElements = document.querySelectorAll('[data-cell]');
let circleTurn

cellElements.forEach(cell => {
    cell.addEventListener('click', hendleClick, { once: true})
});

function hendleClick(e) {
    const cell = e.target;
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
    placeMark(cell, currentClass)
    console.log(e)
}

function placeMark(cell, currentClass){
    cell.classList.add(currentClass)
}