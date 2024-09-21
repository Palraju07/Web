class Animal {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    move(distance: number = 0) {
      console.log(`${this.name} moved ${distance} meters.`);
    }
  }
  
  let dog = new Animal("Dog");
  dog.move(10);
  