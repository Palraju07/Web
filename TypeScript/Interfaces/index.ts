interface Person {
    name: string;
    age: number;
    isStudent?: boolean; // Optional property
  }
  
  function printPersonDetails(person: Person) {
    console.log(`Name: ${person.name}, Age: ${person.age}`);
  }
  
  let person1: Person = { name: "Alice", age: 21 };
  printPersonDetails(person1);
  