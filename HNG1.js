function updateClock() {
    const dayElement = document.getElementById('day');
    const UTCtimeElement = document.getElementById('time')

    const now = new Date();
    console.log(now)
   const daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    
    const dayOfweek = daysOfWeek[now.getUTCDay()];

   const ct = Date.now()

    dayElement.textContent = `Day: ${dayOfweek}`;
    UTCtimeElement.textContent = `Time: ${ct}`;

    setInterval(updateClock, 1000);
}

updateClock()
