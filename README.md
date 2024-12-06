<!-- Challenge 1: Student Grade Generator -->
   <!-- overview -->
This project is a simple Student Grades Calculator designed to determine and display a student's grade based on marks entered by the user. The program accepts marks as input, validates them, and categorizes them into grades based on predefined ranges.

   <!-- Features -->
Input Validation:
Ensures the entered marks are a valid number.
Restricts marks to a range between 0 and 100.
Displays an error message if the input is invalid.

Grade Calculation:
Assigns grades based on the following criteria:
A: Marks ≥ 79
B: Marks 60–78
C: Marks 50–59
D: Marks 40–49
E: Marks < 40

Output:
Displays the entered marks and the corresponding grade.

   <!-- How It Works -->
The user is prompted to input marks in the range of 0 to 100.
The program validates the input:
If the input is invalid (not a number or out of range), it displays an error message and terminates.
If the input is valid:
The program calculates the grade based on the specified ranges.
The calculated grade and marks are displayed in the console.

   <!-- Example Usage -->
Copy code
// Input: 85
// Output: Marks: 85, Grade: A

// Input: 65
// Output: Marks: 65, Grade: B

// Input: -10
// Output: Invalid input. Please enter a number between 0 and 100.

   <!-- Requirements -->
A JavaScript environment, such as a browser console or Node.js, to execute the program.
Basic knowledge of student grading systems.

   <!-- How to Use -->
Copy the code into a JavaScript-enabled environment.
Run the program by calling the studentGrades() function.
Follow the prompt to input a student's marks.
View the corresponding grade and marks in the console.

   <!-- Notes -->
The program is designed for simplicity and does not include advanced error handling or support for non-integer grades.
Can be extended to include additional grading systems or ranges.



<!-- Challenge 2: Speed Detector -->
   <!-- Overview -->
This program determines the status of a driver’s speed in relation to a set speed limit and calculates demerit points based on their excess speed. It ensures the safety of road users by penalizing excessive speeding.

   <!-- Features -->
Speed Validation: Ensures the input speed is a positive number.
Speed Limit Check: Compares the driver's speed against a predefined speed limit (70 km/h).
Demerit Point Calculation:
No penalty if the speed is within the limit.
Calculates demerit points for speeds exceeding the limit by dividing the excess speed by 5 km/h.
License Suspension Check: Suspends the license if demerit points exceed 12.

   <!-- How It Works -->
The function accepts a speed value as input.
It validates the input to ensure it is a non-negative number.
Depending on the speed:
If it is within the speed limit (≤70 km/h), the program outputs Ok.
If it exceeds the speed limit:

Calculates demerit points using the formula:
demeritPoints = Math.floor((speed - speedLimit) / perKm)
If demerit points > 12, outputs License suspended.
Otherwise, outputs the number of demerit points.

   <!-- Example Usage -->
Code:
carSpeed(50);  // Output: "Ok"
carSpeed(80);  // Output: "Points: 2"
carSpeed(150); // Output: "License suspended"
carSpeed(-10); // Output: "Invalid speed. Please enter a positive number."

   <!-- Function Breakdown -->
speedLimit: Set to 70 km/h.
perKm: Represents the 5 km/h interval used to calculate demerit points.
Validation: Ensures speed is not negative and is a valid number.
Output:
"Ok" if speed ≤ speedLimit.
"Points: X" if speed > speedLimit but demerit points ≤ 12.
"License suspended" if demerit points > 12.

   <!-- Assumptions -->
The speed limit is fixed at 70 km/h.
Demerit points are calculated only for speeds exceeding the limit.
License suspension occurs when points exceed 12.

   <!-- Requirements -->
Basic JavaScript runtime (e.g., browser console or Node.js).
Notes
This program does not account for varying speed limits in different zones.
Users should always drive safely and adhere to traffic laws.


<!-- Challenge 3: Net Salary Calculator -->
   <!-- Overview -->
This project is a simple Salary Calculator designed to compute an individual’s net salary based on their input for basic salary and benefits. It calculates statutory deductions such as PAYE (Pay As You Earn), NHIF (National Hospital Insurance Fund), and NSSF (National Social Security Fund).

   <!-- Features -->
Gross Salary Calculation: Combines the basic salary and benefits.
PAYE Tax Calculation: Calculates PAYE based on Kenya Revenue Authority (KRA) tax rates.
NHIF Deductions: Computes NHIF contributions based on salary ranges.
NSSF Deductions: Computes NSSF contributions as per the new NSSF Act.
Net Salary Calculation: Provides the net salary after subtracting all deductions from the gross salary.
User Input Validation: Ensures the entered values are valid numerical inputs.

   <!-- How It Works -->
The user is prompted to enter:
Their basic salary.
Any additional benefits.
The application calculates the gross salary by summing the inputs.
Using the gross salary:
PAYE is computed based on KRA tax brackets.
NHIF deductions are determined using NHIF contribution rates.
NSSF deductions are computed based on tiered contribution limits.

The net salary is calculated as:
Net Salary = Gross Salary - (PAYE + NHIF + NSSF)
The user receives a detailed breakdown of their salary.
   
   <!-- Example Output -->
Copy code
=== Salary Breakdown ===
Gross Salary: 85,000.00
PAYE: 12,300.00
NHIF Deductions: 1,400.00
NSSF Deductions: 1,800.00
Net Salary: 69,500.00

   <!-- Requirements -->
A modern browser supporting JavaScript.
Basic knowledge of salaries and statutory deductions in Kenya.

   <!-- How to Use -->
Copy the code into a JavaScript environment such as a browser console or a Node.js runtime.
Run the program.
Follow the prompts to enter your salary details.
View the detailed salary breakdown in the alert output.
C
   <!-- ustomization -->
You can customize the tax brackets, NHIF, or NSSF rates in their respective functions if the rates change.

   <!-- Notes -->
This application is based on current rates provided by KRA, NHIF, and NSSF.
Ensure accurate input for meaningful results.



<!-- Author -->
JOY MUTANU