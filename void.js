const initialPopup = document.getElementById('initial-popup');
const buttonsBottom = document.getElementById('buttons-bottom');
const bottomButtonHowTo = document.getElementById('bottom-button-how-to');
const bottomButtonAbout = document.getElementById('bottom-button-about');
const aboutBox = document.getElementById('about');
const howToBox = document.getElementById('how-to');

// Hide bottom buttons initially (since popup is open)
buttonsBottom.style.display = 'none';

// When "okay..." button is clicked
const okayButton = document.querySelector('.okay-button');
okayButton.addEventListener('click', () => {
    aboutBox.style.opacity = '0';
    setTimeout(() => {
        aboutBox.style.display = 'none';
    }, 300);
});

// When "get started?" button is clicked
const getStartedButton = document.querySelector('.get-started-button');
getStartedButton.addEventListener('click', () => {
    initialPopup.style.opacity = '0';
    setTimeout(() => {
        initialPopup.style.display = 'none';
        buttonsBottom.style.display = 'block'; // Show bottom buttons
    }, 1500);
});

// Show about box when bottom about button is clicked
bottomButtonAbout.addEventListener('click', () => {
    aboutBox.style.display = 'block';
    aboutBox.style.opacity = '1';
    buttonsBottom.style.display = 'none';
});

// Show how-to box when bottom how-to button is clicked
bottomButtonHowTo.addEventListener('click', () => {
    howToBox.style.display = 'block';
    howToBox.style.opacity = '1';
    buttonsBottom.style.display = 'none';
});