const heartButton = document.getElementById('heartButton');
const letter = document.getElementById('letter');
const okButton = document.getElementById('okButton');

heartButton.addEventListener('click', () => {
    letter.classList.remove('hidden');
    document.body.style.backgroundColor = 'pink'; // Change background color to pink
});

okButton.addEventListener('click', () => {
    const message = letter.querySelector('p');
    message.textContent = 'JOKE, PAKISS PO';
});