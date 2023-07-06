const inputField = document.getElementById('inputField');
const btn = document.getElementById('btn');
const list = document.getElementById('list');

const savedList = JSON.parse(localStorage.getItem('listItems')) || [];

if (savedList.length > 0) {
  savedList.forEach(function(item) {
    addListItem(item);
  });
}

btn.addEventListener('click', function() {
  const inputValue = inputField.value;
  
  addListItem(inputValue);
  
  inputField.value = '';

  savedList.push(inputValue);
  
  localStorage.setItem('listItems', JSON.stringify(savedList));
});

function addListItem(value) {
  const listItem = document.createElement('li');
  listItem.textContent = value;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function() {
    list.removeChild(listItem);

    const index = savedList.indexOf(value);
    if (index !== -1) {
      savedList.splice(index, 1);
    }

    localStorage.setItem('listItems', JSON.stringify(savedList));
  });

  listItem.appendChild(deleteButton);
  list.appendChild(listItem);
}