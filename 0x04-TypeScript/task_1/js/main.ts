// task_1/js/main.ts

// Existing Teacher interface
interface Teacher {
  readonly firstName: string;      // Only set on initialization
  readonly lastName: string;       // Only set on initialization
  fullTimeEmployee: boolean;       // Always defined
  yearsOfExperience?: number;      // Optional
  location: string;                // Always defined
  [key: string]: any;              // Allow any other attribute dynamically
}

// Teacher examples
const teacher1: Teacher = {
  firstName: "Alice",
  lastName: "Johnson",
  fullTimeEmployee: true,
  location: "New York",
  yearsOfExperience: 5,
};

const teacher2: Teacher = {
  firstName: "Bob",
  lastName: "Smith",
  fullTimeEmployee: false,
  location: "Paris",
};

const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false,
};

// Step 1: Define Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;  // required attribute for directors
}

// Step 2: Create a director object
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

// Step 3: Log to console
console.log(director1);
