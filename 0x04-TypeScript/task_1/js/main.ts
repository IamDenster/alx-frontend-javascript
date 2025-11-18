interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName} ${lastName}`;
};

// ------------------------------
// Student Class Section
// ------------------------------

// Interface for the constructor
interface StudentConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}

// Interface describing the student class
interface StudentClassInterface {
  displayName(): string;
  workOnHomework(): string;
}

// Class implementation
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage:
const student = new StudentClass("John", "Doe");
console.log(student.displayName());        // John
console.log(student.workOnHomework());     // Currently working
