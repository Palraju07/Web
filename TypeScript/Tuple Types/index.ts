let tuple: [string, number];

tuple = ["Alice", 25]; // Valid
// tuple = [25, "Alice"]; // Error: Type 'number' is not assignable to type 'string'

console.log(tuple[0]); // Outputs: Alice
