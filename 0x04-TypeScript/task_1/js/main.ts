// Base Teacher class
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

// Example Teacher
const teacher3 = new Teacher({
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false
});

console.log(teacher3);

// --- Directors interface extending the Teacher class ---
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example Director
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17
};

console.log(director1);
