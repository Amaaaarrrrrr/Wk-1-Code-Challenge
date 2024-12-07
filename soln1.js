// Since my environment(Node.js) doesn't support prompt function,
// I've to import the readline module and create an interface for reading input from the console.
const readline = require("readline");

// Creating a readline interface to read input from the console (stdin) and output to the console (stdout)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// A function to generate student grade based on marks
function gradeGenrator() {

    // Input Handling: Asking the user to input the student's marks
    rl.question("Enter the student marks: ", (input) => {

        // Convert the input to an integer
        let marks = parseInt(input);

        // Validation: Check if marks are within a valid range (0 - 100)
        if (marks >= 0 && marks <= 100) {
        
            // Determining the grade based on the marks
            if (marks > 79) {
                console.log('A'); // Grade A for marks above 79
            } 
            else if (marks >= 60 && marks <= 79) {
                console.log('B'); // Grade B for marks between 60 and 79
            } 
            else if (marks >= 50 && marks <= 59) {
                console.log('C'); // Grade C for marks between 50 and 59
            } 
            else if (marks >= 40 && marks <= 49) {
                console.log('D'); // Grade D for marks between 40 and 49
            } 
            else {
                console.log('E'); // Grade E for marks below 40
            }
        }
        else {
            // If marks are outside the valid range, prompt the user to enter valid marks
            console.log("Enter the marks between 0 and 100:");
        }

        // Close the readline interface after the input is handled
        rl.close();
    });
}

// Calling the grade generator function to execute the program
gradeGenrator();
