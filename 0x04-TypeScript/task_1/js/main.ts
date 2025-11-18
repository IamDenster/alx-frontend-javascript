// task_1/js/main.ts

// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Director interface extending Teacher
interface Director extends Teacher {
  numberOfReports: number;
}

// Example Director
const director1: Director = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "London",
  numberOfReports: 17,
  contract: true,
};

console.log(director1);

// -----------------------------
// Interface for the function
interface printTeacherFunction {
  (teacher: { firstName: string; lastName: string }): string;
}

// Function implementation
const printTeacher: printTeacherFunction = ({ firstName, lastName }) => {
  return `${firstName[0]}. ${lastName}`;
};

// Example usage
console.log(printTeacher({ firstName: "John", lastName: "Doe" })); // Output: J. Doe
console.log(printTeacher({ firstName: director1.firstName, lastName: director1.lastName })); // Output: J. Doe
