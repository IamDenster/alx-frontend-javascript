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
