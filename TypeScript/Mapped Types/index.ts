type User = {
    name: string;
    age: number;
    active: boolean;
  };
  
  type ReadOnlyUser = {
    readonly [K in keyof User]: User[K];
  };
  
  let user: ReadOnlyUser = { name: "John", age: 30, active: true };
  // user.name = "Alice"; // Error: Cannot assign to 'name' because it is a read-only property
  