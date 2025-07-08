let mydate= new Date();
console.log(mydate);// 2025-07-08T14:28:07.235Z
console.log(mydate.toString()); // Tue Jul 08 2025 19:58:07 GMT+0530 (India Standard Time)
console.log(mydate.toDateString()); // Tue Jul 08 2025
console.log(mydate.toTimeString()); // 19:58:07 GMT+0530 (India Standard Time)
console.log(mydate.toISOString()); //2025-07-08T14:28:07.235Z
console.log(mydate.toLocaleDateString()); // 7/8/2025
console.log(mydate.toLocaleTimeString()); // 7:58:07 PM
console.log(mydate.toLocaleString('default', { timeZone: 'Asia/Kolkata' })); // 7/8/2025, 7:58:07 PM
console.log(mydate.getFullYear()); // 2025
console.log(mydate.getMonth()); // 6 (0-11, 0 is January)
console.log(mydate.toJSON()); //2025-07-08T14:28:07.235Z

console.log(mydate.getDate()); // 8 (1-31)

let mydate2= new Date(2025, 6, 8, 19, 58, 7);// 6 is july, 8 is date, 19 is hour, 58 is minute, 7 is second
console.log(mydate2.toString()); // Tue Jul 08 2025 19:58:07 GMT+0530 (India Standard Time)
console.log(mydate2.getTime()); // 1719844687000 (milliseconds since January 1, 1970(THis is the Unix epoch time(starting point for time in JavaScript))) 

console.log(Math.floor(mydate2.getTime() / 1000)); // 1719844687 (seconds since January 1, 1970)(/ 1000 to convert milliseconds to seconds)

let date3= new Date("12-23-2025 19:58:07");// month-day-year
console.log(date3.toString()); // Tue Dec 23 2025 19:58:07 GMT+0530 (India Standard Time)

