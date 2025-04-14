const logo = document.querySelector('.logo');
const thelogo = document.querySelector('.thelogo');
const textbox = document.querySelector('.textbox');

thelogo.addEventListener('click', (e) => {
    textbox.style.display = (textbox.style.display === 'flex') ? 'none' : 'flex';
});

