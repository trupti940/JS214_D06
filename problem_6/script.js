let timerInterval;
let elapsedSeconds = 0;
let isRunning = false;

const timerElement = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

function updateTimer(){
    const minutes = String(Math.floor(elapsedSeconds / 60)).padStart(2,'0');
    const seconds = String(elapsedSeconds % 60).padStart(2,'0');
    timerElement.textContent = `${minutes}:${seconds}`;
}

function startTimer(){
    if (!isRunning){
        timerInterval = setInterval(() => {
            elapsedSeconds++;
            updateTimer();
        }, 1000);
        isRunning = true;
    }
}

function stopTimer(){
    clearInterval(timerInterval);
    isRunning = false;
}

function resetTimer(){
    stopTimer();
    elapsedSeconds = 0;
    updateTimer();
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

updateTimer();