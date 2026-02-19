document.addEventListener("DOMContentLoaded", () => {
    "use strict";
    (function () {
        function countdown(countdownElem, date) {
            var targetDate = new Date(date).getTime();

            var interval = setInterval(function () {
                var now = new Date().getTime();
                var distance = targetDate - now;

                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                const countdownElement = document.querySelector(countdownElem);
                if (countdownElement.querySelector(".days")) {
                    countdownElement.querySelector(".days").innerHTML = days;
                }
                countdownElement.querySelector(".hours").innerHTML = hours;
                countdownElement.querySelector(".minutes").innerHTML = minutes;
                countdownElement.querySelector(".seconds").innerHTML = seconds;

                if (distance < 0) {
                    countdown(countdownElem, "2024-12-16T18:40:00");
                    clearInterval(interval);
                    // countdownElement.innerHTML = "EXPIRED";
                }
            }, 1000);

            console.log(date);
            const now = new Date().getTime();
            const distance = countdownDate - now;
            console.log(distance);

        }

        countdown(".ul-flash-sale-countdown-wrapper", "2024-03-16T18:40:00");
    })();
});