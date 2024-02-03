function updateClock() { /* Defing a function which will display and update the time */

    const now = new Date; /* Defining to create a new line with a new date and assign it to the variable now */
    let hours = now.getHours(); /* Defining to get the current hour and assign it to the variable hours */
    const meridian = hours >= 12 ? "PM" : "AM" /* Defining to check if the hours variable is greater than 12 than the meridian is PM otherwise it is AM */
    hours.toString().padStart(2, 0) /* If the hour is a single digit than it adds a 0 in front of it as padding */
    const minutes = now.getMinutes().toString().padStart(2, 0);/* If the minute is a single digit than it adds a 0 in front of it as padding */
    const seconds = now.getSeconds().toString().padStart(2, 0);/* If the second is a single digit than it adds a 0 in front of it as padding */
    timeString = `${hours}:${minutes}:${seconds} ${meridian}`; /* Defining a variable to hold the hour, minute, seconds and meridian */
    document.getElementById("clock").innerHTML = timeString; /* Defining to replace the default clock value to the current time and meridian value */


}

updateClock() /* Calling the update clock function */
setInterval(updateClock, 1000) /* using the built in setInterval method to give a interval in seconds every 1000 miliseconds which will proggress than towards a interval in minutes and then eventually hours */
