document.addEventListener('DOMContentLoaded', function() {
  new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    navigationPosition: 'right',
    lockAnchors: true,
    anchors: ['firstPage', 'secondPage', 'thirdPage'], 
    menu: '#menu'
  });

  // Järgnev mängukood on tehtud koostöös ChatGPT-ga, baas sealt ja ise täiustatud.
  const boxes = document.querySelectorAll('.box');
  const startBtn = document.getElementById('startBtn');
  const levelCounter = document.getElementById('levelCounter');
  let sequence = [];
  let playerSequence = [];
  let level = 1;
  let flashing = false;

 
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  
  function flashBox(box) {
    return new Promise((resolve) => {
      box.style.backgroundColor = '#0031F9';
      setTimeout(() => {
        box.style.backgroundColor = 'lightgray';
        setTimeout(resolve, 500); 
      }, 500);
    });
  }

  
  async function generateSequence() {
    sequence = [];
    for (let i = 0; i < level; i++) {
      const randomIndex = getRandomInt(0, boxes.length - 1);
      sequence.push(boxes[randomIndex]);
      await flashBox(boxes[randomIndex]);
    }
    flashing = false;
  }

  
  function startGame() {
    level = 1;
    levelCounter.textContent = 'Level: ' + level;
    resetGame(); 
    generateSequence();
  }

  
  function handleClick(e) {
    if (!flashing) { 
      const clickedBox = e.target;
      flashBox(clickedBox);
      playerSequence.push(clickedBox);
      if (playerSequence.length === sequence.length) {
        checkSequence();
      }
    }
  }

 
  function checkSequence() {
    for (let i = 0; i < sequence.length; i++) {
      if (sequence[i] !== playerSequence[i]) {
        alert('Wrong sequence! Game over.');
        startGame();
        return;
      }
    }
    playerSequence = [];
    level++;
    levelCounter.textContent = 'Level: ' + level;
    flashing = true; 
    setTimeout(generateSequence, 1000); 
  }

  
  function resetGame() {
    playerSequence = [];
    level = 1;
    levelCounter.textContent = 'Level: ' + level;
  }

  
  startBtn.addEventListener('click', startGame);

  
  boxes.forEach(box => box.addEventListener('click', handleClick));
  
  // ilma selle koodita mingil põhjusel ei taha menu nupud töödata
  function addMenuEventListeners() {
    const menuItems = document.querySelectorAll('#menu li');
    menuItems.forEach(item => {
      item.addEventListener('click', function(event) {
        event.preventDefault(); // Tühistab vaikimisi käitumise
        const anchor = item.getAttribute('data-menuanchor');
        fullpage_api.moveTo(anchor); // Liigub antud ankrule
      });
    });
  }
  addMenuEventListeners();
});