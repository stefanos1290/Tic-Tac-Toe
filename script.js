const cellElements = document.querySelectorAll('[data-cell]');

cellElements.forEach(cell => {
    cell.addEventListener('click', hendleClick, { once: true})
});

function hendleClick(e) {
    console.log(e)
}