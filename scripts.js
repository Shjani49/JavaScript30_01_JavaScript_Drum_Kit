const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');

highlight.classList.add('highlight');
document.body.appendChild(highlight);

function highlightLink() {
    console.log(this);
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));