const changeColor = document.getElementById('changeColor');
const buttonOptions = document.getElementById('buttonDiv');
const selectedClassName = 'current';
const buttonColors = ["#3aa757", "#e8453c", "#f9bb2d", "#4688f1"]

chrome.storage.sync.get('color', ({color}) => {
  changeColor.style.backgroundColor = color;
});

const handleButtonClick = event => {
  const current = event.target.parentElement.querySelector(`.${selectedClassName}`)
  if(current && current !== event.target) {
    current.classList.remove(selectedClassName);
  }

  const color = event.target.dataset.color;
  event.target.classList.add(selectedClassName);
  chrome.storage.sync.set({color});
  changeColor.style.background = color;
};


const constructOptions = buttonColors => {
  chrome.storage.sync.get("color", (data) => {
    const currentColor = data.color;
    buttonColors.forEach(color => {
      const button = document.createElement("button");
      button.dataset.color = color;
      button.style.backgroundColor = color;

      if(color == currentColor) {
        button.classList.add(selectedClassName);
      }

      button.addEventListener('click', handleButtonClick)
      buttonOptions.appendChild(button);
    })
  })
}

const container = document.getElementById('container');

const createANewDiv = () => {
  const obj = {key: "bonjour"}
  const newDiv = document.createElement('div');
  newDiv.innerText = obj.key
  container.appendChild(newDiv);
}


constructOptions(buttonColors);
createANewDiv();



