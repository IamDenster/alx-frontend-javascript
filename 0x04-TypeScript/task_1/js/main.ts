// Existing Teacher interface
interface Teacher {
  readonly firstName: string;      // Set only at initialization
  readonly lastName: string;       // Set only at initialization
  fullTimeEmployee: boolean;       // Always defined
  yearsOfExperience?: number;      // Optional
  location: string;                // Always defined
  [key: string]: any;              // Allow any extra attributes
}

// Director interface extending Teacher
interface Director extends Teacher {
  numberOfReports: number;         // Required for directors
}

// Example usage
const director1: Director = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "London",
  numberOfReports: 17,
  contract: true,                  // Extra dynamic attribute
};

console.log(director1);

// task_1/js/main.ts

// Step 1: Define the interface for the function
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Step 2: Implement the function using the interface
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

// Step 3: Example usage
console.log(printTeacher("John", "Doe"));  // Output: John Doe
console.log(printTeacher("Alice", "Smith"));  // Output: Alice Smith
