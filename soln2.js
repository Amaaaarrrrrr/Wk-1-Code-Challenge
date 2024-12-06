// Importing the readline module to read user input from the console
const readline = require("readline");

// Creating a readline interface to handle input and output with the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Function to check the driver's speed and calculate demerit points
function SpeedChecker(speed) {
    const speedLimit = 70; // Speed limit set to 70 km/h
    const demeritPointMark = 5; // Each 5 km/h over the limit earns 1 demerit point

    // Prompt the driver to enter the speed
    rl.question("Enter the speed: ", (input) => {

        // Convert the input string to an integer representing speed
        let speed = parseInt(input);

        // Calculate the excess speed over the limit
        const excessSpeed = speed - speedLimit;

        // Calculate the number of demerit points based on the excess speed
        const demeritPoints = Math.floor(excessSpeed / demeritPointMark);

        // If the speed is within the limit, print "Ok"
        if (speed <= speedLimit) {
            console.log("Ok");
        }

        // If the demerit points exceed 12, suspend the driver's license
        else if (demeritPoints > 12) {
            console.log("License suspended");
        }

        // Otherwise, print the number of demerit points
        else {
            console.log(`Points: ${demeritPoints}`);
        }

        // Close the readline interface after processing the input
        rl.close();
    });
}

// Calling the SpeedChecker function to execute the program
SpeedChecker();
