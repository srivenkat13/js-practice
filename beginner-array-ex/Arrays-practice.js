const people = [
  {
    firstName: "Sam",
    lastName: "Hughes",
    DOB: "07/07/1978",
    department: "Development",
    salary: "45000",
  },
  {
    firstName: "Terri",
    lastName: "Bishop",
    DOB: "02/04/1989",
    department: "Development",
    salary: "35000",
  },
  {
    firstName: "Jar",
    lastName: "Burke",
    DOB: "11/01/1985",
    department: "Marketing",
    salary: "38000",
  },
  {
    firstName: "Julio",
    lastName: "Miller",
    DOB: "12/07/1991",
    department: "Sales",
    salary: "40000",
  },
  {
    firstName: "Chester",
    lastName: "Flores",
    DOB: "03/15/1988",
    department: "Development",
    salary: "41000",
  },
  {
    firstName: "Madison",
    lastName: "Marshall",
    DOB: "09/22/1980",
    department: "Sales",
    salary: "32000",
  },
  {
    firstName: "Ava",
    lastName: "Pena",
    DOB: "11/02/1986",
    department: "Development",
    salary: "38000",
  },
  {
    firstName: "Gabriella",
    lastName: "Steward",
    DOB: "08/26/1994",
    department: "Marketing",
    salary: "46000",
  },
  {
    firstName: "Charles",
    lastName: "Campbell",
    DOB: "09/04/1977",
    department: "Sales",
    salary: "42000",
  },
  {
    firstName: "Tiffany",
    lastName: "Lambert",
    DOB: "05/11/1990",
    department: "Development",
    salary: "34000",
  },
  {
    firstName: "Antonio",
    lastName: "Gonzalez",
    DOB: "03/24/1985",
    department: "Office Management",
    salary: "49000",
  },
  {
    firstName: "Aaron",
    lastName: "Garrett",
    DOB: "09/04/1985",
    department: "Development",
    salary: "39000",
  },
];

// Exercises

// 1) What is the average income of all the people in the array?
const averageSalary =
  people.reduce(
    (accumulator, person) => accumulator + parseInt(person.salary),
    0
  ) / people.length;
console.log(averageSalary.toFixed(2));

// 2) Who are the people that are currently older than 30?
const olderThan30 = people.filter(
  (person) => new Date().getFullYear() - new Date(person.DOB).getFullYear() > 30
).length;
console.log(olderThan30);

// 3) Get a list of the people's full name (firstName and lastName).
// const fullName = people.map(({firstName,lastName})=> `${firstName} ${lastName}`)
const addFullName = people.map((person) => ({
  ...person,
  fullName: `${person.firstName} ${person.lastName}`,
}));
// const fullName = people.map((person)=> `${person.firstName} ${person.lastName}`)
// console.log(fullName);
// console.log(addFullName);

// 4) Get a list of people in the array ordered from youngest to oldest.
const youngest = people.sort((a, b) => new Date(b.DOB) - new Date(a.DOB));
console.log(youngest);

// 5) How many people are there in each department?
const departmentsList = people.reduce(
  (accumulator, person) => ({
    ...accumulator,
    [person.department]: accumulator[person.department] + 1 || 1,
  }),
  {}
);
console.log(departmentsList);
