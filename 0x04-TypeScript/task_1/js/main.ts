// task_1/js/main.ts

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

// Example Director usage
const director1: Director = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "London",
  numberOfReports: 17,
  contract: true,                  // Extra dynamic attribute
};

console.log(director1);

// -----------------------------
// Step 1: Define interface for the function
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Step 2: Implement the function
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

// Step 3: Example usage
console.log(printTeacher("John", "Doe"));      // Output: John Doe
console.log(printTeacher(director1.firstName, director1.lastName)); // Output: John Doe
