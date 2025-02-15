const taskValue = localStorage.getItem("taskValue") || "No task available";
const displayTask = document.getElementById("task");

if (displayTask) {
  displayTask.textContent = taskValue; // Display task in <p>
}

function startCountdown(durationMins) {
  let duration = durationMins * 60; //Conversion in seconds

  const displayTime = document.getElementById("time-remaining");

  function updateCountdown() {
    let minutes = Math.floor(duration / 60);
    let seconds = duration % 60;

    displayTime.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    if (duration > 0) {
      duration--;
    } else {
      clearInterval(interval);
      window.electronAPI.loadPage("stopBreak.html");
    }
  }

  updateCountdown(); // Initial call to avoid 1s delay
  const interval = setInterval(updateCountdown, 1000);
}

// Start a 30-minute countdown when the page loads
window.onload = function () {
  startCountdown(10);
};
