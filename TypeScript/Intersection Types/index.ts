interface Employee {
    name: string;
    salary: number;
  }
  
  interface Manager {
    department: string;
  }
  
  type ManagerEmployee = Employee & Manager;
  
  let manager: ManagerEmployee = {
    name: "John",
    salary: 50000,
    department: "HR"
  };
  
  console.log(manager);
  