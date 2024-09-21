interface Dictionary {
    [key: string]: string;
  }
  
  let myDictionary: Dictionary = {
    apple: "A fruit",
    car: "A vehicle"
  };
  
  console.log(myDictionary["apple"]); // Outputs: A fruit
  