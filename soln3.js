// Importing the readline module to read user input from the console
const readline = require("readline");

// Creating a readline interface to handle input and output with the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Function to calculate the net salary of an employee
function calculateNetSalary() {
    
    // Prompting the user to enter the basic salary
    rl.question("Enter Basic Salary: ", (basicSalaryInput) => {
        // Prompting the user to enter the benefits
        rl.question("Enter Benefits: ", (benefitsInput) => {

            // Converting the input strings to floating point numbers
            let basicSalary = parseFloat(basicSalaryInput);
            let benefits = parseFloat(benefitsInput);

            // Checking if the entered values are valid numbers
            if (isNaN(basicSalary) || isNaN(benefits)) {
                console.log("Please enter valid numbers.");
                rl.close(); // Close the readline interface if input is invalid
                return;
            }

            // Calculate Gross Salary by adding Basic Salary and Benefits
            let grossSalary = basicSalary + benefits;

            // Calculate PAYE (Pay As You Earn) tax based on the gross salary
            let payee = 0;
            if (grossSalary <= 24000) {
                payee = grossSalary * 0.1; // 10% for salaries <= 24000
            } else if (grossSalary <= 32333) {
                payee = 24000 * 0.1 + (grossSalary - 24000) * 0.25; // 25% for the excess
            } else if (grossSalary <= 500000) {
                payee = 24000 * 0.1 + (32333 - 24000) * 0.25 + (grossSalary - 32333) * 0.3; // 30% for the excess
            } else if (grossSalary <= 800000) {
                payee = 24000 * 0.1 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.3 + (grossSalary - 500000) * 0.325; // 32.5% for the excess
            } else {
                payee = 24000 * 0.1 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.3 + (800000 - 500000) * 0.325 + (grossSalary - 800000) * 0.35; // 35% for the excess
            }

            // NHIF (National Hospital Insurance Fund) Deduction based on gross salary
            let nhif = 0;
            if (grossSalary <= 5999) nhif = 150;
            else if (grossSalary <= 7999) nhif = 300;
            else if (grossSalary <= 11999) nhif = 400;
            else if (grossSalary <= 14999) nhif = 500;
            else if (grossSalary <= 19999) nhif = 600;
            else if (grossSalary <= 24999) nhif = 750;
            else if (grossSalary <= 29999) nhif = 850;
            else if (grossSalary <= 34999) nhif = 900;
            else if (grossSalary <= 39999) nhif = 950;
            else if (grossSalary <= 44999) nhif = 1000;
            else if (grossSalary <= 49999) nhif = 1100;
            else if (grossSalary <= 59999) nhif = 1200;
            else if (grossSalary <= 69999) nhif = 1300;
            else if (grossSalary <= 79999) nhif = 1400;
            else if (grossSalary <= 89999) nhif = 1500;
            else if (grossSalary <= 99999) nhif = 1600;
            else nhif = 1700; // For gross salaries greater than 99999

            // NSSF (National Social Security Fund) Deduction (6% of Basic Salary)
            let nssf = basicSalary * 0.06;

            // Calculate the total deductions (PAYE + NHIF + NSSF)
            let totalDeductions = payee + nhif + nssf;

            // Calculate the net salary by subtracting total deductions from the gross salary
            let netSalary = grossSalary - totalDeductions;

            // Display the results (Salary Breakdown)
            console.log("\n--- Salary Breakdown ---");
            console.log(`Basic Salary: ${basicSalary}`);
            console.log(`Benefits: ${benefits}`);
            console.log(`Gross Salary: ${grossSalary}`);
            console.log(`PAYE Tax: ${payee}`);
            console.log(`NHIF Deduction: ${nhif}`);
            console.log(`NSSF Deduction: ${nssf}`);
            console.log(`Total Deductions: ${totalDeductions}`);
            console.log(`Net Salary: ${netSalary}`);

            // Close the readline interface after the calculations are done
            rl.close(); 
        });
    });
}

// Calling the function to calculate net salary
calculateNetSalary();
