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
