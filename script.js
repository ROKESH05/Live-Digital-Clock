const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");
const dayElement = document.getElementById("day");

function updateClock() {
  const now = new Date();

  // Format time
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  // Format date
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = now.toLocaleDateString(undefined, options);

  // Get weekday
  const weekday = now.toLocaleDateString(undefined, { weekday: 'long' });

  // Set content
  timeElement.textContent = `${hours}:${minutes}:${seconds}`;
  dateElement.textContent = date;
  dayElement.textContent = weekday;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call
