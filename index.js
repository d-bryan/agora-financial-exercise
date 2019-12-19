// TODOS 
// - sync up both of the check boxes so the check and uncheck at the same time ---- DONE

// - In the blue box  below the words, “TIME LEFT UNTIL THE WEBINAR STARTS...” please create a countdown timer. When the page loads, the timer should begin counting down to 5 days at midnight from then. ---- DONE

// - Make it so when someone clicks either of the two blue buttons below the checkboxes and the checkboxes are not checked an alert appears asking the user to check the checkbox before proceeding.  ---- DONE

// - When the user clicks either of the two blue buttons below the checkboxes and the checkboxes are checked make a call to the following endpoint: "https://bl45immth4.execute-api.us-east-1.amazonaws.com/production/" ---- DONE

// - After receiving a response from this call on button click please parse the response of the call and place the value of submitok below the buttons. ---- DONE

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
      alert("Please ensure that you have checked the checkboxes to enroll for the newsletter before moving on to the webinar.");
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

  // set the clock to tick every second
  var x = setInterval(function() {

    // set the timer start time 
    var timerStartDate = new Date().getTime();
    // set the webinar start date
    var webinarDate = new Date('December 24, 2019 00:00:00').getTime();

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