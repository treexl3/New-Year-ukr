const targetDate = new Date("1 Jan, 2024 00:00:00").getTime();

const newYear = () => {
   const currentDate = new Date().getTime();
   let difference = targetDate - currentDate;

   const second = 1000;
   const minute = second * 60;
   const hour = minute * 60;
   const day = hour * 24;

   const remainderDays = Math.floor(difference / (day));
   const remainderHours = Math.floor(difference % (day) / (hour));
   const remainderMinutes = Math.floor(difference % (hour) / (minute));
   const remainderSeconds = Math.floor(difference % (minute) / (second));

   document.getElementById('day').innerText = remainderDays;
   document.getElementById('hour').innerText = remainderHours;
   document.getElementById('minute').innerText = remainderMinutes;
   document.getElementById('second').innerText = remainderSeconds;
}

setInterval(() => {
   newYear();
}, 1000);
newYear();