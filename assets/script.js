// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// What is the final product or final goal?
// a string of collected values logged into local
// storage that doesn't leave when you refresh.


// How to get there.
// Well I was completely wrong.
// first thing I'm going to do is set up my columns.
// I'm pretty much gonna format it the way anthony did.
// I couldn't care less about the actual useability and I'm much more focused on making sure I get this done in a timely manner.
// so now I'm going to get going.
//I can't believe I'm stuck already 

var todayDate = moment().format('MM Do YYYY');
console.log(todayDate)
$('#currentDay').text(todayDate)




// Ok so I got together all my times, now its time to see if i can define the variable as the hour so I can have that variable in where the numbers are