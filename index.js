(function() {
  'use strict';
  
// PART ONE: 
    const stopOff = document.getElementById('stopButton');
    const stopOn = document.getElementById('stopLight');
    stopOff.addEventListener('click', (ev) => {
      stopOn.classList.toggle('stop'); // must be stopOn because you're toggling the light, not the button.
    });
    
    const slowOff = document.getElementById('slowButton');
    const slowOn = document.getElementById('slowLight');
    slowOff.addEventListener('click', (ev) => {
      slowOn.classList.toggle('slow');
    });
    
    const goOff = document.getElementById('goButton');
    const goOn = document.getElementById('goLight');
    goOff.addEventListener('click', (ev) => {
      goOn.classList.toggle('go');
    });
    
// PART TWO:
    const stopButton = document.getElementsByClassName('button')[0];
    // const button = document.getElementById('controls')
      stopButton.addEventListener('mouseenter', (ev) => {
        console.log(`Entered ${ev.target.textContent} Button.`)
      });
      stopButton.addEventListener('mouseleave', (ev) => {
        console.log(`Left ${ev.target.textContent} Button.`)
      });
    
    const slowButton = document.getElementsByClassName('button')[1];
      slowButton.addEventListener('mouseenter', (ev) => {
        console.log(`Entered ${ev.target.textContent} Button.`)
      });
      slowButton.addEventListener('mouseleave', (ev) => {
        console.log(`Left ${ev.target.textContent} Button.`)
      });

      const goButton = document.getElementsByClassName('button')[2];
        goButton.addEventListener('mouseenter', (ev) => {
          console.log(`Entered ${ev.target.textContent} Button.`)
        });
        goButton.addEventListener('mouseleave', (ev) => {
          console.log(`Left ${ev.target.textContent} Button.`)
        });

// BONUS: 
// HEY ZUBAIR LOOK AT ME SETTING THAT TERNARY EQUAL TO A VALUE.
    const controls = document.getElementById('controls');
    
    controls.addEventListener('click', (ev) => {
      if (ev.target === controls) {
        return;
      }
      let status = '';
      
      if (ev.target === stopButton) {
        status = stopOn.classList.contains('stop') ? 'on' : 'off';
      }
      else if (ev.target === slowButton) {
        status = slowOn.classList.contains('slow') ? 'on' : 'off';
      }
      else {
        status = goOn.classList.contains('go') ? 'on' : 'off';
      }
      console.log(`${ev.target.textContent} bulb ${status}`)

    });

})();
