
const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]')
}

refs.stopBtn.disabled = true;
let intervalId = 
    
refs.startBtn.style.cssText = `width: 100px;height: 50px;border-radius: 4px;`
refs.stopBtn.style.cssText = `width: 100px;height: 50px;border-radius: 4px;`

refs.startBtn.addEventListener('click', changeColor)
refs.stopBtn.addEventListener('click', onBtnStopClick)

function changeColor() {
        refs.stopBtn.disabled = false;
    refs.startBtn.disabled = true;
    
    intervalId = setInterval(() => {
     refs.body.style.backgroundColor = getRandomHexColor()
      refs.stopBtn.style.cssText = `width: 100px;
    height: 50px;
    border-radius: 4px;
    border-color: ${getRandomHexColor()}`  
    }, 1000)
}

function onBtnStopClick() {
    refs.stopBtn.disabled = true;
    refs.startBtn.disabled = false;
    refs.startBtn.style.cssText = `width: 100px;
    height: 50px;
    border-radius: 4px;
    border-color: ${getRandomHexColor()}`
    clearInterval(intervalId)
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

