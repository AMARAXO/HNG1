function updateClock() {
    const dayElement = document.getElementById('day');
    const UTCtimeElement = document.getElementById('time')

    const now = new Date();
    console.log(now)
   const daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    
    const dayOfweek = daysOfWeek[now.getUTCDay()];

   const hours =
    now.getUTCHours().toString().padStart(2, '0');
    const minutes =
    now.getUTCMinutes().toString().padStart(2,'0');
    const seconds =
    now.getUTCSeconds().toString().padStart(2, '0');

    dayElement.textContent = `Day: ${dayOfweek}`;
    UTCtimeElement.textContent = `Time: ${hours}:${minutes}:${seconds}`;

    setInterval(updateClock, 1000);
}

updateClock()