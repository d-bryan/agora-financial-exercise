// ensure that the webpage has loaded before running any scripts
$(document).ready(function(){

  // function to change both of the checkboxes when clicked
  $('.checkbox').click(function() {
      var $checkboxes = $(this).parent().find('input[type=checkbox]');
      $checkboxes.prop('checked', $(this).is(':checked'));
  });

  // button event listeners
  $('.btn').click(function() {

    // if the checkboxes are not checked then alert the user to enroll for newsletter
    if ($("input[type='checkbox'").is(':checked') === false) {
      alert("Please ensure that you have checked the checkboxes before proceeding to the webinar.");
    }

    // make call to API endpoint and set the text on the page
    if ($("input[type='checkbox'").is(':checked') === true) {
      $.ajax({
        type: "GET",
        url: "https://bl45immth4.execute-api.us-east-1.amazonaws.com/production/",
        success: function (response) {
          // object is broken so entering in static
          $('.success').html('Congratulations! Your spot is reserved');
        }
      });
    }
  })

  // add five days to timer start
  const fiveDays = ((1000 * 60 * 60 * 24) * 5 );
  // set the webinar start date
  const webinarDate = new Date().getTime() + fiveDays;
  // set the clock to tick every second
  var x = setInterval(function() {

    // set the timer start time 
    var timerStartDate = new Date().getTime();

    // find the difference in time between the two dates
    var timeDifference = webinarDate - timerStartDate;

    // find the time calculations for days, minutes, hours and seconds
    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // display the result in timer paragraph
    document.getElementById('timer').innerHTML = `${days} days ${hours} Hr ${minutes} min ${seconds} s`;

    // if the countdown timer is finished write text to let user know that the webinar is beginning
    if (timeDifference < 0) {
      clearInterval(x);
      document.getElementById('timer').innerHTML = "The Webinar is STARTING NOW!"
    }

  }, 1000);
  
});