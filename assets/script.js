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
var currentMilTime = parseInt(moment().format('HH'));
console.log(currentMilTime)

// function colorCode() {
//     $('.row').each(function(index, element){
//         console.log(index, element.getAttribute('data-id'))
//         // if its now do it green (it is a time)
//         // grab the data id 
//         // turn it into a moment object
//         // then compare the moment object with the current time
//         // set the color
//        console.log(moment().hour(9).minute(00).format('MMM Do YYYY hh:mm'))
//     });

// }
for (var i = 9; i <= 17; i++) {

    var color;
    if(currentMilTime<i) color = "red";
    else if(currentMilTime===i) color = "green";
    else color = "blue";
        
    var parentEl = $(`<div class="row ${color}" data-id="` + i + '">');
    var idEl = $(`<div class="col-1 ">` + i + ':00</div>');
    var textEl = $('<textarea class="col-10 userBlock">');
    var btnEl = $('<button class="col-1 submit">Schedule</button>');

    parentEl.append(idEl, textEl, btnEl);
    $('.container').append(parentEl);

  }

  $('.container').on('click', '.submit', function() {
    var parentId = $(this).parent().attr('data-id');
    var name = $(this).prev().val();
    console.log(name);
    localStorage.setItem(parentId, name);
  });
  $('.name').each(function() {
    var parentId = $(this).parent().attr('data-id');
    var eventScheduled = localStorage.getItem(parentId);
    $(this).val(eventScheduled);
  });

// function colorCode() {
//    var rowEl = $('.row').each(function(index, element){
        
//         var specificTime = element.getAttribute(parseInt('data-id'));
//         var timeCompare = moment().hour(specificTime);
//         var todayCompare = moment().hour();
        

//        console.log(specificTime);
//     });

// }

// I can't seem to get anything to work to color code it based on moment object
  // if its now do it green (it is a time)
        // grab the data id 
        // turn it into a moment object
        // then compare the moment object with the current time
        // set the color

// if the data id is earlier than the time then color one way
// if its later then color code it to be different
// if its now color code it to be green
// colorCode()
// Ok so I got together all my times, now its time to see if i can define the variable as the hour so I can have that variable in where the numbers are