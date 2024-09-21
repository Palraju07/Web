class Vehicle {
    readonly brand: string;
  
    constructor(brand: string) {
      this.brand = brand;
    }
  }
  
  let car = new Vehicle("Toyota");
  // car.brand = "Honda"; // Error: Cannot assign to 'brand' because it is a read-only property
  