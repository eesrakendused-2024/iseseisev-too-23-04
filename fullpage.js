document.addEventListener('DOMContentLoaded', function() {
  new fullpage('#fullPage', {
      autoScrolling: true,
      navigation: true,
      controlArrows: false,
      slidesNavigation: true
  });

  const navLinks = document.querySelectorAll('.top-menu a');
  navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const sectionIndex = parseInt(this.getAttribute('data-section-index'));
          fullpage_api.moveTo(sectionIndex + 1); 
      });
  });
});

document.getElementById('contact-button').addEventListener('click', function() {
  const contactDetails = document.getElementById('contact-details');
  if (contactDetails.style.display === 'none' || contactDetails.style.display === '') {
      contactDetails.style.display = 'block';
  } else {
      contactDetails.style.display = 'none';
  }
});

document.addEventListener('DOMContentLoaded', function() {
  new Swiper('.swiper-container', {
      loop: true,
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
  });
});

let randomNumber = Math.floor(Math.random() * 10) + 1;
const guessInput = document.getElementById('guess-input');
const submitGuessButton = document.getElementById('submit-guess');
const feedbackElement = document.getElementById('feedback');
const playAgainButton = document.getElementById('play-again');

function checkGuess() {
    const userGuess = parseInt(guessInput.value);
    
    if (userGuess === randomNumber) {
        feedbackElement.textContent = 'Õige number! Arvasid ära!';
        playAgainButton.style.display = 'block';
        submitGuessButton.disabled = true;
    } else if (userGuess < randomNumber) {
        feedbackElement.textContent = 'Liiga väike! Proovi uuesti.';
    } else {
        feedbackElement.textContent = 'Liiga suur! Proovi uuesti.';
    }
        guessInput.value = '';
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    feedbackElement.textContent = '';
    guessInput.value = '';
    submitGuessButton.disabled = false;
    playAgainButton.style.display = 'none';
}

submitGuessButton.addEventListener('click', checkGuess);
playAgainButton.addEventListener('click', resetGame);