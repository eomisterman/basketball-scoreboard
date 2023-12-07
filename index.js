let homeScore = 0;
let awayScore = 0;

let homeEl = document.getElementById("home-score");
let awayEl = document.getElementById("away-score");

let intervalID = null;
let minutes = 20;
let seconds = 0;

let minutesEl = document.getElementById("minutes");
let secondsEl = document.getElementById("seconds");

let startStopEl = document.getElementById("start-stop");

let homeLeader = document.getElementById("home-leader");
let awayLeader = document.getElementById("away-leader");

let clockEl = document.getElementById("clock");

let period = 1;
let periodEl = document.getElementById("period-num");

function addOne(team) {
  switch (team) {
    case "home":
      homeScore++;
      homeEl.textContent = homeScore;
      updateLeader();
      break;
    case "away":
      awayScore++;
      awayEl.textContent = awayScore;
      updateLeader();
      break;
    default:
      console.log("error");
  }
}
window.addOne = addOne;

function addTwo(team) {
  switch (team) {
    case "home":
      homeScore += 2;
      homeEl.textContent = homeScore;
      updateLeader();
      break;
    case "away":
      awayScore += 2;
      awayEl.textContent = awayScore;
      updateLeader();
      break;
    default:
      console.log("error");
  }
}
window.addTwo = addTwo;

function addThree(team) {
  switch (team) {
    case "home":
      homeScore += 3;
      homeEl.textContent = homeScore;
      updateLeader();
      break;
    case "away":
      awayScore += 3;
      awayEl.textContent = awayScore;
      updateLeader();
      break;
    default:
      console.log("error");
  }
}
window.addThree = addThree;

function updateLeader() {
  if (homeScore > awayScore) {
    homeLeader.style.visibility = "visible";
    awayLeader.style.visibility = "hidden";
  } else if (awayScore > homeScore) {
    homeLeader.style.visibility = "hidden";
    awayLeader.style.visibility = "visible";
  } else {
    homeLeader.style.visibility = "hidden";
    awayLeader.style.visibility = "hidden";
  }
}

function reset() {
  // Reset score
  homeScore = 0;
  awayScore = 0;
  homeEl.textContent = homeScore;
  awayEl.textContent = awayScore;
  // Reset leader highlighting
  updateLeader();
  // Reset clock
  if (intervalID) {
    clearInterval(intervalID);
    intervalID = null;
  }
  minutes = 20;
  seconds = 0;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds < 10 ? "0" + seconds : seconds;
  // Reset the Start/Stop button
  startStopEl.textContent = "START";
  // Reset Period
  period = 1;
  periodEl.textContent = period;
}
window.reset = reset;

function subtractTime() {
  if (minutes <= 0 && seconds <= 0) {
    // End of game
    clockEl.style.border = "6px solid yellow"
    if (intervalID) {
      clearInterval(intervalID);
    }
  } else if (seconds <= 0) {
    // Subtract minute, reset seconds to 59
    seconds = 59;
    minutes--;
    minutesEl.textContent = minutes < 10 ? "0" + minutes : minutes;
    secondsEl.textContent = seconds < 10 ? "0" + seconds : seconds;
  } else {
    seconds--;
    minutesEl.textContent = minutes < 10 ? "0" + minutes : minutes;
    secondsEl.textContent = seconds < 10 ? "0" + seconds : seconds;
  }
}

function startStopClock() {
  if (!intervalID) {
    // Start the game clock
    intervalID = setInterval(() => {
      subtractTime();
    }, 1000);
    startStopEl.textContent = "STOP";
  } else {
    // Stop the game clock
    clearInterval(intervalID);
    intervalID = null;
    startStopEl.textContent = "START";
  }
}
window.startStopClock = startStopClock;

function nextPeriod() {
  if (period == 1 && !intervalID) {
    period++;
    periodEl.textContent = period;
    minutes = 20;
    seconds = 0;
    minutesEl.textContent = minutes < 10 ? "0" + minutes : minutes;
    secondsEl.textContent = seconds < 10 ? "0" + seconds : seconds;
  } else {
    console.error("Error: Cannot change period when clock is running or while in the second period. If you need to reset the period, start a new game.");
  }
}
window.nextPeriod = nextPeriod;
