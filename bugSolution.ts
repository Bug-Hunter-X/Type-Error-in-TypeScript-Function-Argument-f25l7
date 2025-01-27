function greeter(person: string) {
  return "Hello, " + person;
}

function greeterArray(persons: string[]) {
  return persons.map(person => "Hello, " + person);
}

let user = ["Jane", "Doe"];

console.log(greeterArray(user)); // Correct usage: maps the array and applies the greeter function to each element.
console.log(greeter(user[0])); //Another correct approach: Accessing each element separately.