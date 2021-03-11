window.addEventListener('DOMContentLoaded', function () {
    const startTime = new Date();
    let endTime = new Date((startTime.getTime() + 7300000));
    let t = endTime.getTime() - startTime.getTime();
    console.log(t);

    function getTimerValues(time) {
        let total = time;
        let hours = Math.floor(time / (1000 * 60 * 60)),
            minutes = Math.floor((time / (1000 * 60) % 60)),
            seconds = Math.floor((time / (1000) % 60));
        console.log(hours, minutes, seconds);
        return {
            total,
            hours,
            minutes,
            seconds,
        };
    }
    getTimerValues(t);

    function setTimer(selector, endTime) {
        const htmlTimer = document.querySelector(selector),
            hours = document.querySelector('#hours'),
            minutes = document.querySelector('#minutes'),
            seconds = document.querySelector('#seconds'),
            timeInterval = setInterval(updateTimer, 1000);
        updateTimer();

        function updateTimer() {
            const timeLeft = getTimerValues(endTime);
            endTime -= 1000;
            hours.innerText = timeLeft.hours;
            minutes.innerText = timeLeft.minutes;
            seconds.innerText = timeLeft.seconds;
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setTimer('.timer', t);
});