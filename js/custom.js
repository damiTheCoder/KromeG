let points = 0;
let trials = 4;
let randomTime;
let countdownInterval;
let startTime;
let elapsed = 0;
const margin = 100; // 0.1 seconds in milliseconds
const cooldownTime = 5 * 60 * 1000; // 5 minutes in milliseconds

// Event listeners for mobile section
document.getElementById('btn-start-mobile').addEventListener('click', startGameMobile);
document.getElementById('btn-catch-mobile').addEventListener('click', catchTimerMobile);

// Event listeners for web section
document.getElementById('btn-start-web').addEventListener('click', startGameWeb);
document.getElementById('btn-catch-web').addEventListener('click', catchTimerWeb);

function startGameMobile() {
    startGame('mobile');
}

function startGameWeb() {
    startGame('web');
}

function startGame(view) {
    if (trials <= 0) {
        document.getElementById(`display-message-${view}`).textContent = 'No trials left. Please wait 5 minutes for more trials.';
        return;
    }

    randomTime = (Math.random() * 4 + 1).toFixed(1) * 1000; // Random time between 1.0 and 5.0 seconds
    document.getElementById(`display-message-${view}`).textContent = `Catch the timer at ${(randomTime / 1000).toFixed(1)} seconds!`;
    document.getElementById(`btn-start-${view}`).disabled = true;
    document.getElementById(`btn-catch-${view}`).disabled = false;
    
    startTime = Date.now();
    elapsed = 0;

    countdownInterval = setInterval(() => {
        elapsed = Date.now() - startTime;
        let seconds = Math.floor(elapsed / 1000);
        let milliseconds = Math.floor((elapsed % 1000) / 100); // Update every 100 ms
        document.getElementById(`display-timer-${view}`).textContent = `${pad(seconds)}:${pad(milliseconds * 10)}`;
    }, 100);
}

function catchTimerMobile() {
    catchTimer('mobile');
}

function catchTimerWeb() {
    catchTimer('web');
}

function catchTimer(view) {
    clearInterval(countdownInterval);
    const catchTime = Date.now();
    const timeDiff = catchTime - startTime;

    if (Math.abs(timeDiff - randomTime) <= margin) {
        points += 2000;
        document.getElementById(`display-message-${view}`).textContent = 'Good catch!';
    } else {
        document.getElementById(`display-message-${view}`).textContent = 'Missed!';
    }

    document.getElementById(`points-${view}`).textContent = points;
    document.getElementById(`btn-start-${view}`).disabled = false;
    document.getElementById(`btn-catch-${view}`).disabled = true;

    trials -= 1;
    document.getElementById(`display-trials-${view}`).textContent = `Trials left: ${trials}`;

    if (trials === 0) {
        setTimeout(resetTrials, cooldownTime);
    }
}

function resetTrials() {
    trials = 4;
    document.getElementById('display-trials-mobile').textContent = `Trials left: ${trials}`;
    document.getElementById('display-trials-web').textContent = `Trials left: ${trials}`;
    document.getElementById('display-message-mobile').textContent = 'Get ready to catch the timer!';
    document.getElementById('display-message-web').textContent = 'Get ready to catch the timer!';
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}
