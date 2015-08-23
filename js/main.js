var runningSpeed = 10;
var userSpeeds = [5, 10, 7, 12];
var text = "Your running speed is ";

function getUserInput() {
	var userInput = document.getElementById('userInput').value;
	console.log('this function was run!!!');
	console.log(userInput);
}

// print to console
console.log(runningSpeed);

// alert the user
// alert(runningSpeed);

// printing to the screen
document.write(text + runningSpeed + "mph");

// document by Id
document.getElementById('test').innerHTML = runningSpeed;

console.log("first user is this fast: " + userSpeeds[0]);
console.log("second user is this fast: " + userSpeeds[1]);
console.log("third user is this fast: " + userSpeeds[2]);
console.log("fourth user is this fast: " + userSpeeds[3]);

for (i = 0;  i < userSpeeds.length; i++) {
	console.log(userSpeeds[i]);
};

if (runningSpeed != 9) {
	console.log('the running speed is not 9');
} else if(userSpeeds[1] === 10) {
	console.log('the 1 index of user speed is a number of 10');
} else {
	console.log("this didn't work");
}
