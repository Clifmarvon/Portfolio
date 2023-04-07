const progressBar = document.querySelector('#web-set progress');
const progressValue = document.querySelector('#web-set p');

function setProgress(value) {
  progressBar.setAttribute('value', value);
  progressBar.style.width = `${value}%`;
  progressValue.textContent = `${value}%`;
}

// Example usage: setProgress(40);
