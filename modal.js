const answerButton = document.getElementById('answer');
const backgroundImage = document.querySelector('.background-image');
const hiddenWaldo = document.querySelector('.waldo-answer img');
const waldo = document.querySelector('.waldo-answer');
const modal = document.getElementById('modal-container');
const closeButton = document.getElementById('close-btn');
    
answerButton.addEventListener('click', (e) => {
    e.stopPropagation();
    answerButton.classList.toggle('active');
    backgroundImage.classList.toggle('active');

    if (answerButton.classList.contains('active')) {
        backgroundImage.style.opacity = '0.3';
        hiddenWaldo.style.opacity = '1.0';
    } else {
        backgroundImage.style.opacity = '1.0';
        hiddenWaldo.style.opacity = '0.0';
    }
});

backgroundImage.addEventListener('click', () => {
    if (backgroundImage.classList.contains('active')) {
        answerButton.classList.remove('active');
        backgroundImage.classList.remove('active');
        backgroundImage.style.opacity = '1.0';
        hiddenWaldo.style.opacity = '0.0';
    }
    if (modal.style.display === 'block') {
        modal.style.display = 'none';
        backgroundImage.style.opacity = '1.0';
        hiddenWaldo.style.opacity = '0.0';
        answerButton.style.display = 'block'
    }
});

waldo.addEventListener('click', (e) => {
    e.stopPropagation(); // Stop the propagation of the click event
    modal.style.display = 'block';
    backgroundImage.style.opacity = '0.3';
    hiddenWaldo.style.opacity = '1.0';
    answerButton.style.display = 'none'
});

modal.addEventListener('click', () => {
    modal.style.display = 'none';
    backgroundImage.style.opacity = '1.0';
    hiddenWaldo.style.opacity = '0.0';
    answerButton.style.display = 'block'
    answerButton.classList.remove('active')
});