# Responsive Page Build Exercise

## Part 1: HTML + CSS

The goal of this exercise is:

Use the two images below and the assets file to create a mobile first responsive web page.

Here are the two images:
[Mobile](https://d13p2xj50zkyqm.cloudfront.net/promos/test/mobile.png)
[Desktop](https://d13p2xj50zkyqm.cloudfront.net/promos/test/desktop.png)

Here is a document with build assets:
[Build Assets](https://docs.google.com/document/d/1b8karDU2kxnajjFMKa-8sTW1ujvx51NNcn8WR9V6L58/edit?usp=sharing)

Please note in this exercise we are looking to identify technical areas for training. So, if we’re successful, we’ll have a foundation from which to identify the skills that we should hone together should we decide to move forward.

## Part 2: JavaScript

The goal of this exercise is:
Add functionality to the mockup above using jquery or plain javaScript.
Please use comments to describe your javascript logic

Sync up the two checkboxes on the page so both check and uncheck at the same time.

In the blue box  below the words, “TIME LEFT UNTIL THE WEBINAR STARTS...” please create a countdown timer. When the page loads, the timer should begin counting down to 5 days at midnight from then.

Make it so when someone clicks either of the two blue buttons below the checkboxes and the checkboxes are not checked an alert appears asking the user to check the checkbox before proceeding.

When the user clicks either of the two blue buttons below the checkboxes and the checkboxes are checked make a call to the following endpoint:

`https://bl45immth4.execute-api.us-east-1.amazonaws.com/production/`

After receiving a response from this call on button click please parse the response of the call and place the value of `submitok` below the buttons.
