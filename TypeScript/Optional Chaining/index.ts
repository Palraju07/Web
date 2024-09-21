interface User {
    id: number;
    address?: {
      street?: string;
      city?: string;
    };
  }
  
  let user: User = { id: 1 };
  
  console.log(user?.address?.city); // Outputs: undefined (does not throw an error)
  