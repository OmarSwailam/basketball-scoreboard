let homeCounter = 0;
let guestCounter = 0;

homeCounterEl = document.getElementById("home-counter");
guestCounterEl = document.getElementById("guest-counter");

function increment(boardName, value) {
  if (boardName === "home") {
    homeCounter += value;
    homeCounterEl.textContent = homeCounter;
  } else if (boardName === "guest") {
    guestCounter += value;
    guestCounterEl.textContent = guestCounter;
  }

  if (homeCounter > guestCounter) {
    homeCounterEl.classList.add("leader");
    guestCounterEl.classList.remove("leader");
  } else if (guestCounter > homeCounter) {
    guestCounterEl.classList.add("leader");
    homeCounterEl.classList.remove("leader");
  }
}

const timerEl = document.getElementById("timer");

function startTimer() {
  timerInterval = setInterval(() => {
    timer++;
    updateTimerDisplay();
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = String(Math.floor(timer / 60)).padStart(2, "0");
  const seconds = String(timer % 60).padStart(2, "0");
  timerEl.textContent = `${minutes}:${seconds}`;
}

function reset() {
  homeCounter = 0;
  guestCounter = 0;
  homeCounterEl.textContent = 0;
  guestCounterEl.textContent = 0;
  homeCounterEl.classList.remove("leader");
  guestCounterEl.classList.remove("leader");
  timer = 0;
  updateTimerDisplay();
}

window.onload = startTimer;
