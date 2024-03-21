/*
Create a function `convertTime` which converts a time formatted as "hh:mm" in a duration in minuts.

If the argument is not correctly formatted, return null.

* "02:30" -> 150
* "01:45" -> 105
* "01h45m" -> null

Add you own tests.

*/

// TODO add your code here

function convertTime (time) {
    if (time.length != 5 && !time.includes(":")) return null
    else {
        let timeInMinutes = 0;
        time = time.split(":")
        hours = Number(time[0])*60
        minutes = Number(time[1])
        timeInMinutes += hours
        timeInMinutes += minutes
        return timeInMinutes
    }
}

console.log(convertTime("02:30"))
console.log(convertTime("01:45"))
console.log(convertTime("01h45m"))
console.log(convertTime("09:46"))
module.exports = convertTime;
