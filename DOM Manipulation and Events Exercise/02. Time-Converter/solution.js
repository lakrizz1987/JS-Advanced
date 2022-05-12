function attachEventsListeners() {

    let obj = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }

    let inputDayElement = document.getElementById('days');
    let inputHoursElement = document.getElementById('hours');
    let inputMinutesElement = document.getElementById('minutes');
    let inputSecondsElement = document.getElementById('seconds');

    Array.from(document.querySelectorAll('input[value="Convert"]'))
        .forEach(button => button.addEventListener('click', convert));

    function convert(e) {
        let curentElement = e.target.parentNode.querySelector('input[type="text"]');
        let curentValue = curentElement.value;
        let idCurent = curentElement.id;

        if (idCurent == 'days') {
            inputHoursElement.value = curentValue * obj.hours;
            inputMinutesElement.value = curentValue * obj.minutes;
            inputSecondsElement.value = curentValue * obj.seconds;

        } else if (idCurent == 'hours') {
            inputDayElement.value = curentValue / obj.hours;
            inputMinutesElement.value = inputDayElement.value * obj.minutes;
            inputSecondsElement.value = inputDayElement.value * obj.seconds;

        } else if (idCurent == 'minutes') {
            inputDayElement.value = curentValue / obj.minutes;
            inputHoursElement.value = inputDayElement.value * obj.hours;
            inputSecondsElement.value = inputDayElement.value * obj.seconds;

        } else if (idCurent == 'seconds') {
            inputDayElement.value = curentValue / obj.seconds;
            inputHoursElement.value = inputDayElement.value * obj.hours;
            inputMinutesElement.value = inputDayElement.value * obj.minutes;
        };

    };
}

