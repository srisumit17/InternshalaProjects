// // Get the current date and time
// var today = new Date();

// // Get the day of the week (0-6, where 0 is Sunday and 6 is Saturday)
// var day = today.getDay();

// // Array of day names
// var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// // Display the current day
// console.log("Today is: " + daylist[day] + ".");

// // Get the current hour, minute, and second
// var hour = today.getHours();
// var minute = today.getMinutes();
// var second = today.getSeconds();

// // Determine if it's AM or PM
// var prepand = (hour >= 12) ? " PM " : " AM ";

// // Convert 24-hour format to 12-hour format
// hour = (hour >= 12) ? hour - 12 : hour;

// // Check for special cases when hour is 0
// if (hour === 0 && prepand === ' PM ') {
//     if (minute === 0 && second === 0) {
//         hour = 12;
//         prepand = ' Noon';
//     } else {
//         hour = 12;
//         prepand = ' PM';
//     }
// }

// // Check for special cases when hour is 0
// if (hour === 0 && prepand === ' AM ') {
//     if (minute === 0 && second === 0) {
//         hour = 12;
//         prepand = ' Midnight';
//     } else {
//         hour = 12;
//         prepand = ' AM';
//     }
// }

// // Display the current time
// console.log("Current Time: " + hour + prepand + " : " + minute + " : " + second); 

function getCurrentDay() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDay = days[currentDate.getDay()];
    return currentDay;
}
function getCurrentTime() {
    const currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    const meridiem = (hours >= 12) ? 'PM' : 'AM';
    hours = (hours > 12) ? hours - 12 : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    
    return `${hours} ${meridiem} : ${minutes} : ${seconds}`;
}
const currentDay = getCurrentDay();
const currentTime = getCurrentTime();
console.log(`Today is : ${currentDay}.`);
console.log(`Current time is : ${currentTime}.`);