window.addEventListener('DOMContentLoaded', function () {
    // const startTime = new Date();
    let t;
    const timerForm = document.querySelector('.timer_form-form'),
        formHours = timerForm.querySelector('#hours2'),
        formMinutes = timerForm.querySelector('#minutes2'),
        formSeconds = timerForm.querySelector('#seconds2'),
        modalWindow = document.querySelector('.timer-modal'),
        modalCloseBtn = modalWindow.querySelector('.timer-modal-close');
    let totalTime = 0;
    timerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let hours = +formHours.value,
            minutes = +formMinutes.value,
            seconds = +formSeconds.value;
        if (!isNaN(hours) && !isNaN(minutes) && !isNaN(seconds)) {
            totalTime = hours * 3600000 + minutes * 60000 + seconds * 1000;
            const startTime = new Date();
            let endTime = new Date((startTime.getTime() + totalTime));
            t = endTime.getTime() - startTime.getTime();
        } else {
            alert('Введите числа');
        }
        timerForm.reset();
        getTimerValues(t);
        setTimer('.timer', t);
    });

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
            if (timeLeft.total <= 0) {
                clearInterval(timeInterval);
                modalWindow.classList.remove('timer-modal-hidden');
                modalWindow.classList.add('timer-modal-visible');
                modalCloseBtn.addEventListener('click', () => {
                    modalWindow.classList.remove('timer-modal-visible');
                    modalWindow.classList.add('timer-modal-hidden');
                });
            }
        }
    }

});