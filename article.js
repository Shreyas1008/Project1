const logo = document.querySelector('.logo');
const thelogo = document.querySelector('.thelogo');
const textbox = document.querySelector('.textbox');

thelogo.addEventListener('click', (e) => {
    if (textbox.style.display === 'flex') {
        textbox.style.display = 'none';
    } else {
        textbox.style.display = 'flex';
    }
});

