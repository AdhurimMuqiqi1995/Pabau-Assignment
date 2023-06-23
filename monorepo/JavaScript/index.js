const checkboxes = document.querySelectorAll('input[type=checkbox]');
const shuffleButton = document.getElementById('shuffleButton');
const changeValueButton = document.getElementById('changeValueButton');
const showSelectedButton = document.getElementById('showSelectedButton');
const outputDiv = document.getElementById('output');
 

shuffleButton.addEventListener('click', function() {
    const checkboxArray = Array.from(checkboxes);
  
    checkboxArray.sort(() => Math.random() - 0.5);
  
    const container = checkboxes[0].parentNode.parentNode;
  
    checkboxArray.forEach(function(checkbox) {
      container.appendChild(checkbox.parentNode);
    });
  })