class SimpleCoffee {
    cost() {
      return 5;
    }
  
    description() {
      return "Simple Coffee";
    }
  }
  
  class MilkDecorator {
    constructor(coffee) {
      this.coffee = coffee;
    }
  
    cost() {
      return this.coffee.cost() + 2;
    }
  
    description() {
      return this.coffee.description() + ", Milk";
    }
  }
  
  class SugarDecorator {
    constructor(coffee) {
      this.coffee = coffee;
    }
  
    cost() {
      return this.coffee.cost() + 1;
    }
  
    description() {
      return this.coffee.description() + ", Sugar";
    }
  }
  

  let coffee = new SimpleCoffee();
  console.log(coffee.description(), coffee.cost()); 
  
  coffee = new MilkDecorator(coffee);
  console.log(coffee.description(), coffee.cost()); 
  
  coffee = new SugarDecorator(coffee);
  console.log(coffee.description(), coffee.cost()); 
  