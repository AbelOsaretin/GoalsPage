const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
const currentDay = document.querySelector('[data-testid="currentDay"]');

function updateDateTime() {
  const now = new Date();
  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "UTC",
  };
  const formattedTime = now.toLocaleTimeString("en-US", options);
  currentTimeUTC.textContent = formattedTime;

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = days[now.getDay()];
  currentDay.textContent = dayOfWeek;
}

updateDateTime();
setInterval(updateDateTime, 1000);
