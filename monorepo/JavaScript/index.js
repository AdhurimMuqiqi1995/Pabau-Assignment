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

  changeValueButton.addEventListener('click', function() {
    outputDiv.innerHTML = "";
  
    const newValues = ['Adhurim', 'New', 'Internship', 'Pabau'];
  
    checkboxes.forEach(function(checkbox, index) {
      checkbox.checked = false; 
      checkbox.value = newValues[index] || '';
      const label = checkbox.parentNode;
      label.innerHTML = '';
      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(checkbox.value));
    });
  });

  showSelectedButton.addEventListener('click', function() {
    const selectedValues = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    outputDiv.textContent = `Selected values: ${selectedValues.join(', ')}`;
});