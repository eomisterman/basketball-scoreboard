let homeScore = 0;
let awayScore = 0;

let homeEl = document.getElementById("home-score");
let awayEl = document.getElementById("away-score");

function addOne(team) {
  switch (team) {
    case 'home':
      homeScore++;
      homeEl.innerText = homeScore;
      break;
    case 'away':
      awayScore++;
      awayEl.innerText = awayScore;
      break;
    default:
      console.log('error');
  }
}
window.addOne = addOne;

function addTwo(team) {
  switch (team) {
    case 'home':
      homeScore += 2;
      homeEl.innerText = homeScore;
      break;
    case 'away':
      awayScore += 2;
      awayEl.innerText = awayScore;
      break;
    default:
      console.log('error');
  }
}
window.addTwo = addTwo;

function addThree(team) {
  switch (team) {
    case 'home':
      homeScore += 3;
      homeEl.innerText = homeScore;
      break;
    case 'away':
      awayScore += 3;
      awayEl.innerText = awayScore;
      break;
    default:
      console.log('error');
  }
}
window.addThree = addThree;