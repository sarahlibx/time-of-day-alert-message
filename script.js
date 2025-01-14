var time = new Date().getHours();
//console.log(time);
// Your conditional statements here
var greeting = "Hi";
var name = "Sarah";
if (time < 12) {
  greeting = "Good Morning";
} else if (time <= 18) {
  greeting = "Good Afternoon";
} else if (time <= 22) {
  greeting = "Good Evening";
} else greeting = "Go To Bed";

var welcomeMessage = alert(`${greeting}, ${name}!`);
//console.log(welcomeMessage);
