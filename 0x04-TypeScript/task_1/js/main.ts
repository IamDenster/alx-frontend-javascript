// --- Teacher class and Directors interface from previous steps ---

class Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;

  constructor({ firstName, lastName, fullTimeEmployee, yearsOfExperience, location, ...rest }: {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
  }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.yearsOfExperience = yearsOfExperience;
    this.location = location;

    Object.assign(this, rest);
  }
}

interface Directors extends Teacher {
  numberOfReports: number;
}

// --- Function interface ---
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// --- Function implementation ---
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

// --- Examples ---
console.log(printTeacher("John", "Doe")); // John Doe
console.log(printTeacher("Jane", "Smith")); // Jane Smith
