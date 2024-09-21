function logClass(constructor: Function) {
    console.log(`Class ${constructor.name} was created`);
  }
  
  @logClass
  class Person {
    constructor(public name: string) {}
  }
  
  // When the Person class is created, the decorator will log "Class Person was created"
  