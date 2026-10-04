const startDate = new Date(2025, 10, 27, 7, 45, 0);

const yearsElement = document.getElementById("years");
const monthsElement = document.getElementById("months");
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");


function calculateTime(start, end) {

    let years = end.getFullYear() - start.getFullYear();

    let current = new Date(start);

    current.setFullYear(
        current.getFullYear() + years
    );

    if (current > end) {
        years--;

        current = new Date(start);

        current.setFullYear(
            current.getFullYear() + years
        );
    }


    let months =
        end.getMonth() - current.getMonth();

    if (months < 0) {
        months += 12;
    }

    let monthDate = new Date(current);

    monthDate.setMonth(
        monthDate.getMonth() + months
    );

    if (monthDate > end) {
        months--;

        monthDate = new Date(current);

        monthDate.setMonth(
            monthDate.getMonth() + months
        );
    }


    const difference =
        end.getTime() - monthDate.getTime();


    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    return {
        years,
        months,
        days,
        hours,
        minutes,
        seconds
    };
}


function updateTimer() {

    const now = new Date();

    const time = calculateTime(
        startDate,
        now
    );


    yearsElement.textContent = time.years;
    monthsElement.textContent = time.months;
    daysElement.textContent = time.days;
    hoursElement.textContent = time.hours;
    minutesElement.textContent = time.minutes;
    secondsElement.textContent = time.seconds;
}


updateTimer();

setInterval(updateTimer, 1000);